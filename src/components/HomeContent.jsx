import {
  ArrowRight,
  Gamepad2,
  Github,
  Linkedin,
  Mail,
  Radio,
  Server,
  Zap,
} from "lucide-react";
import Card from "./Card";
import TestimonialCard from "./TestimonialCard";

const EMAIL = "mailto:betsunaidzeb@gmail.com";
const LINKEDIN =
  "https://www.linkedin.com/in/beka-betsunaidze-76b612292";

export default function HomeContent({
  onViewPortfolio,
  onViewResume,
}) {
  return (
    <div className="space-y-8">
      <section className="border border-gray-800 rounded-xl bg-[#121212] p-5 sm:p-6">
        <h1 className="text-white leading-tight mb-3">
          <span className="block text-2xl sm:text-3xl font-bold tracking-tight">
            Backend &amp; Real-Time Systems Developer
          </span>
          <span className="block text-lg sm:text-xl font-semibold text-gray-300 mt-2">
            C++, WebSockets, FastAPI, Django — multiplayer backends
          </span>
        </h1>
        <p className="text-gray-400 text-sm mb-4">
          Built and load-tested systems to 20K+ concurrent users (simulated, Locust).
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "C++",
            "FastAPI",
            "Django",
            "WebSockets",
            "PostgreSQL",
            "Docker",
          ].map((label) => (
            <span
              key={label}
              className="px-2.5 py-1 text-xs rounded-md bg-[#1b1b1b] text-gray-400 border border-gray-800"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <a
            href={EMAIL}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 text-gray-900 px-4 py-2.5 text-sm font-semibold hover:bg-yellow-300 transition-colors"
          >
            <Mail size={16} strokeWidth={2.5} />
            Email
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-600 text-gray-200 px-4 py-2.5 text-sm font-medium hover:border-yellow-400/60 hover:text-white transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <button
            type="button"
            onClick={onViewPortfolio}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1f1f1f] text-gray-200 px-4 py-2.5 text-sm font-medium hover:bg-[#2a2a2a] transition-colors border border-gray-800"
          >
            Projects
            <ArrowRight size={16} />
          </button>
          <button
            type="button"
            onClick={onViewResume}
            className="inline-flex items-center justify-center gap-2 rounded-lg text-gray-500 px-4 py-2.5 text-sm hover:text-gray-300 transition-colors sm:ml-0"
          >
            Resume
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-white">
          Focus
          <div className="w-6 h-0.5 bg-yellow-400" aria-hidden />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Card
            icon={<Server />}
            title="APIs &amp; data"
            text="FastAPI/Django, PostgreSQL, migrations, Docker images and deploy."
          />
          <Card
            icon={<Radio />}
            title="WebSockets"
            text="Room state, broadcast ordering, reconnect handling."
          />
          <Card
            icon={<Zap />}
            title="C++ servers"
            text="Threads, accept/read loops, queues, profiling under load."
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-1 flex items-center gap-2 text-white">
          Tile2DEngine — 2D engine
          <div className="w-6 h-0.5 bg-yellow-400" aria-hidden />
        </h2>
        <p className="text-xs text-gray-500 mb-3">
          C++, OpenGL, ImGui, JSON · 2025–present
        </p>
        <div className="bg-[#1b1b1b] p-4 rounded-xl border border-gray-800">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-11 h-11 bg-[#252525] rounded-lg flex items-center justify-center border border-gray-700 shrink-0">
              <Gamepad2 size={22} className="text-gray-300" />
            </div>
            <ul className="text-gray-400 text-sm leading-relaxed space-y-2 list-disc list-inside marker:text-yellow-600/80">
              <li>
                Real-time scene editing and rendering: custom tile engine and
                editor in C++ with OpenGL and ImGui.
              </li>
              <li>
                GPU-oriented draw path, camera controls, and zoom for interactive
                editing.
              </li>
              <li>
                Deterministic serialization (JSON; binary path where used),
                decoupled from live editor state.
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {["C++", "OpenGL", "ImGui", "JSON"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-[#141414] text-xs rounded text-gray-400 border border-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/B00147423/Tile2DEngine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-sm text-gray-400 hover:text-yellow-400 transition-colors"
          >
            <Github size={14} />
            github.com/B00147423/Tile2DEngine
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-3 text-white">Testimonials</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <TestimonialCard
            name="Project collaborator"
            text="Strong problem-solving and attention to detail on shared technical work."
            avatar="👨‍💻"
          />
          <TestimonialCard
            name="Team lead"
            text="Clear communication and consistent delivery of quality code."
            avatar="👩‍💼"
          />
        </div>
      </section>
    </div>
  );
}
