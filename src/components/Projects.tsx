import ProjectCard, { Project } from './ProjectCard';

const projects: Project[] = [
  // ... 실제 프로젝트 데이터 ...
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-[1000px] mx-auto mb-24 pt-12 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
        <span className="text-primary">주요 프로젝트</span>
      </h2>
      <div className="flex flex-col gap-12">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
} 