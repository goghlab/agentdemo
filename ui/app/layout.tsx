import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI搜尋Agent演示",
  description: "AI搜尋Agent演示",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="light">
      <body className={inter.className}>
        <header className="bg-black text-white flex justify-center items-center py-4">
          <div className="flex items-center gap-4">
            <img src="/logo-1.png" alt="Logo" className="h-12" />
            <h1 className="text-xl font-semibold">AI搜尋Agent演示🔍</h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
