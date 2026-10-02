import type { Metadata, Viewport } from "next";
import { Baloo_Tamma_2, Dancing_Script, Kalam } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

import { TooltipProvider } from "@/components/ui/tooltip";
import { isRealLink } from "@/lib/utils";
import { profile } from "@/data/profile";
import "./globals.css";

// Handwriting faces for the multi-language hello in the cover banner.
const script = Dancing_Script({ subsets: ["latin", "latin-ext"], weight: "700", variable: "--font-script", display: "swap" });
const devanagari = Kalam({ subsets: ["devanagari"], weight: "700", variable: "--font-devanagari", display: "swap", preload: false });
const kannada = Baloo_Tamma_2({ subsets: ["kannada"], weight: "600", variable: "--font-kannada", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: profile.seo.title,
  description: profile.seo.description,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    url: "/",
    title: profile.seo.title,
    description: profile.seo.description,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seo.title,
    description: profile.seo.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: profile.site,
  worksFor: { "@type": "Organization", name: profile.company },
  sameAs: Object.values(profile.socials).filter(isRealLink),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${script.variable} ${devanagari.variable} ${kannada.variable} antialiased`}
    >
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
