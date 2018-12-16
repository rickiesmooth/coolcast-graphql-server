import { Prisma, User } from '../generated/prisma-client'
import * as Koa from "koa"

export interface Context {
    prisma: Prisma
    request: Koa.BaseRequest
}

export interface AuthPayload {
    token: string
    user: User
}