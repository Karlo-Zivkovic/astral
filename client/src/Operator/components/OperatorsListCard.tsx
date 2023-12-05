import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Operator } from 'gql/graphql'

// common
import { MobileCard } from 'common/components'
import { bigNumberToNumber, numberWithCommas, shortString } from 'common/helpers'
import { INTERNAL_ROUTES } from 'common/routes'
import useDomains from 'common/hooks/useDomains'

type Props = {
  operator: Operator
  index: number
  isDesktop?: boolean
}

const OperatorsListCard: FC<Props> = ({ operator }) => {
  const { selectedChain } = useDomains()

  const chain = selectedChain.urls.page

  const body = [
    { name: 'Domain', value: operator.currentDomainId === 0 ? 'Subspace' : 'Nova' },
    { name: 'Signing Key', value: shortString(operator.signingKey) },
    {
      name: 'Minimum Stake',
      value: `${bigNumberToNumber(operator.minimumNominatorStake, 18)} tSSC`,
    },
    { name: 'Nominator Tax', value: `${operator.nominationTax}%` },
    { name: 'Total Stake', value: `${bigNumberToNumber(operator.currentTotalStake, 18)} tSSC` },
    { name: 'Total Shares', value: numberWithCommas(operator.totalShares) },
    { name: 'Status', value: operator.status ? operator.status : 'unknown' },
  ]
  return (
    <MobileCard
      id='operator-list-mobile'
      header={
        <Link
          key={`${operator.id}-operator-id-${operator.signingKey}`}
          data-testid={`operator-link-${operator.id}-${operator.signingKey}}`}
          className='hover:text-[#DE67E4]'
          to={INTERNAL_ROUTES.operators.id.page(chain, operator.id)}
        >
          <p className='font-medium text-[#241235] text-sm break-all dark:text-white'>
            {operator.id}
          </p>
        </Link>
      }
      body={body}
    />
  )
}

export default OperatorsListCard