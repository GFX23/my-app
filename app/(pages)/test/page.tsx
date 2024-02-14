"use client";

import { NextPage } from "next";
import React from "react";

import { Input } from "@/app/_components/Input";
import { fillDB } from "@/db/fill/fill";

const TestPage: NextPage = () => {
	const handleClick = async () => {
		const insert = await fillDB();
		console.debug(insert);
	};

	return (
		<div>
			<h1>TestPage Page</h1>
			<p>Manage your TestPage on this page.</p>
			<Input label="Zadej hodiny" />

			<button style={{ color: "white" }} type="button" onClick={handleClick}>
				Fill DB
			</button>
		</div>
	);
};

export default TestPage;
