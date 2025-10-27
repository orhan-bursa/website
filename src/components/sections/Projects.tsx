import PageSection from '../shared/PageSection'
import SectionTitle from '../shared/SectionTitle'

const PROJECTS = [
	{
		title: 'Hasret Ozan Sevim Website',
		description: 'Researcher Portfolio & Blog',
		stack: ['Nextjs', 'Notion API', 'Typescript', 'Tailwind', 'Tanstack/query'],
		url: 'https://hasretozansevim.info/'
	},
	{
		title: 'Hilal Visits',
		description: 'Travel Blog',
		stack: ['Nextjs', 'Notion API', 'Typescript', 'Tailwind'],
		url: 'https://hilalvisits.com/',
		public: true
	},
	{
		title: 'KLC Works',
		description: 'Architecture Studio Website',
		stack: ['Nextjs', 'Typescript', 'Tailwind'],
		url: 'https://klcworks.io/'
	},
	{
		title: 'Link Shelf',
		description: 'Desktop App for Link Management',
		stack: ['Electronjs', 'React', 'Vite', 'Typescript', 'Tailwind', 'Tanstack/query']
	}
]
export default function Projects() {
	return (
		<PageSection id="projects" className="text-start">
			<SectionTitle title="projects" />
			<div className="flex flex-col gap-4">
				{PROJECTS.map((project, ind) => (
					<div key={ind} className="space-y-1">
						<p className="text-xl font-semibold">{project.title}</p>
						<p className="text-foreground-secondary text-sm">{project.description}</p>
						<div className="flex flex-wrap gap-1">
							{project.stack.map((s, i) => (
								<span key={i} className="bg-background-secondary rounded px-1 py-0.5">
									{s}
								</span>
							))}
						</div>
						<p className="text-foreground-secondary text-sm font-normal">
							{project.public ? 'public' : 'private'}
						</p>
					</div>
				))}
			</div>
		</PageSection>
	)
}
