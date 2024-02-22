import { Slider as Slidr, SliderProps } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

type Props = {
	register?: UseFormRegister<any>;
	name?: string;
	label?: string;
};

export const Slider: FP<Props & SliderProps> = ({ label = "Zadej popisek", register, name, ...props }) => {
	let registerProps = {};

	if (name && register) {
		const { ref: inputRef, ...otherRegisterProps } = register(name);
		registerProps = { ref: inputRef, ...otherRegisterProps };
	}

	return (
		<div className="px-3">
      <span>{label}</span>
			<Slidr size="small" {...registerProps} valueLabelDisplay="auto"  {...props} />
		</div>
	);
};
