import { Link } from 'react-router-dom'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-pill text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:cursor-not-allowed disabled:opacity-60'

const sizes = {
  md: 'h-11 px-5',
  lg: 'h-12 px-6',
}

const variants = {
  // Amber CTA — DARK ink on amber (≈8:1 AA), never white-on-amber.
  primary:
    'bg-brand-gradient text-[#12161f] shadow-brand hover:-translate-y-0.5 hover:shadow-brand-hover',
  ghost:
    'border border-hairline bg-white/[0.04] text-ink hover:border-brand/40 hover:bg-white/[0.08]',
}

function Button({
  as = 'link',
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  withArrow = false,
  children,
  ...props
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const inner = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      {withArrow && (
        <span className="transition duration-300 group-hover:translate-x-0.5" aria-hidden="true">
          →
        </span>
      )}
    </>
  )

  if (as === 'link' && to) {
    return (
      <Link to={to} className={classes} {...props}>
        {inner}
      </Link>
    )
  }
  if (as === 'a') {
    return (
      <a href={href} className={classes} {...props}>
        {inner}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {inner}
    </button>
  )
}

export default Button
