"use client";

import { usePathname } from "next/navigation";

export const SideTitle = async () => {
	const pathName = usePathname();

	console.log(pathName);

	return (
		<div className="w-8">
			<div className="transform rotate-90 origin-bottom-left">
				<p className="text-center">{pathName}</p>
			</div>
		</div>
	);
};
