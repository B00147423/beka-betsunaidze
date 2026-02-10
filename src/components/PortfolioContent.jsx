import { Github, Star } from "lucide-react";

const statusColors = {
  Completed: "bg-green-900 text-green-300",
  "In Progress": "bg-yellow-900 text-yellow-300",
};

export default function PortfolioContent() {
  const projects = [
    {
      title: "Jigsaw – Puzzle Collaboration App",
      description:
        "A real-time collaborative puzzle platform supporting multiplayer and 1v1 modes. Built with Django and WebSockets, featuring session management, scoring, and synchronized game state backed by PostgreSQL and Docker.",
      tech: ["Django", "WebSockets", "Docker", "PostgreSQL", "JavaScript", "CI/CD"],
      github: "https://github.com/B00147423/DjangoProject",
      features: [
        "Real-time multiplayer gameplay",
        "1v1 competitive mode",
        "Session and state management",
        "Dockerized deployment",
        "CI/CD pipelines",
        "WebSocket-based synchronization",
      ],
      status: "Completed",
    },
    {
      title: "GuessIO – Twitch-Integrated Drawing Game",
      description:
        "A Twitch-integrated real-time drawing and guessing game. Uses a FastAPI and PostgreSQL backend for player data and scoring, with a C++ WebSocket game server handling real-time interactions and IRC chat parsing.",
      tech: ["C++", "FastAPI", "WebSockets", "PostgreSQL", "JavaScript", "IRC"],
      github: "https://github.com/B00147423/GuessIO",
      features: [
        "Twitch IRC integration",
        "Real-time drawing gameplay",
        "Viewer-driven game interaction",
        "Low-latency WebSocket communication",
        "C++ game server backend",
        "Stress-tested concurrent sessions",
      ],
      status: "In Progress",
    },

    {
      title: "Tile2DEngine – 2D Engine & Editor",
      description:
        "A custom 2D tile-based engine and editor built in C++ with OpenGL. Features grid-based scene editing, camera controls, real-time rendering, and a clean scene serialization system decoupled from editor state.",
      tech: ["C++", "OpenGL", "ImGui", "JSON"],
      github: "https://github.com/B00147423/Chained",
      features: [
        "Custom 2D tile-based engine",
        "Real-time OpenGL rendering",
        "ImGui-powered editor",
        "Grid-based scene editing",
        "Scene serialization (JSON + binary)",
        "Asset management with hot reloading",
      ],
      status: "In Progress",
    },

    {
      title: "GuessIOConnection – C++ Real-Time Game Server",
      description:
        "A standalone C++ real-time game server powering GuessIO. Handles persistent WebSocket connections, Twitch IRC message parsing, game state updates, and low-latency event broadcasting for live viewer participation.",
      tech: [
        "C++",
        "WebSockets",
        "Winsock / Boost.Asio",
        "IRC",
        "Multithreading"
      ],
      github: "https://github.com/B00147423/GuessIOConnection",
      features: [
        "Persistent WebSocket server",
        "Twitch IRC message parsing",
        "Real-time game state broadcasting",
        "Concurrent client handling",
        "Low-latency event processing"
      ],
      status: "In Progress"
    }
  ];

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-xl font-bold mb-3 flex items-center gap-2">
          Portfolio
          <div className="w-6 h-0.5 bg-yellow-400"></div>
        </h1>
        <p className="text-gray-400 text-sm">
          Selected projects showcasing backend, systems, and real-time development
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.github}
            className="group bg-[#1b1b1b] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Header / Thumbnail */}
            <div className="relative h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Github size={32} className="text-white" />
                </div>
                <div className="text-xs text-gray-400 font-medium">
                  View on GitHub
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <span
                  className={`px-2 py-1 text-xs rounded-full font-medium ${statusColors[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-gray-300 mb-3 leading-relaxed text-sm line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-800 text-xs rounded-full text-gray-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-gray-400 border border-gray-700">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <Star size={12} className="text-yellow-400" />
                  <span>{project.features.length} key features</span>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-white"
                >
                  <Github size={14} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
