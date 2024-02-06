"use client";

import { useRouter } from "next/navigation";
import { BiLogOut } from "react-icons/bi";
import { toast } from "react-toastify";

import { signOut } from "@/auth";
import { MAIN_ROUTES } from "@/config/routes";

export const LogoutButton: FC = () => {
	const router = useRouter();

	const handleLogout = async () => {
		try {
			const res = await signOut();
			if (res) {
				toast.success("Logged out");
			}
		} catch (error) {
			toast.error("Error logging out");
			console.error("Error logging out", error);
		} finally {
			router.push(MAIN_ROUTES.LOGIN);
			router.refresh();
			toast.info("Redirected to login page");
		}
	};

	return (
		<button type="button" onClick={handleLogout} className="flex-row-center">
			Logout
			<BiLogOut size={16} />
		</button>
	);
};
