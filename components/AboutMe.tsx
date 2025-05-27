import { FaGithub, FaEnvelope, FaBlogger, FaPhone } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section
      id="about"
      className="max-w-[900px] mx-auto mb-24 pt-12 px-4 flex flex-col items-center"
    >
      <Image
        src="/images/picture.jpg"
        alt="구정은 프로필"
        width={128}
        height={128}
        className="w-[128px] h-[128px] rounded-full object-cover mb-6 shadow-lg border-4 border-surface dark:border-background"
      />
      <h2 className="text-3xl md:text-4xl font-extrabold mb-1 text-center">
        구정은 <span className="text-primary">Emily Koo</span>
      </h2>
      <div className="text-lg text-subText font-semibold mb-4 text-center">실무형 프론트엔드 개발자</div>
      <p className="text-base md:text-lg text-text mb-8 text-center max-w-2xl">
        <span className="font-semibold text-primary">React/TypeScript 기반 SPA, 디자인 시스템, 성능 최적화, UI/UX 개선</span>에 강점이 있습니다.<br />
        다양한 도메인(그룹웨어, 의료, 마케팅, AI 등)에서 실무 경험을 쌓았고, 팀 리딩과 코드 품질 개선, DevOps, 글로벌 협업(일본어/영어)까지 경험했습니다.<br />
        명확한 커뮤니케이션과 협업 중심의 개발 문화를 추구하며, 사용자와 동료 모두에게 신뢰받는 개발자가 되고자 합니다.
      </p>
      <ul className="flex flex-wrap gap-2 mb-8 justify-center text-sm md:text-base">
        <li className="bg-primary/10 text-primary rounded-full px-4 py-1 font-semibold">3년차 경력</li>
        <li className="bg-accent/10 text-accent rounded-full px-4 py-1 font-semibold">㈜가온아이 실무</li>
        <li className="bg-subText/10 text-subText rounded-full px-4 py-1 font-semibold">SSAFY 수료</li>
        <li className="bg-subText/10 text-subText rounded-full px-4 py-1 font-semibold">SQLD 자격증</li>
        <li className="bg-primary/10 text-primary rounded-full px-4 py-1 font-semibold">JLPT N1</li>
        <li className="bg-primary/10 text-primary rounded-full px-4 py-1 font-semibold">영어 Intermediate+</li>
      </ul>
      <div className="flex gap-4 mt-2">
        <a
          href="https://github.com/JEmilyKoo"
          target="_blank"
          aria-label="GitHub"
          className="text-primary text-[1.7rem] transition-colors duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:jemilykoo@gmail.com"
          aria-label="Email"
          className="text-primary text-[1.7rem] transition-colors duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://velog.io/@jemilykoo/posts"
          target="_blank"
          aria-label="Blog"
          className="text-primary text-[1.7rem] transition-colors duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <FaBlogger />
        </a>
        <a
          href="tel:01025815680"
          aria-label="Phone"
          className="text-primary text-[1.7rem] transition-colors duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <FaPhone />
        </a>
      </div>
    </section>
  );
} 