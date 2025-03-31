import LoginAsideCover from './components/aside';
import LoginForm from './components/form';
import LoginHeader from './components/header';

export default async function Login() {
	return (
		<main className="flex h-screen items-center lg:gap-12 p-12 lg:p-20">
			<aside className="flex flex-col items-start gap-12 size-full md:p-12 lg:p-20">
				<LoginHeader />
				<LoginForm />
			</aside>
			<LoginAsideCover />
		</main>
	);
}
