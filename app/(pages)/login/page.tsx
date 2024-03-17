import { NextPage } from "next";
import React from "react";

import { LoginForm } from "@/app/_components/LoginForm";

const Login: NextPage = async () => (
	<div className="flex flex-col items-center justify-center w-full">
		<h2>Login Page</h2>
		<LoginForm />
	</div>
);

export default Login;
