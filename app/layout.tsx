import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jemilykoo.github.io"),
  title: "구정은 Emily Koo | 프론트엔드 포트폴리오",
  description: "Vue·Nuxt로 웹 서비스를 만들어 온 프론트엔드 개발자 구정은(Emily Koo)의 포트폴리오. 실무 약 2년 8개월, 보배드림 전면 리뉴얼 참여.",
  keywords: ["프론트엔드 개발자", "Vue.js", "Nuxt", "TypeScript", "React", "포트폴리오"],
  authors: [{ name: "구정은", url: "https://github.com/JEmilyKoo" }],
  creator: "구정은",
  publisher: "구정은",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://jemilykoo.github.io",
    title: "구정은 Emily Koo | 프론트엔드 포트폴리오",
    description: "Vue·Nuxt로 웹 서비스를 만들어 온 프론트엔드 개발자 구정은(Emily Koo)의 포트폴리오. 실무 약 2년 8개월, 보배드림 전면 리뉴얼 참여.",
    siteName: "구정은 포트폴리오",
    images: [
      {
        url: "/images/picture.jpg",
        width: 1200,
        height: 630,
        alt: "구정은 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "구정은 Emily Koo | 프론트엔드 포트폴리오",
    description: "Vue·Nuxt로 웹 서비스를 만들어 온 프론트엔드 개발자 구정은(Emily Koo)의 포트폴리오. 실무 약 2년 8개월, 보배드림 전면 리뉴얼 참여.",
    images: ["/images/picture.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        className={`min-h-screen bg-white text-text font-sans ${notoSansKR.variable} transition-colors duration-300 selection:bg-primary/20 selection:text-primary`}
      >
        <main className="flex flex-col items-center w-full min-h-screen bg-white text-text">
          {children}
        </main>
      </body>
    </html>
  );
}
