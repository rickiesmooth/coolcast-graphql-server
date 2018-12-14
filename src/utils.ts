import { verify } from 'jsonwebtoken'

export const APP_SECRET = 'appsecret321'

interface Token {
  userId: string
}

export function getUserId(ctx) {
  const Authorization = ctx.request.get('Authorization')

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET) as Token

    return verifiedToken && verifiedToken.userId
  }
}