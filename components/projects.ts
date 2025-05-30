import { Project } from './ProjectCard';

const projects: Project[] = [
    {
    title: 'Vibe Editor',
    period: '2025.04 ~ 2025.05 (6주)',
    role: 'Frontend Lead / VSCode Extension Developer',
    description: 'VS Code에서 코드/디렉토리/로그 스냅샷을 찍고, AI 도움으로 기술 블로그 초안을 Notion에 게시하는 확장 프로그램',
    metrics: [
      { label: 'VS Code', value: '스냅샷 기능' },
      { label: 'Notion', value: '자동 게시' },
      { label: '템플릿 기반 프롬프트', value: 'AI 포스트 생성' }
    ],
    technologies: ['VSCode Extension','AI : Prompt Engineering', 'AI : Agent Design','React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Notion API', 'Jenkins', 'Figma', 'UX Writing'],
    githubUrl: 'https://github.com/JEmilyKoo/vibe-editor',
    image: ['/images/vibe1.gif', '/images/vibe2.png', '/images/vibe3.png'],
    troubleshooting: [
      {
        title: 'vscode extension과 Tailwind 연결 시 충돌 해결',
        content: `- tailwind를 사용하면 vscode theme의 변경을 인식할 수 없음
        - 색상을 제외한 영역에만 tailwind 사용
        - vscode theme을 실시간으로 수집하는 global css를 추가하여 해결`
         },
           {
        title: 'vscode extension에서 전역으로 사용할 경우 react의 저장소를 사용할 수 없음',
        content: `- globalState에 저장, 모든 워크스페이스에서 캐시 데이터 공유
        - configuration을 별도 구현해 설정 파일 백업 구현
        - vscode secret storage에 accessToken 저장, 외부 유출 위험 감소`
         },
         {
        title: 'vscode extension의 쿠키 미지원 이슈로 인한 Oauth2 오류',
        content: `- 로그인할 때마다 vscode extension 내부에서 localhost 서버를 오픈
        - 클라이언트를 서버화하는 방식으로 accessToken을 redirect 처리, 외부 노출 위험 최소화`
         },{
          title : '프롬프트 분기처리로 AI 채팅 퀄리티 상승',
content : `- 프롬프트 내에서, 파일을 넣지 않았을 때에도 파일 내용을 바탕으로 답하라고 지시했을 경우 에러 발생
    -  파일이 없다는 것에 치중해 답을 하여 퀄리티 저하
- 프롬프트 자체 분기처리`
         }
    ],
    team: '6명(기여도 25%)'
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
    technologies: ['React', 'Next.js', 'Redux Toolkit', 'D3.js', 'PWA', 'Service Worker','FCM', 'Design System', 'CI/CD', 'Figma', 'Notion'],
    githubUrl: 'https://github.com/JEmilyKoo/chain-g',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: ['/images/chaing1.png', '/images/chaing2.png', '/images/chaing3.png'],
    troubleshooting: [
      {
        title:"로딩 페이지의 속도 개선",
        content: `- 로딩 페이지의 가벼운 구성
         - 로딩 페이지에서만 Emotion 제거
    - HTML/CSS 기반 SVG 애니메이션으로 구성 → 초기 화면 빠르게 노출
    - 배경 이미지 대신 CSS 그라데이션 적용 → 사용자 이탈 방지`
      },
      {
        title:"PWA, Service Worker 적용해 웹앱 최적화",
        content: `- 푸시 알림 기능 추가
    - Service Worker로 SVG·폰트 캐싱 적용
    - 홈화면 추가 시 즉시 실행 가능 (PWA)`
      },
      {
        title: '메인 페이지 로딩 속도 99.47% 개선 (7초 → 0.37초)',
        content: `- 리소스 용량 최소화
    - PNG → SVG 변환으로 이미지 용량 대폭 절감
    - 디자인 시스템 기반으로 폰트 굵기 3종 제한 → 웹폰트 로딩 최소화
- 불필요한 렌더링 최소화
    - 공지 컴포넌트 분리로 초기 렌더 부담 감소
- 캐시 최적화 및 PWA 대응`
      },
      {
        title: 'API 구조 일원화로 인증·에러 처리 자동화 및 타입 안전성 확보',
        content: `- 단일 axios 인스턴스 구성: 모든 API 요청을 api.ts에 정의된 axios 인스턴스로 처리
- 인터셉터 기반 인증·에러 처리: Redux에서 accessToken을 자동 주입, handleDefaultError()로 상태 코드별 에러 모달 일관 처리
- 제네릭 API 함수 구성: getRequest<T>, postRequest<T> 등으로 모든 API 응답을 타입 안전하게 처리
- 공통 응답 스키마 설계: 백엔드와 협의하여 success/fail 구조 통일, ApiResponse<T>로 응답 구조 정형화
- 결과: 인증 흐름 단순화, 에러 처리 중복 제거, 유지보수성과 개발 효율 향상`
      }
    ],
    team: '6명(기여도 20%)'
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
    image: ['/images/dawata.jpg'],
    troubleshooting: [
      {
        title: 'Redux 기반 비동기 UI 적용으로 장소 추천 API 응답 속도 99.8% 개선 (240초 → 0.5초)',
        content: `- 장소 추천 API 응답이 4분 걸려 UX 저하 문제 발생
- 사용자가 기다리지 않도록 먼저 약속 기본 정보를 입력하도록 개선
- Redux 캐싱을 활용해 기존 추천 장소를 즉시 노출, 이후 백그라운드에서 최신 데이터 갱신
- Redux Persist Storage를 적용하여 재접속 시에도 추천 내역 유지, 중복 API 요청 방지`
      },
      {
        title: 'Amazon S3 Presigned URL을 활용한 이미지 업로드 개선',
        content: `- Presigned URL을 사용한 프로필 이미지 업로드 과정에서 바이너리 데이터 인증 오류 발생
- 업로드 전 이미지 리사이징 및 PNG 변환 적용 → 서버가 요구하는 확장자 규격을 준수하도록 수정`
      },
      {
        title: 'CI/CD 자동화 및 APK 빌드 속도 개선',
        content: `- Android Native Module, FCM, Kakao SDK 추가 후 빌드 시간이 급격히 증가(38분 소요)
- Gradle 빌드 최적화 적용 →APK 빌드 시간 94.7% 단축 (38분 → 2분)`
      }
    ],
    team: '6명(기여도 20%)'
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
    image: ['/images/tm.png'],
    troubleshooting: [
      {
        title: 'STT 기능을 AI를 사용하고 RestAPI를 사용할 경우 딜레이 과다 발생',
        content: `- STT를 브라우저 내장 기능으로 사용하되, 무음 인식 교정 컴포넌트 추가 구현
- RestAPI 대신 WebSocket을 이용해 속도 최적화`
      },
      {
        title: 'WebSocket으로 소리와 JSON을 동시에 보낼 경우 Spring 핸들러 미인식 오류',
        content: `- STT : FE단에서 처리하고 TextMessage만 BE로 전송
- TTS :  BianaryMessage를 AudioBlob 형식으로 전송함과 동시에 해당 Json을 TextMessage로 전송한 뒤 싱크 맞추기 작업 추가`
      },
      {
        title: '프롬프트가 길 경우 Open AI 타임 아웃 이슈 발생',
        content: `- 프롬프트 엔지니어링을 이용한 토큰 최적화
- 실제로 다루는 메시지의 가공을 통한 토큰 수 최적화`
      }
    ] ,
    team: '2명(기여도 55%)'
  }
];

export default projects; 