'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] pt-24 px-4 pb-16 bg-background text-text transition-colors dark:bg-neutral-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-text dark:text-white">구정은</span>
          <span className="block text-primary dark:text-blue-400 mt-2">Emily Koo</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-subText dark:text-gray-300 mb-8 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          사용자 경험에 진심인 프론트엔드 개발자
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-subText dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="font-semibold text-primary dark:text-blue-400">React/TypeScript 기반 SPA, 디자인 시스템, 성능 최적화, UI/UX 개선</span>에 강점이 있습니다.<br className="hidden md:inline" />
          글로벌 협업과 최신 트렌드(AI, PWA, SSR, DevOps)까지 경험한 <span className="font-semibold text-accent dark:text-teal-400">실전형 개발자</span>입니다.
        </motion.p>

        <motion.div
          className="flex flex-col flex-wrap gap-2 mb-12 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-blue-400/10 dark:text-blue-400 text-sm font-semibold hover:bg-primary/20 dark:hover:bg-blue-400/20 transition-colors">React</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-blue-400/10 dark:text-blue-400 text-sm font-semibold hover:bg-primary/20 dark:hover:bg-blue-400/20 transition-colors">Next.js</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-blue-400/10 dark:text-blue-400 text-sm font-semibold hover:bg-primary/20 dark:hover:bg-blue-400/20 transition-colors">TypeScript</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-blue-400/10 dark:text-blue-400 text-sm font-semibold hover:bg-primary/20 dark:hover:bg-blue-400/20 transition-colors">JavaScript</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-blue-400/10 dark:text-blue-400 text-sm font-semibold hover:bg-primary/20 dark:hover:bg-blue-400/20 transition-colors">Vue.js</span>
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent dark:bg-teal-400/10 dark:text-teal-400 text-sm font-semibold hover:bg-accent/20 dark:hover:bg-teal-400/20 transition-colors">AI : Prompt Engineering</span>
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent dark:bg-teal-400/10 dark:text-teal-400 text-sm font-semibold hover:bg-accent/20 dark:hover:bg-teal-400/20 transition-colors">AI : Agent Design</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText dark:bg-gray-400/10 dark:text-gray-400 text-sm font-semibold hover:bg-subText/20 dark:hover:bg-gray-400/20 transition-colors">PWA</span>
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText dark:bg-gray-400/10 dark:text-gray-400 text-sm font-semibold hover:bg-subText/20 dark:hover:bg-gray-400/20 transition-colors">Nuxt.js</span>
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText dark:bg-gray-400/10 dark:text-gray-400 text-sm font-semibold hover:bg-subText/20 dark:hover:bg-gray-400/20 transition-colors">React Native</span>
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText dark:bg-gray-400/10 dark:text-gray-400 text-sm font-semibold hover:bg-subText/20 dark:hover:bg-gray-400/20 transition-colors">Vercel</span>
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText dark:bg-gray-400/10 dark:text-gray-400 text-sm font-semibold hover:bg-subText/20 dark:hover:bg-gray-400/20 transition-colors">Figma</span>
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText dark:bg-gray-400/10 dark:text-gray-400 text-sm font-semibold hover:bg-subText/20 dark:hover:bg-gray-400/20 transition-colors">DB</span>
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText dark:bg-gray-400/10 dark:text-gray-400 text-sm font-semibold hover:bg-subText/20 dark:hover:bg-gray-400/20 transition-colors">Java</span>
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText dark:bg-gray-400/10 dark:text-gray-400 text-sm font-semibold hover:bg-subText/20 dark:hover:bg-gray-400/20 transition-colors">DevOps</span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="/20250421%20구정은%20이력서.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-primary text-white dark:bg-blue-500 font-semibold text-base shadow-custom transition-all duration-200 hover:bg-accent hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary hover:scale-105"
          >
            이력서 다운로드
          </a>
          <a
            href="https://github.com/JEmilyKoo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border border-primary text-primary dark:border-blue-400 dark:text-blue-400 font-semibold text-base bg-surface dark:bg-neutral-800 shadow-custom transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary hover:scale-105"
          >
            GitHub
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg border border-accent text-accent dark:border-teal-400 dark:text-teal-400 font-semibold text-base bg-surface dark:bg-neutral-800 shadow-custom transition-all duration-200 hover:bg-accent hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent hover:scale-105"
          >
            프로젝트 바로가기
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
} 