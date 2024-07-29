import clientPromise from '@/lib/mongodb/index'
import { getDbAndReqBody } from '@/lib/utils/api-routes'
import { ObjectId } from '@/node_modules/mongodb/mongodb'
import { NextResponse } from '@/node_modules/next/server'

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req)
    const isValidId = ObjectId.isValid(reqBody.productId)

    if (!isValidId) {
      return NextResponse.json({
        message: 'Wrong product id',
        status: 404,
      })
    }

    const productItem = await db
      .collection(reqBody.category)
      .findOne({ _id: new ObjectId(reqBody.productId) })

    return NextResponse.json({ status: 200, productItem })
  } catch (error) {
    throw new Error((error as Error).message)
  }
}