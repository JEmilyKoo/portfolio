'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { TrackConfig } from './tracks'

export default function Hero({
  config,
  pdf = false,
  webUrl,
}: {
  config: TrackConfig
  pdf?: boolean
  webUrl: string
}) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] pt-24 px-4 pb-16 bg-background text-text transition-colors w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <span className="block text-text ">구정은</span>
          <span className="block text-primary  mt-2">Emily Koo</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-subText  mb-8 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          {config.tagline}
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-subText  mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}>
          {config.intro.before}
          <span className="font-semibold text-primary ">
            {config.intro.highlight}
          </span>
          {config.intro.after}
        </motion.p>

        <motion.div
          className="flex flex-col flex-wrap gap-2 mb-12 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}>
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {config.primaryPills.map((pill) => (
              <span
                key={pill}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary   text-sm font-semibold hover:bg-primary/20  transition-colors">
                {pill}
              </span>
            ))}
          </div>
          {/* 2줄: 직무별 핵심 역량 3개와 근거 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl w-full">
            {config.competencies.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-border bg-surface px-4 py-3 text-left">
                <div className="text-sm font-bold text-text">{c.title}</div>
                <div className="text-xs text-subText mt-1">{c.evidence}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {pdf ? (
          <>
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}>
              <a
                href={webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-8 py-3 rounded-lg bg-primary text-white  font-semibold text-base ">
                웹페이지에서 보기
                <FaExternalLinkAlt className="ml-1" />
              </a>
            </motion.div>
            <div className="font-semibold text-2xl text-accent mt-4">
              해당 PDF는 웹페이지에서 더 편하게 감상하실 수 있습니다.
            </div>
          </>
        ) : (
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}>
          <a
            href={config.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-primary text-white  font-semibold text-base shadow-custom transition-all duration-200 hover:bg-accent hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary hover:scale-105">
            PDF로 다운로드
          </a>
          <a
            href="https://github.com/JEmilyKoo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border border-primary text-primary   font-semibold text-base bg-surface  shadow-custom transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary hover:scale-105">
            GitHub
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg border border-accent text-accent   font-semibold text-base bg-surface  shadow-custom transition-all duration-200 hover:bg-accent hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent hover:scale-105">
            프로젝트 바로가기
          </a>
        </motion.div>
        )}
      </motion.div>
    </section>
  )
}
