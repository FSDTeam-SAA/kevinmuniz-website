import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/components/providers/AuthProvider";
import AppProvider from "@/components/providers/AppProvider";
import { getSiteUrl } from "@/lib/site-url";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800"],
  variable: "--font-manrope",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Hierarchy of visionaries",
  description: "Where Great Stories Find Their Stage",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Hierarchy of visionaries",
    description: "Where Great Stories Find Their Stage",
    url: siteUrl,
    siteName: "Hierarchy of visionaries",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hierarchy of visionaries",
    description: "Where Great Stories Find Their Stage",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className={`font-dagger antialiased`}>
        <AuthProvider>
          <AppProvider>

            {children}

            <Toaster />
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
