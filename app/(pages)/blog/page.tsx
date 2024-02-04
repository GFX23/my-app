import { NextPage } from "next";
import React from "react";

import { auth } from "@/auth.config";

const Blog: NextPage = async () => {
	const session = await auth();

	return (
		<div>
			<h1>Blog Page</h1>
			{JSON.stringify(session)}
			<p>This is a basic Blog page.</p>
		</div>
	);
};

export default Blog;
