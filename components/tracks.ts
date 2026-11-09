// 지원 직무별 포트폴리오 분기 설정
// /, /v1 → frontend(React 공고용) · /v2 → fullstack · /v3 → web · /v4 → vue(Vue 공고용)
// 프로젝트 데이터(projects.ts)는 공통이고, 직무별로 소개 문구·기술·프로젝트 순서만 다르다.

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

export interface TrackConfig {
  label: string
  metaTitle: string
  metaDescription: string
  tagline: string
  intro: { before: string; highlight: string; after: string }
  primaryPills: string[]
  secondaryPills: string[]
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
      '영어만 쓰는 동료와 용어집·네이밍 규칙을 만들어 협업',
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
      '영어 업무 소통 가능',
      '6개 국어 다국어 리소스 통합 경험',
    ],
  },
]

const vueSkill: SkillItem = {
  name: 'Vue.js / Nuxt',
  level: '실무 약 2년 8개월',
  desc: [
    '보배드림 리뉴얼(Nuxt 4, Vue 3): 피드 무한 스크롤, 통합 검색, 마이페이지',
    '가온아이(Vue, Nuxt): 그룹웨어 PC 메신저 기능 개발',
    '포인터·드래그 이벤트 버그 수정 경험',
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
    'Chain G(Next.js, PWA): 공통 컴포넌트, 메인 페이지 로딩 개선',
    'Vibe Editor(React): VS Code 확장 프로그램 화면',
  ],
}

const testSkill: SkillItem = {
  name: '테스트·검증',
  level: '실무',
  desc: [
    'Node.js test runner로 상태 로직 테스트 작성',
    'Playwright로 브라우저 동작·API 호출 수 측정',
  ],
}

const aiSkill: SkillItem = {
  name: 'AI 도구',
  level: '실무',
  desc: [
    'Codex 서브 에이전트로 구현·리뷰 역할 분리',
    'AI 결과는 테스트와 브라우저 확인 후 반영',
  ],
}

const REACT_TRACK: TrackConfig = {
  label: '프론트엔드 엔지니어(React)',
  metaTitle: '구정은 Emily Koo | 프론트엔드 포트폴리오',
  metaDescription:
    'React·TypeScript 팀 프로젝트와 프론트엔드 실무 약 2년 8개월(Vue·Nuxt) 경험이 있는 개발자 구정은(Emily Koo)의 포트폴리오.',
  tagline: 'React·TypeScript로 서비스를 만들어 온 프론트엔드 개발자',
  intro: {
    before: 'React·Next.js 팀 프로젝트로 프로젝트 우수상 2회, ',
    highlight: '프론트엔드 실무 약 2년 8개월',
    after: '(Vue·Nuxt, 보배드림 리뉴얼 론칭 참여) 경험이 있습니다.',
  },
  primaryPills: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
  secondaryPills: ['Vue.js', 'Nuxt', 'React Native', 'Playwright'],
  skills: [
    {
      name: 'React / Next.js',
      level: '팀 프로젝트(6~7주씩, 우수상 2회)',
      desc: [
        'Chain G(Next.js, PWA): 공통 컴포넌트, 메인 로딩 7초 → 0.37초',
        'Vibe Editor(React): VS Code 확장 프로그램 화면, WebView 간 상태 동기화',
        'Redux Toolkit으로 상태 관리',
      ],
    },
    tsSkill,
    {
      name: 'React Native',
      level: '팀 프로젝트(7주)',
      desc: [
        '다와따: 실시간 위치 공유 앱 주요 화면',
        '지도·캘린더를 WebView 공용 화면으로 전환',
      ],
    },
    vueSkill,
    testSkill,
    aiSkill,
  ],
  softSkills: commonSoftSkills,
  projectsIntro: 'React 팀 프로젝트와 프론트엔드 실무에서 직접 개발한 화면과 문제 해결 과정입니다.',
  projectOrder: [
    '보배드림 전면 리뉴얼',
    'Chain G',
    'Vibe Editor',
    '다와따',
    'bizmekaTalk 3.0',
    'Pratama',
    'KumTalk',
    '트매',
  ],
}

