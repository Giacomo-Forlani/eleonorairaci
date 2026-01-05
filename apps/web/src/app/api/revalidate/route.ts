import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET
  const providedSecret =
    request.headers.get('x-revalidate-secret') ??
    request.nextUrl.searchParams.get('secret')

  if (!secret || providedSecret !== secret) {
    return NextResponse.json({ ok: false, message: 'Unauthorized' }, { status: 401 })
  }

  const payload = await request.json().catch(() => ({}))
  const tag = typeof payload?.tag === 'string' && payload.tag.length > 0 ? payload.tag : 'sanity'

  revalidateTag(tag)

  return NextResponse.json({ ok: true, revalidated: tag })
}
