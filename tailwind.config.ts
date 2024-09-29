import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      background: {
        neutral: {
          default: 'hsl(var(--color-background-neutral-default))',
          faded: 'hsl(var(--color-background-neutral-faded))',
          subtle: 'hsl(var(--color-background-neutral-subtle))',
          strong: 'hsl(var(--color-background-neutral-strong))',
        },
        brand: {
          default: 'hsl(var(--color-background-brand-default))',
        },
        positive: {
          default: 'hsl(var(--color-background-positive-default))',
        },
      },
      foreground: {
        neutral: {
          default: 'hsl(var(--color-foreground-neutral-default))',
          faded: 'hsl(var(--color-foreground-neutral-faded))',
          subtle: 'hsl(var(--color-foreground-neutral-subtle))',
          strong: 'hsl(var(--color-foreground-neutral-strong))',
        },
        brand: {
          default: 'hsl(var(--color-foreground-brand-default))',
        },
      },
      border: {
        neutral: {
          default: 'hsl(var(--color-border-neutral-default))',
          faded: 'hsl(var(--color-border-neutral-faded))',
          subtle: 'hsl(var(--color-border-neutral-subtle))',
          strong: 'hsl(var(--color-border-neutral-strong))',
        },
        brand: {
          default: 'hsl(var(--color-border-brand-default))',
        },
      },
    },
  },
};
export default config;
