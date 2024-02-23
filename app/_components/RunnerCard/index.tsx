"use client";

import { useState } from "react";

import { Checkbox } from "@/app/_components/Checkbox";
import { Input } from "@/app/_components/Input";
import { Select } from "@/app/_components/Select";
import { Card } from "@/app/_containers/Card";
import { useCalcStore } from "@/app/_store/CalcStore";
import { RunnerTypes } from "@/db/types";


type Props = {
	name?: string;
	Da?: number;
	Ba?: number;
	Z?: number;
	machiningHours?: number;
};

type RunnerParams = {
	name: string;
	order: string;
	type: RunnerTypes;
	Da: number;
	Ba: number;
	Z: number;
	customer: string;
	dimensions: string;
	material: string;
	matWeight: number;
	machiningHours: number;
	lathePrice: number;
	edmPrice: number;
	grindingPrice: number;
	balancingPrice: number;
	testsPrice: number;
	otherPrice: number;
	machiningPrice: number;
	materialIncluded: boolean;
	matPrice: number;
	priceTotal: number;
	comment: string;
};

export const RunnerCard: FP<Props> = ({ Da = 0, Ba = 0, Z = 0 }) => {
	const [runnerParams, setRunnerParams] = useState<RunnerParams>({
		name: "",
		order: "",
		type: "pelton",
		Da: 0,
		Ba: 0,
		Z: 0,
		customer: "",
		dimensions: "",
		material: "",
		matWeight: 0,
		machiningHours: 0,
		lathePrice: 0,
		edmPrice: 0,
		grindingPrice: 0,
		balancingPrice: 0,
		testsPrice: 0,
		otherPrice: 0,
		machiningPrice: 0,
		materialIncluded: false,
		matPrice: 0,
		priceTotal: 0,
		comment: "",
	});
	const [loading, setLoading] = useState(false);
	const defParams = useCalcStore((state) => state.runnerCalcParams);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.name, e.target.value);
		setRunnerParams({ ...runnerParams, [e.target.name]: e.target.value });
		console.log(runnerParams);
	};

	const dimensions = `[ Da: ${runnerParams.Da} | Ba: ${runnerParams.Ba} | Z: ${runnerParams.Z} ]`;

	return (
		<Card label="CREATE RUNNER">
			<form className="flex flex-col gap-2">
				<div className="flex gap-2">
					<Card label="BIO OF THE RUNNER">
						<Input label="Name" value={runnerParams.name} name="name" onChange={handleChange} />
						<Input label="Order" value={runnerParams.order} name="order" onChange={handleChange} />
						<Input label="Runner Type" value={runnerParams.type} />
						<Input label="Customer" value={runnerParams.customer} name="customer" onChange={handleChange} />
						<Input label="Dimensions" value={dimensions} />
						<Select label="Material" 				
							options={[
							{ value: "X3CrNiMo", label: "X3CrNiMo" },
							{ value: "X4CrNiMo", label: "X4CrNiMo" },
							{ value: "Duplex", label: "Duplex" },
							{ value: "SuperDuplex", label: "Super Duplex" },
						]}
							name="material"
							value={runnerParams.material}
							onChange={handleChange}
						/>
						<Input label="Material Weight" value={runnerParams.matWeight} />
					</Card>
					<Card label="PRICING DETAILS">
						<Input label="Machining Hours" value={runnerParams.machiningHours} name="machiningHours" onChange={handleChange} />
						<Input label="Lathe Price" value={runnerParams.lathePrice} name="lathePrice" onChange={handleChange}  />
						<Input label="EDM Price" value={runnerParams.edmPrice} name="edmPrice" onChange={handleChange} />
						<Input label="Grinding Price" value={runnerParams.grindingPrice} name="grindingPrice" onChange={handleChange} />
						<Input label="Balancing Price" value={runnerParams.balancingPrice} name="balancingPrice" onChange={handleChange} />
						<Input label="Tests Price" value={runnerParams.testsPrice} name="testsPrice" onChange={handleChange} />
						<Input label="Other Expenses" value={runnerParams.otherPrice} name="otherPrice" onChange={handleChange} />
					</Card>
					<Card label="DRAWINGS ETC.">
						DRAWINGS ETC.
					</Card>
				</div>
				<div className="flex gap-2">

					<Card label="FINAL PRICING">
						<Input label="Machining Price" type="number" value={runnerParams.machiningPrice} />
						<Checkbox label="Material Included" />
						<Input label="Material Price" type="number" value={runnerParams.matPrice} />
						<Input label="Price total" type="number" value={runnerParams.priceTotal} />
					</Card>
					<Card label="Comment">
						<Input label="Comment" type="text" />
					</Card>
				</div>
			</form>
		</Card>
	);
};
