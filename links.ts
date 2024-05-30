interface Link {
  title: string
  url: string
}

interface FooterLink {
  title: string
  url: string
  sublinks: Link[]
}

const headerLinks: Link[] = [
  { title: 'Om Logistri', url: '/' },
  { title: 'Vårt Erbjudande', url: '/' },
  { title: 'Fastighetsportfölj', url: '/' },
  { title: 'Investerare', url: '/' },
]

const footerLinks: FooterLink[] = [
  {
    title: 'Sidor',
    url: '/',
    sublinks: [
      {
        title: 'Vår verksamhet',
        url: '/',
      },
      {
        title: 'Fastigheter',
        url: '/',
      },
      {
        title: 'Nyheter',
        url: '/',
      },
      {
        title: 'Kontakta oss',
        url: '/',
      },
      {
        title: 'Integritetspolicy',
        url: '/',
      },
    ],
  },
  {
    title: 'Investerare',
    url: '/',
    sublinks: [
      {
        title: 'Finansiell kalender',
        url: '/',
      },
      {
        title: 'Pressmeddelanden',
        url: '/',
      },
      {
        title: 'Finansiella rapporter',
        url: '/',
      },
      {
        title: 'Aktien',
        url: '/',
      },
      {
        title: 'Bolagsordning',
        url: '/',
      },
    ],
  },
]

export { headerLinks, footerLinks, type FooterLink }
