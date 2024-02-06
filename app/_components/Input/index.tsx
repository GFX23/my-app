import { TextField, TextFieldVariants } from "@mui/material";

import { filledStyle } from "./inlineStyles";

type Props = {
	label: string;
	variant?: TextFieldVariants | undefined;
	required?: boolean;
	type?: string;
};

export enum InputTypes {
	FILLED = "filled",
	OUTLINED = "outlined",
	STANDARD = "standard",
}

export const Input: FP<Props> = ({
	label = "Zadej popisek",
	type = "text",
	variant = InputTypes.FILLED,
}) => {
	const InputProps = {
		label,
		type,
		variant,
	};
	return <TextField {...InputProps} fullWidth sx={filledStyle} />;
};
