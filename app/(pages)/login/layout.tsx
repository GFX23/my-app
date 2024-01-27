import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login page",
  description: "Log for more content",
};

const MainLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className="">
    {children}
  </div>

);

export default MainLayout;
