import cn from '@/utils/cn'
import * as React from 'react'

interface Props {
	title: string
	className?: string
	textClassName?: string
}

export default function SectionTitle({ title, className, textClassName }: Props) {
	return (
		<div className={cn('mt-6 mb-3 text-lg', className)}>
			<p
				className={cn(
					'font-alt w-max cursor-pointer select-none',
					'border-b border-transparent duration-500',
					'text-foreground border-foreground/50',
					textClassName
				)}
			>
				{title}
			</p>
		</div>
	)
}
