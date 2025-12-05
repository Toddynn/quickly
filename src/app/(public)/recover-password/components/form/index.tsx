'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Field, FieldContent, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

export default function RecoverPasswordForm() {
	const [step, setStep] = useState<'email' | 'otp'>('email');
	const [email, setEmail] = useState('');

	const handleEmailSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setStep('otp');
	};

	const handleOTPSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	if (step === 'otp') {
		return (
			<form className="flex flex-col justify-center size-full gap-8" onSubmit={handleOTPSubmit}>
				<h1 className="text-4xl font-bold">Verificação de código</h1>
				<p className="text-lg font-normal text-pretty">
					Enviamos um código de verificação para <strong>{email}</strong>. Digite o código abaixo.
				</p>
				<FieldGroup>
					<Field>
						<FieldLabel>Código de verificação</FieldLabel>
						<FieldContent>
							<InputOTP maxLength={6}>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
									<InputOTPSlot index={4} />
									<InputOTPSlot index={5} />
								</InputOTPGroup>
							</InputOTP>
						</FieldContent>
					</Field>
				</FieldGroup>
				<Button type="submit" className="w-full text-background bg-foreground font-medium" size="lg">
					Verificar
				</Button>
				<Link href="#" className="underline mx-auto text-sm">
					Reenviar código
				</Link>
			</form>
		);
	}

	return (
		<form className="flex flex-col justify-center size-full gap-8" onSubmit={handleEmailSubmit}>
			<h1 className="text-4xl font-bold">Recuperar senha...</h1>
			<p className="text-lg font-normal text-pretty">
				Esqueceu sua senha? Não se preocupe! Digite seu e-mail para receber as instruções de recuperação.
			</p>
			<FieldGroup>
				<Field>
					<FieldLabel htmlFor="email">
						E-mail <span className="text-destructive">*</span>
					</FieldLabel>
					<FieldContent>
						<Input
							id="email"
							name="email"
							type="email"
							required
							placeholder="exemplo@gmail.com"
							className="h-10"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</FieldContent>
				</Field>
			</FieldGroup>
			<Button type="submit" className="w-full text-background bg-foreground font-medium" size="lg">
				Enviar
			</Button>
			<Link href="#" className="underline mx-auto text-sm">
				Não recebi o email
			</Link>
		</form>
	);
}
