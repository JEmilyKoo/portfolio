'use client';

import { FaCode, FaRocket, FaDatabase, FaGraduationCap, FaUniversity } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

const timelineItems = [
  {
    year: '2024.07~2025.06',
    title: 'SSAFY 수료',
    company: '삼성 청년 SW 아카데미',
    description: '전공자 Java 트랙 수료, 프로젝트 우수상 2회 수상, AI 기반 프로젝트 개발 SW 역량테스트 모의 A형 통과, 2월 이달의 동료상',
    important: true,
    icon: <FaRocket className="text-accent " />,
  },
  {
    year: '2024.12',
    title: 'SQLD 자격증 취득',
    company: '한국데이터산업진흥원',
    description: '데이터베이스 설계 및 관리 역량 인증, SQL 개발자 자격 취득',
    important: false,
    icon: <FaDatabase className="text-primary " />,
  },
  {
    year: '2021.08 ~ 2024.01',
    title: '프론트엔드 개발자',
    company: '㈜가온아이',
    description: 'Vue.js 기반 그룹웨어 솔루션 개발, 다국어 지원 구현, 조직도/그룹/쪽지/메신저 기능 개발, CI/CD 및 유지보수 담당',
    important: true,
    icon: <FaCode className="text-primary " />,
  },
  {
    year: '2021.02 ~ 2021.08',
    title: 'Java 개발자 양성 과정 수료',
    company: '한국소프트웨어인재개발원',
    description: '특모범상 수상, Spring 기반 웹 개발 역량 확보, Java 개발자 양성 과정 이수',
    important: false,
    icon: <FaGraduationCap className="text-accent " />,
  },
  {
    year: '2016.03 ~ 2021.08',
    title: '경영학 학사',
    company: '홍익대학교',
    description: '경영학 전공, IT 서비스 기획 및 개발 역량 융합, 서울시 마포구 본교 소재',
    important: true,
    icon: <FaUniversity className="text-primary " />,
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="max-w-[900px] mx-auto mb-24 pt-8 px-4 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <Image
          src="/images/picture.jpg"
          alt="구정은 프로필"
          width={128}
          height={128}
          className="w-[128px] h-[128px] rounded-full object-cover mb-6 shadow-lg border-4 border-surface  mx-auto"
        />
        <h2 className="text-3xl md:text-4xl font-extrabold mb-1">
          구정은 <span className="text-primary ">Emily Koo</span>
        </h2>
        <div className="text-lg text-subText  font-semibold">실무형 프론트엔드 개발자</div>
      </motion.div>

      <div className="w-full max-w-3xl">
        <div className="relative">
          {/* 타임라인 라인 */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"/>
          {/* 타임라인 아이템 */}
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-12 pb-4 last:pb-0"
            >
              {/* 타임라인 도트 */}
              <div className="absolute left-0 w-8 h-8 rounded-full bg-surface  border-2 border-primary  flex items-center justify-center">
                {item.icon}
              </div>

              <div className={`${item.important ? 'bg-surface  rounded-2xl p-6 shadow-custom border border-border  hover:shadow-lg' : 'bg-transparent p-4'} transition-shadow`}>
                <div className="flex items-center gap-4 mb-2">
                  <span className={`${item.important ? 'text-2xl' : 'text-lg'} font-bold text-primary `}>{item.year}</span>
                  <h3 className={`${item.important ? 'text-xl' : 'text-base'} font-bold text-text `}>{item.title}</h3>
                </div>
                <div className={`${item.important ? 'text-subText  font-semibold' : 'text-subText/80  font-medium'}  mb-2`}>{item.company}</div>
                <p className={`${item.important ? 'text-text ' : 'text-text/80 '} ${item.important ? '' : 'text-sm'}`}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 