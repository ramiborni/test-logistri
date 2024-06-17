interface Link {
  title: string
  url?: string
  text?: string
  date?: string
  image?: string
  imageSrc?: string
  iconSrc?: string
}

interface FooterLink {
  title: string
  url: string
  sublinks: Link[]
}

const headerLinks: Link[] = [
  { title: 'Om Logistri', url: '/om-oss' },
  { title: 'Vårt Erbjudande', url: '/vart-erbjudande' },
  { title: 'Fastighetsportfölj', url: '/saljproccess' },
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

const hotspotsLinks: Link[] = [
  {
    title: 'Försäljningsprocess med Logistri',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tincidunt risus. Proin nulla dui. Lorem ipsum dolor sit amet, consectetur.',
    image: 'hotspot-1',
    url: '/',
  },
  {
    title: 'Långsiktigt ägarskap',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tincidunt risus. Proin nulla dui. Lorem ipsum dolor sit amet, consectetur.',
    image: 'hotspot-2',
    url: '/',
  },
  {
    title: 'Logistri som partner',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tincidunt risus. Proin nulla dui. Lorem ipsum dolor sit amet, consectetur.',
    image: 'hotspot-3',
    url: '/',
  },
  {
    title: 'Verksamhetsanpassade lokaler',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tincidunt risus. Proin nulla dui. Lorem ipsum dolor sit amet, consectetur.',
    image: 'hotspot-4',
    url: '/',
  },
]

const projectLinks: Link[] = [
  {
    title: 'Projekt Micromatic',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.',
    image: 'hotspot-1',
    url: '/',
  },
  {
    title: 'Projekt Micromatic',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur.',
    image: 'hotspot-2',
    url: '/',
  },
]

const steps: Link[] = [
  {
    title: 'Steg 1. Ett första möte',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue velit, molestie eu enim ac, malesuada congue quam. Aenean molestie felis vitae nisl iaculis, sed tincidunt mi semper. Morbi facilisis pellentesque nisl quis mollis. Donec interdum quis erat sed malesuada. Nunc ligula massa, porttitor scelerisque elit vitae, pulvinar rhoncus odio. Praesent ac sapien non augue.',
    iconSrc: '/icons/coffee.svg',
  },
  {
    title: 'Steg 2. Principöverenskommelse',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue velit, molestie eu enim ac, malesuada congue quam. Aenean molestie felis vitae nisl iaculis, sed tincidunt mi semper. Morbi facilisis pellentesque nisl quis mollis. Donec interdum quis erat sed malesuada. Nunc ligula massa, porttitor scelerisque elit',
    iconSrc: '/icons/handshake.svg',
  },
  {
    title: 'Steg 3. Grundlig genomgång',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue velit, molestie eu enim ac, malesuada congue quam. Aenean molestie felis vitae nisl iaculis, sed tincidunt mi semper. Morbi facilisis pellentesque nisl quis mollis. Donec interdum quis erat sed malesuada. Nunc ligula massa, porttitor scelerisque elit vitae, pulvinar rhoncus odio. Praesent ac sapien non augue. consectetur adipiscing elit. Donec augue velit.',
    iconSrc: '/icons/document.svg',
  },
  {
    title: 'Steg 4. Dokumentation och avtal',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue velit, molestie eu enim ac, malesuada congue quam. Aenean molestie felis vitae nisl iaculis, sed tincidunt mi semper. Morbi facilisis pellentesque nisl quis mollis. Donec interdum quis erat sed malesuada. Nunc ligula massa, porttitor scelerisque elit vitae, pulvinar rhoncus odio. Praesent ac sapien non augue. ',
    iconSrc: '/icons/contract.svg',
  },
]

const aboutUsTexts: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus semper tellus et accumsan. Praesent nisl nibh, sodales at eros luctus, tempus consectetur justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer ipsum orci, gravida.',

  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus semper tellus et accumsan. Praesent nisl nibh, sodales at eros luctus, tempus consectetur justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer ipsum orci, gravida.',

  '',

  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus semper tellus et accumsan. Praesent nisl nibh, sodales at eros luctus, tempus consectetur justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer ipsum orci, gravida.',
]

export {
  headerLinks,
  footerLinks,
  pressLinks,
  hotspotsLinks,
  projectLinks,
  steps,
  aboutUsTexts,
  type FooterLink,
  type Link,
}
