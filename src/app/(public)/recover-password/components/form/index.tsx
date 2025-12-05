'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Field, FieldContent, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';
import { TypographyH2, TypographyP } from '@/components/ui/typography';

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
				<TypographyH2 className="border-none">Verificação de código</TypographyH2>
				<TypographyP className="text-lg not-first:mt-0 font-normal text-pretty">
					Enviamos um código de verificação para <strong>{email}</strong>.
				</TypographyP>
				<FieldGroup>
					<Field>
						<FieldLabel htmlFor="otp">Código de verificação</FieldLabel>
						<FieldContent>
							<InputOTP id="otp" name="otp" maxLength={6}>
								<InputOTPGroup id="otp-group">
									<InputOTPSlot id="otp-slot-0" index={0} />
									<InputOTPSlot id="otp-slot-1" index={1} />
									<InputOTPSlot id="otp-slot-2" index={2} />
									<InputOTPSeparator id="otp-separator" />
									<InputOTPSlot id="otp-slot-3" index={3} />
									<InputOTPSlot id="otp-slot-4" index={4} />
									<InputOTPSlot id="otp-slot-5" index={5} />
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
			<TypographyH2 className="border-none">Recuperar senha...</TypographyH2>
			<TypographyP className="text-lg not-first:mt-0 font-normal text-pretty">
				Esqueceu sua senha? Não se preocupe! Digite seu e-mail para receber as instruções de recuperação.
			</TypographyP>
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
			<Field orientation="horizontal" className="justify-center">
				<Link href="#" className="underline text-sm">
					Não recebi o email
				</Link>
			</Field>
		</form>
	);
}
