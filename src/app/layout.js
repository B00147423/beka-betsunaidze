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
  description:
    "Personal portfolio website of Beka Betsunaidze, Software Engineer from Tbilisi, Georgia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0e0e0e] text-gray-200 flex flex-col md:flex-row items-start justify-center p-4 md:p-6">
        <div className="w-full max-w-6xl bg-[#141414] rounded-xl shadow-2xl flex flex-col md:flex-row gap-4 p-4 md:p-6 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto md:h-[85vh] h-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
