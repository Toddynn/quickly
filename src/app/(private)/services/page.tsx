'use client';

import { Card, CardHeader } from '@heroui/react';
import Image from 'next/image';

export default function Services() {
	return (
		<div className="size-full flex gap-6 p-4">
			<Card>
				<CardHeader>
					<Image
						alt="image"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiaafSHQ3Z7C-jgJv0k9PyKzguLk9GiXsmQ&s"
						width={200}
						height={200}
					/>
				</CardHeader>
			</Card>
		</div>
	);
}
