'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { Project } from '@/types/project'

interface ProjectListProps {
  projects: Project[]
  intro?: string
  pdf?: boolean
}

export default function ProjectList({ projects, intro, pdf = false }: ProjectListProps) {
  return (
    <section
      id="projects"
      className={`max-w-[900px] mx-auto px-4 ${pdf ? 'break-before-page' : 'mb-24 pt-12'}`}>
      <motion.div
        initial={pdf ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`text-center ${pdf ? 'mb-6' : 'mb-12'}`}>
        <h2 className={`${pdf ? 'text-3xl mb-2' : 'text-3xl md:text-4xl mb-4'} font-extrabold`}>프로젝트</h2>
        <p className={`${pdf ? 'text-base' : 'text-lg'} text-subText`}>
          {intro ?? '직접 개발한 화면과 문제 해결 과정입니다.'}
        </p>
        <p className="text-xs italic text-secondary mt-2">
          기여도는 기획·개발·디버깅 등 주요 기여 영역 기준으로 산정했습니다.
        </p>
      </motion.div>

      <div className={pdf ? '' : 'space-y-16'}>
        {projects.map((project: Project, index: number) => (
          <motion.div
            key={project.title}
            initial={pdf ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={pdf && index > 0 ? 'break-before-page' : ''}>
            {/* 첫 카드는 섹션 제목과 같은 페이지에 두고, 두 번째부터 새 페이지에서 시작.
                PDF 모드에서는 바깥 div에서 나눠 위쪽 여백이 새 쪽 머리에 남지 않게 한다. */}
            <ProjectCard {...project} pageBreak={!pdf && index > 0} pdf={pdf} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
