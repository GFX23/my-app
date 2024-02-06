import { NextPage } from "next";
import React from "react";

// import { fillDB } from "@/lib/actions";

const Calculator: NextPage = async () => {
	const handleClick = async () => {
		// await fillDB(); 
	};

	return (
		<div className="w-full">
			<h1>Calculator Page</h1>
			<p>This is a basic calculator page.</p>
			<button type="button" onClick={handleClick}>
				Fill DB
			</button>
		</div>
	);
};

export default Calculator;
