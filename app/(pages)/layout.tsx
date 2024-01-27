import type { Metadata } from "next";

import "../globals.css";
import { Navbar } from "../../_components/Navigation/Navbar";

export const metadata: Metadata = {
	title: "Welcome to GFX23's personal website",
	description: "Made with Next.js 14, TailwindCSS and TypeScript",
};

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const hello = "Hello";

	return (
		<html lang="en">
			<body className="bg-secondary-8 text-secondary-05">
				<Navbar />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
