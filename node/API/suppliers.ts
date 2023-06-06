
export async function provideSuppliersUsingMiniCart(ctx: Context) {
  const { response, state: { payload, affiliate } } = ctx

  const amount = (payload.operationValue * affiliate.commissionPercentage) / 100

  const body = {
    id: affiliate.refId,
    name: affiliate.name,
    amount: amount,
    document: affiliate.document,
    documentType: affiliate.documentType,
    role: 'influencer',
    commissionAmount: affiliate.commissionPercentage,
    chargebackLiable: false,
    chargeProcesssingFee: false,
  }

  response.status = 200
  response.body = body
}
