import { GraduationCap, Briefcase, BookOpen, Cpu, Database, Wrench, Zap } from "lucide-react";

export default function ResumeContent() {
  const education = [
    {
      institution: "Technological University Dublin",
      degree: "B.Sc. (Hons.) in Computing (Computer Science Specialisation)",
      location: "Dublin, Ireland",
      period: "Sept 2021 – June 2025"
    }
  ];

  const coursework = {
    "Algorithms & Systems": ["Derivation of Algorithms", "Computer Vision", "Ubiquitous Computing", "Web Services"],
    "AI & Data": ["Computational Intelligence", "Data Analytics", "Applied Human Language Technology", "Text Analysis"]
  };

  const experience = [
    {
      company: "Dublin Port NQA Limited",
      position: "Transport & Logistics Operative",
      location: "Dublin, Ireland",
      period: "June 2018 – June 2019",
      achievements: [
        "Gained first-hand experience working in a high-pressure, time-critical environment with constant coordination between teams",
        "Learned to adapt quickly to shifting priorities and unexpected logistical challenges",
        "Built resilience, reliability, and discipline by working long shifts in a demanding operational setting"
      ]
    },
    {
      company: "Produce Warehouse",
      position: "Logistics & Inventory Assistant",
      location: "Dublin, Ireland",
      period: "June 2016 – July 2018",
      achievements: [
        "Maintained accuracy and efficiency while preparing and processing large volumes of orders",
        "Developed strong attention to detail through inventory checks and quality control",
        "Built resilience and discipline by consistently meeting tight deadlines in a demanding environment"
      ]
    }
  ];

  const technicalSkills = {
    "Languages & Systems": ["C++ (real-time networking, multiplayer server)", "Python (FastAPI, Django)", "JavaScript/TypeScript (React, Next.js)"],
    "Databases": ["PostgreSQL (primary)", "MySQL", "MongoDB"],
    "Tools & DevOps": ["Docker (deployment & CI/CD)", "Jenkins", "Linux", "CMake"],
    "Specialties": ["WebSockets", "distributed systems", "REST API design"]
  };

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-xl font-bold mb-3 flex items-center gap-2">
          Resume
          <div className="w-6 h-0.5 bg-yellow-400"></div>
        </h1>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <GraduationCap size={18} className="text-yellow-400" />
          Education
          <div className="w-4 h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="relative">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-6 pb-6">
              <div className="absolute left-0 top-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="ml-4">
                <h3 className="font-bold text-white">{edu.institution}</h3>
                <p className="text-yellow-400 text-sm mb-1">{edu.period}</p>
                <p className="text-gray-300 text-sm">{edu.degree}</p>
                <p className="text-gray-400 text-xs">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Relevant Coursework Section */}
      <section>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <BookOpen size={18} className="text-yellow-400" />
          Relevant Coursework
          <div className="w-4 h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="space-y-3">
          {Object.entries(coursework).map(([category, courses], index) => (
            <div key={index} className="relative pl-6">
              <div className="absolute left-0 top-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="ml-4">
                <h3 className="font-bold text-white text-sm">{category}:</h3>
                <p className="text-gray-300 text-sm">{courses.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Briefcase size={18} className="text-yellow-400" />
          Experience
          <div className="w-4 h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="relative">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-6 pb-6">
              <div className="absolute left-0 top-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="ml-4">
                <h3 className="font-bold text-white">{exp.position}</h3>
                <p className="font-semibold text-blue-400 text-sm">{exp.company}</p>
                <p className="text-yellow-400 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-400 text-xs mb-2">{exp.location}</p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-300 text-sm flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Section */}
      <section>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Cpu size={18} className="text-yellow-400" />
          Technical Skills
          <div className="w-4 h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="space-y-3">
          {Object.entries(technicalSkills).map(([category, skills], index) => (
            <div key={index} className="relative pl-6">
              <div className="absolute left-0 top-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="ml-4">
                <h3 className="font-bold text-white text-sm">{category}:</h3>
                <p className="text-gray-300 text-sm">{skills.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
