import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Menu from "@/components/ui/menu";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FOCO.",
  description: "Aplicativo para gerenciar suas horas de estudos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="flex bg-[#f9f9f9] h-screen w-screen">
          <Menu />
          {children}
        </main>
      </body>
    </html>
  );
}
