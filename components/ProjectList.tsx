'use client';

import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import projects from './projects';

export default function ProjectList() {
  return (
    <section id="projects" className="max-w-[900px] mx-auto mb-24 pt-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">프로젝트</h2>
        <p className="text-lg text-subText dark:text-gray-300">
          사용자 경험을 개선하고 성능을 최적화한 프로젝트들입니다.
        </p>
      </motion.div>

      <div className="space-y-16">
        {projects.map((project: Project, index: number) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
} 