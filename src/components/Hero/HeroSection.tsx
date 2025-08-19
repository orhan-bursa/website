import Link from 'next/link'

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

export default function HeroSection() {
	return (
		<section className="w-1/2 max-w-1/2 px-4 text-start">
			<h1 className="text mb-4 text-5xl">Orhan Bursa</h1>
			<h2 className="text-foreground/90 mb-2 text-xl">
				Fullstack developer, app developer and tool builder
			</h2>
			<div className="flex items-center gap-2">
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
		</section>
	)
}
