import { LogoutButton } from "./LogoutButton";
import { Avatar } from "../Avatar/Avatar";
import { NavLink } from "../Link/NavLink";
import { auth } from "@/auth";
import { MAIN_ROUTES } from "@/config/routes";

export const Navbar: React.FC = async () => {
	const session = await auth();

	return (
		<div className="container justify-between items-center mb-2 p-2 max-w-full">
			<h1>TS INDUSTRY SOLUTIONS</h1>
			<nav>
				<ul className="flex flex-row gap-4 items-center">
					<NavLink href={MAIN_ROUTES.HOME} label="Home" />
					<NavLink href={MAIN_ROUTES.BLOG} label="Blog" />
					{session ? (
						<>
							<NavLink href={MAIN_ROUTES.TEST} label="Test page" />
							<NavLink href={MAIN_ROUTES.CALCULATOR} label="Calculator" />
							<Avatar />
							<LogoutButton />
						</>
					) : (
						<NavLink href={MAIN_ROUTES.LOGIN} label="Login" />
					)}
				</ul>
			</nav>
		</div>
	);
};
