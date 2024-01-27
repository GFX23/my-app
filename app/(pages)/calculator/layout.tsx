import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Calculator page",
	description: "Page for generating calculations of hydro runners",
};

const MainLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => <div className="">{children}</div>;

export default MainLayout;
