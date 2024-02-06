import type { Metadata } from "next";

import { CalcSideBar } from "@/app/_components/CalcSideBar";

export const metadata: Metadata = {
	title: "Calculator page",
	description: "Page for generating calculations of hydro runners",
};

const MainLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<div className="flex-row-center h-full">
		<CalcSideBar />
		{children}
	</div>
);

export default MainLayout;
