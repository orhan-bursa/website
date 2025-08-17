export default function Home() {
	return (
		<div className="bg-black">
			<p>Orhan Bursa</p>
			<p>Fullstack developer, app and tool builder.</p>
			{[
				{
					label: 'youtube',
					path: 'https://www.youtube.com/@orhanbursadev'
				},
				{
					label: 'Bluesky',
					path: 'https://bsky.app/profile/orhanbursadev.bsky.social'
				},
				{
					label: 'X/Twitter',
					path: 'https://x.com/orhanbursadev'
				}
			].map((link, i) => (
				<div key={i}>
					<p>{link.label}</p>
					<p>{link.path}</p>
				</div>
			))}
		</div>
	)
}
