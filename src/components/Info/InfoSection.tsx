'use client'
import cn from '@/utils/cn'
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
				return <div className="text-start"></div>
			case InfoTab.projects:
				return <div className="text-start"></div>
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
