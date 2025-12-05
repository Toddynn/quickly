'use client';

import { LucideEye, LucideEyeClosed, LucideLock, LucideMail, LucidePhone, LucideUser } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Field, FieldContent, FieldGroup, FieldLabel, FieldSeparator } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { TypographyH2 } from '@/components/ui/typography';
import { useTogglePasswordVisibility } from '@/hooks/use-toggle-password-visibility';
import { APP_ROUTES } from '@/shared/constants/app-routes';
import { formatPhoneNumber } from '@/shared/functions/format-phone-number';

export default function RegisterForm() {
	const { getInputType, isPasswordVisible, togglePasswordVisibility } = useTogglePasswordVisibility();
	const [phone, setPhone] = useState('');

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formatted = formatPhoneNumber(e.target.value);
		setPhone(formatted);
	};

	return (
		<form className="flex flex-col justify-center size-full gap-8">
			<TypographyH2 className="border-none">Crie sua conta! 🚀</TypographyH2>
			<FieldGroup>
				<Field>
					<FieldLabel htmlFor="name">
						Nome <span className="text-heroui-danger">*</span>
					</FieldLabel>
					<FieldContent>
						<InputGroup className="h-10">
							<InputGroupAddon align="inline-start">
								<LucideUser size={18} />
							</InputGroupAddon>
							<InputGroupInput id="name" name="name" type="text" required placeholder="Seu nome completo" />
						</InputGroup>
					</FieldContent>
				</Field>
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
					<FieldLabel htmlFor="phone">Telefone</FieldLabel>
					<FieldContent>
						<InputGroup className="h-10">
							<InputGroupAddon align="inline-start">
								<LucidePhone size={18} />
							</InputGroupAddon>
							<InputGroupInput
								id="phone"
								name="phone"
								type="tel"
								placeholder="Digite seu telefone"
								value={phone}
								onChange={handlePhoneChange}
								maxLength={15}
							/>
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
