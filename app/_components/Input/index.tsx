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
	error?: string;
};

export enum InputTypes {
	FILLED = "filled",
	OUTLINED = "outlined",
	STANDARD = "standard",
}

/**
 * @param label - label of the input
 * @param type - default type is set to text
 * @param register - register function from react-hook-form
 * @param name - name of the input for react-hook-form
 * @param variant - variant of the input InputTypes[FILLED | OUTLINED | STANDARD]
 */
export const Input: FP<Props & Omit<TextFieldProps, "error">> = ({
	name,
	label = "Zadej popisek",
	type = "text",
	register,
	variant = InputTypes.FILLED,
	error,
	...other
}) => {
	let registerProps = {};

	if (name && register) {
		const { ref: inputRef, ...otherRegisterProps } = register(name, {
			valueAsNumber: type === "number",
		});
		registerProps = { inputRef, ...otherRegisterProps, helperText: error };
	}

	return (
		<TextField
			fullWidth
			inputMode="url"
			autoComplete="off"
			label={label}
			InputLabelProps={{
				shrink: true,
			}}
			error={!!error}
			type={type}
			variant={variant}
			name={name}
			sx={filledStyle}
			{...registerProps}
			{...other}
		/>
	);
};
