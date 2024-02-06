import { MenuItem, TextField, TextFieldVariants } from "@mui/material";

import { filledStyle } from "./inlineStyles";

type Props = {
	label: string;
	variant?: TextFieldVariants | undefined;
	options?: Record<string, string>[];
};

export enum InputTypes {
	FILLED = "filled",
	OUTLINED = "outlined",
	STANDARD = "standard",
}

/**
 * @param options - options for the select input, keep Record<value, label> both as string
 * @param label - label of the input
 * @param variant - variant of the input
 */
export const Select: FP<Props> = ({
	label = "Zadej popisek",
	variant = InputTypes.FILLED,
	options,
}) => {
	const InputProps = {
		label,
		variant,
	};
	return (
		<TextField fullWidth select {...InputProps} sx={filledStyle}>
			{options?.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</TextField>
	);
};
