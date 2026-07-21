export const routes = {
  home: '/',
  about: '/about',
  services: '/services',
  industries: '/industries',
  clients: '/clients',
  careers: '/careers',
  contact: '/contact',
} as const

export type RoutePath = (typeof routes)[keyof typeof routes]

export const navigationLinks = [
  { to: routes.home, label: 'Home' },
  { to: routes.about, label: 'About' },
  { to: routes.services, label: 'Services' },
  { to: routes.industries, label: 'Industries' },
  { to: routes.clients, label: 'Clients' },
  { to: routes.careers, label: 'Careers' },
  { to: routes.contact, label: 'Contact' },
] as const

export const contactCta = { to: routes.contact, label: 'Schedule Consultation' } as const
