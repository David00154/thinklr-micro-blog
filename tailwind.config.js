/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				avenir: ["avenir_lt_std"],
			},
			colors: {
				primary: "#FFFC54",
				secondary: "#282828",
				accents: "#1A1A1A",
				quaternary: "#FAFAFA",
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
