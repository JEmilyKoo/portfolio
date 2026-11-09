import { Project } from '@/types/project'

const projects: Project[] = [
  {
    title: '보배드림 전면 리뉴얼',
    period: '2026.09 ~ 재직 중',
    role: `㈜보배네트워크 사원(계약직). 론칭 직전 합류해 론칭까지 참여
    담당: 커뮤니티 피드 무한 스크롤, 커뮤니티 마이페이지, 맞춤 피드 편집, 통합 검색(/search), 마이페이지·회원 정보, 중고차 목록 필터·차량 상세·딜러 페이지, QA 수정`,
    description:
      'MAU 1,400만 자동차 커뮤니티·중고차 서비스의 전면 리뉴얼. 초기 구조와 기본 기능은 기존 팀원이 개발했고, 합류 후 신규 화면 개발과 QA 수정을 맡음.',
    metrics: [
      { label: '1,000번째 글 복원', value: '오차 0px' },
      { label: '1,002건 로드 시 렌더링 카드', value: '3~5개' },
      { label: '한글 카테고리 URL', value: '6종' },
    ],
    technologies: [
      'Nuxt 4',
      'Vue 3',
      'TypeScript',
      'TanStack Virtual',
      'es-hangul',
      'Playwright',
      'Codex',
    ],
    image: [
      '/images/bobaedream 1.png',
      '/images/bobaedream 2.png',
      '/images/bobaedream 3.png',
      '/images/bobaedream 4.png',
      '/images/bobaedream 5.png',
      '/images/bobaedream 6.png',
    ],
    troubleshooting: [
      {
        title: '커뮤니티 피드 무한 스크롤과 뒤로가기 위치 복원 (단독 구현)',
        content: [
          { icon: 'issue' },
          {
            text: `카드 높이(본문, 투표, 이미지, 영상)가 제각각이라 글 상세에서 뒤로가기를 하면 보던 위치를 정확히 복원하기 어려움\n`,
          },
          { icon: 'solution' },
          {
            text: `- TanStack Virtual로 가상 스크롤 적용, 카드 실측 평균을 근사한 추정 높이(273.2px)로 위치 계산
- 최대 1,200건 보관, 캐시가 있으면 뒤로가기 시 목록을 다시 요청하지 않음
- 커뮤니티를 복제한 테스트 페이지와 성능 로깅 페이지(긴 작업, 입력 지연, 메모리, 프레임 간격)로 성능 저하 여부 확인
- 테스트 코드 작성(상태 로직 테스트 90개 통과)\n`,
          },
          { icon: 'result' },
          {
            text: `1,000번째 글에서 뒤로가기 시 같은 위치(오차 0px)로 복원, 목록 재요청 0회`,
            className: 'trouble-important',
          },
          {
            text: `\n- 1,002건을 불러온 상태에서도 렌더링 카드 3~5개, 스크롤 프레임 중앙값 16.7ms
- 측정: 2026-11-09 Playwright, 로컬 개발 서버, PC 1440×900`,
          },
        ],
      },
      {
        title: '통합 검색 API 호출 91회 → 2회',
        content: [
          { icon: 'issue' },
          {
            text: `중고차·커뮤니티 결과를 함께 보여주는 신규 검색 페이지에서, 검색 1회에 API가 91회 호출됨\n`,
          },
          { icon: 'cause' },
          {
            text: `설계를 다 파악하지 않은 채 기본 차량 필터 API를 비효율적으로 조합함\n`,
          },
          { icon: 'solution' },
          {
            text: `- 백엔드 담당자에게 맞는 API와 사용법을 확인해 검색 API 2개(중고차 1, 커뮤니티 1)만 쓰도록 수정
- 모호했던 설계 문서를 "더보기 클릭으로만 추가 로드, 뒤로가기 위치 복원은 유지"처럼 행동 단위로 다시 작성\n`,
          },
          { icon: 'result' },
          {
            text: `검색 1회당 API 91회 → 2회, 스크롤 시 추가 호출 0회`,
            className: 'trouble-important',
          },
        ],
      },
      {
        title: '차량 목록 한글 카테고리 URL',
        content: [
          {
            text: `- 기존 코드는 영문 카테고리만 인식해 /car/list/슈퍼카 를 제조사 이름으로 잘못 처리함
- 국산차·수입차·올드카·슈퍼카·숏폼카·전기차 6개 카테고리를 한글 주소로 열 수 있게 라우팅 수정, 기존 영문·제조사 주소도 유지
- 수정 전후 측정 결과 한글 주소도 영문 주소와 같은 API 4회로 동작`,
            className: 'text-sm',
          },
        ],
      },
      {
        title: '맞춤 피드 메뉴 드래그 버그 (원인 3가지)',
        content: [
          {
            text: `- 고정 항목 정렬 로직(본인 작성)이 사용자가 바꾼 순서를 되돌림 → 사용자 편집 순서를 우선 적용
- PC에서 브라우저 기본 드래그가 포인터 이벤트를 가로챔 → 기본 드래그를 막고 이벤트를 window에서 추적
- 드래그와 무관한 포인터 입력이 드래그를 종료시킴 → 같은 pointerId일 때만 종료
- PC·모바일 모두 정상 동작, QA 리포트 해결`,
            className: 'text-sm',
          },
        ],
      },
    ],
    team: '6명(개발자 4, 디자이너 1, 팀장 1)',
  },
  {
    title: 'Vibe Editor',
    period: '2025.04 ~ 2025.05 (6주)',
    role: '프론트엔드 개발 / VS Code 확장 프로그램 개발',
    description:
      'VS Code에서 코드/디렉토리/로그 스냅샷을 찍고, AI 도움으로 기술 블로그 초안을 Notion에 게시하는 확장 프로그램',
    metrics: [],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'VSCode Extension',
      'Notion API',
      'AI : Prompt Engineering',
      'Jenkins',
      'UX Writing',
      'Figma',
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
        title: 'Jenkins 프론트엔드 파이프라인: 캐시 잔존과 빌드 실패 코드 머지',
        content: [
          { icon: 'issue' },
          {
            text: `- 이전 빌드의 캐시 파일이 남아 빌드해도 결과물이 올바르지 않음
               - 빌드에 실패하는 코드가 머지된 뒤에야 자동 배포 단계에서 실패가 드러남\n`,
          },
          { icon: 'solution' },
          {
            text: `- 빌드 명령을 "캐시 정리 후 빌드"와 "빌드만" 두 가지로 나눔
               - 머지 시점에 빌드가 되지 않으면 배포하지 않도록 파이프라인 수정\n`,
          },
          { icon: 'result' },
          {
            text: `빌드되지 않는 코드가 프로덕션에 머지되는 일을 막음\n`,
            className: 'trouble-important',
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
    team: '6명(기여도 25%)',
  },
  {
    title: 'Chain G',
    period: '2025.02 ~ 2025.04 (7주)',
    role: '프론트엔드 개발 / 디자인 시스템·공통 컴포넌트 개발',
    description:
      '친한 사람들과 돈 문제로 어색하지 않도록, 가볍지만 신뢰할 수 있게 정리해주는 코리빙 서비스',
    metrics: [
      { label: '메인 로딩', value: '7초 → 0.37초' },
      { label: 'Lighthouse 접근성·SEO 등 4개 항목', value: '100점' },
      { label: '실시간 반영', value: 'FCM 연동' },
    ],
    technologies: [
      'React',
      'Next.js',
      'Redux Toolkit',
      'Emotion',
      'Design System',
      'PWA',
      'Service Worker',
      'D3.js',
      'FCM',
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
        title: '메인 페이지 로딩 성능 개선 (DOMContentLoaded 7초 → 0.37초)',
        content: [
          { icon: 'issue' },
          {
            text: '메인 페이지 첫 진입 시 DOMContentLoaded까지 7초가 걸리고, 새로고침에도 캐시가 반영되지 않음\n',
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
            text: 'DOMContentLoaded 기준 7초 → 0.37초로 개선 (Chrome DevTools)\n',
            className: 'trouble-important',
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
            text: '로딩 화면 자체가 무거워 첫 화면이 늦게 나타남\n',
          },
          { icon: 'cause' },
          {
            text: 'Emotion 스타일 컴포넌트, 외부 폰트, SVG 애니메이션이 초기 렌더링 블로킹 요소로 작동함\n',
            className: 'trouble-important',
          },
          { icon: 'solution' },
          {
            text: '\n- 로딩 페이지는 별도 구성, Emotion 제거 후 순수 HTML/CSS로 전환\n- 배경 이미지 → CSS 그라데이션, 애니메이션은 inline SVG로 구성\n',
          },
          { icon: 'result' },
          {
            text: '로딩 화면이 바로 나타나도록 개선 (메인 로딩 전체는 DOMContentLoaded 7초 → 0.37초)\n',
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
    period: '2025.01 ~ 2025.02 (7주)',
    role: '프론트엔드 주요 화면 개발 / UI 디자인',
    description:
      '실시간 위치 공유 및 최적 장소 추천을 통해 약속 시간을 효율적으로 조율하는 서비스',
    metrics: [
      { label: '추천 결과 첫 표시', value: '240초 → 0.5초' },
      { label: 'APK 빌드', value: '38분 → 2분' },
    ],
    technologies: [
      'React Native',
      'Redux',
      'WebSocket',
      'S3',
      'Gradle',
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
          '캐시된 추천 결과를 먼저 보여 줘 첫 표시까지 240초 → 0.5초 (API 자체 응답 시간은 그대로)',
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
- Gradle 빌드 설정 조정 → APK 빌드 시간 38분 → 2분`,
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
    role: '기획 / UI 개발 / 음성 대화 기능 개발',
    description: 'AI LLM을 활용한 음성 대화 트립 매니징 서비스',
    metrics: [],
    technologies: [
      'Vue3',
      'Spring Boot',
      'OpenAI API',
      'Prompt Engineering',
      'WebSocket',
      'TMap',
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
- TTS :  BinaryMessage를 AudioBlob 형식으로 전송함과 동시에 해당 Json을 TextMessage로 전송한 뒤 싱크 맞추기 작업 추가`,
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
    role: `    개발: 조직도/그룹/메신저 기능 개발, 쪽지 기능 전담 개발
    유지 보수: 오류 수정, QA, 배포(Pascal로 설치 파일 제작)
    R&D : UI/UX의 편의성 증가, 접기 기능 개발`,
    description:
      '그룹웨어 신규 솔루션의 PC 클라이언트 프론트엔드 개발과 운영을 담당. 쪽지 기능을 전담 개발하고, 설계 및 기술 스택 선정 단계부터 참여함. 고객사 요구에 따른 옵션 기능 구현과 SaaS 대응을 위해 SSR SPA 구조로 개발함.',
    metrics: [],
    technologies: [
      'Vue.js',
      'Nuxt',
      'Vuetify',
      'i18n',
      'C#',
      'WPF',
      'Webview2',
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
      '그룹웨어 솔루션의 글로벌 출시를 위한 다국어 지원 및 커스터마이징 프로젝트. PC와 모바일 리소스를 통합하고, 반응형 UI로 개편. 사용자 기본 언어 기반 설치 파일 제작 등 6개 국어 리소스를 통합함.',
    metrics: [],
    technologies: [
      'Vue.js',
      'Nuxt',
      'i18n',
      'Vuetify',
      'C#',
      'WPF',
      'Webview2',
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
      'Vue.js',
      'Nuxt',
      'Vuetify',
      'C#',
      'WPF',
      'Webview2',
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
  {
    title: '찍Go',
    period: '2021.07 ~ 2021.08',
    role: '기획 / 서버·개발 환경 구성 / DB 설계 / 프로필·업적·레벨 로직 구현 / UI 개발 / 안드로이드 개발',
    description:
      '게이미피케이션을 접목한 여행 정보 공유 서비스 (한국소프트웨어인재개발원 Java 개발자 과정 팀 프로젝트)',
    metrics: [],
    technologies: ['Java', 'Spring', 'Oracle', 'WebSocket', 'Android SDK', 'Bootstrap'],
    image: ['/images/StampGO.png'],
    troubleshooting: [
      {
        title: '구현 내용',
        content: [
          {
            text: `- Spring 기반 REST API 개발
- WebSocket으로 채팅 기능 개발
- 수행한 미션에 따라 뱃지·스탬프·업적을 자동으로 얻는 로직 구현
- Oracle DB 설계, Bootstrap으로 화면 구현`,
            className: 'text-sm',
          },
        ],
      },
      {
        title: '팀 협업',
        content: [
          {
            text: `- 팀원의 요청과 이해도를 파악해 맞춤형 스터디 진행
- 코로나 시기에 매주 1~3회 화상·대면 회의로 진행 상황 공유`,
            className: 'text-sm',
          },
        ],
      },
    ],
    team: '6명(기여도 25%)',
  },
]

export default projects
