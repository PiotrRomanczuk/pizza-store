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

	return (
		<div className='h-{100px} py-8 px-8 bg-red-600 flex items-center justify-between sticky top-0 z-50'>
			<div className=' flex items-center'>
				<div className='bg-white rounded-full p-2'>
					<Image
						src='/img/telephone.png'
						alt='telephone'
						width={32}
						height={32}
					/>
				</div>
				<div className='ml-6 text-white'>
					<div className='font-medium'>ORDER NOW!</div>
					<div className='text-2xl font-semibold'>612 313 817</div>
				</div>
			</div>
			<div>
				<ul className='flex items-center gap-8 text-xl text-white'>
					{navigationItems.slice(0, middleIndex).map((item, index) => (
						<li
							key={index}
							className='hover:text-black transition duration-200 cursor-pointer'
						>
							{item}
						</li>
					))}
					<Image
						src='/img/logo.png'
						alt='logo'
						width={160}
						height={69}
						className='cursor-pointer'
					/>
					{navigationItems.slice(middleIndex).map((item, index) => (
						<li
							key={middleIndex + index}
							className='hover:text-black transition duration-200 cursor-pointer'
						>
							{item}
						</li>
					))}
				</ul>
			</div>
			<div>
			{/* // TODO: Add the relativeness for that cart count */}
				<div className='relative'>
					<Image
						src='/img/cart.png'
						alt='cart'
						width={50}
						height={50}
						className='relative'
					/>
					<div className='absolute text-white top-0 right-0 pl-20 pb-6 h-10 w-10'>
						10
					</div>
				</div>
			</div>
		</div>
	);
};
