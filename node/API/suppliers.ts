
export async function provideSuppliersUsingMiniCart(ctx: Context) {
  const { response, state: { payload, affiliate } } = ctx

  const body = {
    id: affiliate.id,
    name: affiliate.name,
    amount: payload.operationValue ?? 100,
    document: affiliate.document,
    documentType: affiliate.documentType,
    role: 'influencer',
    commissionAmount: 100,
    chargebackLiable: false,
    chargeProcesssingFee: false,
  }

  response.status = 200
  response.body = body
}
