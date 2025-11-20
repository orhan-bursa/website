'use client'

import Link from 'next/link'

const LINKS = [
	// {
	// 	label: 'email',
	// 	path: 'mailto:bursaorhann@gmail.com/'
	// },
	{
		label: 'github',
		path: 'https://github.com/orhan-bursa/'
	},
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

export default function Footer() {
	return (
		<footer className="border-foreground/20 mx-auto max-w-3xl border-t pt-8 pb-8 text-sm">
			<div className="mb-6 flex flex-col gap-2 md:flex-row md:justify-between">
				<div>
					<p className="text-foreground/60 mb-2">
						for collaborations, feel free to <br />
						<Link
							href="mailto:bursaorhann@gmail.com"
							className="text-foreground-secondary hover:text-foreground underline-offset-2 hover:underline"
						>
							contact me
						</Link>
					</p>

					<p className="text-foreground/60">or reach out to me from</p>
					<ul className="flex gap-2">
						{LINKS.map(link => (
							<Link
								key={link.label}
								target="_blank"
								rel="noopener noreferrer"
								href={link.path}
								className="text-foreground-secondary hover:text-foreground underline-offset-2 hover:underline"
							>
								<p>{link.label}</p>
							</Link>
						))}
					</ul>
				</div>

				<button
					className="hover:text-foreground hover:bg-foreground/20 hover:border-foreground/40 text-foreground/60 h-max w-max cursor-pointer rounded border border-transparent p-0.5 duration-300"
					onClick={() => {
						window.scrollTo({
							top: 0,
							left: 0,
							behavior: 'smooth'
						})
					}}
				>
					&#8593; back to top
				</button>
			</div>
			<p className="text-foreground/40 mb-1">© {new Date().getFullYear()} Orhan Bursa</p>
			<p className="text-foreground/40 text-xs">
				This website does not collect personal data, store information, or use cookies.
			</p>
		</footer>
	)
}
