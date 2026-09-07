import { ExternalLink, Github, Smartphone } from "lucide-react";

const statusColors = {
  Published: "bg-green-900/80 text-green-300 border border-green-800/80",
  Completed: "bg-green-900/80 text-green-300 border border-green-800/80",
  "In Progress": "bg-yellow-900/50 text-yellow-200 border border-yellow-800/60",
};

const EMAIL = "mailto:betsunaidzeb@gmail.com";
const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.bekabets.gymtracker";

export default function PortfolioContent() {
  const projects = [
    {
      title: "Tracket",
      subtitle: "Gym Log & Planner · React Native (Expo) · Supabase · PostgreSQL",
      summary:
        "Published a workout tracking app on Google Play for planning, logging and reviewing training.",
      points: [
        "User-specific workout planning and logging with session history.",
        "Personal records, exercise history and weight/volume progression.",
        "Built with React Native (Expo), Supabase and PostgreSQL.",
      ],
      challenge: [
        "Designing workout planning and logging flows that stay clear across sessions and history views.",
        "Keeping progression and personal-record data consistent for each user over time.",
      ],
      impact: [
        "Published on Google Play for real users outside a university environment.",
        "Delivers planning, logging and review in one mobile workflow.",
      ],
      highlight: "Published on Google Play",
      highlightTone: "play",
      github: null,
      playStore: PLAY_STORE,
      status: "Published",
    },
    {
      title: "GuessIO",
      subtitle:
        "Twitch Multiplayer Drawing Game · TypeScript · Node.js · FastAPI · PostgreSQL · WebSockets · Docker",
      summary:
        "Architected a three-service real-time application with a WebSocket server, FastAPI backend and browser client.",
      points: [
        "Multiplayer synchronization with reconnect recovery and persistent room state.",
        "Twitch integrations feeding game events into the real-time pipeline.",
        "Services containerized with Docker for consistent local and deploy environments.",
      ],
      challenge: [
        "Keeping room state consistent across reconnects and concurrent players.",
        "Coordinating WebSocket fan-out with FastAPI persistence under load.",
      ],
      impact: [
        "Load tested with 20,000+ simulated concurrent users.",
        "Stable multiplayer sessions with ordered updates and durable room data.",
      ],
      highlight: "Load tested with 20,000+ simulated concurrent users",
      highlightTone: "load",
      github: "https://github.com/B00147423/GuessIO",
      status: "Completed",
    },
    {
      title: "Jigsaw",
      subtitle:
        "Collaborative Puzzle Platform · Django · WebSockets · Docker · PostgreSQL · JavaScript",
      summary:
        "Built real-time shared and competitive puzzle modes using Django Channels and WebSockets.",
      points: [
        "Server-side piece locking and synchronized multiplayer state.",
        "Persistent sessions and scoring across shared and competitive modes.",
        "Dockerized deployment with PostgreSQL-backed persistence.",
      ],
      challenge: [
        "Preventing conflicting piece moves under concurrent player actions.",
        "Keeping client views aligned with authoritative server state after reconnects.",
      ],
      impact: [
        "Reliable shared and competitive play with locked pieces and live scores.",
        "Sessions survive reconnects without losing puzzle progress.",
      ],
      github: "https://github.com/B00147423/DjangoProject",
      status: "Completed",
    },
    {
      title: "Tile2DEngine",
      subtitle: "2D Game Engine & Editor · C++ · OpenGL · ImGui · JSON",
      summary:
        "Built a custom C++ 2D engine and editor with real-time scene editing, GPU-accelerated rendering, deterministic serialization and asset hot-reloading.",
      points: [
        "Real-time scene editing with OpenGL rendering and ImGui tooling.",
        "Deterministic JSON serialization decoupled from live editor state.",
        "Asset hot-reloading to iterate on scenes without full restarts.",
      ],
      challenge: [
        "Keeping editor mutations safe relative to the live render path.",
        "Maintaining interactive frame budgets on dense tile maps.",
      ],
      impact: [
        "Interactive editing with GPU-accelerated draw path and camera controls.",
        "Scenes reload and serialize predictably for iterative development.",
      ],
      github: "https://github.com/B00147423/Tile2DEngine",
      status: "In Progress",
    },
  ];

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-xl font-bold flex items-center gap-2 text-white">
          Portfolio
          <div className="w-6 h-0.5 bg-yellow-400" aria-hidden />
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Full-stack, backend and real-time projects — strongest evidence first.
        </p>
      </section>

      <div className="space-y-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-gray-800 bg-[#121212] overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-gray-800 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-base font-semibold text-white">
                  {project.title}
                </h2>
                <p className="text-[11px] text-gray-500 mt-0.5 font-mono">
                  {project.subtitle}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {project.highlight && (
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 text-[11px] rounded font-semibold border ${
                      project.highlightTone === "play"
                        ? "bg-green-900/40 text-green-300 border-green-800/70"
                        : "bg-yellow-900/40 text-yellow-200 border-yellow-800/60"
                    }`}
                  >
                    {project.highlightTone === "play" && (
                      <Smartphone size={11} />
                    )}
                    {project.highlight}
                  </span>
                )}
                <span
                  className={`shrink-0 px-2 py-0.5 text-[11px] rounded font-medium ${statusColors[project.status]}`}
                >
                  {project.status}
                </span>
              </div>
            </div>

            <div className="p-4 text-sm space-y-4">
              <p className="text-gray-300">{project.summary}</p>

              <ul className="space-y-1 text-gray-400 list-disc list-inside marker:text-yellow-600/90 text-[13px] leading-snug">
                {project.points.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="grid sm:grid-cols-2 gap-4 pt-1 border-t border-gray-800/80">
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Challenge
                  </h3>
                  <ul className="space-y-1.5 text-gray-400 text-[13px] leading-snug list-disc list-inside marker:text-yellow-600/90">
                    {project.challenge.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Impact
                  </h3>
                  <ul className="space-y-1.5 text-gray-400 text-[13px] leading-snug list-disc list-inside marker:text-yellow-600/90">
                    {project.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-800/80 pt-3 flex flex-wrap gap-4">
                {project.playStore && (
                  <a
                    href={project.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-green-400 hover:text-green-300 transition-colors font-medium"
                  >
                    <ExternalLink size={15} />
                    Google Play
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <Github size={15} />
                    Source
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="rounded-xl border border-gray-800 bg-[#161616] p-4 text-center">
        <a
          href={EMAIL}
          className="inline-flex items-center justify-center rounded-lg bg-yellow-400 text-gray-900 px-5 py-2.5 text-sm font-semibold hover:bg-yellow-300 transition-colors"
        >
          Email
        </a>
      </section>
    </div>
  );
}
