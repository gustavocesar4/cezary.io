import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@/components/site/analytics";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Sites, sistemas e automações com IA que resolvem problemas reais do seu negócio.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | CEZARY.IO",
    default: "CEZARY.IO",
  },
  description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "CEZARY.IO",
    title: "CEZARY.IO",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "CEZARY.IO",
    description,
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CEZARY.IO",
  url: SITE_URL,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-bg text-text flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <a
          href="#conteudo"
          className="focus:bg-contrast focus:text-bg focus:outline-contrast sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:px-4 focus:py-2 focus:outline-2 focus:outline-offset-2"
        >
          Pular para o conteúdo
        </a>
        <Analytics />
        <Navbar />
        <main id="conteudo" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
