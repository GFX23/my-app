import cx from "classnames";
import { BiX } from "react-icons/bi";

type Props = {
	onClick: () => void;
	size?: number;
	loading: boolean;
};

export const CrossButton: FP<Props> = ({ onClick, size = 24, loading }) => (
	<button
		onClick={onClick}
		aria-label="Close"
		type="button"
		className={cx("text-error-2", loading && "animate-spin")}
	>
		<BiX size={size} />
	</button>
);
