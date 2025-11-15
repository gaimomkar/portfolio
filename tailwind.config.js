/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-primary': '#ec5b53',
        'theme-primary-hover': '#cf332b',
        'theme-secondary': '#002d5b',
        'theme-text-main': '#35373a',
        'theme-text-light': '#7c85a3',
        'theme-bg-main': 'var(--ast-global-color-4)',
        'theme-bg-subtle': '#F2F5F7',
        'theme-bg-white': '#ffffff',
        'theme-border': '#dddddd',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.theme-text-main'),
            '--tw-prose-headings': theme('colors.theme-secondary'),
            '--tw-prose-lead': theme('colors.theme-text-main'),
            '--tw-prose-links': theme('colors.theme-secondary'),
            '--tw-prose-bold': theme('colors.theme-secondary'),
            '--tw-prose-counters': theme('colors.theme-text-light'),
            '--tw-prose-bullets': theme('colors.theme-secondary'),
            '--tw-prose-hr': theme('colors.theme-border'),
            '--tw-prose-quotes': theme('colors.theme-secondary'),
            '--tw-prose-quote-borders': theme('colors.theme-border'),
            '--tw-prose-captions': theme('colors.theme-text-light'),
            '--tw-prose-code': theme('colors.theme-secondary'),
            '--tw-prose-pre-code': theme('colors.theme-bg-white'),
            '--tw-prose-pre-bg': theme('colors.theme-secondary'),
            '--tw-prose-th-borders': theme('colors.theme-border'),
            '--tw-prose-td-borders': theme('colors.theme-border'),
            h1: { fontFamily: theme('fontFamily.heading') },
            h2: { fontFamily: theme('fontFamily.heading') },
            h3: { fontFamily: theme('fontFamily.heading') },
            h4: { fontFamily: theme('fontFamily.heading') },
            h5: { fontFamily: theme('fontFamily.heading') },
            h6: { fontFamily: theme('fontFamily.heading') },
            a: {
              transition: 'color 0.3s ease-in-out',
              '&:hover': {
                color: theme('colors.theme-primary'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
     require('@tailwindcss/typography'),
  ],
}