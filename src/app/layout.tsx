import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter, Fira_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaMono = Fira_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-fira-mono" });

export const metadata: Metadata = {
  title: "구정은 Emily Koo | 프론트엔드 포트폴리오",
  description: "실무형 프론트엔드 개발자 구정은(Emily Koo) 포트폴리오. React, TypeScript, Next.js, 디자인 시스템, AI, PWA, 글로벌 협업, 최신 트렌드 경험.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background text-text font-sans ${inter.variable} ${firaMono.variable} transition-colors duration-300 selection:bg-primary/20 selection:text-primary`}
      >
        <main className="flex flex-col items-center w-full min-h-screen bg-background text-text">
          {children}
        </main>
      </body>
    </html>
  );
}
