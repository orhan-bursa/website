import cn from '@/utils/cn'

type PageSectionProps = {
	id?: string
	children: React.ReactNode
	className?: string
}

export default function PageSection({ id, children, className }: PageSectionProps) {
	return (
		<section className={cn('my-8', className)} id={id}>
			{children}
		</section>
	)
}
