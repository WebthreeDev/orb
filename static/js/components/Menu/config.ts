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
        label: 'Dex Tools',
        href: 'https://www.dextools.io/app/en/ether/pair-explorer/0xb26378f2ac57d71608a589d650dd9d0a219d7256',
      },
    ],
  },
   {
     label: 'Pools',
     icon: 'PoolIcon',
     href: '/',
   },
   {
     label: 'Info',
     icon: 'InfoIcon',
     items: [
       {
         label: 'Chart',
         href: 'https://www.dextools.io/app/en/ether/pair-explorer/0xb26378f2ac57d71608a589d650dd9d0a219d7256',
       },
       {
         label: 'Dextools',
         href: 'https://www.dextools.io/app/en/ether/pair-explorer/0xb26378f2ac57d71608a589d650dd9d0a219d7256',
       },
     ],
   },
   {
     label: 'More',
     icon: 'MoreIcon',
     items: [
       {
         label: 'Github',
         href: 'https://github.com/Voltinuai/',
       },
       {
         label: 'Docs',
         href: '/',
       },
       {
          label: 'Blog',
         href: 'https://Voltinuai.medium.com/',
       },
     ],
   },

   {
     label: 'Audits',
     icon: 'AuditIcon',
     href:"/"
   }
]

export default config
