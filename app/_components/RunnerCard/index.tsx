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

type RunnerPricingParams = {
	name: string;
	order: string;
	runnerType: RunnerTypes;
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
	materialPrice: number;
	priceTotal: number;
	comment: string;
};

export const RunnerCard: FP<Props> = ({ Da = 0, Ba = 0, Z = 0 }) => {
	const [loading, setLoading] = useState(false);
	const defParams = useCalcStore((state) => state.runnerCalcParams);

	return (
		<Card label="CREATE RUNNER">
			<form className="flex flex-col gap-2">
				<div className="flex gap-2">
					<Card label="BIO OF THE RUNNER">
						<Input label="Name" />
						<Input label="Order" />
						<Input label="Runner type" value="WILL BE INHERITED FROM SIDEBAR" />
						<Input label="Customer" />
						<Input label="Dimensions" value="WILL BE INHERITED FROM SIDEBAR" />
						<div>Dimensions: {`[ Da: ${Da} | Ba: ${Ba} | Z: ${Z} ]`}</div>
						<Select label="Material" 				options={[
							{ value: "X3CrNiMo", label: "X3CrNiMo" },
							{ value: "X4CrNiMo", label: "X4CrNiMo" },
							{ value: "Duplex", label: "Duplex" },
							{ value: "SuperDuplex", label: "Super Duplex" },
						]} />
						<Input label="Mat weight" type="text" value="WILL BE COMPUTED" />
						<div>Mat weight: - COMPUTE FROM INPUT</div>
					</Card>
					<Card label="PRICING DETAILS">
						<Input label="Machining Hours" type="text" />
						<Input label="Lathe Price" type="text" />
						<Input label="EDM Price" type="text" />
						<Input label="Grinding Price" type="text" />
						<Input label="Balancing Price" type="text" />
						<Input label="Tests Price" type="text" />
						<Input label="OtherPrice" type="text" />text
					</Card>
					<Card label="DRAWINGS ETC.">
						DRAWINGS ETC.
					</Card>
				</div>
					<Card label="PRICE COMPUTATION">

						<Input label="Machining Price" type="text" value="WILL BE COMPUTED" />
						<Checkbox label="Material Included" />
						<Input label="Material Price" type="text" value="000000" />
						<Input label="Price total" type="tex" />
						<div>Mat Price: - COMPUTE FROM INPUT </div>
						<div>PriceTotal: COMPUTE </div>
					</Card>
					<Card label="Comment">
						<Input label="Comment" type="text" />
					</Card>
			</form>
		</Card>
	);
};
