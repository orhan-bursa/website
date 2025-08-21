'use client'
import cn from '@/utils/cn'
import Image from 'next/image'
import { useState } from 'react'
enum InfoTab {
	about = 'about',
	tech = 'tech',
	projects = 'projects'
}
const tabLabels: Record<InfoTab, string> = {
	about: 'about',
	tech: 'tech stack',
	projects: 'projects'
}

const TECH_STACK_ASSETS = [
	{
		label: 'Github',
		path: '/github.svg'
	},
	{
		label: 'Gitlab',
		path: '/gitlab.svg'
	},
	{
		label: 'Next',
		path: '/next.svg'
	},
	{
		label: 'Node',
		path: '/node.svg'
	},
	{
		label: 'Notion API',
		path: '/notion.svg'
	},
	{
		label: 'Python',
		path: '/python.svg'
	},
	{
		label: 'Vscode',
		path: '/vscode.jpeg'
	},
	{
		label: 'Vim',
		path: '/vim.svg'
	},
	{
		label: 'Neovim',
		path: '/neovim.svg'
	},
	{
		label: 'React',
		path: '/react.svg'
	},
	{
		label: 'Vite',
		path: '/vite.svg'
	},
	{
		label: 'Tanstack',
		path: '/tanstack.png'
	},
	{
		label: 'PostgreSQl',
		path: '/postgresql.svg'
	},
	{
		label: 'shadcn',
		path: '/shadcn.png'
	},
	{
		label: 'SQLite',
		path: '/sqlite.svg'
	},
	{
		label: 'Typescript',
		path: '/typescript.svg'
	},
	{
		label: 'Mui',
		path: '/mui.png'
	},
	{
		label: 'KoaJs',
		path: '/koa.png'
	},
	{
		label: 'C#',
		path: '/csharp.png'
	},
	{
		label: '.NET',
		path: '/dotnet.svg'
	},
	{
		label: 'MongoDB',
		path: '/mongo.svg'
	},
	{
		label: 'Tailwind',
		path: '/tailwind.svg'
	}
]

const PROJECTS = [
	{
		title: 'Hilal Visits',
		description: 'Travel Blog',
		stack: ['Notion API', 'Nextjs', 'Vercel']
	},
	{
		title: 'KLC Works',
		description: 'Architecture Studio Website',
		stack: ['Nextjs', 'Vercel']
	},
	{
		title: 'Link Shelf',
		description: 'Desktop App for Link Management',
		stack: ['Electronjs', 'React', 'Vite', 'Typescript', 'Tailwind', 'Tanstack/query']
	}
]
export default function InfoSection() {
	const [tab, setTab] = useState<InfoTab>(InfoTab.about)

	const handleClickTab = (newTab: InfoTab) => {
		setTab(newTab)
	}
	const renderTab = () => {
		switch (tab) {
			case InfoTab.about:
				return (
					<div className="space-y-4 text-start">
						<p>
							I am a fullstack developer and based in Ankara, Turkey, experienced in web
							development. In my free time, I develop desktop apps or explore other projects.
						</p>
						<p>
							Currently I am working on Link Shelf, a desktop app that helps you manage your
							frequently used links.
						</p>
					</div>
				)
			case InfoTab.tech:
				return (
					<div className="text-start">
						<div className="flex flex-wrap gap-2 duration-300">
							{TECH_STACK_ASSETS.map((item, ind) => (
								<div
									key={ind}
									className="border-foreground-secondary hover:border-foreground h-12 w-12 rounded-xl border bg-white/80 p-1 duration-300"
								>
									<Image
										className="h-full w-full object-contain"
										src={item.path}
										alt={item.label}
										width={32}
										height={32}
									/>
								</div>
							))}
						</div>
					</div>
				)
			case InfoTab.projects:
				return (
					<div className="text-start">
						<div className="flex flex-col gap-2">
							{PROJECTS.map((project, ind) => (
								<div key={ind}>
									<p>{project.title}</p>
									<p>{project.description}</p>
									<p>{project.stack.join(',')}</p>
								</div>
							))}
						</div>
					</div>
				)
			default:
				return null
		}
	}
	return (
		<section className="h-[200px] w-1/2 max-w-1/2">
			<ul className="text-foreground-secondary mb-2 flex gap-3">
				{Object.values(InfoTab).map(t => (
					<li
						onClick={() => handleClickTab(t)}
						key={t}
						className={cn(
							'cursor-pointer select-none',
							'border-b border-transparent duration-500',
							tab === t && 'text-foreground border-foreground/50'
						)}
					>
						{tabLabels[t]}
					</li>
				))}
			</ul>
			<div>{renderTab()}</div>
		</section>
	)
}
