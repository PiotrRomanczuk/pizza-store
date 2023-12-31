'use client';

import { useState } from 'react';
import Image from 'next/image';

export const Navbar = () => {
	const navigationItems = [
		'Homepage',
		'Products',
		'Menu',
		'Events',
		'Blog',
		'Contact',
	];
	const middleIndex = Math.ceil(navigationItems.length / 2);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className='lg:h-20 py-4 px-4 lg:px-8 bg-red-600 flex flex-col lg:flex-row items-center justify-between sticky top-0 z-50'>
			<div className='flex items-center mb-4 lg:mb-0'>
				<div className='lg:hidden'>
					<button
						onClick={toggleMobileMenu}
						className='text-white focus:outline-none'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							className='h-6 w-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16m-7 6h7'
							/>
						</svg>
					</button>
				</div>
				<div className='hidden lg:block bg-white rounded-full p-2'>
					<Image
						src='/img/telephone.png'
						alt='telephone'
						width={32}
						height={32}
					/>
				</div>
				<div className='ml-4 lg:ml-6 text-white'>
					<div className='font-medium'>ORDER NOW!</div>
					<div className='text-lg lg:text-2xl font-semibold'>612 313 817</div>
				</div>
			</div>
			<div
				className={`${
					isMobileMenuOpen ? 'flex' : 'hidden'
				} lg:flex flex-col lg:flex-row items-center lg:gap-8 text-lg lg:text-xl text-white mb-4 lg:mb-0`}
			>
				{navigationItems.map((item, index) => (
					<li
						key={index}
						className='mb-2 lg:mb-0 hover:text-black transition duration-200 cursor-pointer'
					>
						{item}
					</li>
				))}
			</div>
			<div className='relative'>
				<Image
					src='/img/cart.png'
					alt='cart'
					width={50}
					height={50}
					className='cursor-pointer'
				/>
				<div className='absolute text-white top-0 right-0 pl-12 pt-2 h-6 w-6 lg:h-10 lg:w-10'>
					10
				</div>
			</div>
		</div>
	);
};
