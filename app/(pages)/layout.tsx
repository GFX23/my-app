import type { Metadata } from "next";

import "../../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "../_components/Navigation/Navbar";
import { SideTitle } from "../_components/Navigation/SideTitle";
import { auth } from "@/auth";

export const metadata: Metadata = {
	title: "Welcome to GFX23's personal website",
	description: "Made with Next.js 14, TailwindCSS and TypeScript",
};

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const session = await auth();

	return (
		<html lang="en">
			<body className="bg-secondary-10 text-secondary-05 h-screen w-screen flex flex-col">
				<Navbar />
				<div className="flex flex-row w-full h-full">
					<SideTitle />
					{children}
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
