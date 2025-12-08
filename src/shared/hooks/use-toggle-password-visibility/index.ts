'use client';

import { useState } from 'react';

export const useTogglePasswordVisibility = () => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible((prevState) => !prevState);
	};

	const getInputType = () => (isPasswordVisible ? 'text' : 'password');

	return { isPasswordVisible, togglePasswordVisibility, getInputType };
};
