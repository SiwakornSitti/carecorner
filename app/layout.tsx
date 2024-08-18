import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import classNames from "classnames";
import "./globals.css";
import Navbar from "./_components/Navbar";
import FooterMenu from "./_components/FooterMenu";

const inter = Prompt({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Care Corner and More",
  description: "มุมที่พร้อมดูแลคุณ ทุกช่วงวัย",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "bg-primary-cream")}>
        <Navbar>{children}</Navbar>
        <FooterMenu />
      </body>
    </html>
  );
}
