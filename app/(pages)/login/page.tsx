import { NextPage } from "next";
import React from "react";

import { LoginForm } from "@/_components/LoginForm";

const Login: NextPage = async () => (
	<div>
		<h1>Login Page</h1>
		<p>This is a basic Login page.</p>
		<LoginForm />
	</div>
);

export default Login;
