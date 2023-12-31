'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const HandWritingAnimation = ({ text }: { text: string }) => {
	return (
		<div>
			<motion.h2
				className='text-secondary font-kalam md:text-6xl text-5xl'
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 2 }}
			>
				{text}
			</motion.h2>
		</div>
	);
};
