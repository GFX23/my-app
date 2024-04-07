/* eslint-disable @typescript-eslint/no-explicit-any */

import { UseFormRegister } from "react-hook-form";

type Props = {
	register?: UseFormRegister<any>;
	label: string;
	name?: string;
};

export const Checkbox: FP<Props> = ({ label = "Zadej popisek", register, name }) => {
	let registerProps = {};

	if (name && register) {
		registerProps = register(name, {
		});
	}

	return (
		<div className="flex flex-col gap-2 w-96">
			<label htmlFor="checkbox" className="text-xs ml-2 text-mui-text">{label}</label>
			<input {...registerProps} className="w-5 h-5 ml-2" id="checkbox" type="checkbox" />
		</div>
	);
};

