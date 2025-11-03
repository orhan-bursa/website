import About from '@/components/sections/About'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import TechStack from '@/components/sections/TechStack'

export const runtime = 'edge'

export default function Home() {
	return (
		<div className="bg-background flex h-full min-h-screen w-full min-w-screen flex-col items-center py-20 text-center">
			<div className="mx-auto max-w-3xl">
				<Hero />
				<About />
				<TechStack />
				<Projects />
			</div>
		</div>
	)
}
