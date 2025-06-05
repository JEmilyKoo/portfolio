import { Project } from '@/types/project'

const projects: Project[] = [
  {
    title: 'Vibe Editor',
    period: '2025.04 ~ 2025.05 (6주)',
    role: 'Frontend Lead / VSCode Extension Developer',
    description:
      'VS Code에서 코드/디렉토리/로그 스냅샷을 찍고, AI 도움으로 기술 블로그 초안을 Notion에 게시하는 확장 프로그램',
    metrics: [
      { label: 'VS Code', value: '스냅샷 기능' },
      { label: 'Notion', value: '자동 게시' },
      { label: '템플릿 기반 프롬프트', value: 'AI 포스트 생성' },
    ],
    technologies: [
      'VSCode Extension',
      'AI : Prompt Engineering',
      'AI : Agent Design',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Notion API',
      'Jenkins',
      'Figma',
      'React Hook Form',
      'UX Writing',
    ],
    githubUrl: 'https://github.com/JEmilyKoo/Vibe_Editor',
    image: [
      '/images/vibe.png',
      '/images/vibe1.gif',
      '/images/vibe2.png',
      '/images/vibe3.png',
    ],
    troubleshooting: [
      {
        title:
          'Redux의 WebView 전용 구조로 인해 VSCode Extension 전역 상태 공유에 실패',
        content: [
          {
            icon: 'issue',
          },
          {
            text: `Webview에서 Redux로 관리하던 전역 상태 데이터가 TreeView 등의 다른 영역에서 동기화되지 않음\n`,
          },
          {
            icon: 'cause',
          },
          {
            text: `Redux는 React 기반 WebView 내부에서만 동작`,
            className: 'trouble-important',
          },
          {
            text: `하며, WebView 간 또는 TreeView 등 외부 UI 컴포넌트에서는 Redux state 접근이 불가\n`,
          },
          {
            icon: 'solution',
          },
          {
            text: `- ExtensionContext.globalState(VSCode Extension의 전역 저장소)를 사용해 공통 상태 데이터를 저장
               - getLocalTemplates(), getLocalTemplate() 등 유틸 함수를 생성해 상태 읽기/갱신 로직 구현
               - `,
          },
          {
            text: `postMessage`,
            className: 'trouble-important',
          },
          {
            text: `로 상태 변경을 통지해, 다른 WebView도 동기화
               - 사용자 설정은 VSCode 설정 API를 래핑한 클래스로 전역 관리하며, settings.json에 저장\n`,
          },
          {
            icon: 'result',
          },
          {
            text: `- Webview, TreeView 등 Extension 전역에서 `,
          },
          {
            text: `상태 일관성 확보\n`,
            className: 'trouble-important',
          },
          {
            text: `               - 모든 워크스페이스에서 캐시 데이터 공유
               - 데이터 동기화코드를 별도 함수로 분리, 반복 코드 최소화
               - 로그아웃 시 캐시·secret 일괄 초기화로 데이터 잔존 문제 방지\n`,
          },
          {
            icon: 'learned',
          },
          {
            text: `캐시 데이터의 호출 실패 시 경고 메시지에 재시도 또는 설정 확인 등의 해결책까지 명시하면 사용자 혼란을 줄이고 UX 완성도가 높아졌을 것`,
          },
        ],
      },
      {
        title:
          'VSCode Extension의 쿠키 미지원으로 Oauth2 리디렉션 토큰 처리 실패',
        content: [
          {
            icon: 'issue',
          },
          {
            text: `Oauth2 인증 후 AccessToken을 쿠키에 담아 전달하더라도, VSCode Extension 내부에서는 해당 쿠키에 접근할 수 없어 인증 불가\n`,
          },
          {
            icon: 'cause',
          },
          {
            text: ` VSCode Extension은 WebView가 iframe + sandbox 환경에서 동작하며, 쿠키/세션이 차단됨\n`,
          },
          {
            icon: 'solution',
          },
          {
            text: `- 클라이언트인 VSCode Extension 내에서 `,
          },
          {
            text: `로컬 서버를 실행`,
            className: 'trouble-important',
          },
          {
            text: `(localhost:5013)함
               - 외부 브라우저에서 로컬 서버를 열고 AccessToken을 URL 파라미터로 전달받아 직접 수신하도록 처리  
               - 서버는 /callback 엔드포인트로 AccessToken을 전달받아, Extension 내부의 `,
          },
          {
            text: `secret storage`,
            className: 'trouble-important',
          },
          {
            text: `에 안전하게 저장  
               - 로그인 성공 메시지를 띄운 뒤, 로컬 서버를 통해 VSCode Extension 내부로 상태 전달 및 initFetchData 트리거 실행\n`,
          },
          {
            icon: 'result',
          },
          {
            text: `- 외부 토큰 유출 없이 Extension 내부에 AccessToken 저장 가능  
               - 인증 상태를 모든 WebView에 일관되게 전파하여 사용자 흐름 유지\n`,
          },
          {
            icon: 'learned',
          },
          {
            text: `정적 포트(5013) 대신 동적 포트를 사용했다면 포트 충돌 가능성 없이 더 안전하게 서버를 열 수 있었을 것`,
          },
        ],
      },
      {
        title:
          'Tailwind의 빌드 타임 색상 정의가 VSCode 테마의 실시간 반영을 막는 이슈',
        content: [
          {
            icon: 'issue',
          },
          {
            text: `VSCode의 테마를 바꿔도, Extension 내의 색상이 즉시 반영되지 않고 프로그램 재시작 후에야 적용됨\n`,
          },
          {
            icon: 'cause',
          },
          {
            text: `테마 색상은 CSS 변수(var)로 제공되는데, Tailwind config의 theme 속성에 정의된 색상은 `,
          },
          {
            text: `빌드 타임에만 적용`,
            className: 'trouble-important',
          },
          {
            text: `되어 `,
          },
          {
            text: `런타임의 변수 변경`,
            className: 'trouble-important',
          },
          {
            text: `을 감지하지 못함\n`,
          },
          {
            icon: 'solution',
          },
          {
            text: `색상 관련 CSS는 별도의 global.css에서 정의하고, 테마 변수(var(--vscode-foreground) 등)를 직접 참조하도록 구성. Tailwind는 레이아웃·여백·타이포 등 비색상 영역에서만 사용\n`,
          },
          {
            icon: 'result',
          },
          {
            text: `테마 변경이 즉시 반영되어, 재시작 없이 UX 흐름 유지 가능 (변경 반영 시간 0.1초 이내)\n`,
          },
          {
            icon: 'learned',
          },
          {
            text: `색상 클래스 정의 시 Tailwind의 명명 규칙(bg-, text-)을 활용했다면 CSS 유지보수성과 일관성을 더 확보할 수 있었을 것\n`,
          },
        ],
      },
      {
        title: '프롬프트 전환 시 입력 상태 초기화 실패',
        content: [
          {
            icon: 'issue',
          },
          {
            text: '프롬프트 전환 후에도 form 값이 이전 상태에 머무름\n',
          },
          {
            icon: 'cause',
          },
          {
            text: 'React Hook Form의 reset 타이밍이 form 초기값(defaultPrompt)의 변화를 감지하지 못함.\n',
          },
          {
            icon: 'solution',
          },
          {
            text: '- defaultPrompt 변경 시 useMemo + useRef로 변경 감지 → reset() 호출로 폼 초기화\n',
          },
          {
            text: `               - preview에는 postMessage로 전환된 prompt 정보 전달하여 UI 동기화\n`,
          },
          {
            icon: 'result',
          },
          {
            text: '프롬프트 전환 시 UI 전체가 정확하게 초기화되어 사용자 혼란 제거\n',
          },
          {
            icon: 'learned',
          },
          {
            text: '폼 상태 관리를 위해 FormProvider를 적용했다면 중복된 훅 구조나 reset 타이밍 제어를 더 쉽게 처리할 수 있었을 것\n',
          },
        ],
      },
      {
        title: '스냅샷 변경 사항 실시간 반영 누락',
        content: [
          {
            icon: 'issue',
          },
          {
            text: 'TreeView에서 snapshot을 추가하거나 수정해도, form과 preview에 즉시 반영되지 않음\n',
          },
          {
            icon: 'cause',
          },
          {
            text: '폼에 사용되는 snapshot 데이터는 defaultPrompt 내 snapshotAttachList와 별도로 관리되어 동기화가 누락됨\n',
          },
          {
            icon: 'solution',
          },
          {
            text: `attachId 기준으로 snapshotList와 병합 후 form 갱신 후 동기화 유도\n`,
          },
          {
            icon: 'result',
          },
          {
            text: 'form과 preview가 snapshot 추가/삭제 직후에도 정확히 반영되어, 실시간 UX 유지\n',
          },
          {
            icon: 'learned',
          },
          {
            text: 'snapshot 변경 이후 서버 반영까지 자동 처리되도록 debounce 흐름과 자동 저장 로직이 병행되었으면 더욱 완성도 높은 UX를 제공할 수 있었을 것\n',
          },
        ],
      },
    ],
    team: '6명(기여도 25%) †',
  },
  {
    title: 'Chain G',
    period: '2025.02 – 2025.04 (7주)',
    role: 'Frontend Lead / UX Engineer',
    description:
      '친한 사람들과 돈 문제로 어색하지 않도록, 가볍지만 신뢰할 수 있게 정리해주는 코리빙 서비스',
    metrics: [
      { label: '로딩 속도', value: '99.47% 개선' },
      { label: 'Lighthouse', value: '100점' },
      { label: '실시간 반영', value: 'FCM 연동' },
    ],
    technologies: [
      'React',
      'Next.js',
      'Redux Toolkit',
      'D3.js',
      'PWA',
      'Emotion',
      'React Hook Form',
      'Service Worker',
      'FCM',
      'Design System',
      'CI/CD',
      'Figma',
      'Notion',
    ],
    githubUrl: 'https://github.com/JEmilyKoo/Cha-nG',
    // video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image: [
      '/images/chaing.png',
      '/images/chaing1.png',
      '/images/chaing2.png',
      '/images/chaing3.png',
    ],
    troubleshooting: [
      {
        title: '메인 페이지 로딩 성능 개선 (6.3분 → 398ms)',
        content: [
          { icon: 'issue' },
          {
            text: '메인 페이지 첫 진입 시 Finish 시간 기준 6.3분 이상 소요되며, 새로고침에도 캐시가 반영되지 않음\n',
          },
          { icon: 'cause' },
          {
            text: '초기 리소스가 PNG, 커스텀 폰트, 공지 렌더 등으로 과도하게 무거움 (164 requests, 3.7MB transferred)\n',
          },
          { icon: 'solution' },
          {
            text: '\n- 이미지 리소스를 PNG → SVG로 전환하여 용량 절감\n- 웹폰트는 굵기 3종만 포함해 로딩량 축소\n- 공지사항 컴포넌트는 비동기 로딩으로 전환\n- Service Worker 캐시 전략을 통해 재접속 시 리소스 재사용\n',
          },
          { icon: 'result' },
          {
            text: 'Finish 기준 6.3분 → 398ms로 개선 (약 99.9% 향상)\n',
            className: 'trouble-important',
          },
          {
            text: 'DOM 콘텐츠 로딩 시간도 148ms → 19ms로 감소해 반응성 크게 향상\n',
          },
          { icon: 'learned' },
          {
            text: '최초 진입과 새로고침 시 네트워크 로그를 분리해 관리하고, 캐시 대상 우선순위를 정하는 전략이 필요\n',
          },
        ],
      },
      {
        title: '로딩 페이지의 속도 개선',
        content: [
          { icon: 'issue' },
          {
            text: '초기 진입 시 홈 화면 렌더링에 398ms 이상 소요되며 사용자 이탈 발생\n',
          },
          { icon: 'cause' },
          {
            text: 'Emotion 스타일 컴포넌트, 외부 폰트, SVG 애니메이션이 초기 렌더링 블로킹 요소로 작동함\n',
            className: 'trouble-important',
          },
          { icon: 'solution' },
          {
            text: '\n- 로딩 페이지는 별도 구성, Emotion 제거 후 순수 HTML/CSS로 전환\n- 배경 이미지 → CSS 그라데이션, 애니메이션은 inline SVG로 구성\n- 최초 진입 시 43 requests / 36.1kB / 4.3MB 리소스를 229ms 내 로딩\n',
          },
          { icon: 'result' },
          {
            text: '최초 진입 Finish 시간 기준, 398ms → 229ms로 단축\n',
            className: 'trouble-important',
          },
          { icon: 'learned' },
          {
            text: '최초 페이지에는 스타일/이미지를 줄이고, HTML 기반 뼈대만 먼저 그리는 설계가 필수\n',
          },
        ],
      },
      {
        title: 'PWA, Service Worker 적용해 웹앱 최적화',
        content: [
          { icon: 'issue' },
          {
            text: '앱이 매번 리소스를 새로 불러오고, 알림 기능이 제공되지 않음\n',
          },
          { icon: 'cause' },
          {
            text: '캐싱 전략과 푸시 메시지 시스템이 부재\n',
          },
          { icon: 'solution' },
          {
            text: '\n- Service Worker 도입으로 SVG·폰트 등 정적 리소스 캐싱\n- FCM(Firebase Cloud Messaging) 연동으로 실시간 푸시 알림 구성\n- manifest.webmanifest 구성으로 홈 화면 추가(PWA)\n',
          },
          { icon: 'result' },
          {
            text: '웹앱 사용성을 모바일 네이티브에 근접하게 향상\n푸시 알림, 오프라인 대응, 빠른 실행이 가능해짐\n',
          },
          { icon: 'learned' },
          {
            text: 'PWA의 핵심은 UX 최적화가 아니라 캐시 전략과 네트워크 제어임\n',
          },
        ],
      },
      {
        title: 'API 구조 일원화로 인증·에러 처리 자동화 및 타입 안전성 확보',
        content: [
          { icon: 'issue' },
          {
            text: 'API 호출 시마다 인증 토큰 주입과 에러 처리를 반복해야 함\n',
          },
          { icon: 'cause' },
          {
            text: 'axios 인스턴스 없이 각 API 파일마다 요청 설정을 따로 관리하고 있었음\n',
          },
          { icon: 'solution' },
          {
            text: '- api.ts에 단일 axios 인스턴스를 생성해 모든 API 요청을 통합\n- 인터셉터를 통해 accessToken 자동 주입, 에러 발생 시 공통 모듈 handleDefaultError() 호출\n- getRequest<T>, postRequest<T> 등 제네릭 기반의 API 함수로 타입 안정성 확보\n- 백엔드와 공통 응답 스키마(success/fail + data 구조) 협의해 ApiResponse<T>로 정형화\n',
          },
          { icon: 'result' },
          {
            text: 'API 인증 흐름이 단순화되고, 에러 처리 중복 제거로 유지보수성과 개발 속도 모두 향상됨\n',
          },
          { icon: 'learned' },
          {
            text: '초기 API 설계 단계에서 프론트-백 협업을 통한 구조 통일이 이후 전체 생산성을 좌우함\n',
          },
        ],
      },
    ],
    team: '6명(기여도 20%)',
  },
  {
    title: '다와따',
    period: '2025.01 ~ 2024.02 (7주)',
    role: 'Frontend Lead / UI·UX Designer',
    description:
      '실시간 위치 공유 및 최적 장소 추천을 통해 약속 시간을 효율적으로 조율하는 서비스',
    metrics: [
      { label: 'API 응답', value: '99.8% 개선' },
      { label: '빌드 시간', value: '94.7% 단축' },
    ],
    technologies: [
      'React Native',
      'Redux',
      'WebSocket',
      'NativeWind',
      'React Hook Form',
      'S3',
      'Gradle',
      'Figma',
      'Notion',
    ],
    githubUrl: 'https://github.com/JEmilyKoo/dawata',
    image: [
      '/images/dawata.png',
      '/images/dawata (1).png',
      '/images/dawata (2).png',
      '/images/dawata (3).png',
      '/images/dawata (4).png',
      '/images/dawata (5).png',
      '/images/dawata (6).png',
      '/images/dawata (7).png',
      '/images/dawata (8).png',
      '/images/dawata (9).png',
      '/images/dawata (10).png',
      '/images/dawata (11).png',
      '/images/dawata (12).png',
    ],
    troubleshooting: [
      {
        title:
          'Redux 기반 비동기 UI 적용으로 장소 추천 API 응답 속도 99.8% 개선 (240초 → 0.5초)',
        content: [
          {
            text: `- 장소 추천 API 응답이 4분 걸려 UX 저하 문제 발생
- 사용자가 기다리지 않도록 먼저 약속 기본 정보를 입력하도록 개선
- Redux 캐싱을 활용해 기존 추천 장소를 즉시 노출, 이후 백그라운드에서 최신 데이터 갱신
- Redux Persist Storage를 적용하여 재접속 시에도 추천 내역 유지, 중복 API 요청 방지`,
            className: 'text-sm',
          },
        ],
      },
      {
        title: 'Amazon S3 Presigned URL을 활용한 이미지 업로드 개선',
        content: [
          {
            text: `- Presigned URL을 사용한 프로필 이미지 업로드 과정에서 바이너리 데이터 인증 오류 발생
- 업로드 전 이미지 리사이징 및 PNG 변환 적용 → 서버가 요구하는 확장자 규격을 준수하도록 수정`,
            className: 'text-sm',
          },
        ],
      },
      {
        title: 'CI/CD 자동화 및 APK 빌드 속도 개선',
        content: [
          {
            text: `- Android Native Module, FCM, Kakao SDK 추가 후 빌드 시간이 급격히 증가(38분 소요)
- Gradle 빌드 최적화 적용 →APK 빌드 시간 94.7% 단축 (38분 → 2분)`,
            className: 'text-sm',
          },
        ],
      },
    ],
    team: '6명(기여도 20%)',
  },
  {
    title: '트매',
    period: '2024.10 ~ 2024.11 (2주)',
    role: '팀장 / 기획·총괄 / UI 개발',
    description: 'AI LLM을 활용한 음성 대화 트립 매니징 서비스',
    metrics: [
      { label: 'STT', value: '실시간화' },
      { label: 'WebSocket', value: '동기화' },
      { label: 'OpenAI', value: '토큰 최적화' },
    ],
    technologies: [
      'Vue3',
      'Spring Boot',
      'OpenAI',
      'WebSocket',
      'TMap',
      'AI',
      'Figma',
    ],
    githubUrl: 'https://github.com/SSAFY-12th-18c-TripManager/FE',
    image: [
      '/images/tm.png',
      '/images/tm2.png',
      '/images/tm3.png',
      '/images/tm4.png',
    ],
    troubleshooting: [
      {
        title:
          'STT 기능을 AI를 사용하고 RestAPI를 사용할 경우 딜레이 과다 발생',
        content: [
          {
            text: `- STT를 브라우저 내장 기능으로 사용하되, 무음 인식 교정 컴포넌트 추가 구현
- RestAPI 대신 WebSocket을 이용해 속도 최적화`,
            className: 'text-sm',
          },
        ],
      },
      {
        title:
          'WebSocket으로 소리와 JSON을 동시에 보낼 경우 Spring 핸들러 미인식 오류',
        content: [
          {
            text: `- STT : FE단에서 처리하고 TextMessage만 BE로 전송
- TTS :  BianaryMessage를 AudioBlob 형식으로 전송함과 동시에 해당 Json을 TextMessage로 전송한 뒤 싱크 맞추기 작업 추가`,
            className: 'text-sm',
          },
        ],
      },
      {
        title: '프롬프트가 길 경우 Open AI 타임 아웃 이슈 발생',
        content: [
          {
            text: `- 프롬프트 엔지니어링을 이용한 토큰 최적화
- 실제로 다루는 메시지의 가공을 통한 토큰 수 최적화`,
            className: 'text-sm',
          },
        ],
      },
    ],
    team: '2명(기여도 55%)',
  },
  {
    title: 'bizmekaTalk 3.0',
    period: '2021.11 ~ 2024.01',
    role: `    개발: 조직도/그룹/쪽지/메신저 기능 FE 전담 개발
    유지 보수: 오류 수정, QA, 배포(Paskal로 설치 파일 제작)
    R&D : UI/UX의 편의성 증가, 접기 기능 개발`,
    description:
      '그룹웨어 신규 솔루션의 PC 클라이언트 프론트엔드 개발과 운영을 담당. 쪽지 기능을 전담 개발하고, 설계 및 기술 스택 선정 단계부터 참여함. 고객사 요구에 따른 옵션 기능 구현과 SaaS 대응을 위해 SSR SPA 구조로 개발함.',
    metrics: [],
    technologies: [
      'JavaScript',
      'Vue.js',
      'HTML5',
      'CSS',
      'i18n',
      'Nuxt',
      'Vuetify',
      'C#',
      'WPF',
      'Webview2',
      'Webpack',
      'Pascal',
      'Inno Setup',
      'MariaDB',
    ],
    image: [
      '/images/bizmekatalk (1).jpg',
      '/images/bizmekatalk (2).jpg',
      '/images/bizmekatalk (3).jpg',
      '/images/bizmekatalk (4).jpg',
      '/images/bizmekatalk (5).jpg',
      '/images/bizmekatalk (6).jpg',
      '/images/bizmekatalk (7).jpg',
    ],
    troubleshooting: [
      {
        title: '일부 환경에서 절전모드 미인식',
        content: [
          {
            text: 'Windows OS별 절전모드 구현 차이를 고려해 와이파이 변경 감지 기능을 수정함',
            className: 'text-sm',
          },
        ],
      },
      {
        title: 'Webview의 새 창끼리의 데이터 동기화 문제',
        content: [
          {
            text: 'Session Storage를 활용하여 Webview 간 데이터 동기화 기능 구현',
            className: 'text-sm',
          },
        ],
      },
    ],
    team: '㈜가온아이 MI개발부 중 3~6명 (기여도 30%)',
  },
  {
    title: 'Pratama',
    period: '2023.06 ~ 2023.09',
    role: '다국어 처리, 리소스 파일 설계 및 적용, UI/UX 커스터마이징, QA 및 유지보수',
    description:
      '그룹웨어 솔루션의 글로벌 출시를 위한 다국어 지원 및 커스터마이징 프로젝트. PC와 모바일 리소스를 통합하고, 반응형 UI로 개편. 사용자 기본 언어 기반 설치 파일 제작 등 전반적인 다국어 대응 체계를 구축함.',
    metrics: [],
    technologies: [
      'JavaScript',
      'Vue.js',
      'HTML5',
      'CSS',
      'i18n',
      'webpack',
      'Nuxt',
      'Vuetify',
      'C#',
      'WPF',
      'Webview2',
      'Pascal',
      'Inno Setup',
      'MariaDB',
    ],
    image: ['/images/pratama.jpg'],
    troubleshooting: [
      {
        title: '날짜 표기 방식 불일치',
        content: [
          {
            text: '인도네시아 언어의 특성을 고려하여 날짜 형식을 재조정함',
            className: 'text-sm',
          },
        ],
      },
      {
        title: 'UI 대비 과도한 번역 문자열',
        content: [
          {
            text: 'UI를 반응형으로 수정하고, 번역문 조정 작업을 외부 번역 인력과 조율하여 해결함',
            className: 'text-sm',
          },
        ],
      },
    ],
    team: '㈜가온아이 MI개발부 중 4명 + 외부 번역 인력 (기여도 60%)',
  },
  {
    title: 'KumTalk',
    period: '2021.11 ~ 2022.09',
    role: '조직도/그룹/설정 기능 개발, 대화방 및 환자 대화방 오류 수정, 유지보수 및 배포',
    description:
      '고려대학교의료원의 그룹웨어 클라이언트 커스터마이징 프로젝트. 조직도와 그룹, 설정 기능 개발을 비롯하여, 환자 대화방 기능을 Vue 컴포넌트로 모듈화. 자사 그룹웨어 연동 기능과 설치 파일 제작, 원격 지원 및 운영까지 담당.',
    metrics: [
      { label: '팀 규모', value: '6명 (메인 2명, 서브 4명)' },
      { label: '기여도', value: '25%' },
    ],
    technologies: [
      'JavaScript',
      'Vue.js',
      'HTML5',
      'CSS',
      'Nuxt',
      'webpack',
      'Vuetify',
      'C#',
      'WPF',
      'Webview2',
      'Pascal',
      'Inno Setup',
    ],
    image: ['/images/kumtalk.jpg', '/images/kumtalk2.jpg'],
    troubleshooting: [
      {
        title: '메시지 내 링크 검색 시 UI 깨짐 현상',
        content: [
          {
            text: 'DOM 구조 분석 후 CSS 리팩토링을 통해 해결',
            className: 'text-sm',
          },
        ],
      },
      {
        title: 'Props 남용으로 인한 중복 코드',
        content: [
          {
            text: '이벤트 버스를 활용한 코드 리팩토링으로 중복 제거',
            className: 'text-sm',
          },
        ],
      },
    ],
    team: '㈜가온아이 MI개발부',
  },
]

export default projects
