import SectionTitle from '../shared/SectionTitle'
import PageSection from '../shared/PageSection'
import { TECH_SVG_ASSETS as SVGs } from '@/constants/techIcons'

const TECH_STACK_GROUPED = [
	{
		key: 'frontend',
		label: 'Frontend',
		items: [
			{
				key: 'javascript',
				label: 'Javascript'
			},
			{
				key: 'typescript',
				label: 'Typescript'
			},
			{
				key: 'next',
				label: 'Next'
			},
			{
				key: 'vite',
				label: 'Vite'
			},
			{
				key: 'react',
				label: 'React'
			},
			{
				key: 'tailwind',
				label: 'Tailwind'
			},
			{
				key: 'tanstack',
				label: 'Tanstack'
			},
			{
				key: 'shadcn',
				label: 'shadcn'
			},
			{
				key: 'mui',
				label: 'Mui'
			}
		]
	},
	{
		key: 'backend',
		label: 'Backend',
		items: [
			{
				key: 'node',
				label: 'Node'
			},
			{
				key: 'nestjs',
				label: 'Nestjs'
			},
			{
				key: 'express',
				label: 'Express'
			},
			{
				key: 'koa',
				label: 'KoaJs'
			},
			{
				key: 'python',
				label: 'Python'
			},
			{
				key: 'django',
				label: 'Django'
			},
			{
				key: 'csharp',
				label: 'C Sharp'
			},
			{
				key: 'dotnet',
				label: '.NET'
			},
			{
				key: 'mongodb',
				label: 'MongoDB'
			},
			{
				key: 'postgresql',
				label: 'PostgreSQL'
			},
			{
				key: 'sqlite',
				label: 'SQLite'
			},
			{
				key: 'supabase',
				label: 'Supabase'
			}
		]
	},
	{
		key: 'cloud',
		label: 'Cloud Services & Monitoring',
		items: [
			{
				key: 'vercel',
				label: 'Vercel'
			},
			{
				key: 'cloudflare',
				label: 'Cloudflare'
			},
			{
				key: 'aws',
				label: 'AWS'
			},
			{
				key: 'sentry',
				label: 'Sentry'
			},
			{
				key: 'posthog',
				label: 'Posthog'
			},
			{
				key: 'mixpanel',
				label: 'Mixpanel'
			}
		]
	},
	{
		key: 'other',
		label: 'Other Tools & Frameworks',
		items: [
			{
				key: 'electron',
				label: 'Electron'
			},
			{
				key: 'prismic',
				label: 'Prismic CMS'
			},

			{
				key: 'notion',
				label: 'Notion API'
			},
			{
				key: 'zed',
				label: 'Zed'
			},
			{
				key: 'vim',
				label: 'Vim'
			},
			{
				key: 'github',
				label: 'Github'
			},
			{
				key: 'gitlab',
				label: 'Gitlab'
			}
		]
	}
]

export default function TechStack() {
	return (
		<PageSection id="tech">
			<SectionTitle title="tech stack" className="mb-4" />

			<div>
				{TECH_STACK_GROUPED.map(({ label, items }, ind) => (
					<div key={ind} className="mb-4 space-y-2">
						<p className="text-foreground-secondary text-start">{label}</p>
						<ul className="flex flex-wrap gap-2 duration-300">
							{items.map((item, i) => (
								<li
									key={i}
									className="bg-background-secondary text-foreground-secondary flex w-max items-center gap-2 rounded px-1.5 py-1"
								>
									<span className="bg-background flex h-8 w-8 items-center justify-center rounded [&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-white">
										{SVGs[item.key as keyof typeof SVGs]}
									</span>
									<p>{item.label}</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</PageSection>
	)
}
