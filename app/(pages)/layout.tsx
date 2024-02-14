import type { Metadata } from "next";
import "../../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Navbar } from "../_components/Navigation/Navbar";
import { SideTitle } from "../_components/Navigation/SideTitle";

export const metadata: Metadata = {
	title: "Welcome to GFX23's personal website",
	description: "Made with Next.js 14, TailwindCSS and TypeScript",
};

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en">
		<body className="screen-layout">
			<Navbar />
			<div className="flex flex-row w-full h-full gap-2">
				<SideTitle />
				{children}
			</div>
			<ToastContainer />
		</body>
	</html>
);

export default RootLayout;
