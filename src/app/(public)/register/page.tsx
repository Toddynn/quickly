import RegisterAsideCover from './components/aside';
import RegisterForm from './components/form';
import RegisterHeader from './components/header';

export default async function Register() {
	return (
		<main className="flex h-screen items-center lg:gap-12 p-12 lg:p-20">
			<RegisterAsideCover />
			<aside className="flex flex-col items-start gap-12 size-full md:px-12 lg:px-20">
				<RegisterHeader />
				<RegisterForm />
			</aside>
		</main>
	);
}
