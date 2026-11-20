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
// - v2: 에이전트 개발 환경·agents-on-cloud를 첫 화면에 쓴다. 도구 이름만 있는 표현은 쓰지 않고 만든 것과 결과로 쓴다.

export type Track = 'frontend' | 'vue' | 'fullstack' | 'web'

export interface SkillItem {
  name: string
  level: string
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
      '비개발자 QA 리포트를 받아 처리 순서를 정하고 대응',
      '백엔드와 API 사용 방식을 확인한 뒤 구현',
      '외국인 동료와 영어 용어집·네이밍 규칙을 만들어 협업',
    ],
  },
  {
    category: '문제 해결',
    details: [
      '원인이 여러 개 겹친 버그를 하나씩 분리해 수정',
      '측정값으로 개선 여부 확인',
    ],
  },
  {
    category: '어학',
    details: [
      '일본어 JLPT N1',
      '영어 비즈니스 회화 가능(외국인 개발자와 영어로 협업)',
      '6개 국어 다국어 리소스 통합 경험',
    ],
  },
]

const vueSkill: SkillItem = {
  name: 'Vue.js / Nuxt',
  level: '실무 약 2년 8개월',
  desc: [
    '피드 무한 스크롤·통합 검색·마이페이지 개발 (보배드림 리뉴얼, Nuxt 4·Vue 3)',
    '사용자 30만 명 그룹웨어 PC 메신저 기능 개발 (실무, Vue·Nuxt)',
    '메뉴 드래그 정렬 버그 수정',
  ],
}

const tsSkill: SkillItem = {
  name: 'TypeScript',
  level: '실무·프로젝트',
  desc: [
    '보배드림 리뉴얼 실무 사용',
    '팀 프로젝트에서 API 응답 타입(ApiResponse<T>) 정의',
  ],
}

const reactSkill: SkillItem = {
  name: 'React / Next.js',
  level: '팀 프로젝트(6~7주씩)',
  desc: [
    '디자인 시스템·공통 컴포넌트 구축, 메인 페이지 로딩 7초 → 0.37초 (Next.js PWA 팀 프로젝트)',
    'VS Code 확장 프로그램의 AI 채팅·글 생성 화면 개발 (React 팀 프로젝트)',
  ],
}

const testSkill: SkillItem = {
  name: '테스트·검증',
  level: '실무',
  desc: [
    'Node.js test runner (상태 로직 테스트)',
    'Playwright (브라우저 동작 검증)',
  ],
}

const aiSkill: SkillItem = {
  name: 'AI 에이전트 개발 환경·LLM API',
  level: '실무',
  desc: [
    '구현·리뷰 에이전트를 분리한 AI 개발 환경 설계·운영, 작업 범위 밖 수정을 막는 사전 검사 스크립트(테스트 80개)·샌드박스 도입 (보배드림)',
    '별도 리뷰 에이전트의 독립 리뷰와 직접 검증을 거친 코드만 반영',
    'LLM API(OpenAI·Anthropic) 연동 AI 채팅·글 생성 화면 개발 (팀 프로젝트)',
  ],
}

