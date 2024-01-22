import { NavLink } from "../Link/NavLink";
import { MAIN_ROUTES } from "@/app/_config/routes";

export const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between px-10 py-5">
      <h1>Navbar</h1>
      <nav >
        <ul className="flex flex-row gap-4">
          <NavLink href={MAIN_ROUTES.CALCULATOR} label="Calculator" />
          <NavLink href={MAIN_ROUTES.EXPENSES} label="Expenses" />
        </ul>
      </nav>
    </div>
  );
}