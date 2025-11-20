import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Mees Egberts",
    template: "%s | Mees Egberts",
  },
  description:
    "Portfolio of Mees Egberts, entrepreneur and software engineer from the Netherlands. Focused on building digital products, SaaS platforms, and maintainable systems.",
  openGraph: {
    title: "Mees Egberts",
    description:
      "Portfolio of Mees Egberts, entrepreneur and software engineer from the Netherlands. Insights on product development, SaaS, and practical engineering.",
    url: baseUrl,
    siteName: "Mees Egberts",
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Mees Egberts",
    "software engineer",
    "entrepreneur",
    "portfolio",
    "SaaS",
    "product development",
    "Next.js",
    "Supabase",
    "web engineering",
  ],
  authors: [{ name: "Mees Egberts", url: baseUrl }],
  creator: "Mees Egberts",
  publisher: "Mees Egberts",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mees Egberts",
    description:
      "Portfolio of Mees Egberts, entrepreneur and software engineer focused on digital products and SaaS.",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-white text-black dark:bg-black dark:text-white",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content="Portfolio | Mees Egberts"
        />
      </head>
      <body className="mx-4 mt-8 max-w-xl antialiased lg:mx-auto">
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <Navbar />

          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
