import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { play } from "./fonts";
import { TracingBeam } from "@/components/aceternity/trace-beam";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={play.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          storageKey="my_portfolio_theme"
        >
          <TracingBeam>
            <Navbar />
            {children}
          </TracingBeam>
        </ThemeProvider>
      </body>
    </html>
  );
}
