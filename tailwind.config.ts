import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{jsx,tsx}", "./_components/**/*.{jsx,tsx}", "./_containers/**/*.{jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					"05": "#f2f7fd",
					1: "#e5edf9",
					2: "#c5d9f2",
					3: "#91b9e8",
					4: "#5795d9",
					5: "#3178c6",
					6: "#215da8",
					7: "#1c4b88",
					8: "#1b4171",
					9: "#1c385e",
					10: "#12233f",
				},
				secondary: {
					"05": "#f7f7f6",
					1: "#e5e4e2",
					2: "#cac9c5",
					3: "#a8a8a0",
					4: "#85857c",
					5: "#6b6b61",
					6: "#54544d",
					7: "#454540",
					8: "#3a3935",
					9: "#2d2d2a",
					10: "#1b1b18",
				},
				error: "#ff8360",
				success: "#7dce82",
			},
		},
	},
	plugins: [],
};
export default config;
