import { GraduationCap, Briefcase, BookOpen, Cpu } from "lucide-react";

export default function ResumeContent() {
  const education = [
    {
      institution: "Technological University Dublin",
      degree: "B.Sc. (Hons.) in Computing (Computer Science Specialisation)",
      location: "Dublin, Ireland",
      period: "Sept 2021 – 31 Oct 2025",
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

  const experience = [
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
  "Languages & Systems": [
    "C++ (Boost.Asio, multithreading, real-time networking)",
    "Python (FastAPI, Django)",
    "JavaScript/TypeScript (React, Next.js)",
  ],
  "Networking & Protocols": [
    "WebSockets",
    "REST APIs",
    "gRPC",
    "Protocol Buffers",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "DevOps & Tools": [
    "Docker",
    "GitHub Actions",
    "Jenkins",
    "Linux",
    "CMake",
    "CI/CD Pipelines",
  ],
  "Focus Areas": [
    "Backend Systems",
    "Real-Time Networking",
    "Distributed Architectures",
    "Scalability",
  ],
};


  return (
    <div className="space-y-10">
      {/* Header */}
      <section>
        <h1 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          Resume
          <div className="w-10 h-0.5 bg-yellow-400"></div>
        </h1>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
          <GraduationCap size={18} className="text-yellow-400" />
          Education
          <div className="w-4 h-0.5 bg-yellow-400"></div>
        </h2>
        {education.map((edu, index) => (
          <div key={index} className="bg-[#1a1a1a] p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-white text-base">{edu.institution}</h3>
            <p className="text-gray-400 text-sm">{edu.degree}</p>
            <p className="text-yellow-400 text-sm">{edu.period}</p>
            <p className="text-gray-500 text-xs">{edu.location}</p>
          </div>
        ))}
      </section>

      {/* Coursework */}
      <section>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
          <BookOpen size={18} className="text-yellow-400" />
          Relevant Coursework
          <div className="w-4 h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="grid gap-3">
          {Object.entries(coursework).map(([category, courses], i) => (
            <div key={i} className="bg-[#1a1a1a] p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-white text-sm mb-1">{category}</h3>
              <p className="text-gray-300 text-sm">{courses.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>



      {/* Technical Skills */}
      <section>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
          <Cpu size={18} className="text-yellow-400" />
          Technical Skills
          <div className="w-4 h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="grid gap-3">
          {Object.entries(technicalSkills).map(([category, skills], i) => (
            <div key={i} className="bg-[#1a1a1a] p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-white text-sm mb-1">{category}</h3>
              <p className="text-gray-300 text-sm">{skills.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>
            {/* Experience */}
      <section>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
          <Briefcase size={18} className="text-yellow-400" />
          Experience
          <div className="w-4 h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="space-y-5">
          {experience.map((exp, index) => (
            <div key={index} className="bg-[#1a1a1a] p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-white text-base">{exp.position}</h3>
              <p className="text-blue-400 text-sm">{exp.company}</p>
              <p className="text-yellow-400 text-sm">{exp.period}</p>
              <p className="text-gray-500 text-xs mb-3">{exp.location}</p>
              <ul className="space-y-1">
                {exp.achievements.map((a, i) => (
                  <li key={i} className="text-gray-300 text-sm flex gap-2">
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
