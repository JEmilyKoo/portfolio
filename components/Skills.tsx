'use client'
import { motion } from 'framer-motion'
const skills = [
  {
    name: 'React',
    level: 95,
    desc: [
      '컴포넌트 설계: 재사용성과 유지보수 고려',
      'Redux Toolkit + TypeScript: 타입 안전성 보장',
      '미들웨어: 비동기 처리 구현',
      '커스텀 훅: 관심사 분리',
    ],
  },
  {
    name: 'TypeScript',
    level: 90,
    desc: [
      '제네릭: ApiResponse<T> 타입 시스템',
      'Redux: 상태/액션 타입 정의',
      '유틸리티 타입: Omit, Pick 등',
      '컴포넌트 props 타입 관리',
    ],
  },
  {
    name: 'Next.js',
    level: 85,
    desc: [
      'SSR/SSG: 성능 최적화, SEO',
      '동적 라우팅: 인증 처리',
      'Image/Link: 웹 성능 최적화',
      'PWA: 앱과 유사한 UX',
    ],
  },
  {
    name: 'Vue.js',
    level: 80,
    desc: [
      '사용자 정의 컴포넌트',
      'Nuxt: SSR 환경 구축',
      '이벤트: 버블링/캡쳐링 제어',
      'Vuetify: CSS 스타일링',
    ],
  },
  {
    name: 'React Native',
    level: 80,
    desc: [
      '크로스 플랫폼: iOS/Android/Web',
      'Expo/NativeWind: UI 구현',
      'Redux + TypeScript: 상태 관리',
      'FCM: 알림, 위치 추적',
    ],
  },
  {
    name: 'JavaScript',
    level: 90,
    desc: [
      '비동기: Promise, async/await',
      'Axios: 인터셉터, 요청 처리',
      'FCM: 실시간 알림',
      '메모리: 클린업 함수',
    ],
  },
  {
    name: 'Java',
    level: 80,
    desc: [
      'Spring: Restful API',
      '알고리즘: 문제 해결',
      'Stream API: 데이터 처리',
      'Android: 코드 이해',
    ],
  },
  {
    name: 'C#',
    level: 60,
    desc: [
      'WPF: 웹앱 개발',
      'MVC: 백엔드 연동',
      'Webview2: OS 에러 처리',
      '그룹웨어: 실무 경험',
    ],
  },
]

const softSkills = [
  {
    category: '커뮤니케이션',
    details: [
      '명확한 기술 문서 작성',
      '팀 내 지식 공유 및 멘토링',
      '기술적 의사결정 과정의 투명한 공유',
    ],
  },
  {
    category: '코드 리뷰',
    details: [
      'Git PR 기반 코드 리뷰 주도',
      'ESLint/Prettier를 통한 코드 품질 관리',
      '모듈화된 컴포넌트 구조 유지',
    ],
  },
  {
    category: '문제 해결',
    details: [
      '성능 최적화 (로딩 속도 99.47% 개선)',
      '크로스 브라우저/플랫폼 호환성 해결',
      '실시간 데이터 동기화 이슈 해결',
    ],
  },
  {
    category: '애자일/Scrum',
    details: [
      '2주 단위 스프린트 계획 및 실행',
      '일일 스크럼 미팅 주도',
      '스프린트 회고를 통한 지속적 개선',
    ],
  },
  {
    category: '글로벌 협업',
    details: [
      '일본어 JLPT N1 보유',
      '비즈니스 영어 구사 가능',
      '6개국어 지원 프로젝트 경험',
      '외국인 팀원과 협업 경험',
    ],
  },
  {
    category: 'DevOps',
    details: [
      'CI/CD 파이프라인 구축 (Jenkins, Github Actions)',
      'Docker 컨테이너화 및 배포 자동화',
      '빌드 시간 94.7% 단축 경험',
    ],
  },
  {
    category: 'UI/UX 설계',
    details: [
      '디자인 시스템 구축 및 관리',
      '반응형 웹 디자인 구현',
      '사용자 피드백 기반 UX 개선',
    ],
  },
  {
    category: '테스트/QA',
    details: [
      'Lighthouse 100점 달성 경험',
      '크로스 브라우저 테스트',
      '사용자 시나리오 기반 QA',
    ],
  },
]

export default function Skills() {
  return (
    <section className="py-2 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-accent mb-4">
            기술과 역량
          </h2>
          <p className="text-lg text-subText ">
            FE 개발자로 작업하면서 얻은 기술과 역량입니다.
          </p>
        </motion.div>
        <div className="space-y-12 text-center">
          <div>
            <h3 className="text-xl font-semibold text-text mb-4">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
              {skills.map((s) => (
                <div
                  key={s.name}
                  className="bg-surface border border-border rounded-2xl shadow-custom p-4 flex flex-col items-start transition hover:scale-[1.03] hover:shadow-lg">
                  <div className="flex items-center w-full mb-1">
                    <span className="font-bold text-primary text-lg mr-2">
                      {s.name}
                    </span>
                    <span className="ml-auto text-xs text-subText font-mono">
                      {s.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-border rounded mb-3 relative overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded transition-all duration-500"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                  <ol className="pl-3 text-subText text-base list-decimal list-inside space-y-1 text-left">
                    {s.desc.map((item, index) => (
                      <li
                        key={index}
                        className="pl-1">
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-text my-4 text-center pt-8">
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill) => (
                <div
                  key={skill.category}
                  className="bg-background rounded-xl p-4 border border-bording transition hover:scale-[1.02] hover:shadow-lg">
                  <h4 className="font-semibold text-primary pt-1 mb-3">
                    {skill.category}
                  </h4>
                  <ul className="space-y-2">
                    {skill.details.map((detail, index) => (
                      <li
                        key={index}
                        className="pl-3 text-sm text-subText  text-left">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
