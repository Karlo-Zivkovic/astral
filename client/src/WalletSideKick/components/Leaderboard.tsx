import { useQuery } from '@apollo/client'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { FC, useMemo } from 'react'
import { Link } from 'react-router-dom'

// common
import { Accordion, List, StyledListItem } from 'common/components'
import { numberPositionSuffix } from 'common/helpers'
import useDomains from 'common/hooks/useDomains'
import { INTERNAL_ROUTES } from 'common/routes'

// query
import { QUERY_TOP_LEADERBOARD } from '../querys'

interface LeaderboardProps {
  subspaceAccount: string
}

export const useLeaderboard = (subspaceAccount: string) => {
  const topLeaderboardVariables = useMemo(
    () => ({
      first: 100,
    }),
    [],
  )

  const {
    data: topLeaderboardData,
    error: topLeaderboardError,
    loading: topLeaderboardLoading,
  } = useQuery(QUERY_TOP_LEADERBOARD, {
    variables: topLeaderboardVariables,
    pollInterval: 6000,
  })

  const topFarmers = useMemo(() => {
    if (!topLeaderboardData || !topLeaderboardData.farmers) return 0
    const account = topLeaderboardData.farmers.edges.find(
      (edge) => edge.node.id === subspaceAccount,
    )
    if (!account) return 0
    return account.cursor
  }, [topLeaderboardData, subspaceAccount])

  const topOperators = useMemo(() => {
    if (!topLeaderboardData || !topLeaderboardData.operators) return 0
    const account = topLeaderboardData.operators.edges.find(
      (edge) => edge.node.id === subspaceAccount,
    )
    if (!account) return 0
    return account.cursor
  }, [topLeaderboardData, subspaceAccount])

  const topNominators = useMemo(() => {
    if (!topLeaderboardData || !topLeaderboardData.nominators) return 0
    const account = topLeaderboardData.nominators.edges.find(
      (edge) => edge.node.id === subspaceAccount,
    )
    if (!account) return 0
    return account.cursor
  }, [topLeaderboardData, subspaceAccount])

  const hasTopPositions = useMemo(
    () => topFarmers > 0 || topOperators > 0 || topNominators > 0,
    [topFarmers, topOperators, topNominators],
  )

  return {
    topFarmers,
    topOperators,
    topNominators,
    hasTopPositions,
    error: topLeaderboardError,
    loading: topLeaderboardLoading,
  }
}

export const Leaderboard: FC<LeaderboardProps> = ({ subspaceAccount }) => {
  const { selectedChain } = useDomains()
  const {
    topFarmers,
    topOperators,
    topNominators,
    hasTopPositions,
    error: topLeaderboardError,
    loading: topLeaderboardLoading,
  } = useLeaderboard(subspaceAccount)

  return (
    <div className='p-5 m-2 mt-0 bg-[#DDEFF1] rounded-[20px] dark:bg-[#1E254E] dark:text-white'>
      <Accordion
        title={
          <div className='flex items-center m-2 mb-0 pt-4'>
            <span className='text-[#241235] text-base font-medium dark:text-white'>
              Leaderboard
            </span>
          </div>
        }
      >
        {topLeaderboardLoading && <ExclamationTriangleIcon className='h-5 w-5' stroke='orange' />}
        {topLeaderboardError && (
          <div className='flex items-center m-2 pt-4'>
            <span className='text-[#241235] text-base font-medium dark:text-white'>
              We are unable to load your wallet data
            </span>
          </div>
        )}
        {hasTopPositions ? (
          <List>
            {topFarmers > 0 && (
              <li key='topFarmers'>
                <Link
                  data-testid='topFarmers-link'
                  className='hover:text-[#DE67E4]'
                  to={`../${selectedChain.urls.page}/leaderboard/${INTERNAL_ROUTES.leaderboard.farmers}`}
                >
                  <StyledListItem title='Top Farmer'>
                    {numberPositionSuffix(topFarmers)} place
                  </StyledListItem>
                </Link>
              </li>
            )}
            {topOperators > 0 && (
              <li key='topOperators'>
                <Link
                  data-testid='topOperators-link'
                  className='hover:text-[#DE67E4]'
                  to={`../${selectedChain.urls.page}/leaderboard/${INTERNAL_ROUTES.leaderboard.operators}`}
                >
                  <StyledListItem title='Top Operator'>
                    {numberPositionSuffix(topOperators)} place
                  </StyledListItem>
                </Link>
              </li>
            )}
            {topNominators > 0 && (
              <li key='topNominators'>
                <Link
                  data-testid='topNominators-link'
                  className='hover:text-[#DE67E4]'
                  to={`../${selectedChain.urls.page}/leaderboard/${INTERNAL_ROUTES.leaderboard.nominators}`}
                >
                  <StyledListItem title='Top Nominator'>
                    {numberPositionSuffix(topNominators)} place
                  </StyledListItem>
                </Link>
              </li>
            )}
          </List>
        ) : (
          <div className='flex items-center m-2 pt-4'>
            <Link
              data-testid='totalNominatedCount-link'
              className='hover:text-[#DE67E4]'
              to={`../${selectedChain.urls.page}/leaderboard/${INTERNAL_ROUTES.leaderboard.farmers}`}
            >
              <span className='text-[#241235] text-sm font-medium dark:text-white'>
                Your wallet is not in any of the top 100 leaderboard positions!
              </span>
            </Link>
          </div>
        )}
      </Accordion>
    </div>
  )
}
