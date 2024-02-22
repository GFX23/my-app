/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuItem, TextField, TextFieldProps, TextFieldVariants } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

import { filledStyle } from "./inlineStyles";

type Props = {
	label: string;
	variant?: TextFieldVariants | undefined;
	options?: Record<string, string>[];
	register?: UseFormRegister<any>;
	name?: string;
	defaultValue?: string;
};

export enum InputTypes {
	FILLED = "filled",
	OUTLINED = "outlined",
	STANDARD = "standard",
}

/**
 * @param options - options for the select input, keep Record<value, label>[] both as string
 * @param label - label of the input
 * @param register - register function from react-hook-form
 * @param name - name of the input for react-hook-form
 * @param variant - variant of the input
 */
export const Select: FP<Props & TextFieldProps> = ({
	label = "Zadej popisek",
	variant = InputTypes.FILLED,
	options,
	register,
	name,
	defaultValue = "",
	...other
}) => {
	const InputProps = {
		label,
		variant,
	};

	let registerProps = {};

	if (name && register) {
		const { ref: inputRef, ...otherRegisterProps } = register(name);
		registerProps = { inputRef, ...otherRegisterProps };
	}

	return (
		<TextField
			{...registerProps}
			{...other}
			fullWidth
			defaultValue={defaultValue}
			select
			{...InputProps}
			sx={filledStyle}
		>
			{options?.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</TextField>
	);
};
