"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";

type NavLinkProps = {
    href: string;
    label: string;
    icon?: React.ReactNode;
};

export const NavLink: React.FC<NavLinkProps> = ({ href, label, icon }) => {
  const pathName = usePathname()

    return (
        <Link href={href}>
            <div className={cn("flex flex-row hover:border-b-2 transition", pathName.includes(href) && "border-b-2",)}>
                {icon}
                {label}
            </div>
        </Link>
    );
}