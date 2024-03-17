import { Tooltip } from "@mui/material";
import Image from "next/image";

import { auth } from "@/auth";

export const Avatar: FC = async () => {
	const session = await auth();

	return (
		<Tooltip
			title={session?.user?.email}
			componentsProps={{ tooltip: { sx: { fontSize: "16px" } } }}
			arrow
		>
			<Image
				src={session?.user?.avatar || "/favicon"}
				alt={`avatar of ${session?.user?.email}`}
				width={32}
				height={32}
				className="rounded-full border-2 border-white"
			/>
		</Tooltip>
	);
};
