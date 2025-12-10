import RegisterAsideCover from './components/aside';
import RegisterForm from './components/form';
import RegisterHeader from './components/header';

export default async function Register() {
	return (
		<main className="relative flex h-dvh overflow-x-hidden items-center lg:gap-12 p-12 lg:p-20">
			<RegisterAsideCover className="sticky top-4 self-start" />

			<aside className="flex flex-col w-full max-h-full  items-start gap-12">
				<RegisterHeader />
				<RegisterForm />
			</aside>
		</main>
	);
}
