import { cn } from '@/lib/cn'

type Props = { children: React.ReactNode; className?: string }

export function SectionEyebrow({ children, className }: Props) {
  return (
    <p
      className={cn(
        'text-brand-soft font-mono text-xs tracking-[0.28em] uppercase',
        className,
      )}
    >
      {children}
    </p>
  )
}
