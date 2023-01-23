import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd, useBTCBusdPrice } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import styled, { useTheme } from 'styled-components'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

export interface FarmsProps {
  tokenMode?: boolean
}

const Head = styled.div`
  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    width: 100%;
    justify-content: space-around;
    background: ${({ theme }) => theme.colors.card};
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 8px;
  }
  background: ${({ theme }) => theme.colors.card};
  flex-direction: column;
  border-radius: 8px;
  height: 15rem;
`
const Head1 = styled.div`
  ${({ theme }) => theme.mediaQueries.sm} {
    color: ${({ theme }) => theme.colors.textSubtle};
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 0;
  }
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1.5rem;
  text-align: center;
`

const Head2 = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: center;
`

const Img = styled.div`
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
  display: none;
`

const Img1 = styled.div`
   {
    ${({ theme }) => theme.mediaQueries.sm} {
      display: block;
    }
    display: none;
  }
`

const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()

  const btcPrice = useBTCBusdPrice()

  const bnbPrice = usePriceBnbBusd()

  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { tokenMode } = farmsProps

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)

  const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier === '0X')

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      // const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
        //   return farm
        // }
        const cakeRewardPerBlock = new BigNumber(farm.eggPerBlock || 1)
          .times(new BigNumber(farm.poolWeight))
          .div(new BigNumber(10).pow(18))
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = cakePrice.times(cakeRewardPerYear)

        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0)

        if (farm.quoteTokenSymbol === QuoteToken.BNB) {
          totalValue = totalValue.times(bnbPrice)
        }

        if (farm.quoteTokenSymbol === QuoteToken.BTC) {
          totalValue = totalValue.times(btcPrice)
        }

        if (totalValue.comparedTo(0) > 0) {
          apy = apy.div(totalValue)
        }

        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          cakePrice={cakePrice}
          btcPrice={btcPrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [bnbPrice, account, cakePrice, btcPrice, ethereum],
  )

  return (
    <Page>
      <Head>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Img>
            <img src="/images/GETh.png" alt="logo" style={{ width: '5rem' }} />
          </Img>
          <div style={{ paddingLeft: '1rem' }}>
            <Head1>
              {tokenMode
                ? TranslateString(10002, 'Stake tokens to earn GETH')
                : TranslateString(320, 'Stake LP tokens to earn GETH')}
            </Head1>
            <Head2>{/* {TranslateString(10000, 'Deposit Fee will be used to buyback GETH')} */}</Head2>
          </div>
        </div>
        <div style={{ paddingTop: '2rem' }}>
          <FarmTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly} />
        </div>
      </Head>
      <div>
        {/* <Divider /> */}
        <FlexLayout style={{ marginTop: '3rem' }}>
          <Route exact path={`${path}`}>
            {stakedOnly ? farmsList(stakedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
      </div>
      {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src="/images/left.png" alt="illustration" style={{ width: '25rem' }} />
        <Img1>
          <img src="/images/right.png" alt="illustration" style={{ width: '20rem' }} />
        </Img1>
      </div> */}
    </Page>
  )
}

export default Farms
