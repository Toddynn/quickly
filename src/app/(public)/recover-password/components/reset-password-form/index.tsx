'use client';

import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { useMutation } from '@tanstack/react-query';
import { LucideArrowLeft, LucideCheckCircle2, LucideEye, LucideEyeClosed, LucideLoader2, LucideLock } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty';
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel, FieldLabelRequired } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { TypographyH2, TypographyP } from '@/components/ui/typography';
import { APP_ROUTES } from '@/shared/constants/app-routes';
import { buildAppRoute } from '@/shared/functions/build-app-route';
import { extractAllFieldErrors } from '@/shared/functions/extract-all-field-errors';
import { useTogglePasswordVisibility } from '@/shared/hooks/use-toggle-password-visibility';
import { usePasswordResetActions } from '../../shared/functions/use-password-reset-actions';
import { type ResetPasswordForm, ResetPasswordSchema } from '../../shared/schemas/recover-password-schema';

export default function ResetPasswordFormulary() {
	const { push } = useRouter();
	const searchParams = useSearchParams();
	const reset_token = searchParams.get('reset_token') || '';
	const email = searchParams.get('email') || '';

	const [isSuccess, setIsSuccess] = useState(false);

	const { resetPassword } = usePasswordResetActions();
	const { getInputType, isPasswordVisible, togglePasswordVisibility } = useTogglePasswordVisibility();

	const { mutateAsync: handleResetPassword, isPending: isResettingPassword } = useMutation({
		mutationFn: async (data: ResetPasswordForm) => {
			await resetPassword({
				form_data: data,
				on_success: () => {
					setIsSuccess(true);
				},
			});
		},
	});

	const { control, handleSubmit, formState, setValue } = useForm<ResetPasswordForm>({
		defaultValues: {
			reset_token: reset_token,
			new_password: '',
		},
		disabled: isResettingPassword,
		resolver: standardSchemaResolver(ResetPasswordSchema),
	});

	useEffect(() => {
		if (reset_token) {
			setValue('reset_token', reset_token);
		} else {
			push(buildAppRoute(APP_ROUTES.PUBLIC.LOGIN.path));
		}
	}, [reset_token, setValue, push]);

	const onSubmit = async (data: ResetPasswordForm) => {
		await handleResetPassword(data);
	};

	if (isSuccess) {
		return (
			<div id="success" className="flex flex-col justify-center w-full">
				<Empty>
					<EmptyHeader>
						<EmptyMedia variant="icon">
							<LucideCheckCircle2 className="text-primary" size={48} />
						</EmptyMedia>
						<EmptyTitle>Senha resetada com sucesso!</EmptyTitle>
						<EmptyDescription>Sua senha foi alterada com sucesso. Você já pode fazer login com sua nova senha.</EmptyDescription>
					</EmptyHeader>
					<EmptyContent>
						<Button asChild className="w-full text-background bg-foreground font-medium" size="lg">
							<Link href={APP_ROUTES.PUBLIC.LOGIN.path}>Voltar ao login</Link>
						</Button>
					</EmptyContent>
				</Empty>
			</div>
		);
	}

	return (
		<form id="reset-form" className="flex flex-col justify-center w-full gap-7" onSubmit={handleSubmit(onSubmit)}>
			<TypographyH2 id="reset-title" className="border-none">
				Redefinir senha
			</TypographyH2>
			<TypographyP className="text-lg not-first:mt-0 font-normal text-pretty">Digite sua nova senha para concluir a recuperação.</TypographyP>
			<FieldGroup>
				<Controller
					name="new_password"
					control={control}
					render={({ field, fieldState }) => {
						const errorArray = extractAllFieldErrors(fieldState.error, formState.errors.new_password);
						return (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Nova senha
									<FieldLabelRequired />
								</FieldLabel>
								<FieldContent className="relative">
									<InputGroup className="h-10">
										<InputGroupAddon align="inline-start">
											<LucideLock size={18} />
										</InputGroupAddon>
										<InputGroupInput
											{...field}
											id={field.name}
											name={field.name}
											aria-invalid={fieldState.invalid}
											type={getInputType()}
											placeholder={isPasswordVisible ? 'Digite sua nova senha' : '************'}
										/>
										<InputGroupAddon align="inline-end">
											<InputGroupButton type="button" variant="ghost" size="icon-sm" onClick={togglePasswordVisibility}>
												{isPasswordVisible ? <LucideEyeClosed size={18} /> : <LucideEye size={18} />}
											</InputGroupButton>
										</InputGroupAddon>
									</InputGroup>
								</FieldContent>
								<FieldError errors={errorArray} />
							</Field>
						);
					}}
				/>
			</FieldGroup>
			<Button type="submit" className="w-full text-background bg-foreground font-medium" size="lg" disabled={isResettingPassword}>
				{isResettingPassword && <LucideLoader2 className="size-4 animate-spin" />}
				{isResettingPassword ? 'Redefinindo senha...' : 'Redefinir senha'}
			</Button>
			<Field orientation="horizontal" className="justify-center">
				<Button
					disabled={isResettingPassword}
					type="button"
					variant="ghost"
					size="sm"
					onClick={() => {
						push(buildAppRoute(APP_ROUTES.PUBLIC.RECOVER_PASSWORD_OTP.path, { email: email }));
					}}
					className="underline text-sm"
				>
					<LucideArrowLeft size={16} className="mr-1" />
					Voltar
				</Button>
			</Field>
		</form>
	);
}
