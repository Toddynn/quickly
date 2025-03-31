import LoginAsideCover from '../login/components/aside';
import RecoverPasswordForm from './components/form';
import RecoverPasswordHeader from './components/header';

export default async function RecoverPassword() {
	return (
		<main className="flex h-screen items-center lg:gap-12 p-12 lg:p-20">
			<aside className="flex flex-col items-start gap-12 size-full md:p-12 lg:p-20">
				<RecoverPasswordHeader />

				<RecoverPasswordForm />
			</aside>
			<LoginAsideCover />
		</main>
	);
}
