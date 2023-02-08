import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '', // 'https://app.uniswap.org/#/swap?outputCurrency=0xeaeb339abc8dc78214c00b700a692c956b0e146b&use=V2', // 'https://exchange.goosedefi.com/',
      },
      {
        label: 'Liquidity',
        href: '', //  'https://app.uniswap.org/#/add/v2/0xeaeb339abc8dc78214c00b700a692c956b0e146b/ETH', // 'https://exchange.goosedefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Farming',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: 'Price Charts',
    icon: 'InfoIcon',
    initialOpenState: false,
    items: [
      {
        label: 'Dex Guru',
        href: 'https://dex.guru/token/0xeaeb339abc8dc78214c00b700a692c956b0e146b-eth',
      },

      {
        label: 'Dex Tools',
        href: 'https://www.dextools.io/app/uniswap/pair-explorer/0xfecc3b6fab9e07e1f2e6c712d17f86ff2b5ee5ac',
      },
    ],
  },
   {
     label: 'Pools',
     icon: 'PoolIcon',
     href: '/pools',
   },
   {
     label: 'Lottery',
     icon: 'TicketIcon',
     href: '/lottery',
   },
   {
     label: 'NFT',
     icon: 'NftIcon',
     href: '/nft',
   },
   {
     label: 'Info',
     icon: 'InfoIcon',
     items: [
       {
         label: 'Swap',
         href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
       },
       {
         label: 'AstroTools',
         href: 'https:app.astrotools.io/pancake-pair-explorer/',
       },
     ],
   },
   {
     label: 'More',
     icon: 'MoreIcon',
     items: [
       {
         label: 'Github',
         href: 'https://github.com/gravity-eth/',
       },
       {
         label: 'Docs',
         href: 'https://.gitbook.io/-finance/',
       },
       {
          label: 'Blog',
         href: 'https://VoltAI.medium.com/',
       },
     ],
   },
   {
     label: 'Partnerships/IFO',
     icon: 'InfoIcon',
     href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
   },
   {
     label: 'Audit by Hacken',
     icon: 'AuditIcon',
     href: '/',
   },
   {
     label: 'Audit by CertiK',
     icon: 'AuditIcon',
     href:'/',
   },

   {
     label: 'Audits',
     icon: 'AuditIcon',
     href:"https:github.com/GETh-Finance-Defi/GETh-Farms-build/blob/main/audits/eth.pdf"
   }
]

export default config
