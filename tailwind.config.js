/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        light: {
          400: '#a39cb5',
          700: '#5F517D',
        },
        violet: {
          soft: '#9D71FD',
          dark: '#543E81',
          darker: '#1A0745',
        },
        gray: {
          button: 'rgba(26, 7, 69, 0.1)',
        },
        purple: {
          100: '#F2EFFE',
          300: 'rgba(215, 207, 253, 1)'
        }
      },
      width: {
        switch: '32px',
        'switch-thumb': '12px',
        'testimonial-wrapper': '380px',
      },
      height: {
        switch: '20px',
        'switch-thumb': '12px',
        line: '2px',
      },
      spacing: {
        'lines-wr-lg': '120px',
        'line-scaled': 'calc(50% + 1px)',
      },
      borderRadius: {
        'line-shape': '40%',
      }
    },
  },
  plugins: [],
}

