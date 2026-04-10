import { ExternalLink, Github } from "lucide-react";

const statusColors = {
  Completed: "bg-green-900/80 text-green-300 border border-green-800/80",
  "In Progress": "bg-yellow-900/50 text-yellow-200 border border-yellow-800/60",
};

const EMAIL = "mailto:betsunaidzeb@gmail.com";

export default function PortfolioContent() {
  const projects = [
    {
      title: "Jigsaw",
      subtitle: "Django · WebSockets · PostgreSQL · Docker",
      summary:
        "ASGI Django app: WebSocket channels for room state, scoring, ordered pushes to peers.",
      points: [
        "Authoritative room state in Django; ordered WebSocket fan-out per room.",
        "Room lifecycle: create, join, leave, teardown with cleanup on exit.",
        "Docker image; CI runs tests before deploy.",
      ],
      challenge: [
        "Reconnects and concurrent joins had to keep in-memory room state aligned with PostgreSQL rows.",
        "Burst room creation hit connection pool limits until pool size and timeouts were raised.",
      ],
      impact: [
        "Locust (HTTP + WS): pool exhaustion stopped after increasing pool size and deadlines.",
        "Reconnect handler applies pending updates in order so joiners match room state.",
      ],
      github: "https://github.com/B00147423/DjangoProject",
      status: "Completed",
    },
    {
      title: "GuessIO",
      subtitle: "FastAPI · C++ · WebSockets · PostgreSQL · IRC",
      summary:
        "FastAPI + PostgreSQL for API and scores; C++ process for WebSockets, IRC parse, broadcast.",
      points: [
        "IRC lines parsed into a bounded queue feeding game logic.",
        "FastAPI writes scores to PostgreSQL; C++ fans out game events without blocking the Python process.",
        "Max queue depth on the C++ side; drops oldest entries when full.",
      ],
      challenge: [
        "IRC message bursts overlapped with drawing and guess traffic on one host.",
        "Only FastAPI writes to PostgreSQL; C++ must not duplicate durable state.",
      ],
      impact: [
        "Moving broadcast to C++ removed lock contention on the Python process during IRC spikes.",
        "Over-cap queue drops bounded memory instead of unbounded growth.",
      ],
      github: "https://github.com/B00147423/GuessIO",
      status: "In Progress",
    },
    {
      title: "Tile2DEngine (Chained)",
      subtitle: "C++ · OpenGL · ImGui",
      summary:
        "OpenGL tile renderer and ImGui editor; scenes load/save as JSON or binary.",
      points: [
        "Batched draws; removed redundant GL state changes on large tile layers.",
        "Editor state separate from serialized scene files on disk.",
        "Asset reload: fixed texture handle leaks found under repeat reload.",
      ],
      challenge: [
        "Dense maps issued too many draw calls and GL state toggles per frame.",
        "Undo and reload could race the draw thread if they wrote the same GPU buffers.",
      ],
      impact: [
        "Lower frame time on dense maps after batching draws.",
        "Undo/reload write to staging buffers; render reads a snapshot, not in-flight editor writes.",
      ],
      github: "https://github.com/B00147423/Chained",
      status: "In Progress",
    },
    {
      title: "GuessIOConnection",
      subtitle: "C++ · WebSockets · Winsock / Boost.Asio · IRC",
      summary:
        "Standalone server: async accept/read, IRC tokenizer, threaded broadcast to WebSocket clients.",
      points: [
        "Non-blocking reads; each client has a send queue capped at a fixed max length.",
        "IRC tokenizer reassembles lines across partial TCP reads.",
        "Profiled broadcast path; reduced lock hold time on shared outbound state.",
      ],
      challenge: [
        "Many connects/disconnects and fan-out without growing thread count without bound.",
        "Reconnect bursts filled memory if outbound queues had no cap.",
      ],
      impact: [
        "Locust: stable at 20K+ concurrent users (simulated, Locust), peak test.",
        "Narrowed broadcast lock scope; capped client queues drop sends when full instead of growing memory without bound.",
      ],
      github: "https://github.com/B00147423/GuessIOConnection",
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
      </section>

      <div className="space-y-4">
        {projects.map((project) => (
          <article
            key={project.github}
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
              <span
                className={`shrink-0 px-2 py-0.5 text-[11px] rounded font-medium ${statusColors[project.status]}`}
              >
                {project.status}
              </span>
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

              <div className="border-t border-gray-800/80 pt-3">
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
