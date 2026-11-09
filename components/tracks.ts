// 지원 직무별 포트폴리오 분기 설정
// /, /v1 → frontend(React 공고용) · /v2 → fullstack · /v3 → web · /v4 → vue(Vue 공고용)
// 프로젝트 데이터(projects.ts)는 공통이고, 직무별로 소개 문구·기술·역량·프로젝트 순서만 다르다.
//
// 첫 화면 구성 원칙 (2026-11-10, /jobstack-portfolio 갭 분석)
// - 1줄 primaryPills: 그 직무의 주력 기술 3~4개만. 다른 직무용 기술·보조 도구(Playwright 등)는 넣지 않는다.
// - 2줄 competencies: 그 직무 공고가 요구하는 역량 3개 + 면접에서 1분 안에 설명 가능한 근거.
// - 빠진 기술은 기술 카드와 프로젝트 태그에는 그대로 남는다.

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
    'Chain G(Next.js, PWA): 디자인 시스템·공통 컴포넌트, 메인 로딩 개선',
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
  desc: ['AI 결과는 테스트와 브라우저 확인 후 반영(구현·리뷰 역할 분리)'],
}

const REACT_TRACK: TrackConfig = {
  label: '프론트엔드 엔지니어(React)',
  aboutSubtitle: '프론트엔드 개발자',
  metaTitle: '구정은 Emily Koo | 프론트엔드 포트폴리오',
  metaDescription:
    'React·Vue로 웹 서비스를 만들어 온 프론트엔드 개발자 구정은(Emily Koo)의 포트폴리오. 실무 약 2년 8개월, 보배드림 리뉴얼 참여.',
  tagline: '웹 서비스를 만들어 온 프론트엔드 개발자 (React · Vue)',
  intro: {
    before: '프론트엔드 실무 약 2년 8개월, 최근 ',
    highlight: 'MAU 1,400만 보배드림 리뉴얼',
    after: '에 론칭까지 참여했습니다.',
  },
  pdfUrl: 'https://github.com/JEmilyKoo/portfolio/blob/main/20261110_%EA%B5%AC%EC%A0%95%EC%9D%80_v1.pdf',
  primaryPills: ['React', 'Next.js', 'TypeScript', 'AI Agent(Codex)'],
  competencies: [
    {
      title: '렌더링 성능',
      evidence: '보배드림 피드에 가상 스크롤을 적용해 1,000건을 불러와도 카드 3~5개만 렌더링, 뒤로가기 위치 오차 0px',
    },
    {
      title: 'React 컴포넌트·상태 설계',
      evidence: '디자인 시스템과 바텀시트·입력창 등 공통 컴포넌트 구축, Redux Toolkit으로 상태 설계',
    },
    {
      title: 'AI 에이전트 협업 개발',
      evidence: '보배드림에서 구현·독립 리뷰·요구사항 대조 에이전트를 나눠 운영하고, 결과는 테스트·브라우저 측정으로 검증한 뒤 반영',
    },
  ],
  skills: [
    {
      name: 'React / Next.js',
      level: '프로젝트',
      desc: [
        'Chain G(Next.js, PWA): 디자인 시스템·공통 컴포넌트, 메인 로딩 7초 → 0.37초',
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
    testSkill,
    vueSkill,
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
    aboutSubtitle: '프론트엔드 개발자',
    metaTitle: '구정은 Emily Koo | 프론트엔드(Vue) 포트폴리오',
    metaDescription:
      'Vue·Nuxt로 웹 서비스를 만들어 온 프론트엔드 개발자 구정은(Emily Koo)의 포트폴리오. 실무 약 2년 8개월, 보배드림 전면 리뉴얼 참여.',
    tagline: 'Vue·Nuxt로 웹 서비스를 만들어 온 프론트엔드 개발자',
    intro: {
      before: '실무 경력 약 2년 8개월. 최근에는 ',
      highlight: 'MAU 1,400만 서비스 보배드림 리뉴얼',
      after: '에 론칭까지 참여했습니다.',
    },
    pdfUrl: 'https://github.com/JEmilyKoo/portfolio/blob/main/20261110_%EA%B5%AC%EC%A0%95%EC%9D%80_v4.pdf',
    primaryPills: ['Vue.js', 'Nuxt', 'TypeScript', 'AI Agent(Codex)'],
    competencies: [
      {
        title: '대규모 목록 UX',
        evidence: '보배드림 커뮤니티 피드에 가상 스크롤을 적용해 1,000번째 글에서 뒤로가기해도 같은 위치(오차 0px)로 복원',
      },
      {
        title: '복잡한 상호작용 디버깅',
        evidence: '메뉴 드래그 버그에 겹친 원인 3가지(정렬 로직·PC 기본 드래그·포인터 이벤트)를 분리해 수정',
      },
      {
        title: 'AI 에이전트 협업 개발',
        evidence: '구현·독립 리뷰·요구사항 대조 에이전트를 나눠 운영하고, 설계 문서에 동작과 적용 범위를 명시해 의도대로 구현되게 함',
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
    ],
  },

  fullstack: {
    label: '풀스택 엔지니어',
    aboutSubtitle: '웹 개발자 (프론트엔드 · Java/Spring)',
    metaTitle: '구정은 Emily Koo | 풀스택 포트폴리오',
    metaDescription:
      '프론트엔드 실무를 중심으로, 팀 프로젝트에서 Spring Boot API와 DB 설계, Jenkins CI/CD 수정 경험이 있는 개발자 구정은(Emily Koo)의 포트폴리오.',
    tagline: '프론트엔드부터 Java·Spring 백엔드까지 다루는 개발자',
    intro: {
      before: '실무 경력 약 2년 8개월, 최근 보배드림 리뉴얼 참여. ',
      highlight: 'Java·Spring 백엔드와 DB 설계, Jenkins CI/CD',
      after: '까지 다룹니다.',
    },
    pdfUrl: 'https://github.com/JEmilyKoo/portfolio/blob/main/20261110_%EA%B5%AC%EC%A0%95%EC%9D%80_v2.pdf',
    primaryPills: ['Vue', 'React', 'Java', 'Spring Boot', 'AI Agent(Codex)'],
    competencies: [
      {
        title: 'API 연동·백엔드 협업',
        evidence: '보배드림에서 백엔드와 검색 API 사용 방식을 협의해 정리, API 버전 전환 때 화면 수정 없이 연결만 교체',
      },
      {
        title: 'Java·Spring·DB',
        evidence: 'SQLD 보유, Spring REST API 개발과 MySQL·Oracle로 회원·서비스 DB 설계',
      },
      {
        title: 'AI API 연동·에이전트 협업',
        evidence: 'OpenAI API로 음성 대화 기능을 개발하고 프롬프트·토큰을 줄여 타임아웃을 해결, 실무에서는 AI 에이전트 결과를 테스트로 검증',
      },
    ],
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
      '웹 서비스 화면 개발, 반응형·다크 모드 퍼블리싱, 다국어·SEO 대응 경험이 있는 웹 개발자 구정은(Emily Koo)의 포트폴리오.',
    tagline: '화면 개발부터 반응형·다국어까지 다뤄 온 웹 개발자',
    intro: {
      before: '실무 경력 약 2년 8개월. ',
      highlight: '보배드림 리뉴얼의 반응형·다크 모드와 한글 URL',
      after: ', 그룹웨어 6개 국어 대응을 경험했습니다.',
    },
    pdfUrl: 'https://github.com/JEmilyKoo/portfolio/blob/main/20261110_%EA%B5%AC%EC%A0%95%EC%9D%80_v3.pdf',
    primaryPills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'Vue.js', 'AI Agent(Codex)'],
    competencies: [
      {
        title: '반응형·QA',
        evidence: '보배드림 모바일·태블릿·PC 반응형과 다크 모드 QA를 진행, 기능 수정은 AI 에이전트에 맡기고 화면 검증은 직접 담당',
      },
      {
        title: 'SEO·URL 설계',
        evidence: '보배드림 차량 목록을 한글 주소로 열 수 있게 라우팅 수정(카테고리 6종), 검색어를 주소에 담아 새로고침·공유해도 결과 유지',
      },
      {
        title: '다국어',
        evidence: '해외 고객사 그룹웨어의 PC·모바일 6개 국어 리소스 통합, 번역 길이에 맞춘 UI 수정',
      },
    ],
    skills: [
      {
        name: 'HTML / CSS',
        level: '실무',
        desc: [
          '보배드림: 모바일·태블릿·PC 반응형, 다크 모드 QA 수정',
          'Pratama: 번역 길이에 맞춘 반응형 UI 수정',
        ],
      },
      {
        name: 'SEO·웹 성능',
        level: '실무·프로젝트',
        desc: [
          '보배드림: 차량 목록 한글 카테고리 URL 6종, 검색어 URL 반영',
          'Chain G: Lighthouse 접근성·SEO·권장사항·PWA 100점, 메인 로딩 7초 → 0.37초',
        ],
      },
      {
        name: '다국어',
        level: '실무',
        desc: ['Pratama: PC·모바일 6개 국어 리소스 통합, 인도네시아어 날짜 표기 조정'],
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
    ],
  },
}
