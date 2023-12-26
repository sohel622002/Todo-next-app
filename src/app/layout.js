import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sample Todo App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 h-screen text-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}
