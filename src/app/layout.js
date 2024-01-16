// import { Inter } from "next/font/google";
import Script from "next/script";
import Footer from "./components/Footer";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simple Folio",
  description: "A simple portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        {children}
        <Script id="themeswitcher" strategy="beforeInteractive">
          {`

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
            `}
        </Script>
      </body>
      <Footer />
    </html>
  );
}
