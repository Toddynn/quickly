import LoginAsideCover from '../../login/components/aside';
import RecoverPasswordHeader from '../components/header';
import ResetPasswordForm from '../components/reset-password-form';

export default async function RecoverPasswordReset() {
	return (
		<main className="relative flex h-dvh overflow-x-hidden items-center lg:gap-12 p-12 lg:p-20">
			<aside className="flex flex-col w-full max-h-full  items-start gap-12">
				<RecoverPasswordHeader />

				<ResetPasswordForm />
			</aside>
			<LoginAsideCover className="sticky top-4 self-start" />
		</main>
	);
}

