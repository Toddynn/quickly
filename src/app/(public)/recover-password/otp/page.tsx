import LoginAsideCover from '../../login/components/aside';
import RecoverPasswordHeader from '../components/header';
import OtpForm from '../components/otp-form';

export default async function RecoverPasswordOtp() {
	return (
		<main className="relative flex h-dvh overflow-x-hidden items-center lg:gap-12 p-12 lg:p-20">
			<aside className="flex flex-col w-full max-h-full  items-start gap-12">
				<RecoverPasswordHeader />

				<OtpForm />
			</aside>
			<LoginAsideCover className="sticky top-4 self-start" />
		</main>
	);
}

