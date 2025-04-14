import { Metadata } from "next";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer";
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
        <Footer />
      </body>
    </html>
  );
}
