import { Project } from './ProjectCard';

const projects: Project[] = [
    {
    title: 'Vibe Editor',
    period: '2025.04 ~ 2025.05 (6주)',
    role: 'Frontend Lead / UI·UX Designer',
    description: 'VS Code에서 코드/디렉토리/로그 스냅샷을 찍고, AI 도움으로 기술 블로그 초안을 Notion에 게시하는 확장 프로그램',
    metrics: [
      { label: 'VS Code', value: '스냅샷 기능' },
      { label: 'Notion', value: '자동 게시' },
      { label: 'AI Agent Design', value: '템플릿 기반 글 생성' }
    ],
    technologies: ['VSCode Extension','AI : Prompt Engineering', 'AI : Agent Design','React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Notion API', 'Jenkins', 'Figma', 'UX Writing'],
    githubUrl: 'https://github.com/JEmilyKoo/vibe-editor',
    image: ['/images/vibe1.gif', '/images/vibe2.png', '/images/vibe3.png']
  },
  {
    title: 'Chain G',
    period: '2025.02 – 2025.04 (7주)',
    role: 'Frontend Lead / UX Engineer',
    description: '친한 사람들과 돈 문제로 어색하지 않도록, 가볍지만 신뢰할 수 있게 정리해주는 코리빙 서비스',
    metrics: [
      { label: '로딩 속도', value: '99.47% 개선' },
      { label: 'Lighthouse', value: '100점' },
      { label: '실시간 반영', value: 'FCM 연동' }
    ],
    technologies: ['React', 'Next.js', 'Redux Toolkit', 'D3.js', 'PWA', 'FCM', 'Design System', 'CI/CD', 'Figma', 'Notion'],
    githubUrl: 'https://github.com/JEmilyKoo/chain-g',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: ['/images/chaing1.png', '/images/chaing2.png', '/images/chaing3.png']
  },
  {
    title: '다와따',
    period: '2025.01 ~ 2024.02 (7주)',
    role: 'Frontend Lead / UI·UX Designer',
    description: '실시간 위치 공유 및 최적 장소 추천을 통해 약속 시간을 효율적으로 조율하는 서비스',
    metrics: [
      { label: 'API 응답', value: '99.8% 개선' },
      { label: '빌드 시간', value: '94.7% 단축' }
    ],
    technologies: ['React Native', 'Redux', 'WebSocket', 'S3', 'Gradle', 'Figma', 'Notion'],
    githubUrl: 'https://github.com/JEmilyKoo/dawatta',
    image: ['/images/dawata.jpg']
  },
  {
    title: '트매',
    period: '2024.10 ~ 2024.11 (2주)',
    role: '팀장 / 기획·총괄 / UI 개발',
    description: 'AI LLM을 활용한 음성 대화 트립 매니징 서비스',
    metrics: [
      { label: 'STT', value: '실시간화' },
      { label: 'WebSocket', value: '동기화' },
      { label: 'OpenAI', value: '토큰 최적화' }
    ],
    technologies: ['Vue3', 'Spring Boot', 'OpenAI', 'WebSocket', 'TMap', 'AI', 'Figma'],
    githubUrl: 'https://github.com/JEmilyKoo/trip-manager-ai',
    image: ['/images/tm.png']
  },

];

export default projects; 