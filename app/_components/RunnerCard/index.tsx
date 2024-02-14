"use client";

import { useState } from "react";

type Props = {
	name?: string;
	Da?: number;
	Ba?: number;
	Z?: number;
	machiningHours?: number;
};

export const RunnerCard: FP<Props> = ({ Da = 0, Ba = 0, Z = 0 }) => {
	const [loading, setLoading] = useState(false);

	return (
		<div className="container flex-col max-w-full">
			<div className="header">
				CALCULATOR - CREATE RUNNER
				<div className="div">A</div>
			</div>
			<div className="flex flex-col p-2">
				<div>Name: </div>
				<div>Order: </div>
				<div>Runner type: </div>
				<div>Customer: </div>
				<div>Dimensions: {`[ Da: ${Da} | Ba: ${Ba} | Z: ${Z} ]`}</div>
				<div>Material: /SELECT - X3/X4/Duplex/Super Duplex/Other</div>
				<div>Mat weight: - COMPUTE FROM INPUT</div>
				-----------------------------------------
				<div>Machining Hours: MAKE SUGGESTION + EDIT</div>
				<div>Lathe Price: MAKE SUGGESTION + EDIT </div>
				<div>EDM Price: MAKE SUGGESTION + EDIT </div>
				<div>Grinding Price: MAKE SUGGESTION + EDIT </div>
				<div>Balancing Price: MAKE SUGGESTION + EDIT </div>
				<div>Tests Price: MAKE SUGGESTION + EDIT </div>
				<div>OtherPrice - ADD TO DB - WILL BE EMPTY</div>
				-----------------------------------------
				<div>MillingPrice: - WILL BE COMPUTED </div>
				<div>Mat Included - CHECKBOX: </div>
				<div>Mat Price: - COMPUTE FROM INPUT </div>
				<div>PriceTotal: COMPUTE </div>
				-----------------------------------------
				<div>Comment: </div>
				<div>Hours Realy: </div>
				<div>Attachments:</div>
			</div>
		</div>
	);
};
