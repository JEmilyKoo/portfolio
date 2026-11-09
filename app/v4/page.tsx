import type { Metadata } from 'next'
import PortfolioPage from '../../components/PortfolioPage'
import { tracks } from '../../components/tracks'

// /v4 → 프론트엔드 엔지니어(Vue 공고용)
// ?mode=pdf 를 붙이면 PDF 저장용 여백을 쓴다.
export const metadata: Metadata = {
  title: tracks.vue.metaTitle,
  description: tracks.vue.metaDescription,
}

type Props = { searchParams: Promise<{ mode?: string }> }

export default async function Page({ searchParams }: Props) {
  const { mode } = await searchParams
  return <PortfolioPage track="vue" pdf={mode === 'pdf'} path="/v4" />
}
