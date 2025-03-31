'use client';

import { Button, Input } from '@heroui/react';
import Link from 'next/link';

export default function RecoverPasswordForm() {
	return (
		<form className="flex flex-col justify-center  size-full gap-8 ">
			<h1 className="text-4xl font-bold">Recuperar senha...</h1>
			<p className="text-lg font-normal text-pretty">
				Esqueceu sua senha? Não se preocupe! Digite seu e-mail para receber as instruções de recuperação.
			</p>
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
			<Button type="submit" className="w-full text-background bg-foreground font-medium" size="lg">
				Enviar
			</Button>
			<Link href="#" className="underline mx-auto">
				Não recebi o email
			</Link>
		</form>
	);
}