const REACT_TRACK: TrackConfig = {
  label: '프론트엔드 개발자(React)',
  aboutSubtitle: '프론트엔드 개발자',
  metaTitle: '구정은 Emily Koo | 프론트엔드 포트폴리오',
  metaDescription:
    'React·Vue로 웹 서비스를 만들어 온 프론트엔드 개발자 구정은(Emily Koo)의 포트폴리오. 실무 약 2년 8개월, 보배드림 리뉴얼 참여.',
  tagline: '프론트엔드 개발자(React·Vue) | MAU 1,400만 피드 60fps 수준 렌더링',
  intro: {
    before: 'React·Vue·TypeScript 기반, 실무 경력 약 2년 8개월. MAU 1,400만 보배드림과 사용자 30만 명 그룹웨어 메신저에서 ',
    highlight: '대용량 피드 성능 최적화',
    after: ' 경험과 6개 국어 i18n 적용, 백엔드·디자이너 협업 경험이 있습니다.',
  },
  pdfUrl: 'https://github.com/JEmilyKoo/portfolio/blob/80384f830a8f6f570981a6db4429d8d86b8cfed4/20261110_%EA%B5%AC%EC%A0%95%EC%9D%80_v1.pdf',
  primaryPills: ['React', 'Next.js', 'TypeScript', 'AI 에이전트 개발 환경'],
  competencies: [
    {
      title: '렌더링 성능',
      evidence: '보배드림 피드에 가상 스크롤을 적용해 1,000건을 불러와도 카드 3~5개만 렌더링, 뒤로가기 위치 오차 0px',
    },
    {
      title: 'React 컴포넌트·상태 설계',
      evidence: 'React·Next.js로 디자인 시스템과 공통 컴포넌트를 구축하고 Redux Toolkit으로 상태 설계, 메인 페이지 로딩 7초 → 0.37초',
    },
    {
      title: 'AI 에이전트 개발 환경',
      evidence: '구현·리뷰 에이전트를 분리한 AI 개발 환경을 직접 설계하고, 작업 범위 밖 수정을 막는 검사 스크립트(테스트 80개)와 독립 리뷰, 직접 검증을 거친 코드만 보배드림에 반영',
    },
  ],
  skills: [
    {
      name: 'React / Next.js',
      level: '프로젝트',
      desc: [
        '디자인 시스템·공통 컴포넌트 구축, 메인 페이지 로딩 7초 → 0.37초 (Next.js PWA)',
        'VS Code 확장 프로그램의 AI 채팅·글 생성 화면 개발, 앱 내 웹 화면(WebView) 상태 동기화',
        'Redux Toolkit으로 상태 관리',
      ],
    },
    tsSkill,
    {
      name: 'React Native',
      level: '팀 프로젝트(7주)',
      desc: [
        '실시간 위치 공유 앱 주요 화면 개발',
        '지도·캘린더를 WebView 공용 화면으로 전환',
      ],
    },
    testSkill,
    vueSkill,
    aiSkill,
  ],
  softSkills: commonSoftSkills,
  projectsIntro:
    '보배드림 실무 리뉴얼을 먼저 소개하고, 이어서 팀 프로젝트(Chain G·Vibe Editor·다와따), 가온아이 실무(bizmekaTalk 3.0·Pratama·KumTalk), 팀 프로젝트(트매), 개인 프로젝트(agents-on-cloud) 순서로 직접 개발한 화면과 문제 해결 과정을 담았습니다.',
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
    tagline: '프론트엔드 개발자 · Vue·Nuxt | MAU 1,400만 피드 60fps 수준 렌더링',
    intro: {
      before: '실무 경력 약 2년 8개월. MAU 1,400만 보배드림과 사용자 30만 명 그룹웨어 메신저에서 Vue·Nuxt로 ',
      highlight: '대용량 피드 성능 최적화와 상태 복원',
      after: ' 경험과 6개 국어 i18n 적용, 백엔드·디자이너 협업 경험이 있습니다.',
    },
    pdfUrl: 'https://github.com/JEmilyKoo/portfolio/blob/80384f830a8f6f570981a6db4429d8d86b8cfed4/20261110_%EA%B5%AC%EC%A0%95%EC%9D%80_v4.pdf',
    primaryPills: ['Vue.js', 'Nuxt', 'TypeScript', 'AI 에이전트 개발 환경'],
    competencies: [
      {
        title: 'UI 상태 복원',
        evidence: '피드 뒤로가기 위치 복원(오차 0px), 메신저 창을 접고 펼 때 대화방·스크롤·입력 상태 복원을 실무 두 곳에서 구현',
      },
      {
        title: '복잡한 상호작용 디버깅',
        evidence: '데스크톱 브라우저에서 메뉴 드래그 정렬이 끊기는 문제를 원인 3가지(정렬 로직·브라우저 기본 드래그·포인터 이벤트 추적)로 나눠 수정',
      },
      {
        title: 'AI 에이전트 개발 환경',
        evidence: '구현·리뷰 에이전트를 분리한 AI 개발 환경을 직접 설계하고, 작업 범위 밖 수정을 막는 검사 스크립트(테스트 80개)와 독립 리뷰, 직접 검증을 거친 코드만 보배드림에 반영',
      },
    ],
    skills: [vueSkill, tsSkill, testSkill, reactSkill, aiSkill],
    softSkills: commonSoftSkills,
    projectsIntro: '실무와 팀 프로젝트에서 직접 개발한 화면과 문제 해결 과정입니다.',
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
      '프론트엔드 실무를 중심으로, 팀 프로젝트에서 Spring Boot API와 DB 설계, Jenkins CI/CD 수정 경험이 있고 AI 에이전트 개발 환경을 직접 구축한 개발자 구정은(Emily Koo)의 포트폴리오.',
    tagline: '프론트엔드 개발자(React·Vue) · Java·Spring Boot·REST API·DB · AI 에이전트 환경 구축',
    intro: {
      before: '실무 경력 약 2년 8개월. MAU 1,400만 보배드림에서 백엔드와 REST API 구조를 맞춘 프론트엔드 실무에 ',
      highlight: 'Java·Spring Boot·DB 설계, LLM API 연동, AI 에이전트 개발 환경 구축',
      after: ' 경험을 더했습니다.',
    },
    pdfUrl: 'https://github.com/JEmilyKoo/portfolio/blob/80384f830a8f6f570981a6db4429d8d86b8cfed4/20261110_%EA%B5%AC%EC%A0%95%EC%9D%80_v2.pdf',
    primaryPills: ['Java', 'Spring Boot', 'REST API', 'MySQL·Oracle', 'Vue·React', 'AI 에이전트·LLM API'],
    competencies: [
      {
        title: 'REST API·백엔드 협업',
        evidence: '보배드림에서 백엔드와 검색 API 사용 방식을 협의해 정리, API 버전 전환 때 화면 수정 없이 연결만 교체',
      },
      {
        title: 'Java·Spring Boot·DB',
        evidence: 'Spring REST API 개발, MySQL·Oracle로 회원·서비스 DB 설계, SQLD 보유',
      },
      {
        title: 'LLM 연동·AI 에이전트 환경',
        evidence: 'OpenAI·Anthropic API 연동 LLM 화면 개발. 구현·리뷰 에이전트를 분리한 AI 개발 환경과, AWS EC2 상시 에이전트 서버(서브에이전트 6종)를 직접 구축',
      },
    ],
    skills: [
      {
        name: 'Java / Spring',
        level: 'SSAFY 교육 과정',
        desc: [
          'Spring Boot·JPA·MySQL 네이버 로그인·회원가입 DB 구축',
          'Spring REST API, WebSocket 채팅 구현',
          'Java 알고리즘 (삼성 SW 역량테스트 A형 통과)',
        ],
      },
      {
        name: 'DB',
        level: '자격·프로젝트',
        desc: ['SQLD(2024.12)', '팀 프로젝트 회원·서비스 DB 설계 (MySQL·Oracle)'],
      },
      {
        name: 'AI 에이전트·LLM API',
        level: '실무·개인 프로젝트',
        desc: [
          '구현·리뷰 에이전트를 분리한 AI 개발 환경 설계·운영, 작업 범위 밖 수정을 막는 사전 검사 스크립트(테스트 80개)·샌드박스 도입 (보배드림)',
          'AWS EC2에 헤드리스 Claude Code 원격 작업 서버 구축, GitHub 이벤트마다 세션 실행, 모델·도구 권한을 나눈 서브에이전트 6종(작성·맞춤·웹 조사·자소서·형식 처리·검증) 구성 (agents-on-cloud)',
          'LLM API(OpenAI·Anthropic) 연동 AI 채팅·글 생성 화면 개발 (팀 프로젝트)',
        ],
      },
      vueSkill,
      tsSkill,
      reactSkill,
      {
        name: 'CI/CD·자동화',
        level: '팀 프로젝트',
        desc: [
          'Jenkins 프론트엔드 배포 파이프라인 수정, 빌드 실패 시 배포 차단',
          'GitHub Actions·Notion 연동 문서 자동화',
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
    tagline: '프론트엔드 개발자(React·Vue) · 웹 성능·SEO·다국어 | MAU 1,400만 피드 렌더링 최적화',
    intro: {
      before: '실무 경력 약 2년 8개월. MAU 1,400만 보배드림과 사용자 30만 명 그룹웨어 메신저에서 ',
      highlight: '가상 스크롤 피드 단독 설계·개발',
      after: ', 한글 URL 라우팅(백엔드와 협업), 6개 국어 다국어 처리를 해 왔습니다.',
    },
    pdfUrl: 'https://github.com/JEmilyKoo/portfolio/blob/80384f830a8f6f570981a6db4429d8d86b8cfed4/20261110_%EA%B5%AC%EC%A0%95%EC%9D%80_v3.pdf',
    primaryPills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'Vue.js', 'AI 에이전트 개발 환경'],
    competencies: [
      {
        title: '렌더링 성능',
        evidence: '보배드림 피드에 가상 스크롤을 적용해 1,000건을 불러와도 카드 3~5개만 렌더링, 뒤로가기 위치 오차 0px',
      },
      {
        title: 'SEO·URL 라우팅',
        evidence: '보배드림 차량 목록 한글 카테고리 URL(6종)을 백엔드와 함께 구현해 기존 영문 주소와 호환, 검색어를 URL에 담아 새로고침·공유해도 결과 유지',
      },
      {
        title: '다국어',
        evidence: '해외 고객사 그룹웨어의 데스크톱·모바일 6개 국어 리소스 통합, 번역 길이에 따라 깨지는 레이아웃을 반응형으로 수정',
      },
    ],
    skills: [
      {
        name: 'HTML / CSS',
        level: '실무',
        desc: [
          '모바일·태블릿·PC 반응형, 다크 모드 QA 수정 (보배드림)',
          '다국어 번역 길이에 따른 레이아웃 깨짐 수정',
        ],
      },
      {
        name: 'SEO·웹 성능',
        level: '실무·프로젝트',
        desc: [
          '한글 카테고리 URL 라우팅 6종 (보배드림, 백엔드 협업)',
          '1,000건 피드 가상 스크롤, 렌더링 카드 3~5개 유지 (보배드림)',
          'Lighthouse 4개 항목 100점, 로딩 7초 → 0.37초 (팀 프로젝트)',
        ],
      },
      {
        name: '다국어',
        level: '실무',
        desc: ['해외 고객사 그룹웨어의 PC·모바일 6개 국어 i18n'],
      },
      vueSkill,
      tsSkill,
      reactSkill,
    ],
    softSkills: commonSoftSkills,
    projectsIntro: '웹 화면 개발과 반응형·다국어·SEO 대응 경험을 중심으로 정리했습니다.',
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
