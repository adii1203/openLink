/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        box: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
        link: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      backgroundImage: {
        dashboard:
          "radial-gradient( #ffffff .2000000000000002px, #0e0d14 .1000000000000002px )",
      },
      backgroundSize: {
        dash_size: "31px 31px",
      },
    },
  },
  plugins: [],
};
