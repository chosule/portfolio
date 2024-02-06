import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local";
import Header from "@/components/Header";

const nanum = localfont({
  src: "../../public/font/NanumSquareNeoOTF-Rg.otf",
  variable: "--font-nanum",
});

export const metadata: Metadata = {
  title: "portfolio",
  description: "김초슬 포트폴리오 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={nanum.className}>
      <head></head>
      <body className="relative mx-auto flex w-full max-w-[1200px] flex-col">
        <main className="grow">
          <Header/>
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
