export function ContactMap() {
  return (
    <div
      className="relative overflow-hidden rounded-[28px]"
      style={{
        background:
          'linear-gradient(rgba(9,16,35,0.35), rgba(9,16,35,0.35)) padding-box, ' +
          'linear-gradient(135deg, rgba(120,170,255,0.24), rgba(120,170,255,0.05)) border-box',
        border: '1px solid transparent',
      }}
    >
      <iframe
        title="Tech Alpha LLC office — McKinney, Texas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.7024013657385!2d-96.63879!3d33.1732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3a70b7b7b7b7%3A0x0!2s1402%20S%20Custer%20Rd%20Suite%20604%2C%20McKinney%2C%20TX%2075072!5e0!3m2!1sen!2sus!4v1700000000000"
        className="h-[320px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{
          filter: 'invert(0.92) hue-rotate(180deg) saturate(0.7) contrast(0.92)',
        }}
      />
    </div>
  )
}
