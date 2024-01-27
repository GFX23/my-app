import { NavLink } from "../Link/NavLink";
import { MAIN_ROUTES } from "@/config/routes";

export const Navbar: React.FC = () => (
  <div className="flex flex-row justify-between px-10 py-5 border-b-2">
    <h1>Navbar</h1>
    <nav>

      <ul className="flex flex-row gap-4">
        <NavLink href={MAIN_ROUTES.HOME} label="Home" />
        <NavLink href={MAIN_ROUTES.CALCULATOR} label="Calculator" />
        <NavLink href={MAIN_ROUTES.EXPENSES} label="Expenses" />
        <NavLink href={MAIN_ROUTES.BLOG} label="Blog" />
        <NavLink href={MAIN_ROUTES.LOGIN} label="Login" />
      </ul>
    </nav>
  </div>
);
