"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { deleteUser } from "@/db/delete";
import { insertUser } from "@/db/insert";
import { getUser } from "@/db/select";
import { authenticate } from "@/lib/actions";


export const LoginForm = () => {
	const [input, setInput] = useState({ email: "", password: "" });

	console.log(input);

	const handleSubmit = async () => {
		try {
			const user = await getUser(input.email);
			console.log(user);
			const response = await authenticate(input);
			if (response) {
				console.log(response);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const userInput = {
		firstName: "Tomáš",
		lastName: "Spáčil",
		email: "spacil-tomas@seznam.cz",
		password: "admin233*",
		role: "admin",
		avatar: "https://avatars.githubusercontent.com/u/94796870?v=4",
	};
	const handleDeleteUser = async () => {
		try {
			const user = await deleteUser("spacil-tomas@seznam.cz");
			console.log(user);
			toast.success(`User ${user.email} deleted`);
		} catch (error) {
			console.error(error);
		}
	};


	const handleCreateUser = async () => {
		try {
			const user = await insertUser(userInput);
			console.log(user);
			toast.success(`User ${user.email} created`);
		} catch (error) {
			toast.error("Error creating user");
			console.error(error);
		}
	};


	return (
		<div className="flex flex-col items-center justify-center rounded-lg px-6 pb-4 pt-8">
			<h1>Please log in to continue.</h1>
			<div className="w-96">
				<div>
						Email
					<div className="relative">
						<input
							className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
							id="email"
							type="email"
							name="email"
							placeholder="Enter your email address"
							onChange={(e) => setInput({ ...input, email: e.target.value })}
							required
						/>
					</div>
				</div>
				<div className="mt-4">
						Password
					<div className="relative">
						<input
							className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
							id="password"
							type="password"
							name="password"
							placeholder="Enter password"
							required
							onChange={(e) => setInput({ ...input, password: e.target.value })}
							minLength={6}
						/>
					</div>
				</div>
			</div>

			<button type="button" className="mt-4 w-full" onClick={handleSubmit}>
				Log in
			</button>
			<button  type="button" className="mt-4 w-full" onClick={handleDeleteUser}>
				Delete User
			</button>
			<ToastContainer />
			<button  type="button" className="mt-4 w-full" onClick={handleCreateUser}>
				Create User
			</button>
			<div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true" />
		</div>
	);
};
