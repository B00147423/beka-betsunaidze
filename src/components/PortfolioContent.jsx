import { Github, Star } from "lucide-react";

export default function PortfolioContent() {
  const projects = [
    {
      title: "Jigsaw - Puzzle Collaboration App",
      description: "A real-time multiplayer puzzle platform for collaborative and 1v1 play using Django + WebSockets. Built scalable backend APIs handling game logic, sessions, scoring, and state synchronization with PostgreSQL and Docker-based deployment.",
      tech: ["Django", "WebSockets", "Docker", "PostgreSQL", "JavaScript", "CI/CD"],
      github: "https://github.com/B00147423/DjangoProject",
      features: ["Real-time multiplayer gameplay", "1v1 competitive mode", "Scalable backend APIs", "Docker containerization", "CI/CD pipelines", "State synchronization"],
      status: "Completed"
    },
    {
      title: "GuessIO - Twitch-Integrated Drawing Game",
      description: "A Twitch-integrated real-time drawing game with IRC chat parsing and viewer participation. Built FastAPI + PostgreSQL backend for player data, scoring, and word management with load-tested C++ WebSocket backend.",
      tech: ["C++", "FastAPI", "WebSockets", "PostgreSQL", "JavaScript", "IRC"],
      github: "https://github.com/B00147423/GuessIO",
      features: ["Twitch integration", "Real-time drawing gameplay", "IRC chat parsing", "20K concurrent users", "Sub-ms latency", "Load-tested backend"],
      status: "In Progress"
    },
    {
      title: "Chained - 2D Game Engine and Editor",
      description: "A custom 2D game engine with real-time rendering, asset loading, and JSON-based sprite/animation management. Developed ImGui-powered editor for live scene editing and hot reloading with optimized ECS architecture.",
      tech: ["C++", "OpenGL", "ImGui", "JSON", "ECS", "Shaders"],
      github: "https://github.com/B00147423/Chained",
      features: ["Custom 2D game engine", "Real-time rendering", "ImGui editor", "Hot reloading", "ECS architecture", "GPU batching"],
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
        <p className="text-gray-400 text-sm">Here are some of the projects I've been working on</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <a 
            key={index}
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-[#1b1b1b] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105"
          >
            {/* Project Image/Thumbnail */}
            <div className="relative h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Github size={32} className="text-white" />
                </div>
                <div className="text-xs text-gray-400 font-medium">Click to view on GitHub</div>
              </div>
            </div>
            
            {/* Project Content */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <span className="px-2 py-1 bg-green-900 text-green-300 text-xs rounded-full font-medium">
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-300 mb-3 leading-relaxed text-sm line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.slice(0, 4).map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-gray-800 text-xs rounded-full text-gray-300 border border-gray-700">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-1 bg-gray-800 text-xs rounded-full text-gray-400 border border-gray-700">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Star size={12} className="text-yellow-400" />
                <span>{project.features.length} key features</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
