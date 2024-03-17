"use client";

import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
	href: string;
	label: string;
	icon?: React.ReactNode;
};

export const NavLink: React.FC<NavLinkProps> = ({ href, label, icon }) => {
	const pathName = usePathname();

	return (
		<Link href={href}>
			<div
				className={cn(
					"flex flex-row whitespace-nowrap cursor-pointer hover:text-primary-3",
					pathName === href ? "border-b-[1px] text-primary-3" : "text-primary-5",
				)}
			>
				{icon}
				{label}
			</div>
		</Link>
	);
};
