import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from  "../components/nav"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naina Thapar | Web Developer",
  description: "Naina's Portfolio Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/></head>
      <body className={inter.className}>
        <Nav />
        {children}</body>
    </html>
  );
}
