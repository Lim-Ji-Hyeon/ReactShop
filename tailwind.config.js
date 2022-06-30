/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [require("daisyui")],
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: [
      {
        myTheme : {
          primary: "#570DF8",
          secondary: "#F000B8",
          accent : "#37CDBE", 
          neutral : "#3D4451", 
          "base-100" : "#FFFFFF",
          info : "#3ABFF8",    
          success : "#36D399",  
          warning: "#FBBD23",
          error : "#F87272",
          "--rounded-box" : "1rem",
          "--rounded-btn" : "0.5rem",
          "--rounded-badge" : "1.9rem",
          "--animation-btn" : "0.25s",
          "--animation-input" : "0.2s",
          "--border-btn" : "1rem",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}

