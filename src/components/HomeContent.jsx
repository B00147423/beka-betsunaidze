import {
  ArrowRight,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Smartphone,
} from "lucide-react";

const GITHUB = "https://github.com/B00147423";
const LINKEDIN =
  "https://www.linkedin.com/in/beka-betsunaidze-76b612292";
const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.bekabets.gymtracker";

const featuredProjects = [
  {
    title: "Tracket",
    subtitle: "Gym Log & Planner",
    tech: ["React Native (Expo)", "Supabase", "PostgreSQL"],
    description:
      "Published a workout tracking app on Google Play for planning, logging and reviewing training. Built user-specific workout planning and logging, session history, personal records, exercise history and weight/volume progression.",
    highlight: "Published on Google Play",
    highlightTone: "play",
    links: [
      { label: "Google Play", href: PLAY_STORE, primary: true },
    ],
  },
  {
    title: "GuessIO",
    subtitle: "Twitch Multiplayer Drawing Game",
    tech: [
      "TypeScript",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "WebSockets",
      "Docker",
    ],
    description:
      "Architected a three-service real-time application with a WebSocket server, FastAPI backend and browser client. Built multiplayer synchronization, reconnect recovery, persistent room state and Twitch integrations.",
    highlight: "Load tested with 20,000+ simulated concurrent users",
    highlightTone: "load",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/B00147423/GuessIO",
      },
    ],
  },
  {
    title: "Jigsaw",
    subtitle: "Collaborative Puzzle Platform",
    tech: ["Django", "WebSockets", "Docker", "PostgreSQL", "JavaScript"],
    description:
      "Built real-time shared and competitive puzzle modes using Django Channels and WebSockets. Added server-side piece locking, persistent sessions, scoring and synchronized multiplayer state.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/B00147423/DjangoProject",
      },
    ],
  },
  {
    title: "Tile2DEngine",
    subtitle: "2D Game Engine & Editor",
    tech: ["C++", "OpenGL", "ImGui", "JSON"],
    description:
      "Built a custom C++ 2D engine and editor with real-time scene editing, GPU-accelerated rendering, deterministic serialization and asset hot-reloading.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/B00147423/Tile2DEngine",
      },
    ],
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    label: "Frameworks",
    items: ["FastAPI", "Django", "React", "Next.js", "React Native"],
  },
  {
    label: "Backend / Networking",
    items: ["REST APIs", "WebSockets"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL"],
  },
  {
    label: "Testing",
    items: [
      "Selenium WebDriver",
      "Postman",
      "API Testing",
      "Automated Testing",
      "Manual Testing",
    ],
  },
  {
    label: "Tools",
    items: ["Docker", "GitHub Actions", "Jenkins", "Git", "Linux", "CMake"],
  },
];

const experienceBullets = [
  "Led a student team to build a campus social platform connecting students by course and module.",
  "Coordinated weekly Scrum meetings to track progress, assign tasks and keep development on schedule.",
  "Led troubleshooting and testing sessions using Selenium WebDriver to identify and reproduce functional defects.",
  "Used Jenkins to run automated test suites and catch regressions before integration.",
];

