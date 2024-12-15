type Options = {
  ttl: number;
  key: string;
};

export function memoize<F extends (...args: any[]) => any>(
  options: Options,
  fn: F,
): F {
  const cache = new Map<string, { value: ReturnType<F>; expires: number }>();

  return function (...args: Parameters<F>): ReturnType<F> {
    const key = JSON.stringify([options.key, ...args]);
    const cached = cache.get(key);

    if (cached && cached.expires > Date.now()) {
      return cached.value;
    }

    const value = fn(...args);
    const expires = Date.now() + options.ttl;

    cache.set(key, { value, expires });

    if (cached && value instanceof Promise) {
      return cached.value;
    }

    return value;
  } as F;
}

export const TEN_MINUTES = 1000 * 60 * 10;
