import HeroSection from '@/components/Hero/HeroSection'
import InfoSection from '@/components/Info/InfoSection'

export default function Home() {
	return (
		<div className="bg-background flex h-full min-h-screen w-full min-w-screen flex-col items-center text-center">
			<div className="flex h-full w-full max-w-3xl grow items-center justify-center gap-8">
				<HeroSection />
				<InfoSection />
			</div>
		</div>
	)
}
