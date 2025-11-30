import { getVisitorCount } from '@/lib/umami';
import { NextResponse } from 'next/server';

const cache = new Map<string, { value: number; expires: number }>();
const TTL = 60 * 1000;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get('path');
  if (!path) return NextResponse.json({ views: 0 });

  const now = Date.now();
  const cached = cache.get(path);

  if (cached) {
    const previous = cached.value;
    if (cached.expires > now) {
      return NextResponse.json({ views: cached.value });
    }

    try {
      const views = await getVisitorCount(path);
      cache.set(path, { value: views, expires: Date.now() + TTL });
    } catch (error) {
      console.error('Failed to update visitor count:', error);
    }

    return NextResponse.json({ views: previous });
  }

  const views = await getVisitorCount(path);
  cache.set(path, { value: views, expires: now + TTL });

  return NextResponse.json({ views });
}
