import { json } from 'co-body'

export async function getOrderById(ctx: Context, next: () => void) {

  const { req, clients: { oms } } = ctx

  const payload = await json(req)

  const order = await oms.order(payload.orderId)

  ctx.state.payload = payload
  ctx.state.order = order
  console.log("payload: ", payload)

  await next()
}
