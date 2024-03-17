import { BiLogOut } from "react-icons/bi";

import { signOut } from "@/auth";

export const LogoutButton: FC = () => (
	<form
		action={async () => {
			"use server";

			await signOut();
		}}
		className="w-full"
	>
		<button type="submit" aria-label="logoutButton" className="flex-row-center">
			<BiLogOut size={20} />
		</button>
	</form>
);
