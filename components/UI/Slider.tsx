import Image from 'next/image';

export const Slider = () => {
	const images = [
		'/img/featured.png',
		'/img/featured2.png',
		'/img/featured3.png',
	];

	return (
		<div>
			<Image src='/img/arrowl.png' alt='' layout='fill' />
			<div>
				<div>
					{images.map((image, idx) => {
						return <Image key={idx} src={image} alt='featured' layout='fill' />;
					})}
				</div>
			</div>

			<Image src='/img/arrowr.png' alt='' layout='fill' />
		</div>
	);
};
