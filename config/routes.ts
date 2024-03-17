export enum SUB_ROUTES {
	DASHBOARD = "/dashboard",
	BLOG = "/blog",
	HOME = "/",
	LOGIN = "/login",
}

export enum MAIN_ROUTES {
	CALCULATOR = "/calculator",
	DASHBOARD = "/dashboard",
	BLOG = "/blog",
	HOME = "/",
	LOGIN = "/login",
	TEST = "/test",
}

const PUBLIC_ROUTE = process.env.NEXT_PUBLIC_ROUTE;

export const DEFAULT_REDIRECT_LOGIN_URL = `${PUBLIC_ROUTE}${MAIN_ROUTES.LOGIN}`;
export const privateRoutes = [MAIN_ROUTES.CALCULATOR, MAIN_ROUTES.TEST, MAIN_ROUTES.DASHBOARD];
