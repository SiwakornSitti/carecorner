export const runtime = "edge";
import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
    <html style={{ fontSize: 13 }} lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="kdg5eA8uC6OOdjvJ0D0kfECPigRDxPye-aAS_lS3JAA"
        />
      </head>
      <body className={classNames(inter.className, "bg-primary-cream")}>
        <Navbar>
          {children}
          <FooterMenu />
        </Navbar>
      </body>
      <GoogleAnalytics gaId="G-MYQHCE52J7" />
    </html>
  );
}
