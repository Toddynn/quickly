'use client';

import { Button, Checkbox, Input } from '@heroui/react';
import { LucideEye, LucideEyeClosed } from 'lucide-react';
import Link from 'next/link';
import { useTogglePasswordVisibility } from '@/hooks/use-toggle-password-visibility';
import { APP_ROUTES } from '@/shared/constants/app-routes';

export default function LoginForm() {
	const { getInputType, isPasswordVisible, togglePasswordVisibility } = useTogglePasswordVisibility();
	return (
		<form className="flex flex-col justify-center  size-full gap-8 ">
			<h1 className="text-4xl font-bold">Bem-vindo! 👋🏼</h1>
			<Input
				labelPlacement="outside"
				variant="bordered"
				size="lg"
				name="email"
				type="email"
				isRequired
				label="E-mail"
				placeholder="exemplo@gmail.com"
			/>
			<Input
				labelPlacement="outside"
				variant="bordered"
				size="lg"
				name="password"
				type={getInputType()}
				isRequired
				label="Senha"
				placeholder={isPasswordVisible ? 'Digite sua senha' : '************'}
				endContent={
					<Button isIconOnly size="sm" variant="light" onPress={togglePasswordVisibility}>
						{isPasswordVisible ? <LucideEyeClosed size={18} /> : <LucideEye size={18} />}
					</Button>
				}
			/>
			<div className="flex flex-wrap items-center justify-between w-full">
				<Checkbox color="success">Lembre de mim</Checkbox>
				<Link href={APP_ROUTES.PUBLIC.RECOVER_PASSWORD} className="underline">
					Esqueceu a senha?
				</Link>
			</div>
			<Button type="submit" className="w-full text-background bg-foreground font-medium" size="lg">
				Entrar
			</Button>
		</form>
	);
}
