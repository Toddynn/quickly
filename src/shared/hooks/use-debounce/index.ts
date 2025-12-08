'use client';
import { useEffect, useState } from 'react';

/**
 * Hook to debounce a value.
 *
 * Returns the debounced value.
 *
 * @param {T} value - Value to debounce.
 * @param {number} delay - Delay in milliseconds.
 * @returns {T} - Debounced value.
 */
export default function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const timeOutId = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(timeOutId);
		};
	}, [value, delay]);

	return debouncedValue;
}
