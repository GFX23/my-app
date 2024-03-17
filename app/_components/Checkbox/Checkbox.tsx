import { Checkbox as Check, FormControlLabel } from "@mui/material";

type Props = {
	label: string;
};

type MuiCheckboxProps = React.ComponentProps<typeof Check> & Props;

export const Checkbox: FP<MuiCheckboxProps> = ({ label = "Zadej popisek" }) => (
	<div className="flex gap-4 w-96">
		<FormControlLabel label={label} labelPlacement="start" control={<Check />} />
	</div>
);
