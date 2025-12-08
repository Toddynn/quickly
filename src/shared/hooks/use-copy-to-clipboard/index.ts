'use client';
import copy from 'copy-to-clipboard';
import { useState } from 'react';
import { toast } from 'sonner';

export const useCopyToClipboard = () => {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = async ({ content, message }: { content?: string; message: string }) => {
		try {
			if (!content) return;
			copy(String(content));
			setIsCopied(true);
			toast.info(message);
			setTimeout(() => setIsCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy text: ', err);
			toast.error('Erro ao copiar o texto');
		}
	};

	return { isCopied, handleCopy };
};
