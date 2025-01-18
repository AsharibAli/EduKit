import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Banner from "@/components/Banner";
import { BannerProvider } from "@/components/BannerContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduKit | Starter-Kit",
  description:
    "A starter-kit featuring React & NextJS and Vue & NuxtJS with Hardhat or Foundry for building dApps on the Open Campus L3 (EduChain).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-L694N0QK6B"
      ></Script>
      <Script id="google-analytics">
        {`
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());
   
   gtag('config', 'G-L694N0QK6B');
   `}
      </Script>
      <body className={inter.className}>
        <BannerProvider>
          <Banner />
          {children}
        </BannerProvider>
      </body>
    </html>
  );
}
