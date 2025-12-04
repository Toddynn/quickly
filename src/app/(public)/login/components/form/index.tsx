'use client';

import { LucideEye, LucideEyeClosed } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Field, FieldContent, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useTogglePasswordVisibility } from '@/hooks/use-toggle-password-visibility';
import { APP_ROUTES } from '@/shared/constants/app-routes';

export default function LoginForm() {
	const { getInputType, isPasswordVisible, togglePasswordVisibility } = useTogglePasswordVisibility();
	return (
		<form className="flex flex-col justify-center size-full gap-8">
			<h1 className="text-4xl font-bold">Bem-vindo! 👋🏼</h1>
			<FieldGroup>
				<Field>
					<FieldLabel htmlFor="email">
						E-mail <span className="text-destructive">*</span>
					</FieldLabel>
					<FieldContent>
						<Input id="email" name="email" type="email" required placeholder="exemplo@gmail.com" className="h-10" />
					</FieldContent>
				</Field>
				<Field>
					<FieldLabel htmlFor="password">
						Senha <span className="text-destructive">*</span>
					</FieldLabel>
					<FieldContent>
						<div className="relative">
							<Input
								id="password"
								name="password"
								type={getInputType()}
								required
								placeholder={isPasswordVisible ? 'Digite sua senha' : '************'}
								className="h-10 pr-10"
							/>
							<Button
								type="button"
								size="icon-sm"
								variant="ghost"
								onClick={togglePasswordVisibility}
								className="absolute right-1 top-1/2 -translate-y-1/2"
							>
								{isPasswordVisible ? <LucideEyeClosed size={18} /> : <LucideEye size={18} />}
							</Button>
						</div>
					</FieldContent>
				</Field>
				<Field orientation="horizontal" className="justify-between">
					<Field orientation="horizontal">
						<Checkbox id="remember" />
						<FieldLabel htmlFor="remember" className="font-normal cursor-pointer">
							Lembre de mim
						</FieldLabel>
					</Field>
					<Link href={APP_ROUTES.PUBLIC.RECOVER_PASSWORD} className="underline text-sm">
						Esqueceu a senha?
					</Link>
				</Field>
			</FieldGroup>
			<Button type="submit" className="w-full text-background bg-foreground font-medium" size="lg">
				Entrar
			</Button>
		</form>
	);
}
