import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.buildboostweb.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "BuildBoostWeb | 시공업체 전용 홈페이지 제작",
    template: "%s | BuildBoostWeb",
  },

  description:
    "집수리, 인테리어, 철거, 타일, 욕실, 전기, 벌목 등 시공업체 전용 홈페이지 제작. 지역별 SEO 페이지, 네이버 검색 등록, 모바일 상담 연결까지 한 번에 구축합니다.",

  keywords: [
    "집수리 홈페이지 제작",
    "인테리어 홈페이지 제작",
    "철거업체 홈페이지 제작",
    "시공업체 홈페이지 제작",
    "지역 SEO",
    "네이버 검색 노출",
    "시공업체 마케팅",
    "BuildBoostWeb",
  ],

  icons: {
    icon: "/1F39DF31-2B72-4F2C-A045-85C0B63B616C.png",
    shortcut: "/1F39DF31-2B72-4F2C-A045-85C0B63B616C.png",
    apple: "/1F39DF31-2B72-4F2C-A045-85C0B63B616C.png",
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "BuildBoostWeb",
    title: "BuildBoostWeb | 시공업체 전용 홈페이지 제작",
    description:
      "집수리·인테리어·철거 등 시공업체를 위한 맞춤형 홈페이지 제작과 지역 검색 SEO 세팅.",
    images: [
      {
        url: "/829C76B8-60E3-416A-B30F-0EAD2973F1D4.png",
        width: 1365,
        height: 768,
        alt: "BuildBoostWeb 공유 이미지",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BuildBoostWeb | 시공업체 전용 홈페이지 제작",
    description:
      "시공업체 전용 홈페이지 제작, 지역별 SEO, 네이버 검색 등록, 문의 연결까지.",
    images: ["/829C76B8-60E3-416A-B30F-0EAD2973F1D4.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
