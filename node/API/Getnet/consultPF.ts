export async function consultPF(
  ctx: Context,
  __next: () => Promise<any>
) {
  const get = await ctx.clients.getnet.consultPF(
    '54644529',
    39021110890,
  )

  ctx.status = 200
  ctx.body = get

  return ctx
}

export default consultPF
