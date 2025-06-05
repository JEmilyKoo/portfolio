'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { Project } from '@/types/project'

interface ProjectListProps {
  projects: Project[]
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section
      id="projects"
      className="max-w-[900px] mx-auto mb-24 pt-12 px-4">
      <div className="h-[300px]"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">프로젝트</h2>
        <p className="text-lg text-subText ">
          사용자 경험을 개선하고 성능을 최적화한 프로젝트들입니다.
        </p>
        <p className="text-xs italic text-secondary mt-2">
          † 기여도는 기획·개발·디버깅 등 주요 기여 영역 기준으로 산정했습니다.
        </p>
      </motion.div>

      <div className="space-y-16">
        {projects.map((project: Project, index: number) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
