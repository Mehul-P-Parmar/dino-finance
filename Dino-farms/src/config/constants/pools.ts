import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    ogeeId: 5,
    tokenName: 'DINO',
    tokenAddress: '',
    stakingTokenName: QuoteToken.DINO,
    stakingTokenAddress: '0x6ce33f750F38FdbEf6ccd5B92805ed023CbC2b83',
    contractAddress: {
      128: '0x28701BefFAAB86A8973c567391Ce3Af1AeB9e1C0',
      256: '',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '',
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
