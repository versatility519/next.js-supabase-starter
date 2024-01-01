import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoginButton from "@/components/login-button";
import LogoutButton from "@/components/logout-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoginButton />
        <LogoutButton />
        {children}
      </body>
    </html>
  );
}
