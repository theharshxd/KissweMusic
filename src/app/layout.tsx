import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/navbar";
import Providers from "@/lib/provider/react-query";
import { ClientLayout } from "@/components/client-layout";

import "./globals.css";
import { Footer } from "@/components/footer";
import { FAB } from "@/components/fab";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "notayan.",
    template: "%s | notayan.",
  },
  description: "Definetly not a developer.",
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://notayan.studio"
      : "http://localhost:3000"
  ),
  openGraph: {
    title: {
      default: "notayan.",
      template: "%s | notayan.",
    },
    description: "Definetly not a developer.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "notayan. - Personal Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@notayan99",
    creator: "@notayan99",
    images: ["/opengraph-image.png"],
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`${outfit.variable} antialiased scroll-smooth`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ClientLayout>
              <Providers>
                <FAB />
                <Navbar />
                {children}
                <Footer />
              </Providers>
            </ClientLayout>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
