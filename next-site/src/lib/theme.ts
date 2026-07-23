/**
 * Shared style tokens for the glass/gradient design language used across
 * marketing sections. Centralized so the same values aren't hand-typed as
 * string literals in a dozen components — visuals are unchanged, this is
 * purely a dedup of copy-pasted style strings.
 */

export const AMBER_GRADIENT = 'linear-gradient(120deg, #F89723 0%, #FFD18A 55%, #FFB958 100%)'

export const amberGradientTextStyle: React.CSSProperties = {
  backgroundImage: AMBER_GRADIENT,
}

type GlassCardOptions = {
  /** Base fill opacity behind the blur. Default 0.35. */
  opacity?: number
  /** Border gradient stops. Default a blue→transparent→amber sweep. */
  borderGradient?: string
  /** Blur radius in px. Default 18. */
  blur?: number
}

/**
 * The recurring "glass card" background: a flat navy fill in the padding-box
 * layered under a diagonal blue/amber gradient border, with a saturating
 * backdrop blur. Returns a style object spreadable onto any element.
 */
export function glassCardStyle({
  opacity = 0.35,
  borderGradient = 'linear-gradient(135deg, rgba(120,170,255,0.24) 0%, rgba(120,170,255,0.05) 100%)',
  blur = 18,
}: GlassCardOptions = {}): React.CSSProperties {
  return {
    background:
      `linear-gradient(rgba(9,16,35,${opacity}), rgba(9,16,35,${opacity})) padding-box, ` +
      `${borderGradient} border-box`,
    border: '1px solid transparent',
    backdropFilter: `blur(${blur}px) saturate(140%)`,
    WebkitBackdropFilter: `blur(${blur}px) saturate(140%)`,
  }
}
