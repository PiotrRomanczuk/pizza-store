import type { Metadata } from 'next';

import { Inter, Kalam } from 'next/font/google';

import './globals.css';

import { Navbar } from '@/components/UI/Navbar';
import { Footer } from '@/components/UI/Footer';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});
const kalam = Kalam({
	subsets: ['latin'],
	weight: ['300', '400', '700'],
	display: 'auto',
	variable: '--font-kalam',
});

export const metadata: Metadata = {
	title: 'Pizza application',
	description: 'Website that allows to you order the best pizza to your home!',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} ${kalam.className}`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
