"use client";

import { usePathname } from "next/navigation";

export const SideTitle = async () => {
	const pathName = usePathname();

	console.log(pathName);

	return (
		<div className="w-8 border-[1px] border-primary-5 rounded-md items-center justify-center">
			<div className="transform rotate-90 origin-bottom-left ">
				<p className="text-center">{pathName}</p>
			</div>
		</div>
	);
};
