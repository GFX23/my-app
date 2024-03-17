"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "../Button";
import { Checkbox } from "@/app/_components/Checkbox";
import { Input } from "@/app/_components/Input";
import { Select } from "@/app/_components/Select";
import { Card } from "@/app/_containers/Card";
import { useCalcStore } from "@/app/_store/CalculationStore/CalcStore";
import { RunnerNames, RunnerNamesEnum } from "@/app/_store/CalculationStore/types";

type RunnerParams = {
	name: string;
	order: string;
	type: RunnerNames;
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
	millingPrice: number;
	materialIncluded: boolean;
	matPrice: number;
	priceTotal: number;
	comment: string;
};

export const RunnerCard: FC = () => {
	const calculatedPrice = useCalcStore((state) => state.calculation);
	const { millingPrice, testsPrice, balancingPrice, edmPrice, grindingPrice, lathePrice } =
		calculatedPrice;
	const runnerCalcParams = useCalcStore((state) => state.runnerCalcParams);
	const dimensions = `[ Da: ${runnerCalcParams.Da} | Ba: ${runnerCalcParams.Ba} | Z: ${runnerCalcParams.Z} ]`;
	const { register, handleSubmit } = useForm<RunnerParams>({
		values: {
			material: "X3CrNiMo",
			materialIncluded: false,
			comment: "",
			name: "",
			order: "",
			customer: "",
			otherPrice: 0,
			...calculatedPrice,
			...runnerCalcParams,
			dimensions,
			type: RunnerNamesEnum[runnerCalcParams.type],
			priceTotal:
				millingPrice + testsPrice + balancingPrice + edmPrice + grindingPrice + lathePrice,
		},
	});

	const [loading, setLoading] = useState(false);

	const onSubmit: SubmitHandler<RunnerParams> = (data) => {
		setLoading(true);
		console.debug(data);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	return (
		<Card label="CREATE RUNNER">
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
				<div className="flex gap-2">
					<Card label="BIO OF THE RUNNER">
						<Input label="Name" register={register} name="name" />
						<Input label="Order" register={register} name="order" />
						<Input label="Runner Type" register={register} name="type" />
						<Input label="Customer" register={register} name="customer" />
						<Input label="Dimensions" register={register} name="dimensions" />
						<Select
							label="Material"
							options={[
								{ value: "X3CrNiMo", label: "X3CrNiMo" },
								{ value: "X4CrNiMo", label: "X4CrNiMo" },
								{ value: "Duplex", label: "Duplex" },
								{ value: "SuperDuplex", label: "Super Duplex" },
							]}
							defaultValue="X3CrNiMo"
							name="material"
							register={register}
						/>
						<Input label="Material Weight" register={register} name="matWeight" />
					</Card>
					<Card label="PRICING DETAILS">
						<Input
							label="Machining Hours"
							type="number"
							register={register}
							name="machiningHours"
						/>
						<Input label="Machining Price" register={register} name="millingPrice" type="number" />
						<Input label="Lathe Price" type="number" register={register} name="lathePrice" />
						<Input label="EDM Price" type="number" register={register} name="edmPrice" />
						<Input label="Grinding Price" type="number" register={register} name="grindingPrice" />
						<Input
							label="Balancing Price"
							type="number"
							register={register}
							name="balancingPrice"
						/>
						<Input label="Tests Price" type="number" register={register} name="testsPrice" />
					</Card>
					<Card label="DRAWINGS ETC.">DRAWINGS ETC.</Card>
				</div>
				<div className="flex gap-2">
					<Card label="FINAL PRICING">
						<Input label="Other Expenses" type="number" register={register} name="otherPrice" />
						<Checkbox label="Material Included" name="matIncluded" /> { /* ADD REGISTER */}
						<Input label="Material Price" type="number" register={register} name="matPrice" />
						<Input label="Price total" type="number" register={register} name="priceTotal" />
					</Card>
					<Card label="Comment">
						<Input label="Comment" multiline register={register} name="comment" />
					</Card>
					<Button loading={loading} label="Create Runner" type="submit" />
				</div>
			</form>
		</Card>
	);
};
