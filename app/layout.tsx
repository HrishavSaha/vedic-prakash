import { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "@/app/globals.css";

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
      <body className="bg-gray-50">
        <Navbar />
        <main className="pt-22">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
