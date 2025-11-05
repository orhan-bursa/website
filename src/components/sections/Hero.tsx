import Link from 'next/link'
import PageSection from '../shared/PageSection'

const LINKS = [
	{
		label: 'github',
		path: 'https://github.com/orhan-bursa/'
	},
	{
		label: 'linkedin',
		path: 'https://www.linkedin.com/in/orhanbursa/'
	},
	{
		label: 'contact',
		path: 'mailto:bursaorhann@gmail.com/'
	}
]

export default function Hero() {
	return (
		<PageSection id="dev" className="font-alt mx-auto w-max text-center">
			<h1 className="font-main mb-4 text-6xl font-bold tracking-tighter sm:text-7xl">
				Orhan Bursa
			</h1>
			<h2 className="text-foreground/90 mb-2 text-xl">Fullstack developer, app builder</h2>
			<div className="flex items-center justify-center gap-2">
				{LINKS.map(link => (
					<Link
						target="_blank"
						key={link.label}
						href={link.path}
						className="text-foreground-secondary hover:text-foreground underline-offset-2 hover:underline"
					>
						<p>{link.label}</p>
					</Link>
				))}
			</div>
		</PageSection>
	)
}
