"use client";

import { Input } from "../Input";
import { Select } from "../Select";

export const CalcSideBar = () => {
	const helo = "helo";

	return (
		<div className="w-96 h-full container flex-col items-center">
			<h1>CalcSideBar</h1>
			<Select
				label="Druh Turbíny"
				options={[
					{ value: "pelton", label: "Peltonka" },
					{ value: "francis", label: "Franciska" },
					{ value: "split", label: "Francis - Split" },
					{ value: "turgo", label: "Turgo" },
				]}
			/>
			<Input label="Da - Průměr" />
			<Input label="Ba - Šířka" />
			<Input label="Z - Počet Zubů" />

			<h1>Nastavení</h1>
		</div>
	);
};
