'use client';

const skills = [
  { name: 'React', level: 95, desc: 'SPA, 디자인 시스템, 상태관리, Chain G/다와따' },
  { name: 'TypeScript', level: 90, desc: '타입 안전성, 제네릭, 상태관리, 대규모 프로젝트' },
  { name: 'Next.js', level: 85, desc: 'SSR/SSG, SEO, PWA, Chain G' },
  { name: 'Vue.js', level: 80, desc: 'Nuxt, SSR, 그룹웨어/의료 프로젝트' },
  { name: 'React Native', level: 80, desc: 'iOS/Android/Web 통합, 다와따' },
  { name: 'JavaScript', level: 90, desc: '비동기, 이벤트, 인터셉터, 전 프로젝트' },
  { name: 'Java', level: 70, desc: 'Spring, Rest API, 알고리즘, SSAFY' },
  { name: 'C#', level: 60, desc: 'WPF, Webview2, 그룹웨어' },
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
            <div className="text-subText text-[0.98rem] min-h-[2.5rem]">{s.desc}</div>
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