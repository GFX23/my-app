import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog page",
	description: "Page for my thoughts",
};

const MainLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => <div className="">{children}</div>;

export default MainLayout;
