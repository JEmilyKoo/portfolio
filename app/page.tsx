import PortfolioPage from '../components/PortfolioPage'

// / → 프론트엔드 엔지니어(React 공고용, /v1과 같은 내용)
// ?mode=pdf 를 붙이면 PDF 저장용 여백을 쓴다.
type Props = { searchParams: Promise<{ mode?: string }> }

export default async function Page({ searchParams }: Props) {
  const { mode } = await searchParams
  return <PortfolioPage track="frontend" pdf={mode === 'pdf'} path="" />
}
