import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 3,
    lpSymbol: 'DYT-HUSD LP',
    lpAddresses: {
      256: '',
      128: '0x0fD073fC293Ba044bfC065DAbF224E9a96273648',
    },
    tokenSymbol: 'DYT',
    tokenAddresses: {
      256: '',
      128: '0xc20cD76483117c92D2BBB4983ACAb77624eD9405',
    },
    quoteTokenSymbol: QuoteToken.HUSD,
    quoteTokenAdresses: contracts.husd,
  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'DINO-HT LP',
    lpAddresses: {
      256: '',
      128: '0x184042B5289d5B6feDfDD9FD2B9b1d50DC417893',
    },
    tokenSymbol: 'DINO',
    tokenAddresses: {
      256: '',
      128: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'DYT-HT LP',
    lpAddresses: {
      256: '',
      128: '0x69e422ecdbd528f0878783085d0c47c7a93076d8',
    },
    tokenSymbol: 'DYT',
    tokenAddresses: {
      256: '',
      128: '0xc20cD76483117c92D2BBB4983ACAb77624eD9405',
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'HT-USDT LP',
    lpAddresses: {
      256: '',
      128: '0xB047130ee15FC9daA457501fEa2A9a42f1C4d5c4',
    },
    tokenSymbol: 'HT',
    tokenAddresses: {
      256: '',
      128: '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'HUSD-HT LP',
    lpAddresses: {
      256: '',
      128: '0x420454CAe1b6a4eb1C734bb6914e7F5388acA534',
    },
    tokenSymbol: 'HUSD',
    tokenAddresses: {
      256: '',
      128: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
]

export default farms