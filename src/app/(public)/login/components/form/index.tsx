'use client';

import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { LucideEye, LucideEyeClosed, LucideLock, LucideMail } from 'lucide-react';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel, FieldLabelRequired, FieldSeparator } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { TypographyH2 } from '@/components/ui/typography';
import { APP_ROUTES } from '@/shared/constants/app-routes';
import { useTogglePasswordVisibility } from '@/shared/hooks/use-toggle-password-visibility';
import { type LoginForm, LoginSchema } from '../../shared/schemas/login-schema';

export default function LoginFormulary() {
	const { getInputType, isPasswordVisible, togglePasswordVisibility } = useTogglePasswordVisibility();

	const { control, handleSubmit } = useForm<LoginForm>({
		defaultValues: {
			email: '',
			password: '',
			remember_me: false,
		},
		resolver: standardSchemaResolver(LoginSchema),
	});

	const onSubmit = async (data: LoginForm) => {
		console.log(data);
	};

	return (
		<form className="flex flex-col w-full gap-8" onSubmit={handleSubmit(onSubmit)}>
			<TypographyH2 className="border-none">Bem-vindo! 👋🏼</TypographyH2>
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
					name="password"
					control={control}
					render={({ field, fieldState }) => {
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
								<FieldError errors={[fieldState.error]} />
							</Field>
						);
					}}
				/>
				<Controller
					name="remember_me"
					control={control}
					render={({ field }) => {
						return (
							<Field orientation="responsive" className="justify-between">
								<Field orientation="horizontal">
									<Checkbox id="remember" checked={field.value} onCheckedChange={field.onChange} />
									<FieldLabel htmlFor="remember" className="font-normal cursor-pointer">
										Lembre de mim
									</FieldLabel>
								</Field>
								<Link
									href={APP_ROUTES.PUBLIC.RECOVER_PASSWORD.path}
									className="underline w-full justify-end flex underline-offset-2 text-sm"
								>
									Esqueceu a senha?
								</Link>
							</Field>
						);
					}}
				/>
			</FieldGroup>
			<Button type="submit" className="w-full text-background bg-foreground font-medium" size="lg">
				Entrar
			</Button>
			<FieldSeparator>ou</FieldSeparator>
			<Button type="button" size="lg" variant="outline" className="w-full">
				Entrar com Google
			</Button>
			<Field className="justify-center" orientation="horizontal">
				<Link href={APP_ROUTES.PUBLIC.REGISTER.path} className=" text-sm">
					Não tem uma conta? <span className="underline underline-offset-2">Cadastre-se</span>
				</Link>
			</Field>
		</form>
	);
}
