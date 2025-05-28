import "../styles/globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "구정은 Emily Koo | 프론트엔드 포트폴리오",
  description: "실무형 프론트엔드 개발자 구정은(Emily Koo) 포트폴리오. React, TypeScript, Next.js, 디자인 시스템, AI, PWA, 글로벌 협업, 최신 트렌드 경험.",
  keywords: ["프론트엔드 개발자", "React", "TypeScript", "Next.js", "디자인 시스템", "AI", "PWA", "포트폴리오"],
  authors: [{ name: "구정은", url: "https://github.com/JEmilyKoo" }],
  creator: "구정은",
  publisher: "구정은",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://jemilykoo.github.io",
    title: "구정은 Emily Koo | 프론트엔드 포트폴리오",
    description: "실무형 프론트엔드 개발자 구정은(Emily Koo) 포트폴리오. React, TypeScript, Next.js, 디자인 시스템, AI, PWA, 글로벌 협업, 최신 트렌드 경험.",
    siteName: "구정은 포트폴리오",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "구정은 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "구정은 Emily Koo | 프론트엔드 포트폴리오",
    description: "실무형 프론트엔드 개발자 구정은(Emily Koo) 포트폴리오. React, TypeScript, Next.js, 디자인 시스템, AI, PWA, 글로벌 협업, 최신 트렌드 경험.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background text-text font-sans ${notoSansKR.variable} transition-colors duration-300 selection:bg-primary/20 selection:text-primary`}
      >
        <main className="flex flex-col items-center w-full min-h-screen bg-background text-text">
          {children}
        </main>
      </body>
    </html>
  );
}
