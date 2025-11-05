import type { Metadata } from 'next'
import { Geist, Oswald } from 'next/font/google'
import './globals.css'
import Footer from '@/components/sections/Footer'

const fontAlt = Oswald({
	variable: '--font-alt',
	subsets: ['latin']
})

const fontMain = Geist({
	variable: '--font-main',
	weight: ['400', '500', '600', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Orhan Bursa',
	description: 'fullstack developer, app builder'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${fontMain.variable} ${fontAlt.variable} antialiased`}>
				<main className="font-main px-4">
					{children}
					<Footer />
				</main>
			</body>
		</html>
	)
}
