import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Quickly',
	description: 'Gestão de agendamentos simples e fácil, como deve ser.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ptbr">
			<body className={` antialiased`}>{children}</body>
		</html>
	);
}
