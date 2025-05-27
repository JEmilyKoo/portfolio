export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] pt-24 px-4 pb-16 bg-background text-text transition-colors">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center leading-tight tracking-tight">
        구정은 <span className="text-primary">Emily Koo</span>
        <br />
        <span className="text-2xl md:text-3xl font-semibold text-subText block mt-2">실무형 프론트엔드 개발자</span>
      </h1>
      <p className="text-lg md:text-xl text-subText mb-8 text-center max-w-2xl font-medium">
        <span className="font-semibold text-primary">React/TypeScript 기반 SPA, 디자인 시스템, 성능 최적화, UI/UX 개선</span>에 강점이 있습니다.<br className="hidden md:inline" />
        글로벌 협업과 최신 트렌드(AI, PWA, SSR, DevOps)까지 경험한 <span className="font-semibold text-accent">실전형 개발자</span>입니다.
      </p>
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">React</span>
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">Next.js</span>
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">TypeScript</span>
        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">AI</span>
        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">PWA</span>
        <span className="px-3 py-1 rounded-full bg-subText/10 text-subText text-sm font-semibold">Figma</span>
        <span className="px-3 py-1 rounded-full bg-subText/10 text-subText text-sm font-semibold">Notion</span>
        <span className="px-3 py-1 rounded-full bg-subText/10 text-subText text-sm font-semibold">DevOps</span>
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/20250421%20구정은%20이력서.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-lg bg-primary text-white font-semibold text-base shadow-custom transition-all duration-200 hover:bg-accent hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          이력서 다운로드
        </a>
        <a
          href="https://github.com/JEmilyKoo"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-lg border border-primary text-primary font-semibold text-base bg-surface dark:bg-background shadow-custom transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          GitHub
        </a>
        <a
          href="#projects"
          className="px-7 py-3 rounded-lg border border-accent text-accent font-semibold text-base bg-surface dark:bg-background shadow-custom transition-all duration-200 hover:bg-accent hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent"
        >
          프로젝트 바로가기
        </a>
      </div>
    </section>
  );
} 