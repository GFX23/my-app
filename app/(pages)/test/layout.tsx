import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Expenses page",
	description: "Page for tracking spending",
};

const MainLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => <div className="bg-white w-full">{children}</div>;

export default MainLayout;
