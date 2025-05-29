'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] pt-24 px-4 pb-16 bg-background text-text transition-colors  ">
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
          <span className="block text-text ">구정은</span>
          <span className="block text-primary  mt-2">Emily Koo</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-subText  mb-8 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          사용자 경험에 진심인 실전형 프론트엔드 개발자
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-subText  mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="font-semibold text-primary ">React/TypeScript 기반 SPA, 디자인 시스템, 성능 최적화, UI/UX 개선</span>에 강점이 있습니다.<br className="hidden md:inline" />
          글로벌 협업과 최신 트렌드(AI, PWA, SSR, DevOps)까지 경험한 <span className="font-semibold text-accent ">실전형 개발자</span>입니다.
        </motion.p>

        <motion.div
          className="flex flex-col flex-wrap gap-2 mb-12 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary   text-sm font-semibold hover:bg-primary/20  transition-colors">React</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary   text-sm font-semibold hover:bg-primary/20  transition-colors">Next.js</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary   text-sm font-semibold hover:bg-primary/20  transition-colors">TypeScript</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary   text-sm font-semibold hover:bg-primary/20  transition-colors">JavaScript</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary   text-sm font-semibold hover:bg-primary/20  transition-colors">Vue.js</span>
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent   text-sm font-semibold hover:bg-accent/20  transition-colors">AI : Prompt Engineering</span>
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent   text-sm font-semibold hover:bg-accent/20  transition-colors">AI : Agent Design</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText   text-sm font-semibold hover:bg-subText/20  transition-colors">PWA</span>
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText   text-sm font-semibold hover:bg-subText/20  transition-colors">Nuxt.js</span>
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText   text-sm font-semibold hover:bg-subText/20  transition-colors">React Native</span>
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText   text-sm font-semibold hover:bg-subText/20  transition-colors">Vercel</span>
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText   text-sm font-semibold hover:bg-subText/20  transition-colors">Figma</span>
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText   text-sm font-semibold hover:bg-subText/20  transition-colors">DB</span>
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText   text-sm font-semibold hover:bg-subText/20  transition-colors">Java</span>
            <span className="px-4 py-2 rounded-full bg-subText/10 text-subText   text-sm font-semibold hover:bg-subText/20  transition-colors">DevOps</span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="https://github.com/JEmilyKoo/portfolio/blob/main/20250421%20%EA%B5%AC%EC%A0%95%EC%9D%80%20%EC%9D%B4%EB%A0%A5%EC%84%9C.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-primary text-white  font-semibold text-base shadow-custom transition-all duration-200 hover:bg-accent hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary hover:scale-105"
          >
            이력서 다운로드
          </a>
          <a
            href="https://github.com/JEmilyKoo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border border-primary text-primary   font-semibold text-base bg-surface  shadow-custom transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary hover:scale-105"
          >
            GitHub
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg border border-accent text-accent   font-semibold text-base bg-surface  shadow-custom transition-all duration-200 hover:bg-accent hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent hover:scale-105"
          >
            프로젝트 바로가기
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
} 