// 지원 직무별 포트폴리오 분기 설정
// /, /v1 → frontend(React 공고용) · /v2 → fullstack · /v3 → web · /v4 → vue(Vue 공고용)
// 프로젝트 데이터(projects.ts)는 공통이고, 직무별로 소개 문구·기술·역량·프로젝트 순서만 다르다.
//
// 첫 화면 구성 원칙 (2026-11-10, /jobstack-portfolio 갭 분석)
// - 1줄 primaryPills: 그 직무의 주력 기술 3~4개만. 다른 직무용 기술·보조 도구(Playwright 등)는 넣지 않는다.
// - 2줄 competencies: 그 직무 공고가 요구하는 역량 3개 + 면접에서 1분 안에 설명 가능한 근거.
// - 빠진 기술은 기술 카드와 프로젝트 태그에는 그대로 남는다.
// AI 문구 원칙 (2026-11-17, Issue #105)
// - v1·v3·v4: 프론트엔드가 첫 화면의 중심. AI는 핵심역량 한 항목에 "만든 것과 결과"로만 쓰고 agents-on-cloud는 첫 화면에 넣지 않는다.
// - v2: 에이전트 개발 환경·agents-on-cloud를 첫 화면에 쓴다. "AI 코딩 도구" 같은 도구 이름만 있는 표현은 쓰지 않는다.

export type Track = 'frontend' | 'vue' | 'fullstack' | 'web'

export interface SkillItem {
  name: string
  desc: string[]
}

export interface SoftSkill {
  category: string
  details: string[]
}

export interface Competency {
  title: string
  evidence: string
}

export interface TrackConfig {
  label: string
  aboutSubtitle: string // 소개(AboutMe) 이름 아래 부제
  metaTitle: string
  metaDescription: string
  tagline: string
  intro: { before: string; highlight: string; after: string }
  pdfUrl: string // "PDF로 다운로드" 버튼이 여는 버전별 PDF (저장소 루트의 20261110_구정은_vN.pdf)
  primaryPills: string[]
  competencies: Competency[]
  skills: SkillItem[]
  softSkills: SoftSkill[]
  projectsIntro: string
  projectOrder: string[]
}

const commonSoftSkills: SoftSkill[] = [
  {
    category: '협업',
    details: [
      '비개발자 요구사항 정리 및 QA 우선순위 대응',
      '한·영 용어집·네이밍 규칙으로 리뷰 혼선 축소',
    ],
  },
  {
    category: '문제 해결',
    details: [
      '복합 버그의 원인 분리 및 측정 수치 기반 검증',
      '네트워크 지연·비동기 충돌 등 예외 상황 방어',
    ],
  },
  {
    category: '어학',
    details: [
      '일본어 JLPT N1',
      '영어 비즈니스 회화 및 다국어(6개 국어) 리소스 통합',
    ],
  },
]

const reactSkill: SkillItem = {
  name: 'React / Next.js',
  desc: [
    '컴포넌트 아키텍처 설계 및 초기 로딩 속도 개선(7초 → 0.37초)',
    'WebView·TreeView 상태 동기화 및 반응형 화면 구현',
  ],
}

const vueSkill: SkillItem = {
  name: 'Vue.js / Nuxt',
  desc: [
    '대량 피드 가상 스크롤 및 뒤로가기 위치 복원(오차 0px) 구현',
    '통합 검색, 마이페이지, 반응형·다국어 UI 및 상태 유지 설계',
  ],
}

const aiSkill: SkillItem = {
  name: 'AI / 에이전트 / LLM API',
  desc: [
    '에이전트 역할 분리, 작업 범위 통제 장치 설계 및 직접 검증 기반 개발 자동화',
    '클라우드·CI 이벤트 기반 원격 실행 파이프라인 구성',
    'LLM API(OpenAI·Anthropic) 연동 AI 채팅·글 생성 화면 개발'
  ],
}

const tsSkill: SkillItem = {
  name: 'TypeScript',
  desc: [
    '공통 API 요청·응답 타입 정의 및 API 계층 분리',
    '타입 모델링과 예외 처리 표준화로 결합도 축소 및 코드 안정성 확보',
  ],
}

const testSkill: SkillItem = {
  name: '웹 성능 / 검증',
  desc: [
    '가상 스크롤·리소스·캐싱 최적화 및 프레임·로딩 속도 개선',
    '상태 로직 테스트, 브라우저 동작 검증, 비동기 예외·레이아웃 안정화',
  ],
}

