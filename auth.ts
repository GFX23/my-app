import { User } from "@prisma/client";
import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

import { getUser } from "./db/select";
import { validatePassword } from "./lib/actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/validation/userSchema";

export const authConfig = {
	session: { strategy: "jwt" },
	callbacks: {
		jwt: async ({ token, user, trigger, session }) => {
			if (trigger === "update") {
				const oldUser = token.user as object;
				return { ...token, user: { ...oldUser, ...session } };
			}
			return user ? { ...token, user } : token;
		},
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		session: async ({ session, token }) => ({ ...session, user: token.user }),
	},

	providers: [
		Credentials({
			credentials: {
				email: { type: "email" },
				password: { type: "password" },
			},
			authorize: async (credentials): Promise<User | null> => {
				const parsedCredentials = z
					.object({ email: z.string().email(), password: z.string().min(PASSWORD_MIN_LENGTH) })
					.safeParse(credentials);

				if (parsedCredentials.success) {
					const { email, password } = parsedCredentials.data;
					const user = await getUser(email);
					if (!user) return null;
					if (await validatePassword(password, user.password)) {
						const { password: userPassword, ...userDataWithoutPassword } = user;
						return userDataWithoutPassword as User;
					}

					return null;
				}
				return null;
			},
		}),
	],
} as NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
