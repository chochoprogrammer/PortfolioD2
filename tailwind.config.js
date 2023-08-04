/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily:{
      'open': ['Open Sans', 'sans-serif'],
      'inter': ['Inter Tight', 'sans-serif'],
      'mono': ['monospace', 'helvetica'],
    },
    screens: {
      sm: "300px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        surface: "#DAFFFB",
        onSurface: "",
        primary: "#64CCC5",
        // primaryDark: "#EF7E3A",
        // primaryLight: "#fccc9f",
        secondary: "#176B87",
        // navyDark: "#344054",
        // navyLight: "#667085",
        // ash: "#CBCCE8",

        headerText: "#001C30",
        headerTextLight: "#2D0026",
        linkColor: "#176B87",
        linkHover: "#176B87",
      }
    },
  },
  plugins: [],
}
