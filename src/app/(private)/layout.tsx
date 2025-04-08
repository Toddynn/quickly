import { ReactNode } from 'react';
import AdminNavbar from '../../components/ui/navbar';

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<main className=" w-full ">
			<AdminNavbar />
			{children}
		</main>
	);
}
