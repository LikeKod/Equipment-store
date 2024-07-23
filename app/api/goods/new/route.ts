import clientPromise from '@/lib/mongodb/index'
import {
    getDbAndReqBody,
    getNewAndBestsellerGods
} from '@/lib/utils/api-routes'
import { NextResponse } from '@/node_modules/next/server'

export async function GET() {
  const { db } = await getDbAndReqBody(clientPromise, null)

  return NextResponse.json(await getNewAndBestsellerGods(db, 'isNew'))
}
