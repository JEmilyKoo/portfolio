import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';
import projects from '../components/projects';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import ThemeToggle from '../components/ThemeToggle';
import { Project } from '../components/ProjectCard';

function getSafeProjects(p: unknown): Project[] {
  if (Array.isArray(p)) return p;
  // ESM/CJS 변환 문제로 객체에 default가 배열로 들어오는 경우
  if (p && typeof p === 'object' && Array.isArray((p as { default?: unknown }).default)) {
    return (p as { default: Project[] }).default;
  }
  return [];
}

const safeProjects = getSafeProjects(projects);

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectList projects={safeProjects} />
      <Contact />
      <ThemeToggle />
    </>
  );
}
