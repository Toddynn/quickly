'use client';

import { LucideEye, LucideEyeClosed, LucideLock, LucideMail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Field, FieldContent, FieldGroup, FieldLabel, FieldSeparator } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { TypographyH2 } from '@/components/ui/typography';
import { useTogglePasswordVisibility } from '@/hooks/use-toggle-password-visibility';
import { APP_ROUTES } from '@/shared/constants/app-routes';

export default function LoginForm() {
	const { getInputType, isPasswordVisible, togglePasswordVisibility } = useTogglePasswordVisibility();
	return (
		<form className="flex flex-col justify-center size-full gap-8">
			<TypographyH2 className="border-none">Bem-vindo! 👋🏼</TypographyH2>
			<FieldGroup>
				<Field>
					<FieldLabel htmlFor="email">
						E-mail <span className="text-heroui-danger">*</span>
					</FieldLabel>
					<FieldContent>
						<InputGroup className="h-10">
							<InputGroupAddon align="inline-start">
								<LucideMail size={18} />
							</InputGroupAddon>
							<InputGroupInput id="email" name="email" type="email" required placeholder="Digite seu e-mail" />
						</InputGroup>
					</FieldContent>
				</Field>
				<Field>
					<FieldLabel htmlFor="password">
						Senha <span className="text-heroui-danger">*</span>
					</FieldLabel>
					<FieldContent className="relative">
						<InputGroup className="h-10">
							<InputGroupAddon align="inline-start">
								<LucideLock size={18} />
							</InputGroupAddon>
							<InputGroupInput
								id="password"
								name="password"
								type={getInputType()}
								required
								placeholder={isPasswordVisible ? 'Digite sua senha' : '************'}
							/>
							<InputGroupAddon align="inline-end">
								<InputGroupButton variant="ghost" size="icon-sm" onClick={togglePasswordVisibility}>
									{isPasswordVisible ? <LucideEyeClosed size={18} /> : <LucideEye size={18} />}
								</InputGroupButton>
							</InputGroupAddon>
						</InputGroup>
					</FieldContent>
				</Field>
				<Field orientation="responsive" className="justify-between">
					<Field orientation="horizontal">
						<Checkbox id="remember" />
						<FieldLabel htmlFor="remember" className="font-normal cursor-pointer">
							Lembre de mim
						</FieldLabel>
					</Field>
					<Link href={APP_ROUTES.PUBLIC.RECOVER_PASSWORD.path} className="underline w-full justify-end flex underline-offset-2 text-sm">
						Esqueceu a senha?
					</Link>
				</Field>
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
