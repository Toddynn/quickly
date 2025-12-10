'use client';

import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { useMutation } from '@tanstack/react-query';
import { LucideLoader2, LucideMail } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel, FieldLabelRequired } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { TypographyH2, TypographyP } from '@/components/ui/typography';
import { APP_ROUTES } from '@/shared/constants/app-routes';
import { buildAppRoute } from '@/shared/functions/build-app-route';
import { usePasswordResetActions } from '../../shared/functions/use-password-reset-actions';
import { type RequestPasswordResetForm, RequestPasswordResetSchema } from '../../shared/schemas/recover-password-schema';

export default function RequestEmailForm() {
	const { push } = useRouter();
	const { requestPasswordReset } = usePasswordResetActions();

	const { mutateAsync: handleRequestPasswordReset, isPending: isRequestingPasswordReset } = useMutation({
		mutationFn: async (data: RequestPasswordResetForm) => {
			await requestPasswordReset({
				form_data: data,
				on_success: () => {
					push(buildAppRoute(APP_ROUTES.PUBLIC.RECOVER_PASSWORD_OTP.path, { email: data.email }));
				},
			});
		},
	});

	const { control, handleSubmit } = useForm<RequestPasswordResetForm>({
		defaultValues: {
			email: '',
		},
		disabled: isRequestingPasswordReset,
		resolver: standardSchemaResolver(RequestPasswordResetSchema),
	});

	const onSubmit = async (data: RequestPasswordResetForm) => {
		await handleRequestPasswordReset(data);
	};

	return (
		<form id="email-form" className="flex flex-col justify-center w-full gap-7" onSubmit={handleSubmit(onSubmit)}>
			<TypographyH2 id="email-title" className="border-none">
				Recuperar senha...
			</TypographyH2>
			<TypographyP className="text-lg not-first:mt-0 font-normal text-pretty">
				Digite seu e-mail para receber as instruções de recuperação.
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
										/>
									</InputGroup>
								</FieldContent>
								<FieldError errors={[fieldState.error]} />
							</Field>
						);
					}}
				/>
			</FieldGroup>
			<Button type="submit" className="w-full text-background bg-foreground font-medium" size="lg" disabled={isRequestingPasswordReset}>
				{isRequestingPasswordReset && <LucideLoader2 className="size-4 animate-spin" />}
				{isRequestingPasswordReset ? 'Enviando...' : 'Enviar'}
			</Button>
			<Field orientation="horizontal" className="justify-center">
				<Button type="button" variant="link" size="sm" asChild className=" text-sm" disabled={isRequestingPasswordReset}>
					<Link href={APP_ROUTES.PUBLIC.LOGIN.path}>Voltar ao login</Link>
				</Button>
			</Field>
		</form>
	);
}
