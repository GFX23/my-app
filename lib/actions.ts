"use server";

import { compare } from "bcrypt-ts";
import { AuthError } from "next-auth";

// import secretData from "../data/data.json";
import { signIn } from "auth";

export async function authenticate(data: { email: string; password: string }) {
	try {
		const res = await signIn("credentials", data);
		return "Success!";
	} catch (error) {
		if (error instanceof AuthError) {
			console.debug("Error:", error);
			switch (error.type) {
				case "CredentialsSignin":
					return "Invalid credentials.";
				default:
					return "Something went wrong.";
			}
		}
		throw error;
	}
}

export const validatePassword = async (password: string, hashedPassword: string) => {
	const result = await compare(password, hashedPassword);
	if (!result) {
		throw new Error("Invalid password");
	}
	return result;
};

// export const fillDB = async () => {
// 	secretData.forEach(async (item) => {
// 		console.debug("Item:", item);
// 	});
// };
