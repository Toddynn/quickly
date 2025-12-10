'use client';

import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { LucideEye, LucideEyeClosed, LucideLock, LucideMail, LucidePhone, LucideUser } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel, FieldLabelRequired, FieldSeparator } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { TypographyH2 } from '@/components/ui/typography';
import { APP_ROUTES } from '@/shared/constants/app-routes';
import { extractAllFieldErrors } from '@/shared/functions/extract-all-field-errors';
import { formatPhoneNumber } from '@/shared/functions/format-phone-number';
import { useTogglePasswordVisibility } from '@/shared/hooks/use-toggle-password-visibility';
import { useRegisterActions } from '../../shared/functions/use-register-actions';
import { type RegisterForm, RegisterSchema } from '../../shared/schemas/register-schema';

export default function RegisterFormulary() {
	const { push } = useRouter();
	const { getInputType, isPasswordVisible, togglePasswordVisibility } = useTogglePasswordVisibility();
	const { createUser } = useRegisterActions();

	const { control, handleSubmit, formState, reset } = useForm<RegisterForm>({
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			password: '',
		},
		resolver: standardSchemaResolver(RegisterSchema),
		criteriaMode: 'all',
	});

	const onSubmit = async (data: RegisterForm) => {
		await createUser({
			form_data: data,
			on_success: () => {
				reset();
				toast.success('Conta criada com sucesso!', {
					description: 'Você já pode fazer login em sua conta.',
				});
				push(APP_ROUTES.PUBLIC.LOGIN.path);
			},
		});
	};

	return (
		<form id="register" className="flex flex-col w-full gap-8" onSubmit={handleSubmit(onSubmit)}>
			<TypographyH2 className="border-none">Crie sua conta! 🚀</TypographyH2>
			<FieldGroup>
				<Controller
					name="name"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Nome
									<FieldLabelRequired />
								</FieldLabel>
								<FieldContent>
									<InputGroup className="h-10">
										<InputGroupAddon align="inline-start">
											<LucideUser size={18} />
										</InputGroupAddon>
										<InputGroupInput
											{...field}
											id={field.name}
											name={field.name}
											aria-invalid={fieldState.invalid}
											type="text"
											placeholder="Seu nome completo"
										/>
									</InputGroup>
								</FieldContent>
								<FieldError errors={[fieldState.error]} />
							</Field>
						);
					}}
				/>
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
											placeholder="Digite seu e-mail"
										/>
									</InputGroup>
								</FieldContent>
								<FieldError errors={[fieldState.error]} />
							</Field>
						);
					}}
				/>
				<Controller
					name="phone"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>Telefone</FieldLabel>
								<FieldContent>
									<InputGroup className="h-10">
										<InputGroupAddon align="inline-start">
											<LucidePhone size={18} />
										</InputGroupAddon>
										<InputGroupInput
											{...field}
											id={field.name}
											name={field.name}
											aria-invalid={fieldState.invalid}
											type="tel"
											placeholder="Digite seu telefone"
											maxLength={15}
											onChange={(e) => {
												const formatted = formatPhoneNumber(e.target.value);
												field.onChange(formatted);
											}}
										/>
									</InputGroup>
								</FieldContent>
								<FieldError errors={[fieldState.error]} />
							</Field>
						);
					}}
				/>
				<Controller
					name="password"
					control={control}
					render={({ field, fieldState }) => {
						const errorArray = extractAllFieldErrors(fieldState.error, formState.errors.password);

						return (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Senha
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
											placeholder={isPasswordVisible ? 'Digite sua senha' : '************'}
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
			<Button type="submit" className="w-full text-background bg-foreground font-medium" size="lg">
				Criar conta
			</Button>
			<FieldSeparator>ou</FieldSeparator>
			<Button type="button" size="lg" variant="outline" className="w-full">
				Entrar com Google
			</Button>
			<Field className="justify-center" orientation="horizontal">
				<Link href={APP_ROUTES.PUBLIC.LOGIN.path} className="underline text-sm">
					Já tem uma conta? Faça login
				</Link>
			</Field>
		</form>
	);
}
