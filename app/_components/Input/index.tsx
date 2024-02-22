/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField, TextFieldProps, TextFieldVariants } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

import { filledStyle } from "./inlineStyles";

type Props = {
	label: string;
	variant?: TextFieldVariants | undefined;
	required?: boolean;
	type?: string;
	register?: UseFormRegister<any>;
	name?: string;
};

export enum InputTypes {
	FILLED = "filled",
	OUTLINED = "outlined",
	STANDARD = "standard",
}

/**
 * @param label - label of the input
 * @param type - default type is set to url
 * @param register - register function from react-hook-form
 * @param name - name of the input for react-hook-form
 * @param variant - variant of the input InputTypes[FILLED | OUTLINED | STANDARD]
 */
export const Input: FP<Props & TextFieldProps> = ({
	name,
	label = "Zadej popisek",
	type = "text",
	register,
	variant = InputTypes.FILLED,
	...other
}) => {
	const InputProps = {
		label,
		type,
		variant,
	};

	let registerProps = {};

	if (name && register) {
		const { ref: inputRef, ...otherRegisterProps } = register(name);
		registerProps = { inputRef, ...otherRegisterProps };
	}

	return (
		<TextField
		fullWidth
		inputMode="url"
		autoComplete="off"
		sx={filledStyle}
		{...registerProps}
		{...InputProps}
		{...other}
			
		/>
	);
};
