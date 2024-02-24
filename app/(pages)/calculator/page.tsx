"use client";

import { Runner } from "@prisma/client";
import { NextPage } from "next";

import { Button } from "@/app/_components/Button";
import { RunnerCard } from "@/app/_components/RunnerCard";
import { RunnerItem } from "@/app/_components/RunnerItem";
import { useCalcStore } from "@/app/_store/CalculationStore/CalcStore";

const Calculator: NextPage = () => {
	const runners: Runner[] = useCalcStore((state) => state.runners);

	return (
		<div className="w-full flex flex-col gap-2">
			<RunnerCard />
			<Button loading>GET RUNNERS</Button>
			<div className="flex flex-col gap-2">
				{runners.map((runner: Runner) => (
					<RunnerItem key={runner.id} runner={runner} />
				))}
			</div>
		</div>
	);
};

export default Calculator;
