import { NavLink } from "../Link/NavLink";
import { auth } from "@/auth";
import { MAIN_ROUTES } from "@/config/routes";

export const Navbar: React.FC = async () => {
	const session = await auth();

	console.debug(session);

	return (
		<div className="flex flex-row justify-between px-10 py-5 border-b-2">
			<h1>Navbar</h1>
			<nav>
				<ul className="flex flex-row gap-4">
					<li>ME: {session ? session?.user?.email : "No user"}</li>
					<NavLink href={MAIN_ROUTES.HOME} label="Home" />
					<NavLink href={MAIN_ROUTES.CALCULATOR} label="Calculator" />
					<NavLink href={MAIN_ROUTES.EXPENSES} label="Expenses" />
					<NavLink href={MAIN_ROUTES.BLOG} label="Blog" />
					<NavLink href={MAIN_ROUTES.LOGIN} label="Login" />
					<NavLink href={MAIN_ROUTES.TEST} label="Test page" />
				</ul>
			</nav>
		</div>
	);
};
