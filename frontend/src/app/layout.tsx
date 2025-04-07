import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ClerkProvider, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shrimps",
  description: "An online vintage store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${urbanist.variable} antialiased`}>
          <SignedOut>
            <div className="flex items-center justify-center h-screen">
              <SignIn />
            </div>
          </SignedOut>
          <SignedIn>
            <main className="container mx-auto px-4 pt-4 h-(--screen-wo-navbar)">
              {children}
            </main>
            <Navbar />
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
