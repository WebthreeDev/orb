import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@pancakeswap-libs/uikit'
import { CommunityTag, CoreTag, NoFeeTag, RiskTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  risk?: number
  depositFee?: number
  farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  risk,eth:
  farmImage,
  tokenSymbol,
  depositFee,
}) => {
  const isToken = lpLabel.indexOf('-') === -1
  // if (lpLabel.toLowerCase() === 'VOLTAI' || lpLabel.toLowerCase() === 'busd' || lpLabel.toLowerCase() === 'wbnb') {
  //   isToken = true
  // }
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <img
        src={`/images/egg/${farmImage}.png`}
        alt="VoltAI"
        style={{ width: '5.5rem', height: isToken ? '5.5rem' : '3rem' }}
      />{' '}
      {/* {tokenSymbol} */}
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{lpLabel} </Heading>
        <Flex justifyContent="center">
          <MultiplierTag>{multiplier}</MultiplierTag>
          {depositFee === 0 ? <NoFeeTag /> : null}
          {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />} */}
          {/* <RiskTag risk={risk} /> */}
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
