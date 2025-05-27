import ProjectCard, { Project } from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section id="projects" className="pt-12 pb-8 bg-background">
      <h2 className="text-2xl font-bold text-text text-center mb-10">주요 프로젝트</h2>
      {projects.map((project, idx) => (
        <ProjectCard key={project.title + idx} {...project} />
      ))}
    </section>
  );
} 