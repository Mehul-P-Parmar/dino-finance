import React from 'react'
import { Card, CardBody, Heading, Text } from '@dinofinance/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getOytAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { usePriceOytHusd } from '../../../state/hooks'
import CardHusdValue from './CardHusdValue'


const StyledOytStats = styled(Card)`
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`


const OytStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getOytAddress())
  const oytPrice = usePriceOytHusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const oytSupply = getBalanceNumber(circSupply)
  const marketCap = oytPrice.times(circSupply)
  const totalMcapHusd = new BigNumber(totalSupply).div(new BigNumber(10).pow(18)).multipliedBy(usePriceOytHusd()).toNumber()
  const totalBurnedHusd = new BigNumber(burnedBalance).div(new BigNumber(10).pow(18)).multipliedBy(usePriceOytHusd()).toNumber()
  const oytPerBlock = 0.1


  return (
    <StyledOytStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'DYT Stats')}
        </Heading>
        <Block>
          <Label>{TranslateString(10005, 'DYT Market Cap')}:</Label>
          <CardValue fontSize="24px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Block>
        <Block>
          <Label>{TranslateString(536, 'Total DYT Minted')}:</Label>
          {totalSupply && <CardValue fontSize="24px" value={getBalanceNumber(totalSupply)} decimals={0} />}
          {totalMcapHusd && <CardHusdValue value={totalMcapHusd} decimals={0}/>}
        </Block>
        <Block>
          <Label>{TranslateString(536, 'Total DYT Burned')}:</Label>
          <CardValue fontSize="24px" value={getBalanceNumber(burnedBalance)} decimals={0} />
          {totalBurnedHusd && <CardHusdValue value={totalBurnedHusd} decimals={0}/>}
        </Block>
        <Block>
          <Label>{TranslateString(10004, 'Circulating Supply')}:</Label>
          {oytSupply && <CardValue fontSize="24px" value={oytSupply} decimals={0} />}
        </Block>
        <Block>
          <Label>{TranslateString(540, 'New DYT/block')}:</Label>
          <Text bold fontSize="24px">
            {oytPerBlock}
          </Text>
        </Block>
      </CardBody>
    </StyledOytStats>
  )
}

export default OytStats
