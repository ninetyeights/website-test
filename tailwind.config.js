/** @type {import('tailwindcss').Config} */

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        'default-fg': withOpacityValue('--default-fg'),
        'default-bg': withOpacityValue('--default-bg'),
        '100': withOpacityValue('--100'),
        '200': withOpacityValue('--200'),
        '300': withOpacityValue('--300'),
        '400': withOpacityValue('--400'),
        '500': withOpacityValue('--500'),
        '600': withOpacityValue('--600'),
        '700': withOpacityValue('--700'),
        '800': withOpacityValue('--800'),
        '900': withOpacityValue('--900'),
      }
    },
  },
  plugins: [],
}
