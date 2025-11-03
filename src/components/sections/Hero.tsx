import Link from 'next/link'
import PageSection from '../shared/PageSection'

const LINKS = [
	{
		label: 'linkedin',
		path: 'https://www.linkedin.com/in/orhanbursa/'
	},
	{
		label: 'bluesky',
		path: 'https://bsky.app/profile/orhanbursadev.bsky.social'
	},
	{
		label: 'x/twitter',
		path: 'https://x.com/orhanbursadev'
	},
	{
		label: 'youtube',
		path: 'https://www.youtube.com/@orhanbursadev'
	}
]

export default function Hero() {
	return (
		<PageSection id="dev" className="font-alt mx-auto w-max text-center">
			<h1 className="font-main mb-4 text-7xl font-bold tracking-tighter">Orhan Bursa</h1>
			<h2 className="text-foreground/90 mb-2 text-xl">Fullstack developer, app builder</h2>
			<div className="flex items-center justify-center gap-2">
				{LINKS.map((link, i) => (
					<Link
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
