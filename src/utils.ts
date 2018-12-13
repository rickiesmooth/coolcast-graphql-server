import { verify } from 'jsonwebtoken'

export const APP_SECRET = 'appsecret321'

interface Token {
  userId: string
}

export function getUserId(ctx) {
  const Authorization = ctx.request.get('Authorization')
  console.log("ctx>>>>>>>>>", Authorization);

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET) as Token
    console.log(verifiedToken);

    return verifiedToken && verifiedToken.userId
  }
}