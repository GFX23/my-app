import { NextResponse } from "next/server";
import { NextAuthRequest } from "next-auth/lib";

import { auth } from "@/auth";
import { privateRoutes, DEFAULT_REDIRECT_LOGIN_URL } from "@/config/routes";

// eslint-disable-next-line
export default auth((req: NextAuthRequest): NextResponse => {
	const route = req.nextUrl.pathname;
	const isLoggedIn = !!req.auth;
	const isRouteProtected = !!privateRoutes.filter((privateRoute) => route.startsWith(privateRoute))
		.length;

	console.debug("middleware", route, isLoggedIn, isRouteProtected);

	if (isRouteProtected && !isLoggedIn) {
		console.debug("⛔ Unauthorized access to protected route. Redirecting to login.");
		return NextResponse.redirect(DEFAULT_REDIRECT_LOGIN_URL);
	}

	return NextResponse.next();
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
