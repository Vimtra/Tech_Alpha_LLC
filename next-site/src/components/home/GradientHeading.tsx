import { cn } from '@/lib/cn'
import { AMBER_GRADIENT } from '@/lib/theme'

type HeadingLevel = 'h1' | 'h2' | 'h3'

type Props = {
  lead: string
  accent: string
  tail?: string
  as?: HeadingLevel
  className?: string
}

const sizes: Record<HeadingLevel, string> = {
  h1: 'text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05]',
  h2: 'text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.08]',
  h3: 'text-2xl sm:text-3xl leading-[1.15]',
}

export function GradientHeading({ lead, accent, tail, as = 'h2', className }: Props) {
  const Tag = as
  return (
    <Tag className={cn('text-ink font-bold tracking-tight', sizes[as], className)}>
      {lead}{' '}
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage: AMBER_GRADIENT,
        }}
      >
        {accent}
      </span>
      {tail}
    </Tag>
  )
}
