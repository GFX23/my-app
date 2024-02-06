"use server";

import { User } from "@prisma/client";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

import { authConfig } from "./auth.config";
import { getUser } from "./db/select";
import { validatePassword } from "./lib/actions";

export const { auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		// Github to be added
		Credentials({
			credentials: {
				email: { type: "email" },
				password: { type: "password" },
			},
			authorize: async (credentials): Promise<User | null> => {
				const parsedCredentials = z
					.object({ email: z.string().email(), password: z.string().min(6) })
					.safeParse(credentials);

				if (parsedCredentials.success) {
					const { email, password } = parsedCredentials.data;
					const user = await getUser(email);
					if (!user) return null;
					if (await validatePassword(password, user.password)) return user;
					return null;
				}
				return null;
			},
		}),
	],
});