export const tracks: Record<Track, TrackConfig> = {
  frontend: REACT_TRACK,

  vue: {
    label: '프론트엔드 엔지니어(Vue)',
    metaTitle: '구정은 Emily Koo | 프론트엔드(Vue) 포트폴리오',
    metaDescription:
      'Vue·Nuxt로 웹 서비스를 만들어 온 프론트엔드 개발자 구정은(Emily Koo)의 포트폴리오. 실무 약 2년 8개월, 보배드림 전면 리뉴얼 참여.',
    tagline: 'Vue·Nuxt로 웹 서비스를 만들어 온 프론트엔드 개발자',
    intro: {
      before: '실무 경력 약 2년 8개월. 최근에는 ',
      highlight: 'MAU 1,400만 서비스 보배드림 리뉴얼',
      after: '에 론칭까지 참여했습니다.',
    },
    primaryPills: ['Vue.js', 'Nuxt', 'TypeScript', 'JavaScript'],
    secondaryPills: ['React', 'Next.js', 'React Native', 'Playwright'],
    skills: [
      vueSkill,
      tsSkill,
      reactSkill,
      {
        name: 'React Native',
        level: '팀 프로젝트(7주)',
        desc: [
          '다와따: 실시간 위치 공유 앱 주요 화면',
          '지도·캘린더를 WebView 공용 화면으로 전환',
        ],
      },
      testSkill,
      aiSkill,
    ],
    softSkills: commonSoftSkills,
    projectsIntro: '실무와 팀 프로젝트에서 직접 개발한 화면과 문제 해결 과정입니다.',
    projectOrder: [
      '보배드림 전면 리뉴얼',
      'Vibe Editor',
      'Chain G',
      '다와따',
      'bizmekaTalk 3.0',
      'Pratama',
      'KumTalk',
      '트매',
    ],
  },

  fullstack: {
    label: '풀스택 엔지니어',
    metaTitle: '구정은 Emily Koo | 풀스택 포트폴리오',
    metaDescription:
      '프론트엔드 실무를 중심으로, 팀 프로젝트에서 Spring Boot API와 DB 설계, Jenkins CI/CD 수정 경험이 있는 개발자 구정은(Emily Koo)의 포트폴리오.',
    tagline: '프론트엔드 실무에 Java·Spring 백엔드 경험을 더한 개발자',
    intro: {
      before: '실무 경력 약 2년 8개월(프론트엔드). 팀 프로젝트에서 ',
      highlight: 'Java·Spring 백엔드와 DB 설계, Jenkins CI/CD',
      after: '를 다뤄 봤습니다. (SSAFY Java 트랙, Java 개발자 과정 수료, SQLD)',
    },
    primaryPills: ['Vue.js', 'TypeScript', 'React', 'Java', 'Spring Boot'],
    secondaryPills: ['Nuxt', 'MySQL', 'Oracle', 'SQLD', 'Jenkins'],
    skills: [
      vueSkill,
      tsSkill,
      reactSkill,
      {
        name: 'Java / Spring',
        level: '교육 과정(SSAFY Java 트랙, Java 개발자 과정)',
        desc: [
          '트매: Spring Boot·MySQL로 네이버 로그인·회원가입 DB 구축, WebSocket 음성·JSON 처리',
          '찍Go: Spring REST API, WebSocket 채팅, 미션별 업적 자동 획득 로직',
          'SSAFY SW 역량테스트 모의 A형 통과(Java 알고리즘)',
        ],
      },
      {
        name: 'DB',
        level: '자격·프로젝트',
        desc: ['SQLD(2024.12)', '트매(MySQL)·찍Go(Oracle) DB 설계', '가온아이 그룹웨어(MariaDB) 운영 환경 경험'],
      },
      {
        name: 'CI/CD·자동화',
        level: '팀 프로젝트',
        desc: [
          'Vibe Editor: Jenkins 프론트엔드 파이프라인 수정(캐시 정리 빌드 분리, 빌드 실패 시 배포 차단)',
          'GitHub Actions와 Notion 연동으로 스키마 변경 내역 자동 문서화',
        ],
      },
    ],
    softSkills: commonSoftSkills,
    projectsIntro:
      '프론트엔드 실무 프로젝트와, 백엔드·CI/CD를 함께 다룬 팀 프로젝트입니다.',
    projectOrder: [
      '보배드림 전면 리뉴얼',
      '트매',
      'Vibe Editor',
      'Chain G',
      'bizmekaTalk 3.0',
      '다와따',
      'Pratama',
      'KumTalk',
      '찍Go',
    ],
  },

  web: {
    label: '웹 개발자',
    metaTitle: '구정은 Emily Koo | 웹 개발 포트폴리오',
    metaDescription:
      '웹 서비스 화면 개발, 반응형·다크 모드 퍼블리싱, 다국어·SEO 대응 경험이 있는 웹 개발자 구정은(Emily Koo)의 포트폴리오.',
    tagline: '화면 개발부터 반응형·다국어까지 다뤄 온 웹 개발자',
    intro: {
      before: '실무 경력 약 2년 8개월. ',
      highlight: '보배드림 리뉴얼의 반응형·다크 모드와 한글 URL',
      after: ', 그룹웨어 6개 국어 대응을 경험했습니다.',
    },
    primaryPills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'Vue.js'],
    secondaryPills: ['Nuxt', 'React', 'Next.js', 'SEO', '반응형'],
    skills: [
      {
        name: 'HTML / CSS',
        level: '실무',
        desc: [
          '보배드림: 모바일·태블릿·PC 반응형, 다크 모드 QA 수정',
          'Pratama: 번역 길이에 맞춘 반응형 UI 수정',
        ],
      },
      vueSkill,
      tsSkill,
      reactSkill,
      {
        name: 'SEO·웹 성능',
        level: '실무·프로젝트',
        desc: [
          '보배드림: 차량 목록 한글 카테고리 URL 6종, 검색어 URL 반영',
          'Chain G: Lighthouse 접근성·SEO·PWA 100점, 메인 로딩 7초 → 0.37초',
        ],
      },
      {
        name: '다국어',
        level: '실무',
        desc: ['Pratama: PC·모바일 6개 국어 리소스 통합, 인도네시아어 날짜 표기 조정'],
      },
    ],
    softSkills: commonSoftSkills,
    projectsIntro: '웹 화면 개발과 반응형·다국어·SEO 대응 경험을 중심으로 정리했습니다.',
    projectOrder: [
      '보배드림 전면 리뉴얼',
      'Chain G',
      'Pratama',
      'bizmekaTalk 3.0',
      'KumTalk',
      'Vibe Editor',
      '다와따',
      '트매',
    ],
  },
}
