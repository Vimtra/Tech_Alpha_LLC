import { ImageResponse } from 'next/og'
import { siteConfig } from '@/constants/siteConfig'

export const runtime = 'edge'
export const alt = siteConfig.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'radial-gradient(ellipse 70% 60% at 20% 0%, rgba(248,151,35,0.25), transparent 60%),' +
            'radial-gradient(ellipse 60% 60% at 90% 100%, rgba(0,194,255,0.22), transparent 60%),' +
            '#050816',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: 'linear-gradient(120deg, #C56B16, #F89723, #FFB958)',
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 900 }}>
            Engineering the future with{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(120deg, #F89723, #FFD18A, #FFB958)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Cloud & AI
            </span>{' '}
            Enterprise Solutions.
          </div>
          <div style={{ fontSize: 26, color: '#94A3B8', maxWidth: 900 }}>
            AWS-certified engineers. 24/7 proactive support. McKinney, TX.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 20,
            color: '#94A3B8',
            textTransform: 'uppercase',
            letterSpacing: 4,
          }}
        >
          <div>{new URL(siteConfig.url).host}</div>
          <div>DevOps · Cloud · AI · Enterprise</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
