import type { Metadata } from 'next'
import { DM_Sans, Geist, Geist_Mono, Oswald } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Oswald({
	variable: '--font-alt',
	subsets: ['latin']
})

const dmSans = Geist({
	variable: '--font-main',
	weight: ['400', '500', '600', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Orhan Bursa',
	description: 'Developer bio website'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${dmSans.variable} ${geistMono.variable} antialiased`}>
				<main className="font-main">{children}</main>
			</body>
		</html>
	)
}
