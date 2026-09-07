"use client";
import { useEffect, useState } from "react";
import { Mail, MapPin, Linkedin, Github, ChevronDown } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setOpen(true);  // open automatically on desktop
    } else {
      setOpen(false); // close automatically on mobile
    }
  };

  // Run it once at the start
  handleResize();

  // Run every time the window resizes
  window.addEventListener("resize", handleResize);

  // Clean up listener when component unmounts
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <aside
      className={`w-full md:w-72 bg-[#141414] rounded-2xl p-6 shadow-xl mx-auto transition-all duration-300 border border-[#1f1f1f] ${
        open ? "h-auto" : "overflow-hidden"
      }`}
    >
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between cursor-pointer select-none relative group"
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-lg font-bold text-white">BB</span>
          </div>
          <div className="text-left">
            <h2 className="text-base font-semibold text-white leading-tight">
              Beka Betsunaidze
            </h2>
            <p className="text-xs text-gray-400">Software Engineer</p>
          </div>
        </div>

        {/* Arrow icon with hover glow */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-yellow-400/10 opacity-0 group-hover:opacity-100 blur-sm transition-all"></div>
          <ChevronDown
            size={18}
            className={`relative text-gray-400 transition-transform duration-300 ${
              open ? "rotate-180 text-yellow-400" : "group-hover:text-yellow-300"
            }`}
          />
        </div>
      </div>

      {/* Dropdown — expands inside same card */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          open ? "max-h-48 mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-800 pt-3 mt-2 space-y-2 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Mail size={13} className="text-yellow-400" />
            <span>betsunaidzeb@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-yellow-400" />
            <span>Dublin, Ireland</span>
          </div>

          <div className="flex gap-3 pt-3">
            <a
              href="https://github.com/B00147423"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#1f1f1f] rounded-lg hover:bg-[#2a2a2a] transition-colors"
            >
              <Github size={15} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/beka-betsunaidze-76b612292"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#1f1f1f] rounded-lg hover:bg-[#2a2a2a] transition-colors"
            >
              <Linkedin size={15} className="text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
