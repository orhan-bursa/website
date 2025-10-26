'use client'
import PageSection from '../shared/PageSection'
import SectionTitle from '../shared/SectionTitle'

export default function About() {
	return (
		<PageSection>
			<SectionTitle title="about" />
			<div className="text-foreground-secondary space-y-4 text-start">
				<p>
					I am a fullstack developer and based in Ankara, Turkey, experienced in web development. In
					my free time, I develop desktop apps or explore other projects.
				</p>
				<p>
					Currently I am working on Link Shelf, a desktop app that helps you manage your frequently
					used links.
				</p>
			</div>
		</PageSection>
	)
}
