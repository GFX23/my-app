import type { NextAuthConfig } from "next-auth";

export const authConfig = {
	pages: {
		signIn: "/login",
	},
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
	providers: [],
} satisfies NextAuthConfig;