const cicdSkill: SkillItem = {
  name: 'CI/CD',
  desc: [
    'Jenkins 빌드 실패 시 배포 차단 및 캐시 분리 파이프라인 구성',
    'GitHub Actions·환경별 빌드 스크립트 기반 배포 및 문서 자동화',
  ],
}

const REACT_TRACK: TrackConfig = {
  label: '프론트엔드 개발자(React)',
  aboutSubtitle: '프론트엔드 개발자',
  metaTitle: '구정은 Emily Koo | 프론트엔드 포트폴리오',
  metaDescription:
    'React·Vue로 웹 서비스를 만들어 온 프론트엔드 개발자 구정은(Emily Koo)의 포트폴리오. 실무 약 2년 8개월, 보배드림 리뉴얼 참여.',
  tagline:
    '프론트엔드 개발자(React·Vue·AI 활용) | MAU 1,400만 피드 60fps 수준 렌더링',
  intro: {
    before:
      'React·Vue·TypeScript 기반, 실무 경력 약 2년 8개월. MAU 1,400만 보배드림과 사용자 30만 명 그룹웨어 메신저에서 ',
    highlight: '대용량 피드 성능 최적화',
    after: ' 경험과 6개 국어 i18n 적용, 백엔드·디자이너 협업 경험이 있습니다.',
  },
  pdfUrl:
    'https://github.com/JEmilyKoo/portfolio/blob/9381904c0f536982a5760b1f251d7192fbee5205/20261110_%EA%B5%AC%EC%A0%95%EC%9D%80_v1.pdf',
  primaryPills: ['React', 'Next.js', 'TypeScript', 'LLM API', 'AI Agent'],
  competencies: [
    {
      title: '렌더링 성능',
      evidence:
        '커뮤니티 피드에 가상 스크롤을 적용해 1,000건을 불러와도 카드 3~5개만 렌더링, 뒤로가기 위치 오차 0px',
    },
    {
      title: 'React 컴포넌트·상태 설계',
      evidence:
        '- React·Next.js로 디자인 시스템과 공통 컴포넌트를 구축\n- Redux Toolkit으로 상태 설계, 메인 페이지 로딩 7초 → 0.37초',
    },
    {
      title: 'AI API 연동·멀티 에이전트 자동화',
      evidence: `- LLM 채팅·글 생성 UI 개발 및 토큰 경량화로 음성 대화 타임아웃 해결
- 모델·도구 권한을 분리한 서브에이전트 6종으로 작성·검증을 분업화한 개발 파이프라인 구축
- Issue·PR 검증 게이트 기반 HITL 워크플로 및 EC2 24시간 원격 자동화 환경 운영`,
    },
  ],
  skills: [reactSkill, aiSkill, tsSkill, testSkill, vueSkill, cicdSkill],
  softSkills: commonSoftSkills,
  projectsIntro:
    'React 팀 프로젝트와 프론트엔드 실무에서 직접 개발한 화면과 문제 해결 과정입니다.',
  projectOrder: [
    '보배드림 전면 리뉴얼',
    'Chain G',
    'Vibe Editor',
    '다와따',
    'bizmekaTalk 3.0',
    'Pratama',
    'KumTalk',
    '트매',
    'agents-on-cloud',
  ],
}

