export interface Project {
  title: string;
  period: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  metrics?: string[]; // 성과 수치
  tags?: string[]; // 기술/협업/AI/테스트 등
  github?: string;
  demo?: string;
  ai?: boolean;
}

export default function ProjectCard({
  title,
  period,
  role,
  description,
  problem,
  solution,
  result,
  metrics,
  tags,
  github,
  demo,
  ai,
}: Project) {
  return (
    <article className="bg-surface border border-border rounded-2xl shadow-custom px-8 py-8 mb-16 max-w-[900px] mx-auto flex flex-col gap-8 transition hover:scale-[1.01] hover:shadow-lg">
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h2 className="text-2xl md:text-3xl font-extrabold text-text m-0">
          {title}
        </h2>
        {ai && (
          <span className="bg-accent/10 text-accent text-xs font-bold rounded px-2 py-0.5 ml-1 border border-accent/30">AI</span>
        )}
        <span className="ml-auto text-sm text-subText font-mono">{period}</span>
        <span className="text-sm text-primary font-semibold ml-2">{role}</span>
      </div>
      <p className="text-base text-subText m-0 mb-2 font-semibold">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-background rounded-xl p-4 border border-border/50">
          <div className="text-xs font-bold text-primary mb-1 tracking-widest uppercase">문제</div>
          <div className="text-text text-sm whitespace-pre-line">{problem}</div>
        </div>
        <div className="bg-background rounded-xl p-4 border border-border/50">
          <div className="text-xs font-bold text-primary mb-1 tracking-widest uppercase">구조 설계</div>
          <div className="text-text text-sm whitespace-pre-line">{solution}</div>
        </div>
        <div className="bg-background rounded-xl p-4 border border-border/50">
          <div className="text-xs font-bold text-primary mb-1 tracking-widest uppercase">성과</div>
          <div className="text-text text-sm whitespace-pre-line">{result}</div>
        </div>
      </div>
      {metrics && metrics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {metrics.map((m, i) => (
            <span key={i} className="bg-primary/10 text-primary font-bold rounded-full px-4 py-1 text-sm border border-primary/20">
              {m}
            </span>
          ))}
        </div>
      )}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((t, i) => (
            <span key={i} className="bg-border text-subText rounded-full px-3 py-1 text-xs font-semibold border border-border/40">
              {t}
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-4 mt-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg border border-primary text-primary font-semibold text-base bg-surface dark:bg-background shadow-custom transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg border border-accent text-accent font-semibold text-base bg-surface dark:bg-background shadow-custom transition-all duration-200 hover:bg-accent hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Demo
          </a>
        )}
      </div>
    </article>
  );
} 