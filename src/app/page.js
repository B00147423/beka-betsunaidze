"use client";

import { useState } from "react";
import HomeContent from "../components/HomeContent";
import AboutContent from "../components/AboutContent";
import PortfolioContent from "../components/PortfolioContent";
import ResumeContent from "../components/ResumeContent";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "resume", label: "Resume" }
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Tab Navigation */}
      <nav className="flex gap-6 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm font-medium transition-colors border-b-2 pb-1 ${
              activeTab === tab.id
                ? "text-yellow-400 border-yellow-400"
                : "text-gray-400 border-transparent hover:text-yellow-400 hover:border-yellow-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-2">
            {activeTab === "home" && <HomeContent />}
            {activeTab === "about" && <AboutContent />}
            {activeTab === "portfolio" && <PortfolioContent />}
            {activeTab === "resume" && <ResumeContent />}
          </div>
    </div>
  );
}
