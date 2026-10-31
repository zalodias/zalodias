'use client';

import type { Track } from '@/lib/spotify';
import { cn } from '@/lib/utils';
import { Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface PlaybackUpdate {
  data: {
    isPaused: boolean;
    isBuffering: boolean;
    duration: number;
    position: number;
  };
}

interface EmbedController {
  play: () => void;
  togglePlay: () => void;
  destroy: () => void;
  addListener: (
    event: 'playback_update',
    callback: (event: PlaybackUpdate) => void,
  ) => void;
}

interface IFrameApi {
  createController: (
    element: HTMLElement,
    options: { uri: string },
    callback: (controller: EmbedController) => void,
  ) => void;
}

interface Playback {
  position: number;
  duration: number;
  isPlaying: boolean;
  isBuffering: boolean;
  updatedAt: number;
}

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: IFrameApi) => void;
    spotifyIframeApi?: IFrameApi;
  }
}

const embedScript = 'https://open.spotify.com/embed/iframe-api/v1';
const ringRadius = 12;
const ringCircumference = 2 * Math.PI * ringRadius;

let embedApi: Promise<IFrameApi> | undefined;

function loadEmbedApi() {
  if (window.spotifyIframeApi) return Promise.resolve(window.spotifyIframeApi);

  embedApi ??= new Promise((resolve) => {
    window.onSpotifyIframeApiReady = (api) => {
      window.spotifyIframeApi = api;
      resolve(api);
    };

    const script = document.createElement('script');
    script.src = embedScript;
    script.async = true;
    document.body.appendChild(script);
  });

  return embedApi;
}

function formatTimeLeft(milliseconds: number) {
  const totalSeconds = Math.ceil(Math.max(0, milliseconds) / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function currentPosition(state: Playback) {
  const drifting = state.isPlaying && !state.isBuffering;
  const elapsed = drifting ? performance.now() - state.updatedAt : 0;

  return Math.min(state.duration, Math.max(0, state.position + elapsed));
}

export function SpotifyPlayer({ track }: { track: Track }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<SVGSVGElement>(null);
  const fillRef = useRef<SVGCircleElement>(null);
  const controllerRef = useRef<EmbedController | null>(null);
  const playWhenReady = useRef(false);
  const playbackRef = useRef<Playback>({
    position: 0,
    duration: 0,
    isPlaying: false,
    isBuffering: false,
    updatedAt: 0,
  });
  const [playing, setPlaying] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const mount = document.createElement('div');
    host.appendChild(mount);

    const playback = playbackRef.current;
    playback.position = 0;
    playback.duration = 0;
    playback.isPlaying = false;
    playback.isBuffering = false;
    playback.updatedAt = 0;

    let embed: EmbedController | null = null;
    let frame = 0;
    let cancelled = false;

    function paint() {
      const progress = progressRef.current;
      const fill = fillRef.current;
      if (!progress || !fill || playback.duration <= 0) return;

      const position = currentPosition(playback);
      const ratio = position / playback.duration;
      const label = formatTimeLeft(playback.duration - position);

      fill.style.strokeDashoffset = String(ringCircumference * (1 - ratio));
      progress.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));
      progress.setAttribute('aria-valuetext', `${label} left`);
    }

    function follow() {
      paint();
      frame = requestAnimationFrame(follow);
    }

    loadEmbedApi().then((api) => {
      if (cancelled) return;

      api.createController(
        mount,
        { uri: `spotify:track:${track.id}` },
        (controller) => {
          if (cancelled) {
            controller.destroy();
            return;
          }

          embed = controller;
          controllerRef.current = controller;
          controller.addListener('playback_update', (event) => {
            const { isPaused, isBuffering, duration, position } = event.data;
            const isPlaying = !isPaused;

            playback.position = position;
            playback.duration = duration;
            playback.isPlaying = isPlaying;
            playback.isBuffering = isBuffering;
            playback.updatedAt = performance.now();

            const ratio = duration > 0 ? position / duration : 0;
            setPlaying(isPlaying);
            setShowProgress(duration > 0 && (isPlaying || ratio > 0.01));
            cancelAnimationFrame(frame);
            if (isPlaying) frame = requestAnimationFrame(follow);
            else paint();
          });

          if (playWhenReady.current) {
            playWhenReady.current = false;
            controller.play();
          }
        },
      );
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      embed?.destroy();
      mount.remove();
      if (controllerRef.current === embed) controllerRef.current = null;
    };
  }, [track.id]);

  function toggle() {
    const controller = controllerRef.current;
    if (!controller) {
      playWhenReady.current = true;
      return;
    }

    controller.togglePlay();
  }

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pause ${track.name}` : `Play ${track.name}`}
        aria-pressed={playing}
        className="group relative size-10 shrink-0 overflow-hidden rounded-md"
      >
        {track.artwork && (
          <img
            src={track.artwork}
            alt=""
            width={40}
            height={40}
            className="size-10 object-cover"
          />
        )}
        <span
          className={cn(
            'text-foreground-neutral-light bg-background-neutral-dark/40 absolute inset-0 flex items-center justify-center transition',
            playing
              ? 'opacity-100'
              : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100',
          )}
        >
          <svg
            ref={progressRef}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            viewBox="0 0 40 40"
            className={cn(
              'absolute inset-0 size-full',
              !showProgress && 'hidden',
            )}
          >
            <circle
              cx="20"
              cy="20"
              r={ringRadius}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.4"
              strokeWidth="2"
            />
            <circle
              ref={fillRef}
              cx="20"
              cy="20"
              r={ringRadius}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={ringCircumference}
              strokeDashoffset={ringCircumference}
              transform="rotate(-90 20 20)"
            />
          </svg>
          {playing ? (
            <Pause className="relative size-4 fill-current" />
          ) : (
            <Play className="relative size-4 fill-current" />
          )}
        </span>
      </button>
      <div className="flex grow flex-col gap-1">
        <span className="text-body-small-subtle text-foreground-neutral-faded font-mono tracking-widest uppercase">
          Last played
        </span>
        <div className="flex gap-1">
          <span className="text-body-medium-subtle truncate">{track.name}</span>
          <span className="text-body-medium-subtle text-foreground-neutral-faded">
            by
          </span>
          <p className="text-body-medium-subtle text-foreground-neutral-faded truncate">
            {track.artists}
          </p>
        </div>
      </div>
      <div ref={hostRef} className="sr-only" aria-hidden />
    </div>
  );
}
