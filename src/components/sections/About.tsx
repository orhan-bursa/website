'use client'
import Link from 'next/link'
import PageSection from '../shared/PageSection'
import SectionTitle from '../shared/SectionTitle'

export default function About() {
	return (
		<PageSection>
			<SectionTitle title="about" />
			<div className="text-foreground-secondary space-y-4 text-start">
				<p>
					I am a fullstack developer based in Ankara, Turkey, experienced in modern web development.
					At{' '}
					<Link
						href={'https://recruspace.com'}
						target="_blank"
						rel="noopener noreferrer"
						className="underline"
					>
						Recruspace
					</Link>
					, I primarily work on frontend development using Next.js, where I excel. In my free time,
					I build desktop applications or explore other areas of technology.
				</p>
				<p>
					Currently I am working on Launch Box, a desktop app that helps you create an arrangement
					of desktops and favorite apps, then launch them at once when your computer boots.
				</p>
				<p>
					I am also looking for oppourtunities to learn more about blockchain development stack,
					specifically DeFi and DLT technologies.
				</p>
			</div>
		</PageSection>
	)
}
