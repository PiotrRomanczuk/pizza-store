'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function SwiperComponent() {
	// return (
	// 	<div className='h-screen w-full'>
	// 		<Swiper
	// 			className='h-screen'
	// 			modules={[Navigation, Pagination, Scrollbar]}
	// 			spaceBetween={50}
	// 			slidesPerView={3}
	// 			navigation
	// 			pagination={{ clickable: true }}
	// 			scrollbar={{ draggable: true }}
	// 			rewind
	// 		>
	// 			<SwiperSlide>
	// 				<Image
	// 					className=''
	// 					src={'/unSplash/CookedFood.jpg'}
	// 					alt='Illustration of a person carrying ideas for a professional website design'
	// 					layout='fill'
	// 				/>
	// 			</SwiperSlide>
	// 			<SwiperSlide>
	// 				<Image
	// 					className=''
	// 					src={'/unSplash/DoughMaking.jpg'}
	// 					alt='Illustration of a person carrying ideas for a professional website design'
	// 					layout='fill'
	// 				/>
	// 			</SwiperSlide>
	// 			<SwiperSlide>
	// 				<Image
	// 					className=''
	// 					src={'/unSplash/PizzaOnWooden.jpg'}
	// 					alt='Illustration of a person carrying ideas for a professional website design'
	// 					layout='fill'
	// 				/>
	// 			</SwiperSlide>
	// 			<SwiperSlide>
	// 				<Image
	// 					className=''
	// 					src={'/unSplash/PizzaOnWooden.jpg'}
	// 					alt='Illustration of a person carrying ideas for a professional website design'
	// 					layout='fill'
	// 				/>
	// 			</SwiperSlide>
	// 			<SwiperSlide>
	// 				<Image
	// 					className=''
	// 					src={'/unSplash/PizzaOnWooden.jpg'}
	// 					alt='Illustration of a person carrying ideas for a professional website design'
	// 					layout='fill'
	// 				/>
	// 			</SwiperSlide>
	// 			<SwiperSlide>
	// 				<Image
	// 					className=''
	// 					src={'/unSplash/PizzaOnWooden.jpg'}
	// 					alt='Illustration of a person carrying ideas for a professional website design'
	// 					layout='fill'
	// 				/>
	// 			</SwiperSlide>
	// 			<SwiperSlide>
	// 				<Image
	// 					className=''
	// 					src={'/unSplash/PizzaOnWooden.jpg'}
	// 					alt='Illustration of a person carrying ideas for a professional website design'
	// 					layout='fill'
	// 				/>
	// 			</SwiperSlide>
	// 		</Swiper>
	// 	</div>
	// );

	return (
		<Swiper
			// install Swiper modules
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			slidesPerView={3}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
		>
			<SwiperSlide className='h-screen bg-green'>Slide 1</SwiperSlide>
			<SwiperSlide className='h-screen bg-green'>Slide 2</SwiperSlide>
			<SwiperSlide className='h-screen bg-green'>Slide 3</SwiperSlide>
			<SwiperSlide className='h-screen bg-green'>Slide 4</SwiperSlide>
			...
		</Swiper>
	);
}
