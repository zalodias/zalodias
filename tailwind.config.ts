import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '640px',
      lg: '960px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      background: {
        neutral: {
          default: 'hsl(var(--color-background-neutral-default))',
          faded: 'hsl(var(--color-background-neutral-faded))',
          subtle: 'hsl(var(--color-background-neutral-subtle))',
          strong: 'hsl(var(--color-background-neutral-strong))',
          inverse: 'hsl(var(--color-background-neutral-inverse))',
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
          inverse: 'hsl(var(--color-background-neutral-inverse))',
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
    fontSize: {
      'body-small-default': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '400',
        },
      ],
      'body-small-subtle': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '500',
        },
      ],
      'body-medium-default': [
        '14px',
        {
          lineHeight: '20px',
          fontWeight: '400',
        },
      ],
      'body-medium-subtle': [
        '14px',
        {
          lineHeight: '20px',
          fontWeight: '500',
        },
      ],
      'body-medium-strong': [
        '14px',
        {
          lineHeight: '20px',
          fontWeight: '600',
        },
      ],
      'body-large-default': [
        '16px',
        {
          lineHeight: '26px',
          fontWeight: '400',
        },
      ],
      'body-large-subtle': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '500',
        },
      ],
      'body-large-strong': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '600',
        },
      ],
      'title-small-strong': [
        '18px',
        {
          lineHeight: '26px',
          fontWeight: '600',
          letterSpacing: '-0.02em',
        },
      ],
      'title-medium-strong': [
        '20px',
        {
          lineHeight: '28px',
          fontWeight: '600',
          letterSpacing: '-0.02em',
        },
      ],
      'title-large-strong': [
        '24px',
        {
          lineHeight: '32px',
          fontWeight: '600',
          letterSpacing: '-0.02em',
        },
      ],
    },
    keyframes: {
      ping: {
        '75%, 100%': {
          transform: 'scale(3)',
          opacity: '0',
        },
      },
      spin: {
        from: {
          transform: 'rotate(0deg)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      },
    },
  },
};
export default config;
