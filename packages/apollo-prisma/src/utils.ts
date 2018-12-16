import { verify } from 'jsonwebtoken'

export const APP_SECRET = 'appsecret321'

interface Token {
  userId: string
}

export function getUserId({ request }) {
  const Authorization = request.header.authorization || '';
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET) as Token

    return verifiedToken && verifiedToken.userId
  }
}