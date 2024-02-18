/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          lowest: colors.white,
          lower: colors.slate[100],
          low: colors.slate[300],
          medium: colors.slate[500],
          hight: colors.slate[700],
          highter: colors.slate[900],
          hightest: colors.dark,
        },
        primary: {
          lowest: colors.indigo[50],
          lower: colors.indigo[100],
          low: colors.indigo[300],
          medium: colors.indigo[500],
          hight: colors.indigo[700],
          highter: colors.indigo[900],
          hightest: colors.indigo[950],
        },
        secondary: {
          lowest: colors.purple[50],
          lower: colors.purple[100],
          low: colors.purple[300],
          medium: colors.purple[500],
          hight: colors.purple[700],
          highter: colors.purple[900],
          hightest: colors.purple[950],
        },
        success: {
          lowest: colors.emerald[50],
          lower: colors.emerald[100],
          low: colors.emerald[300],
          medium: colors.emerald[500],
          hight: colors.emerald[700],
          highter: colors.emerald[900],
          hightest: colors.emerald[950],
        },
        danger: {
          lowest: colors.red[50],
          lower: colors.red[100],
          low: colors.red[300],
          medium: colors.red[500],
          hight: colors.red[700],
          highter: colors.red[900],
          hightest: colors.red[950],
        },
        warning: {
          lowest: colors.orange[50],
          lower: colors.orange[100],
          low: colors.orange[300],
          medium: colors.orange[500],
          hight: colors.orange[700],
          highter: colors.orange[900],
          hightest: colors.orange[950],
        },
        background: {
          primary: colors.neutral.lowest,
          secondary: colors.neutral.lower,
        },
        border: {
          primary: colors.neutral.low,
          secondary: colors.neutral.lower,
        },
      },
    },
  },
  plugins: [],
};
