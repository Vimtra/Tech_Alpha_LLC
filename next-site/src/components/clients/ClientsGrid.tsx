'use client'

import Image from 'next/image'
import { clients } from '@/content/clients'

export function ClientsGrid() {
  const sliderItems = [...clients, ...clients]

  return (
    <div className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-canvas to-transparent" />
      <div className="animate-marquee flex w-max items-center gap-12">
        {sliderItems.map((client, index) => (
          <div key={`${client.name}-${index}`} className="relative h-28 w-72 shrink-0">
            <Image
              src={client.logo}
              alt={`${client.name} client logo`}
              fill
              sizes="288px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}