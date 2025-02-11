'use client';

import Image from 'next/image';
import { useState } from 'react';

export const Slider = () => {
	const [shownImage, setShownImage] = useState(0);

	const images = ['/img/pizza.png', '/img/checked.png', '/img/bike.png'];

	const handleArrow = (direction: string) => {
		if (direction === 'l') {
			setShownImage(shownImage !== 0 ? shownImage - 1 : 2);
		}
		if (direction === 'r') {
			setShownImage(shownImage !== 2 ? shownImage + 1 : 0);
		}
	};

	return (
		<div className='h-[calc(100%-100px)] bg-[#d1411e] overflow-hidden relative'>
			<div
				className='absolute w-[10%] h-[20%] top-0 bottom-0 left-0 m-auto cursor-pointer z-10'
				onClick={() => handleArrow('l')}
			>
				<Image src='/img/arrowl.png' alt='' layout='fill' objectFit='contain' />
			</div>
			<div className='w-[300vw] h-screen flex transition-all ease-in-out duration-500 transform translate-x-[calc(-100*var(--index)vw)]'>
				{images.map((img, i) => (
					<div className='relative h-screen w-[100vw]' key={i}>
						<Image src={img} alt='' layout='fill' objectFit='contain' />
					</div>
				))}
			</div>
			<div
				className='absolute w-[10%] h-[20%] top-0 bottom-0 m-auto cursor-pointer z-10 right-0'
				onClick={() => handleArrow('r')}
			>
				<Image src='/img/arrowr.png' layout='fill' alt='' objectFit='contain' />
			</div>
		</div>
	);
};
