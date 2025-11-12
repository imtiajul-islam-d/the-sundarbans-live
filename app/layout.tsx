import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { epic_ride, fontSans, fontSerif } from "@/config/fonts";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import dynamic from "next/dynamic";
import Script from "next/script";

const FacebookPixel = dynamic(import('@/components/FacebookPixel/FacebookPixel'))
const GoogleAnalytics = dynamic(import('@/components/GoogleAnalytics/GoogleAnalytics'))

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head >
        {/* <GoogleAnalytics /> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1GYSL2F9B9"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1GYSL2F9B9');
          `}
        </Script>
      </head>
      <body
        className={clsx(
          "font-serif",
          fontSans.variable,
          fontSerif.variable,
          epic_ride.variable,
        )}
      >
        <Providers>
          <div className="">
            {/* <Navbar /> */}
            <Navbar />
            <main className="">
              <FacebookPixel />
              {children}
            </main>
            <footer className="">
              <Footer />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
