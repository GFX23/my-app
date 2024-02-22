"use client";

import { useState } from "react";

import { Checkbox } from "@/app/_components/Checkbox";
import { Input } from "@/app/_components/Input";
import { Select } from "@/app/_components/Select";


type Props = {
	name?: string;
	Da?: number;
	Ba?: number;
	Z?: number;
	machiningHours?: number;
};

export const RunnerCard: FP<Props> = ({ Da = 0, Ba = 0, Z = 0 }) => {
	const [loading, setLoading] = useState(false);

	return (
		<div className="container flex-col max-w-full">
			<div className="header">
				CALCULATOR - CREATE RUNNER
				<div className="div">A</div>
			</div>
			<div className="flex flex-col p-2">
				<div className="flex">
				<div className="flex flex-col flex-grow border-[1px] rounded-md">
					FIRST SET
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
				</div>

				<div className="flex flex-col flex-grow border-[1px] rounded-md">
					SECOND SET
					<Input label="Machining Hours" type="text" />
					<Input label="Lathe Price" type="text" />
					<Input label="EDM Price" type="text" />
					<Input label="Grinding Price" type="text" />
					<Input label="Balancing Price" type="text" />
					<Input label="Tests Price" type="text" />
					<Input label="OtherPrice" type="text" />text
					</div>
					<div className="flex flex-grow items-center justify-center border-[1px] rounded-md">
						DRAWINGS ETC.
						<div className="flex">INSERT DRAWING</div>
						</div>
				</div>
				<div className="flex border-[1px] rounded-md">
				<Input label="Machining Price" type="text" value="WILL BE COMPUTED" />
				<Checkbox label="Material Included" />
				<Input label="Material Price" type="text" value="000000" />
				<Input label="Price total" type="tex" />
				<div>Mat Price: - COMPUTE FROM INPUT </div>
				<div>PriceTotal: COMPUTE </div>
				</div>
				<div className="flex border-[1px] rounded-md">
				<div>Comment: </div>
				<Input label="Comment" type="text" />
				</div>
			</div>
		</div>
	);
};
