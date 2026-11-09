import type { Metadata } from 'next'
import PortfolioPage from '../../components/PortfolioPage'
import { tracks } from '../../components/tracks'

// /v3 → 웹 개발자용
// ?mode=pdf 를 붙이면 PDF 저장용 여백을 쓴다.
export const metadata: Metadata = {
  title: tracks.web.metaTitle,
  description: tracks.web.metaDescription,
}

type Props = { searchParams: Promise<{ mode?: string }> }

export default async function Page({ searchParams }: Props) {
  const { mode } = await searchParams
  return <PortfolioPage track="web" pdf={mode === 'pdf'} path="/v3" />
}
