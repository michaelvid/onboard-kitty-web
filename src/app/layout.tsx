import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnboardKitty | Agentic AI for Banking Onboarding",
  description: "OnboardKitty is an agentic AI assistant that helps banks accelerate microbusiness AML/KYC onboarding while preserving human control, compliance oversight, and auditability.",
  keywords: "AI banking onboarding, agentic AI, AML KYC automation, microbusiness banking, compliance AI, onboarding assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-page-bg text-primary antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
