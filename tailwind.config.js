import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        tea: {
          600: '#00737A', 
        },
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#00737A',
        'secondary': '#F3F3F3',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'tea-light': '#B2E1D2',  // Replace with your tea-light color
        'tea-dark': '#00796B',   // Replace with your tea-dark color
      },
    },
  },
  plugins: [
  ],
});
