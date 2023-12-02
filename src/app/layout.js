// import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simple Folio",
  description: "A simple portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
      <Footer />
    </html>
  );
}
