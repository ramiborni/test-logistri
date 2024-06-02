interface Link {
  title: string
  url: string
  date?: string
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

const pressLinks: Link[] = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
    date: '2024-03-12',
    url: '/',
  },
  {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique convallis faucibus. ',
    date: '2024-03-12',
    url: '/',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    date: '2024-03-12',
    url: '/',
  },
  {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique convallis faucibus. ',
    date: '2024-03-12',
    url: '/',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur ',
    date: '2024-03-12',
    url: '/',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetue convallis faucibus. ',
    date: '2024-03-12',
    url: '/',
  },
  {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique convallis faucibus. ',
    date: '2024-03-12',
    url: '/',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adinvallis faucibus. ',
    date: '2024-03-12',
    url: '/',
  },
  {
    title: 'Lorem tique convallis faucibus. ',
    date: '2024-03-12',
    url: '/',
  },
  {
    title: 'Lorem ipsum dolor sit amet faucibus. ',
    date: '2024-03-12',
    url: '/',
  },
]

export { headerLinks, footerLinks, pressLinks, type FooterLink }
