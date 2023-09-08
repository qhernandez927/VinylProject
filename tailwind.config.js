module.exports = {
  content: ['*.{js,jsx}', './components/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#4C8D99',
          secondary: '#B89E58',
          tertiary: ' #F0F0F0',
          accent: ' #9E634E',
          tint: '#F5F5F5',
        },
        dark: {
          primary: '#000000',
          secondary: '#00BFFF',
          tertiary: '#333333',
          accent: '#39FF14',
          tint: ' #708090',
        },
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
