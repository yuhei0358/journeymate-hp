import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JourneyMate | 九州から旅を届ける",
    template: "%s | JourneyMate",
  },
  description:
    "九州から旅を届ける。ローカルツアー、旅ナビアプリ「九州GO」、地域とのつながり。JourneyMateは、日本の奥深い旅を世界へ届けるインバウンド観光ブランドです。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    alternateLocale: "en_US",
    siteName: "JourneyMate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable} ${notoSerifJP.variable}`}
    >
      <body className="font-sans bg-ivory text-sumi antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-md focus:bg-crimson focus:px-4 focus:py-2 focus:text-white focus:text-sm focus:font-medium"
        >
          コンテンツにスキップ / Skip to content
        </a>

        <LangProvider>
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
