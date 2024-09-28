import type { Config } from 'tailwindcss'
import * as Colors from 'tailwindcss/colors'

const config: Config = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    colors: {
      background: {
        neutral: {
          default: Colors.white,
          faded: Colors.neutral[50],
          subtle: Colors.neutral[100],
          strong: Colors.neutral[200],
        },
        brand: {
          default: Colors.black,
        },
      },
      foreground: {
        neutral: {
          default: Colors.neutral[950],
          faded: Colors.neutral[500],
          subtle: Colors.neutral[600],
          strong: Colors.neutral[800],
        },
        brand: {
          default: Colors.white,
        },
      },
      border: {
        neutral: {
          default: Colors.neutral[300],
          faded: Colors.neutral[100],
          subtle: Colors.neutral[200],
          strong: Colors.neutral[400],
        },
        brand: {
          default: Colors.black,
        },
      },
    },
  },
}
export default config
