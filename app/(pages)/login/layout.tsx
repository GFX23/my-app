import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login page",
	description: "Log for more content",
};

const MainLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => <div className="flex items-center justify-center w-full">{children}</div>;

export default MainLayout;
