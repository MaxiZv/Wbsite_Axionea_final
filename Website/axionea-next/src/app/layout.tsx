import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import AnimatedNavbar from "@/components/AnimatedNavbar";
import Preloader from "@/components/Preloader";
import ClickSpark from "@/components/ClickSpark";
import { ThemeProvider } from "@/components/ThemeProvider";
import ChatBot from "@/components/ChatBot";
import CookieBanner from "@/components/CookieBanner";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axionea.de"),
  title: "Axionea | KI-Automatisierung für den Mittelstand",
  description: "Axionea ist die führende KI-Agentur im DACH-Raum für den Mittelstand. Wir automatisieren Prozesse mit KI-Agenten, Chatbots und nahtloser Software-Integration – ohne versteckte Kosten.",
  keywords: [
    "KI-Automatisierung",
    "Mittelstand",
    "KI Beratung",
    "KI Agentur",
    "Axionea",
    "Prozesse automatisieren",
    "Künstliche Intelligenz",
    "Chatbots für Unternehmen",
    "Voicebots",
    "KI Integration",
    "Make",
    "Zapier",
    "Workflow Automatisierung",
    "DACH"
  ],
  authors: [{ name: "Axionea GbR" }],
  creator: "Axionea GbR",
  publisher: "Axionea GbR",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://axionea.de",
    title: "Axionea | KI-Automatisierung für den Mittelstand",
    description: "KI-Automatisierung für den Mittelstand — ohne IT-Abteilung, ohne Technik-Kenntnisse, ohne versteckte Kosten.",
    siteName: "Axionea",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axionea | KI-Automatisierung für den Mittelstand",
    description: "KI-Automatisierung für den Mittelstand — ohne IT-Abteilung, ohne Technik-Kenntnisse, ohne versteckte Kosten.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <ClickSpark sparkColor="#4A90D9" sparkSize={12} sparkRadius={20} sparkCount={8} duration={500}>
            <Preloader />
            <AnimatedNavbar />
            <ChatBot />
            {children}
            <CookieBanner />
          </ClickSpark>
        </ThemeProvider>
      </body>
    </html>
  );
}
