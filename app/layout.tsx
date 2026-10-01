import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.buildboostweb.com";

const FAVICON =
  "/1F39DF31-2B72-4F2C-A045-85C0B63B616C.png";

const OG_IMAGE =
  "/829C76B8-60E3-416A-B30F-0EAD2973F1D4.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "BuildBoostWeb | 시공업체 전용 홈페이지 제작·네이버 SEO",
    template: "%s | BuildBoostWeb",
  },

  description:
    "집수리·인테리어·철거·타일·욕실·전기·벌목 등 시공업체 전용 홈페이지 제작. 지역별 네이버 검색 페이지, 네이버 서치어드바이저 등록, 모바일 상담 연결까지 구축합니다.",

  keywords: [
    "집수리 홈페이지 제작",
    "인테리어 홈페이지 제작",
    "철거업체 홈페이지 제작",
    "시공업체 홈페이지 제작",
    "네이버 SEO",
    "네이버 검색 노출",
    "네이버 서치어드바이저",
    "지역 검색 홈페이지",
    "시공업체 마케팅",
    "BuildBoostWeb",
  ],

  icons: {
    icon: FAVICON,
    shortcut: FAVICON,
    apple: FAVICON,
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "BuildBoostWeb",

    title:
      "BuildBoostWeb | 시공업체 전용 홈페이지 제작",

    description:
      "집수리·인테리어·철거 등 시공업체를 위한 홈페이지 제작과 지역별 네이버 검색 SEO 세팅.",

    images: [
      {
        url: OG_IMAGE,
        width: 1365,
        height: 768,
        alt:
          "BuildBoostWeb 시공업체 홈페이지 제작 및 네이버 지역 검색 마케팅",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "BuildBoostWeb | 시공업체 전용 홈페이지 제작",

    description:
      "시공업체 전용 홈페이지 제작, 지역별 네이버 SEO, 검색 등록, 문의 연결까지.",

    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
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