export default function HomeContent({ onViewPortfolio, onViewResume }) {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="border border-gray-800 rounded-xl bg-[#121212] p-5 sm:p-6">
        <h1 className="text-white leading-tight mb-1">
          <span className="block text-2xl sm:text-3xl font-bold tracking-tight">
            Beka Betsunaidze
          </span>
          <span className="block text-lg sm:text-xl font-semibold text-yellow-400 mt-1.5">
            Software Engineer
          </span>
        </h1>
        <p className="text-gray-400 text-sm mt-3 mb-5 max-w-2xl leading-relaxed">
          Computing graduate building full-stack, backend and real-time
          software. Published an Android app on Google Play and built systems
          using Python, TypeScript, C++, Docker and PostgreSQL.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <button
            type="button"
            onClick={onViewPortfolio}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 text-gray-900 px-4 py-2.5 text-sm font-semibold hover:bg-yellow-300 transition-colors"
          >
            View Projects
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-600 text-gray-200 px-4 py-2.5 text-sm font-medium hover:border-yellow-400/60 hover:text-white transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <button
            type="button"
            onClick={onViewResume}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1f1f1f] text-gray-200 px-4 py-2.5 text-sm font-medium hover:bg-[#2a2a2a] transition-colors border border-gray-800"
          >
            <FileText size={16} />
            Resume
          </button>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg text-gray-400 px-4 py-2.5 text-sm hover:text-gray-200 transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </section>

      {/* Selected Work */}
      <section id="selected-work">
        <div className="flex flex-wrap items-end justify-between gap-2 mb-3">
          <h2 className="text-lg font-bold flex items-center gap-2 text-white">
            Selected Work
            <div className="w-6 h-0.5 bg-yellow-400" aria-hidden />
          </h2>
          <button
            type="button"
            onClick={onViewPortfolio}
            className="text-xs text-gray-500 hover:text-yellow-400 transition-colors"
          >
            Full portfolio →
          </button>
        </div>

        <div className="space-y-3">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="bg-[#1b1b1b] p-4 rounded-xl border border-gray-800"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {project.title}
                    <span className="text-gray-500 font-normal">
                      {" "}
                      — {project.subtitle}
                    </span>
                  </h3>
                </div>
                {project.highlight && (
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border ${
                      project.highlightTone === "play"
                        ? "bg-green-900/40 text-green-300 border-green-800/70"
                        : "bg-yellow-900/40 text-yellow-200 border-yellow-800/60"
                    }`}
                  >
                    {project.highlightTone === "play" && (
                      <Smartphone size={12} />
                    )}
                    {project.highlight}
                  </span>
                )}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-[#141414] text-xs rounded text-gray-400 border border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm transition-colors ${
                      link.primary
                        ? "text-green-400 hover:text-green-300 font-medium"
                        : "text-gray-400 hover:text-yellow-400"
                    }`}
                  >
                    {link.primary ? (
                      <ExternalLink size={14} />
                    ) : (
                      <Github size={14} />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Relevant Experience */}
      <section>
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-white">
          Relevant Experience
          <div className="w-6 h-0.5 bg-yellow-400" aria-hidden />
        </h2>
        <div className="bg-[#1b1b1b] p-4 rounded-xl border border-gray-800">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <div>
              <h3 className="text-base font-semibold text-white">
                Technological University Dublin
              </h3>
              <p className="text-gray-300 text-sm mt-0.5">
                Major Full-Stack Group Project, Year 3
              </p>
            </div>
            <span className="shrink-0 px-2 py-0.5 text-[11px] rounded font-medium bg-[#252525] text-gray-300 border border-gray-700">
              Academic project
            </span>
          </div>
          <p className="text-yellow-400/90 text-sm mb-3">
            Sept 2023 – May 2024 · 9 months
          </p>
          <ul className="space-y-1.5 text-gray-400 text-sm leading-relaxed">
            {experienceBullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="text-yellow-400 mt-1.5 shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technical Skills */}
      <section>
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-white">
          Technical Skills
          <div className="w-6 h-0.5 bg-yellow-400" aria-hidden />
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="bg-[#1b1b1b] p-3.5 rounded-xl border border-gray-800"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-[#141414] text-xs rounded text-gray-300 border border-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section>
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-white">
          About
          <div className="w-6 h-0.5 bg-yellow-400" aria-hidden />
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed border border-gray-800 rounded-xl bg-[#121212] p-4">
          Computing graduate based in Dublin with a focus on building practical
          software across backend, full-stack and real-time systems. I enjoy
          taking projects from initial development through testing, debugging
          and deployment, and I have published software used outside a
          university environment.
        </p>
      </section>
    </div>
  );
}
