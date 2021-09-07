import { MenuEntry } from '@dinofinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://ogee.exchange',
      },
      {
        label: 'Liquidity',
        href: 'https://ogee.exchange/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
//  {
//    label: 'Lottery',
//    icon: 'TicketIcon',
//    href: '/lottery',
//  },
//  {
//    label: 'Collectibles',
//    icon: 'NftIcon',
//    href: '/collectibles',
//  },
//  {
//    label: 'Teams & Profile',
//    icon: 'GroupsIcon',
//    calloutClass: 'rainbow',
//    items: [
//      {
//        label: 'Leaderboard',
//        href: '/teams',
//      },
//      {
//        label: 'Task Center',
//        href: '/profile/tasks',
//      },
//      {
//        label: 'Your Profile',
//        href: '/profile',
//      },
//    ],
//  },
]

export default config
