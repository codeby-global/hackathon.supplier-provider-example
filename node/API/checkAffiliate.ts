
export async function checkAffiliate(ctx: Context, next: () => void) {

  const { state: { order }, clients: { masterdata } } = ctx

  if (!order.customData) {
    ctx.body = []
    return ctx
  }

  const affiliateApp = order.customData.customApps.find((app: any) => app.id === "affiliates")

  if(!affiliateApp) {
    ctx.body = []
    return ctx
  }

  const affiliateId = affiliateApp.fields.affiliateId

  console.log("affiliateId: ", affiliateId)

  const affiliate = await masterdata.getDocument({
    dataEntity: 'vtexdayhackathon7_vtexday2023_hackathon_affiliates_affiliates',
    fields: ['_all'],
    id: affiliateId
  })

  ctx.state.affiliate = affiliate


  return await next()
}
