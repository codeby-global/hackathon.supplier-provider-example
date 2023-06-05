
import { getSuppliersByMiniCart } from '../business/suppliers'

export async function provideSuppliersUsingMiniCart(ctx: Context) {
  const { response, state: { payload } } = ctx
  const suppliers = getSuppliersByMiniCart(payload)

  response.status = 200
  response.body = suppliers
}
