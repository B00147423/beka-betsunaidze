import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Beka Betsunaidze - Software Engineer",
  description: "Personal portfolio website of Beka Betsunaidze, Software Engineer from Tbilisi, Georgia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen bg-[#0e0e0e] text-gray-200 overflow-hidden flex items-center justify-center p-4">
        <div className="w-full max-w-6xl h-[90vh] bg-[#141414] rounded-xl shadow-2xl flex gap-4 p-4">
          <Sidebar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}