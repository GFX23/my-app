import { NextPage } from "next";
import React from "react";

import { Input } from "@/app/_components/Input";

const Expenses: NextPage = () => (
	<div>
		<h1>Expenses Page</h1>
		<p>Manage your expenses on this page.</p>
		<Input label="Zadej hodiny" />
	</div>
);

export default Expenses;
