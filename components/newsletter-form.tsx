'use client';

import { Input } from '@/components/ui/input';
import { mergeTailwindClassNames as cn } from '@/lib/utils';
import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error ?? 'Something went wrong.');
      }

      setStatus('success');
      setSuccessMessage("You're subscribed. Talk soon!");
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong.',
      );
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-title-medium-strong">Newsletter</h2>
      <p className="text-foreground-neutral-faded">
        {status === 'success'
          ? successMessage
          : "I share what I'm working on, new posts, and resources — once a month."}
      </p>
      {status !== 'success' && (
        <div className="mt-4 flex flex-col gap-3">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => status === 'error' && setStatus('idle')}
              placeholder="your@email.com"
              disabled={status === 'loading'}
              className={cn(
                status === 'error' && 'border-border-negative-default',
              )}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-background-neutral-inverse text-foreground-neutral-inverse text-body-large-subtle rounded-lg px-5 py-2 transition hover:opacity-90 disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
          <div
            className={cn(
              'grid transition-all',
              status === 'error' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            )}
          >
            <p className="text-body-medium-subtle text-foreground-negative-default overflow-hidden ps-0.5">
              {errorMessage}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
