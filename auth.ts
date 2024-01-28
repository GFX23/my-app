import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";


export const config = {
	theme: {
		logo: "https://next-auth.js.org/img/logo/logo-sm.png",
	},
	providers: [GitHub, Credentials],
	callbacks: {
		authorized({ request, auth }) {
			const { pathname } = request.nextUrl;
			if (pathname === "/middleware-example") return !!auth;
			return true;
		},
	},
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