export const tracks: Record<Track, TrackConfig> = {
  frontend: REACT_TRACK,

  vue: {
    label: '프론트엔드 개발자(Vue)',
    aboutSubtitle: '프론트엔드 개발자',
    metaTitle: '구정은 Emily Koo | 프론트엔드(Vue) 포트폴리오',
    metaDescription:
      'Vue·Nuxt로 웹 서비스를 만들어 온 프론트엔드 개발자 구정은(Emily Koo)의 포트폴리오. 실무 약 2년 8개월, 보배드림 전면 리뉴얼 참여.',
    tagline:
      '프론트엔드 개발자 · Vue·Nuxt | MAU 1,400만 피드 60fps 수준 렌더링',
    intro: {
      before:
        '실무 경력 약 2년 8개월. MAU 1,400만 보배드림과 사용자 30만 명 그룹웨어 메신저에서 Vue·Nuxt로 ',
      highlight: '대용량 피드 성능 최적화와 상태 복원',
      after:
        ' 경험과 6개 국어 i18n 적용, 백엔드·디자이너 협업 경험이 있습니다.',
    },
    pdfUrl:
      'https://github.com/JEmilyKoo/portfolio/blob/9381904c0f536982a5760b1f251d7192fbee5205/20261110_%EA%B5%AC%EC%A0%95%EC%9D%80_v4.pdf',
    primaryPills: ['Vue.js', 'Nuxt', 'TypeScript', 'LLM API', 'AI Agent'],
    competencies: [
      {
        title: 'UI 상태 복원',
        evidence:
          '- 피드 뒤로가기 위치 복원(오차 0px)\n- 메신저 창을 접고 펼 때 대화방·스크롤·입력 상태 복원을 구현',
      },
      {
        title: '복잡한 상호작용 디버깅',
        evidence:
          '데스크톱 브라우저에서 메뉴 드래그 정렬이 끊기는 문제를 원인 3가지(정렬 로직·브라우저 기본 드래그·포인터 이벤트 추적)로 나눠 수정',
      },
      {
        title: 'AI API 연동·멀티 에이전트 자동화',
        evidence: `- LLM 채팅·글 생성 UI 개발 및 토큰 경량화로 음성 대화 타임아웃 해결
- 모델·도구 권한을 분리한 서브에이전트 6종으로 작성·검증을 분업화한 개발 파이프라인 구축
- Issue·PR 검증 게이트 기반 HITL 워크플로 및 EC2 24시간 원격 자동화 환경 운영`,
      },
    ],
    skills: [
      vueSkill,
      testSkill,
      aiSkill,
      tsSkill,
      reactSkill,
      {
        name: '웹뷰 · 다중 화면 연동',
        desc: [
          '메신저·모바일·웹뷰 환경의 UI 및 상태 복원 로직 구현',
          '드래그·포인터 인터랙션 및 반응형·다크 모드 화면 대응',
        ],
      },
    ],
    softSkills: commonSoftSkills,
    projectsIntro:
      '실무와 팀 프로젝트에서 직접 개발한 화면과 문제 해결 과정입니다.',
    projectOrder: [
      '보배드림 전면 리뉴얼',
      'bizmekaTalk 3.0',
      'Pratama',
      'KumTalk',
      'Vibe Editor',
      'Chain G',
      '다와따',
      '트매',
      'agents-on-cloud',
    ],
  },

  fullstack: {
    label: '풀스택 개발자',
    aboutSubtitle: '웹 개발자 (프론트엔드 · Java/Spring)',
    metaTitle: '구정은 Emily Koo | 풀스택 포트폴리오',
    metaDescription:
      '프론트엔드 실무를 중심으로, 팀 프로젝트에서 Spring Boot API와 DB 설계, Jenkins CI/CD 수정 경험이 있는 개발자 구정은(Emily Koo)의 포트폴리오.',
    tagline:
      '프론트엔드 개발자(React·Vue) · Java·Spring 경험 | MAU 1,400만 서비스 API 협업',
    intro: {
      before:
        '실무 경력 약 2년 8개월. MAU 1,400만 보배드림 등에서 백엔드와 API 구조를 맞춰 온 프론트엔드 실무에 ',
      highlight: 'Java·Spring 백엔드와 DB 설계, Jenkins CI/CD',
      after: ' 경험을 더했습니다.',
    },
    pdfUrl:
      'https://github.com/JEmilyKoo/portfolio/blob/9381904c0f536982a5760b1f251d7192fbee5205/20261110_%EA%B5%AC%EC%A0%95%EC%9D%80_v2.pdf',
    primaryPills: [
      'Vue',
      'React',
      'Java',
      'Spring Boot',
      'LLM API',
      'AI Agent',
    ],
    competencies: [
      {
        title: 'API 연동·백엔드 협업',
        evidence:
          '- 백엔드와 검색 API 사용 방식을 협의 및 정리 \n - API 버전 전환 때 화면 수정 없이 연결만 교체',
      },
      {
        title: 'Java·Spring·DB',
        evidence:
          'SQLD 보유, Spring REST API 개발과 MySQL·Oracle로 회원·서비스 DB 설계',
      },
      {
        title: 'AI 서비스 연동·클라우드 멀티 에이전트 시스템 설계',
        evidence: `- 인바운드 미개방 AWS EC2와 GitHub Actions runner를 연동한 무중단 원격 에이전트 서버 구축
- 최소 권한 원칙의 서브에이전트 6종과 Issue·PR 자동 검증 기반 HITL 체계 구현
- LLM 채팅·글 생성 기능 개발 및 프롬프트·토큰 경량화로 타임아웃 해결`,
      },
    ],
    skills: [
      {
        name: '프론트엔드 (React / Vue)',
        desc: [
          'React·Next.js·Nuxt(SSR)·Vue 3·TypeScript 기반 웹·PWA·메신저 UI 및 상태·성능 최적화',
          'WebView·TreeView 연동, 가상 스크롤·뒤로가기 복원 및 반응형·다국어 화면 구현',
        ],
      },
      {
        name: '백엔드 / 실시간 통신',
        desc: [
          'Spring Boot·JPA 기반 인증/회원/서비스 로직 및 REST API·WebSocket 실시간 통신 구현',
          'Node.js 기반 연동·자동화 로직 및 서비스 기능 개발',
        ],
      },
      {
        name: 'DB / 인프라',
        desc: [
          'MySQL 관계형 스키마 설계 및 데이터 모델링·정합성 관리 (SQLD 보유)',
          'AWS EC2 보안 그룹·Instance Connect Endpoint·상시 운영 환경 구성',
        ],
      },
      tsSkill,
      aiSkill,
      {
        name: 'CI / CD',
        desc: [
          'Jenkins 빌드 실패 시 배포 차단 및 캐시 분리 파이프라인 구성',
          'GitHub Actions·환경별 빌드 스크립트 기반 배포 및 문서 자동화',
        ],
      },
    ],
    softSkills: commonSoftSkills,
    projectsIntro:
      '프론트엔드 실무 프로젝트와, 백엔드·CI/CD를 함께 다룬 팀 프로젝트입니다.',
    projectOrder: [
      '보배드림 전면 리뉴얼',
      'agents-on-cloud',
      '트매',
      '찍Go',
      'Vibe Editor',
      'Chain G',
      'bizmekaTalk 3.0',
      '다와따',
      'Pratama',
      'KumTalk',
    ],
  },

  web: {
    label: '웹 개발자',
    aboutSubtitle: '웹 개발자',
    metaTitle: '구정은 Emily Koo | 웹 개발 포트폴리오',
    metaDescription:
      '가상 스크롤 렌더링 최적화, 한글 URL 라우팅, 6개 국어 다국어 대응 경험이 있는 웹 개발자 구정은(Emily Koo)의 포트폴리오.',
    tagline:
      '프론트엔드 개발자(React·Vue) · 웹 성능·SEO·다국어 | MAU 1,400만 피드 렌더링 최적화',
    intro: {
      before:
        '실무 경력 약 2년 8개월. MAU 1,400만 보배드림과 사용자 30만 명 그룹웨어 메신저에서 ',
      highlight: '가상 스크롤 피드 단독 설계·개발',
      after:
        ', 한글 URL 라우팅(백엔드와 협업), 6개 국어 다국어 처리를 해 왔습니다.',
    },
    pdfUrl:
      'https://github.com/JEmilyKoo/portfolio/blob/9381904c0f536982a5760b1f251d7192fbee5205/20261110_%EA%B5%AC%EC%A0%95%EC%9D%80_v3.pdf',
    primaryPills: ['Vue.js', 'TypeScript', 'HTML/CSS', 'LLM API', 'AI Agent'],
    competencies: [
      {
        title: '렌더링 성능',
        evidence:
          '커뮤니티 피드에 가상 스크롤을 적용해 1,000건을 불러와도 카드 3~5개만 렌더링, 뒤로가기 위치 오차 0px',
      },
      {
        title: 'SEO·URL 라우팅',
        evidence:
          '6종 한글 카테고리·검색어 URL 라우팅을 구현해 기존 주소 호환과 공유·새로고침 상태를 유지하고 SEO 최적화 달성',
      },
      {
        title: 'AI API 연동·멀티 에이전트 자동화',
        evidence: `- LLM 채팅·글 생성 UI 개발 및 토큰 경량화로 음성 대화 타임아웃 해결
- 모델·도구 권한을 분리한 서브에이전트 6종으로 작성·검증을 분업화한 개발 파이프라인 구축
- Issue·PR 검증 게이트 기반 HITL 워크플로 및 EC2 24시간 원격 자동화 환경 운영`,
      },
    ],
    skills: [
      vueSkill,
      aiSkill,
      {
        name: 'SEO·웹 성능',
        desc: [
          '한글 카테고리 URL 라우팅 6종 (보배드림, 백엔드 협업)',
          '1,000건 피드 가상 스크롤, 렌더링 카드 3~5개 유지 (보배드림)',
          'Lighthouse 4개 항목 100점, 로딩 7초 → 0.37초 (팀 프로젝트)',
        ],
      },
      tsSkill,
      reactSkill,
      cicdSkill,
    ],
    softSkills: commonSoftSkills,
    projectsIntro:
      '웹 화면 개발과 반응형·다국어·SEO 대응 경험을 중심으로 정리했습니다.',
    projectOrder: [
      '보배드림 전면 리뉴얼',
      'Pratama',
      'Chain G',
      'bizmekaTalk 3.0',
      'KumTalk',
      'Vibe Editor',
      '다와따',
      '트매',
      'agents-on-cloud',
    ],
  },
}
