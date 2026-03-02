import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import AnimatedNavbar from "@/components/AnimatedNavbar";
import Preloader from "@/components/Preloader";
import ClickSpark from "@/components/ClickSpark";
import { ThemeProvider } from "@/components/ThemeProvider";
import ChatBot from "@/components/ChatBot";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axionea — KI-Automatisierung für den Mittelstand",
  description: "KI-Automatisierung für den Mittelstand — ohne IT-Abteilung, ohne Technik-Kenntnisse, ohne versteckte Kosten.",
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
          </ClickSpark>
        </ThemeProvider>
      </body>
    </html>
  );
}
