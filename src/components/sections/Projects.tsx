import Link from 'next/link'
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
		public: true,
		repo_url: 'https://github.com/orhan-bursa/hilalvisits-web'
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
		stack: ['Electronjs', 'React', 'Vite', 'Typescript', 'Tailwind', 'Tanstack/query'],
		url: ''
	},
	{
		title: 'Launch Box',
		description: 'Desktop App for Launching frequently used applications',
		stack: [
			'Electronjs',
			'React',
			'Vite',
			'Typescript',
			'Tailwind',
			'Tanstack/query',
			'Tanstack/router'
		],
		url: ''
	}
]
export default function Projects() {
	return (
		<PageSection id="projects" className="text-start">
			<SectionTitle title="projects" />
			<div className="flex flex-col gap-4">
				{PROJECTS.map((project, ind) => (
					<div key={ind} className="space-y-1">
						{project.url ? (
							<Link href={project.url} target="_blank">
								<p className="text-xl font-semibold hover:underline">{project.title}</p>
							</Link>
						) : (
							<p className="text-xl font-semibold select-none">{project.title}</p>
						)}
						<p className="text-foreground-secondary text-sm">{project.description}</p>
						<div className="flex flex-wrap gap-1">
							{project.stack.map((s, i) => (
								<span key={i} className="bg-background-secondary rounded px-1 py-0.5">
									{s}
								</span>
							))}
						</div>
						<p className="text-foreground-secondary text-sm font-normal">
							repo:{' '}
							{project.public ? (
								<Link
									href={project.repo_url}
									className="hover:text-foreground hover:underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									public
								</Link>
							) : (
								'private'
							)}
						</p>
					</div>
				))}
			</div>
		</PageSection>
	)
}
