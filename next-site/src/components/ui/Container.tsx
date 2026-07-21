import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Props<T extends ElementType> = HTMLAttributes<HTMLElement> & {
  as?: T
  size?: 'default' | 'wide' | 'narrow'
  children: ReactNode
}

const sizes = {
  narrow: 'max-w-3xl',
  default: 'max-w-7xl',
  wide: 'max-w-[1500px]',
} as const

export function Container<T extends ElementType = 'div'>({
  as,
  size = 'default',
  className,
  children,
  ...rest
}: Props<T>) {
  const Tag = (as ?? 'div') as ElementType
  return (
    <Tag className={cn('mx-auto w-full px-6 lg:px-10', sizes[size], className)} {...rest}>
      {children}
    </Tag>
  )
}
