import Hero from './Hero'
import ProjectList from './ProjectList'
import projects from './projects'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Contact from './Contact'
import { Project } from '@/types/project'
import { Track, tracks } from './tracks'

function getSafeProjects(p: unknown): Project[] {
  if (Array.isArray(p)) return p
  // ESM/CJS 변환 문제로 객체에 default가 배열로 들어오는 경우
  if (
    p &&
    typeof p === 'object' &&
    Array.isArray((p as { default?: unknown }).default)
  ) {
    return (p as { default: Project[] }).default
  }
  return []
}

// 직무별 순서 목록에 있는 프로젝트만, 그 순서대로 보여준다. (예: 찍Go는 풀스택에서만)
function orderProjects(list: Project[], order: string[]): Project[] {
  return order
    .map((title) => list.find((p) => p.title === title))
    .filter((p): p is Project => Boolean(p))
}

const SITE_URL = 'https://portfolio-beta-seven-87.vercel.app'

// pdf: 주소에 ?mode=pdf가 붙으면 PDF 저장용 여백(origin/pdf 브랜치 값)을 쓴다.
// path: PDF 안의 "웹페이지에서 보기" 버튼이 같은 직무 페이지로 가도록 쓰는 경로
export default function PortfolioPage({
  track,
  pdf = false,
  path = '',
}: {
  track: Track
  pdf?: boolean
  path?: string
}) {
  const config = tracks[track]
  const ordered = orderProjects(getSafeProjects(projects), config.projectOrder)
  return (
    <>
      <Hero config={config} pdf={pdf} webUrl={`${SITE_URL}${path}`} />
      <AboutMe pdf={pdf} />
      <Skills config={config} pdf={pdf} />
      <ProjectList
        projects={ordered}
        intro={config.projectsIntro}
        pdf={pdf}
      />
      <Contact />
    </>
  )
}
