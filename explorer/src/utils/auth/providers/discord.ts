import * as jsonwebtoken from 'jsonwebtoken'
import type { TokenSet } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import type { DiscordProfile } from 'next-auth/providers/discord'
import DiscordProvider from 'next-auth/providers/discord'
import { cookies } from 'next/headers'
import {
  giveDiscordFarmerRole,
  verifyDiscordFarmerRole,
  verifyDiscordGuildMember,
} from '../vcs/discord'

const { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } = process.env

export const Discord = () => {
  return DiscordProvider({
    // client credentials
    clientId: DISCORD_CLIENT_ID || '',
    clientSecret: DISCORD_CLIENT_SECRET || '',

    // open id connect scopes
    authorization: { params: { scope: 'identify guilds guilds.join guilds.members.read' } },

    // fetch discord profile
    profile: async (profile: DiscordProfile, token: TokenSet) => {
      try {
        if (!token.access_token) throw new Error('No access token')

        if (!process.env.NEXTAUTH_SECRET) throw new Error('No secret')
        const { NEXTAUTH_SECRET } = process.env

        const { get } = cookies()
        const sessionToken =
          get('__Secure-next-auth.session-token')?.value || get('next-auth.session-token')?.value
        if (!sessionToken) throw new Error('No session token')

        const session = jsonwebtoken.verify(sessionToken, NEXTAUTH_SECRET, {
          algorithms: ['HS256'],
        }) as JWT
        const did = 'did:openid:discord:' + profile.id

        const member = await verifyDiscordGuildMember(token.access_token)
        let farmer = await verifyDiscordFarmerRole(token.access_token)

        if (session.subspace?.vcs.farmer && !farmer) {
          await giveDiscordFarmerRole(profile.id)
          farmer = await verifyDiscordFarmerRole(token.access_token)
        }

        return {
          id: session.id || did,
          DIDs: [...session.DIDs, did],
          subspace: session.subspace,
          discord: {
            id: profile.id,
            username: profile.username,
            vcs: {
              member,
              roles: {
                farmer,
                // To-Do: Implement more role VCs
                operator: false,
                nominator: false,
              },
            },
          },
        }
      } catch (error) {
        console.error('Error fetching Discord profile:', error)
        throw new Error('Failed to fetch Discord profile')
      }
    },
  })
}