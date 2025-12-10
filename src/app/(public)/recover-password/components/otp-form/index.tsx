'use client';

import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { useMutation } from '@tanstack/react-query';
import { LucideArrowLeft, LucideMail } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel, FieldLabelRequired } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';
import { Spinner } from '@/components/ui/spinner';
import { TypographyH2, TypographyP } from '@/components/ui/typography';
import { APP_ROUTES } from '@/shared/constants/app-routes';
import { buildAppRoute } from '@/shared/functions/build-app-route';
import { usePasswordResetActions } from '../../shared/functions/use-password-reset-actions';
import { type ValidatePasswordResetOtpForm, ValidatePasswordResetOtpSchema } from '../../shared/schemas/recover-password-schema';

export default function OtpForm() {
	const { push } = useRouter();
	const searchParams = useSearchParams();
	const email = searchParams.get('email') || '';

	const { validatePasswordResetOtp } = usePasswordResetActions();

	const { mutateAsync: handleValidatePasswordResetOtp, isPending: isValidatingPasswordResetOtp } = useMutation({
		mutationFn: async (data: ValidatePasswordResetOtpForm) => {
			await validatePasswordResetOtp({
				form_data: data,
				on_success: ({ reset_token }) => {
					push(buildAppRoute(APP_ROUTES.PUBLIC.RECOVER_PASSWORD_RESET.path, { reset_token: reset_token, email: email }));
				},
			});
		},
	});

	const { control, handleSubmit, setValue } = useForm<ValidatePasswordResetOtpForm>({
		defaultValues: {
			email: email,
			code: '',
		},
		disabled: isValidatingPasswordResetOtp,
		resolver: standardSchemaResolver(ValidatePasswordResetOtpSchema),
	});

	useEffect(() => {
		if (email) {
			setValue('email', email);
		}
	}, [email, setValue]);

	const onSubmit = async (data: ValidatePasswordResetOtpForm) => {
		await handleValidatePasswordResetOtp(data);
	};

	return (
		<form id="otp" className="flex flex-col w-full gap-7" onSubmit={handleSubmit(onSubmit)}>
			<TypographyH2 id="otp-title" className="border-none">
				Verificação de código
			</TypographyH2>
			<TypographyP className="text-lg not-first:mt-0 font-normal text-pretty">
				Enviamos um código de verificação para <strong>{email}</strong>.
			</TypographyP>
			<FieldGroup>
				<Controller
					name="email"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									E-mail
									<FieldLabelRequired />
								</FieldLabel>
								<FieldContent>
									<InputGroup className="h-10">
										<InputGroupAddon align="inline-start">
											<LucideMail size={18} />
										</InputGroupAddon>
										<InputGroupInput
											{...field}
											id={field.name}
											name={field.name}
											aria-invalid={fieldState.invalid}
											type="email"
											placeholder="exemplo@gmail.com"
											readOnly
										/>
									</InputGroup>
								</FieldContent>
								<FieldError errors={[fieldState.error]} />
							</Field>
						);
					}}
				/>
				<Controller
					name="code"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="otp-form-otp-code">
									Código de verificação
									<FieldLabelRequired />
								</FieldLabel>
								<FieldContent>
									<InputOTP
										id="otp-form-otp-code"
										name={field.name}
										maxLength={6}
										value={field.value || ''}
										onChange={(value) => field.onChange(value)}
										onBlur={field.onBlur}
										aria-invalid={fieldState.invalid}
									>
										<InputOTPGroup>
											<InputOTPSlot className="size-11" index={0} />
											<InputOTPSlot className="size-11" index={1} />
											<InputOTPSlot className="size-11" index={2} />
										</InputOTPGroup>
										<InputOTPSeparator />
										<InputOTPGroup>
											<InputOTPSlot className="size-11" index={3} />
											<InputOTPSlot className="size-11" index={4} />
											<InputOTPSlot className="size-11" index={5} />
										</InputOTPGroup>
									</InputOTP>
								</FieldContent>
								<FieldError errors={[fieldState.error]} />
							</Field>
						);
					}}
				/>
				<Field>
					<Button type="submit" className="w-full text-background bg-foreground font-medium" size="lg" disabled={isValidatingPasswordResetOtp}>
						{isValidatingPasswordResetOtp && <Spinner />}
						{isValidatingPasswordResetOtp ? 'Verificando...' : 'Verificar'}
					</Button>
				</Field>
				<Field>
					<Button
						disabled={isValidatingPasswordResetOtp}
						type="button"
						variant="ghost"
						size="sm"
						onClick={() => {
							push(APP_ROUTES.PUBLIC.RECOVER_PASSWORD.path);
						}}
						className="underline text-sm"
					>
						<LucideArrowLeft size={16} className="mr-1" />
						Voltar
					</Button>
				</Field>
			</FieldGroup>
		</form>
	);
}
