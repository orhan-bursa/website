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
						className="hover:text-foreground underline"
					>
						Recruspace
					</Link>
					, I primarily work on frontend development using Next.js. In my free time, I build web &
					desktop applications or explore other areas of technology.
				</p>
				<p>
					Currently I am working on{' '}
					<Link
						href={'https://www.pozset.com'}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-foreground underline"
					>
						Pozset
					</Link>
					, a web app that helps you generate images for e-commerce, using Gemini.
				</p>
			</div>
		</PageSection>
	)
}
