/* eslint-disable react/button-has-type */

import { Loader } from "@/app/_components/Loader";

type Props = {
	children: React.ReactNode;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	loading?: boolean;
};

export const Button: FP<Props> = ({ children, onClick, type = "button", loading = false }) => {
	const buttonProps = {
		className: "border-[1px]",
	};

	return (
		<button
			type={type}
			onClick={onClick}
			className="border-[1px] p-1 duration-150 flex-row-center w-full rounded-md border-primary-5 hover:border-primary-2 text-primary-4 hover:text-primary-2 hover:shadow-md hover:shadow-primary-6"
		>
			{loading ? <Loader /> : null}
			{children}
		</button>
	);
};
