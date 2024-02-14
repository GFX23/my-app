"use client";

import { Runner } from "@prisma/client";
import { useState } from "react";
import { toast } from "react-toastify";

import { CrossButton } from "../Button/CrossButton";
import { THRESHOLD } from "@/config/settings";
import { deleteRunner } from "@/db/delete";

type Props = {
	runner: Runner;
	setRunners: React.Dispatch<React.SetStateAction<Runner[]>>;
};

export const RunnerItem: FP<Props> = ({
	runner: { name, Da, Ba, Z, id, machiningHours },
	setRunners,
}) => {
	const [loading, setLoading] = useState(false);

	const handleClick = async () => {
		console.log("clicked", id);

		try {
			setLoading(true);
			const res = await deleteRunner(id);
			if (!res) {
				throw new Error("Could not delete runner");
			}
		} catch (err) {
			console.error(err);
			toast.error("Error deleting runner");
		} finally {
			setTimeout(() => {
				toast.success(`Runner ${name} deleted`);
				setRunners((prev) => prev.filter((runner) => runner.id !== id));
				setLoading(false);
			}, THRESHOLD);
		}
	};

	return (
		<div className="container flex-col max-w-full">
			<div className="header">
				{name}
				<CrossButton onClick={() => handleClick()} loading={loading} />
			</div>
			<div className="flex justify-between p-2">
				<div>Dimensions: {`[ Da: ${Da} | Ba: ${Ba} | Z: ${Z} ]`}</div>
				<div>CNC Hours: {machiningHours}</div>
			</div>
		</div>
	);
};
