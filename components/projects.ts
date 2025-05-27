import { Project } from './ProjectCard';

const projects: Project[] = [
  {
    title: 'Chain G',
    period: '2025.02 – 2025.04 (7주)',
    role: 'Frontend Lead / UX Engineer',
    description: '친한 사람들과 돈 문제로 어색하지 않도록, 가볍지만 신뢰할 수 있게 정리해주는 코리빙 서비스',
    problem: '실시간 계약 상태 반영, 복잡한 금액 분배, UX 일관성, 퍼포먼스 최적화',
    solution: 'React + Next.js 기반 설계, 디자인 시스템 직접 구축, Redux Toolkit + redux-persist 상태 관리, D3.js 시각화, FCM 연동, 코드 스플리팅, PWA, Lighthouse 100점',
    result: '메인 페이지 로딩 속도 99.47% 개선(7초→0.37초), 접근성/SEO/PWA 100점, 실시간 계약 상태 반영, 유지보수성/확장성 강화',
    metrics: ['로딩 99.47% 개선', 'Lighthouse 100점', 'FCM 실시간 반영'],
    tags: ['React', 'Next.js', 'Redux Toolkit', 'D3.js', 'PWA', 'FCM', 'Design System', 'CI/CD', 'Figma', 'Notion'],
    github: 'https://github.com/JEmilyKoo/chain-g',
    ai: true,
  },
  {
    title: '다와따',
    period: '2025.01 ~ 2024.02 (7주)',
    role: 'Frontend Lead / UI·UX Designer',
    description: '실시간 위치 공유 및 최적 장소 추천을 통해 약속 시간을 효율적으로 조율하는 서비스',
    problem: '장소 추천 API 응답 지연, 실시간 위치 공유, 이미지 업로드 서버 부담, 빌드 속도 저하',
    solution: 'React Native로 iOS/Android/Web 통합, Redux 캐싱, S3 presigned URL, Gradle 빌드 최적화',
    result: '장소 추천 응답 99.8% 개선(240초→0.5초), 빌드 시간 94.7% 단축(38분→2분), 실시간 위치 공유',
    metrics: ['API 응답 99.8% 개선', '빌드 94.7% 단축'],
    tags: ['React Native', 'Redux', 'WebSocket', 'S3', 'Gradle', 'Figma', 'Notion'],
    github: 'https://github.com/JEmilyKoo/dawatta',
    ai: false,
  },
  {
    title: '트매',
    period: '2024.10 ~ 2024.11 (2주)',
    role: '팀장 / 기획·총괄 / UI 개발',
    description: 'AI LLM을 활용한 음성 대화 트립 매니징 서비스',
    problem: 'STT 딜레이, WebSocket 데이터 동기화, OpenAI 토큰 최적화',
    solution: '브라우저 내장 STT + WebSocket, 프롬프트 엔지니어링, Spring AI, TMap 연동',
    result: '실시간 음성 대화, 최적 루트 안내, AI 기반 음성 인식/교정',
    metrics: ['STT 실시간화', 'WebSocket 동기화', 'OpenAI 토큰 최적화'],
    tags: ['Vue3', 'Spring Boot', 'OpenAI', 'WebSocket', 'TMap', 'AI', 'Figma'],
    github: 'https://github.com/JEmilyKoo/trip-manager-ai',
    ai: true,
  },
  {
    "title": "Vibe Editor",
    "period": "2025.04 ~ 2025.05 (6주)",
    "role": "Frontend Lead / UI·UX Designer",
    "description": "VS Code에서 코드/디렉토리/로그 스냅샷을 찍고, AI 도움으로 기술 블로그 초안을 Notion에 게시하는 확장 프로그램",
    "problem": "사용자 친화적인 VS Code 인터페이스 제공, 다양한 콘텐츠 유형(코드/디렉토리/로그) 처리, Notion 연동 자동화",
    "solution": "React 기반 확장 프로그램 구현, 디자인 시스템 구축, Notion API 자동화, 코드 스냅샷/디렉토리 시각화/로그 타임스탬프 기능 구현, 프롬프트 기반 글 생성 기능 설계",
    "result": "스냅샷 기반 블로그 작성 시간 절감, 실사용자 대상 높은 만족도 기록, Notion 자동 게시 기능으로 게시 속도 80% 개선",
    "metrics": ["VS Code 스냅샷 기능 구현", "Notion 자동 게시", "템플릿 기반 AI 글 생성"],
    "tags": ["VSCode Extension", "React", "TypeScript", "Emotion", "Redux Toolkit", "Notion API", "OpenAI API", "CI/CD", "Figma", "UX Writing"],
    "github": "https://github.com/JEmilyKoo/vibe-editor",
    "ai": true
  }
];

export default projects; 