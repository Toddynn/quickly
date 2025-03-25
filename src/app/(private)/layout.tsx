import { ReactNode } from 'react';
import AdminNavbar from './components/navbar';

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<main className=" relative size-full min-h-screen items-center justify-center">
			<AdminNavbar />
			{children}
		</main>
	);
}
