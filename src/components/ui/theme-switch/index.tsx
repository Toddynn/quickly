'use client';

import { Switch, SwitchProps } from '@heroui/react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher({ ...props }: SwitchProps) {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<Switch
			defaultSelected
			color="success"
			endContent={<MoonIcon />}
			size="sm"
			startContent={<SunIcon />}
			isSelected={theme === 'light'}
			onValueChange={() => setTheme((old) => (old === 'light' ? 'dark' : 'light'))}
			{...props}
		/>
	);
}
