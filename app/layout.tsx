import Navbar from "./components/Navbar";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Vedic Prakash"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="pt-22">
            {children}
        </main>
      </body>
    </html>
  );
}
