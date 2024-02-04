import { NextPage } from "next";
import React from "react";

import { newUser } from "@/db/insert";

const Calculator: NextPage = async () => (
		<div>
			<h1>Calculator Page</h1>
			<p>This is a basic calculator page.</p>
		</div>
	);

export default Calculator;
