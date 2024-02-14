"use client";

import { Runner } from "@prisma/client";
import { NextPage } from "next";
import React, { useState } from "react";

import { Button } from "@/app/_components/Button";
import { RunnerCard } from "@/app/_components/RunnerCard";
import { RunnerItem } from "@/app/_components/RunnerItem";
import { THRESHOLD } from "@/config/settings";
import { getAllRunners } from "@/db/select";

const Calculator: NextPage = () => {
	const [loading, setLoading] = useState(false);
	const [runners, setRunners] = useState<Runner[]>([]);

	const handleClick = async () => {
		try {
			setLoading(true);
			const data = await getAllRunners();
			setRunners(data.slice(0, 10));
		} catch (error) {
			console.error(error);
		} finally {
			setTimeout(() => {
				setLoading(false);
				console.log("finally");
			}, THRESHOLD);
		}

		const data = await getAllRunners();
		setRunners(data.slice(0, 10));
	};

	return (
		<div className="w-full flex flex-col gap-2">
			<RunnerCard />
			<Button onClick={handleClick} loading>
				GET RUNNERS
			</Button>
			<div className="flex flex-col gap-2">
				{runners.map((runner: Runner) => (
					<RunnerItem key={runner.id} runner={runner} setRunners={setRunners} />
				))}
			</div>
		</div>
	);
};

export default Calculator;
