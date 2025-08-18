import type { Metadata } from 'next'
import { DM_Sans, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

const dmSans = DM_Sans({
	variable: '--font-dm-sans',
	weight: ['400', '500', '600', '700'],
	style: ['normal', 'italic'],
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
			<body className={`${dmSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	)
}
