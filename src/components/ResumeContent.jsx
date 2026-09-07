import { GraduationCap, Briefcase, BookOpen, Cpu } from "lucide-react";

export default function ResumeContent() {
  const education = [
    {
      institution: "Technological University Dublin",
      degree: "B.Sc. (Hons.) in Computing (Computer Science Specialisation)",
      location: "Dublin, Ireland",
      period: "Sept 2021 – Oct 2025",
    },
  ];

  const coursework = {
    "Systems & Algorithms": [
      "Distributed Systems",
      "Derivation of Algorithms",
      "Web Services",
      "Ubiquitous Computing",
    ],
    "AI & Data": [
      "Computational Intelligence",
      "Data Analytics",
      "Applied Human Language Technology",
      "Text Analysis",
    ],
  };

  const relevantExperience = [
    {
      organization: "Technological University Dublin",
      role: "Major Full-Stack Group Project, Year 3",
      badge: "Academic project",
      period: "Sept 2023 – May 2024 · 9 months",
      location: "Dublin, Ireland",
      achievements: [
        "Led a student team to build a campus social platform connecting students by course and module.",
        "Coordinated weekly Scrum meetings to track progress, assign tasks and keep development on schedule.",
        "Led troubleshooting and testing sessions using Selenium WebDriver to identify and reproduce functional defects.",
        "Used Jenkins to run automated test suites and catch regressions before integration.",
      ],
    },
  ];

  const otherExperience = [
    {
      company: "Dublin Port NQA Limited",
      position: "Transport & Logistics Operative",
      location: "Dublin, Ireland",
      period: "June 2018 – June 2019",
      achievements: [
        "Gained hands-on experience in high-pressure logistics coordination.",
        "Adapted quickly to shifting operational priorities and challenges.",
        "Built strong reliability and discipline through long-hour shifts.",
      ],
    },
    {
      company: "Produce Warehouse",
      position: "Logistics & Inventory Assistant",
      location: "Dublin, Ireland",
      period: "June 2016 – July 2018",
      achievements: [
        "Maintained accuracy while processing large volumes of orders.",
        "Developed attention to detail through inventory and quality control.",
        "Built discipline by meeting tight deadlines in a demanding environment.",
      ],
    },
  ];

  const technicalSkills = {
    Languages: ["C++", "Python", "JavaScript", "TypeScript"],
    Frameworks: ["FastAPI", "Django", "React", "Next.js", "React Native"],
    "Backend / Networking": ["REST APIs", "WebSockets"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "SQL"],
    Testing: [
      "Selenium WebDriver",
      "Postman",
      "API Testing",
      "Automated Testing",
      "Manual Testing",
    ],
    Tools: ["Docker", "GitHub Actions", "Jenkins", "Git", "Linux", "CMake"],
  };

  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          Resume
          <div className="w-10 h-0.5 bg-yellow-400" aria-hidden />
        </h1>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
          <GraduationCap size={18} className="text-yellow-400" />
          Education
          <div className="w-4 h-0.5 bg-yellow-400" aria-hidden />
        </h2>
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800"
          >
            <h3 className="font-bold text-white text-base">{edu.institution}</h3>
            <p className="text-gray-400 text-sm">{edu.degree}</p>
            <p className="text-yellow-400 text-sm">{edu.period}</p>
            <p className="text-gray-500 text-xs">{edu.location}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
          <Briefcase size={18} className="text-yellow-400" />
          Relevant Experience
          <div className="w-4 h-0.5 bg-yellow-400" aria-hidden />
        </h2>
        <div className="space-y-5">
          {relevantExperience.map((exp) => (
            <div
              key={exp.role}
              className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-white text-base">{exp.role}</h3>
                  <p className="text-blue-400 text-sm">{exp.organization}</p>
                </div>
                <span className="shrink-0 px-2 py-0.5 text-[11px] rounded font-medium bg-[#252525] text-gray-300 border border-gray-700">
                  {exp.badge}
                </span>
              </div>
              <p className="text-yellow-400 text-sm mt-1">{exp.period}</p>
              <p className="text-gray-500 text-xs mb-3">{exp.location}</p>
              <ul className="space-y-1">
                {exp.achievements.map((a) => (
                  <li key={a} className="text-gray-300 text-sm flex gap-2">
                    <span className="text-yellow-400 mt-1.5">•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
          <Cpu size={18} className="text-yellow-400" />
          Technical Skills
          <div className="w-4 h-0.5 bg-yellow-400" aria-hidden />
        </h2>
        <div className="grid gap-3">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div
              key={category}
              className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800"
            >
              <h3 className="font-bold text-white text-sm mb-1">{category}</h3>
              <p className="text-gray-300 text-sm">{skills.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
          <BookOpen size={18} className="text-yellow-400" />
          Relevant Coursework
          <div className="w-4 h-0.5 bg-yellow-400" aria-hidden />
        </h2>
        <div className="grid gap-3">
          {Object.entries(coursework).map(([category, courses]) => (
            <div
              key={category}
              className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800"
            >
              <h3 className="font-bold text-white text-sm mb-1">{category}</h3>
              <p className="text-gray-300 text-sm">{courses.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
          <Briefcase size={18} className="text-yellow-400" />
          Additional Experience
          <div className="w-4 h-0.5 bg-yellow-400" aria-hidden />
        </h2>
        <div className="space-y-5">
          {otherExperience.map((exp) => (
            <div
              key={exp.company}
              className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800"
            >
              <h3 className="font-bold text-white text-base">{exp.position}</h3>
              <p className="text-blue-400 text-sm">{exp.company}</p>
              <p className="text-yellow-400 text-sm">{exp.period}</p>
              <p className="text-gray-500 text-xs mb-3">{exp.location}</p>
              <ul className="space-y-1">
                {exp.achievements.map((a) => (
                  <li key={a} className="text-gray-300 text-sm flex gap-2">
                    <span className="text-yellow-400 mt-1.5">•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
