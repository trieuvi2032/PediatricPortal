import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const courier_prime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Pediatric Portal",
  description: "Developmental & Behavioral Pediatrics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className} bg-white-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
