const LINKS = [
	{
		label: 'linkedin',
		path: 'https://www.linkedin.com/in/orhanbursa/'
	},
	{
		label: 'Bluesky',
		path: 'https://bsky.app/profile/orhanbursadev.bsky.social'
	},
	{
		label: 'X/Twitter',
		path: 'https://x.com/orhanbursadev'
	},
	{
		label: 'youtube',
		path: 'https://www.youtube.com/@orhanbursadev'
	},

	{
		label: 'youtube',
		path: 'https://www.youtube.com/@orhanbursadev'
	}
]

export default function Home() {
	return (
		<div className="bg-background flex h-full min-h-screen w-full min-w-screen flex-col items-center justify-center gap-8 text-center">
			<div>
				<h1 className="text text-7xl">Orhan Bursa</h1>
				<h2 className="text-foreground-secondary text-2xl">
					Fullstack developer, app and tool builder.
				</h2>
			</div>
			<div className="flex items-center justify-center gap-2">
				{LINKS.map((link, i) => (
					<div
						key={i}
						className="border-background-secondary h-12 w-12 overflow-hidden rounded-2xl border"
					>
						<p>{link.label}</p>
						{/* <p>{link.path}</p> */}
					</div>
				))}
			</div>
		</div>
	)
}
