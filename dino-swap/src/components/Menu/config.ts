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
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://18.139.3.0:8080/#/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://18.139.3.0:8080/#/pools',
  },
  
]

export default config
