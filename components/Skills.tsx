'use client';

const skills = [
  { name: 'React', level: 95, desc: [
    '컴포넌트 설계: 재사용성과 유지보수 고려',
    'Redux Toolkit + TypeScript: 타입 안전성 보장',
    '미들웨어: 비동기 처리 구현',
    '커스텀 훅: 관심사 분리'
  ]},
  { name: 'TypeScript', level: 90, desc: [
    '제네릭: ApiResponse<T> 타입 시스템',
    'Redux: 상태/액션 타입 정의',
    '유틸리티 타입: Omit, Pick 등',
    '컴포넌트 props 타입 관리'
  ]},
  { name: 'Next.js', level: 85, desc: [
    'SSR/SSG: 성능 최적화, SEO',
    '동적 라우팅: 인증 처리',
    'Image/Link: 웹 성능 최적화',
    'PWA: 앱과 유사한 UX'
  ]},
  { name: 'Vue.js', level: 80, desc: [
    '사용자 정의 컴포넌트',
    'Nuxt: SSR 환경 구축',
    '이벤트: 버블링/캡쳐링 제어',
    'Vuetify: CSS 스타일링'
  ]},
  { name: 'React Native', level: 80, desc: [
    '크로스 플랫폼: iOS/Android/Web',
    'Expo/NativeWind: UI 구현',
    'Redux + TypeScript: 상태 관리',
    'FCM: 알림, 위치 추적'
  ]},
  { name: 'JavaScript', level: 90, desc: [
    '비동기: Promise, async/await',
    'Axios: 인터셉터, 요청 처리',
    'FCM: 실시간 알림',
    '메모리: 클린업 함수'
  ]},
  { name: 'Java', level: 70, desc: [
    'Spring: Restful API',
    '알고리즘: 문제 해결',
    'Stream API: 데이터 처리',
    'Android: 코드 이해'
  ]},
  { name: 'C#', level: 60, desc: [
    'WPF: 웹앱 개발',
    'MVC: 백엔드 연동',
    'Webview2: OS 에러 처리',
    '그룹웨어: 실무 경험'
  ]},
];

const softSkills = [
  '커뮤니케이션',
  '코드리뷰',
  '문제해결',
  '애자일/Scrum',
  '글로벌 협업(영/일)',
  'DevOps',
  'UI/UX 설계',
  '테스트/QA',
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-[900px] mx-auto mb-24 pt-12 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
        <span className="text-primary">기술</span> & <span className="text-accent">역량</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {skills.map((s) => (
          <div
            key={s.name}
            className="bg-surface border border-border rounded-2xl shadow-custom p-6 flex flex-col items-start transition hover:scale-[1.03] hover:shadow-lg"
          >
            <div className="flex items-center w-full mb-2">
              <span className="font-bold text-primary text-lg mr-2">{s.name}</span>
              <span className="ml-auto text-xs text-subText font-mono">{s.level}%</span>
            </div>
            <div className="w-full h-2 bg-border rounded mb-3 relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent rounded transition-all duration-500"
                style={{ width: `${s.level}%` }}
              />
            </div>
            <ol className="text-subText text-[0.98rem] list-decimal list-inside space-y-1">
              {s.desc.map((item, index) => (
                <li key={index} className="pl-1">{item}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {softSkills.map((s) => (
          <span
            key={s}
            className="bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-semibold border border-primary/20"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
} 