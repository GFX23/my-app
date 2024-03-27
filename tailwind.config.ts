import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{jsx,tsx}", "./_components/**/*.{jsx,tsx}", "./_containers/**/*.{jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					"05": "#FAFAFA",
					1: "#F5F5F5",
					2: "#E5E5E5",
					3: "#D4D4D4",
					4: "#A3A3A3",
					5: "#737373",
					6: "#525252",
					7: "#404040",
					8: "#262626",
					9: "#171717",
					10: "#0A0A0A",
				},
				secondary: {
					1: "#e5e4e2",
					2: "#a8a8a0",
					3: "#007ACC",
					4: "#454540",
					5: "#2d2d2a",
				},
				success: {
					1: "#86EFAC",
					2: "#22C55E",
					3: "#15803D",
				},
				error: {
					1: "#FCA5A5",
					2: "#EF4444",
					3: "#B91C1C",
				},
				mui: {
					text: "#808080",
				},
			},
		},
	},
	plugins: [],
};
export default config;
