import {
  Code,
  Brain,
  Coffee,
  Database,
  Globe,
  Cpu,
  MapPin,
  GraduationCap,
  Mail,
} from "lucide-react";
import Card from "./Card";

export default function AboutContent() {
  return (
    <div className="space-y-6">
      {/* About */}
      <section>
        <h1 className="text-xl font-bold mb-3 flex items-center gap-2">
          About Me
          <div className="w-6 h-0.5 bg-yellow-400"></div>
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed">
          I’m a backend and real-time systems–focused developer based in Dublin,
          Ireland, currently completing a B.Sc. (Hons.) in Computing (Computer
          Science Specialisation) at Technological University Dublin. My work
          centers on building scalable APIs, real-time multiplayer systems, and
          performance-critical backend services using C++, Python (FastAPI),
          WebSockets, Docker, and PostgreSQL.
        </p>
      </section>

      {/* Technical Expertise */}
      <section>
        <h2 className="text-xl font-bold mb-3">Technical Focus</h2>
        <div className="grid grid-cols-2 gap-3">
          <Card
            icon={<Database />}
            title="Backend Systems"
            text="FastAPI, Django, REST APIs, PostgreSQL, authentication, and data modeling"
          />
          <Card
            icon={<Cpu />}
            title="Real-Time Networking"
            text="C++ WebSocket servers, IRC integration, low-latency communication, concurrency"
          />
          <Card
            icon={<Globe />}
            title="Distributed Services"
            text="Dockerized services, CI/CD pipelines, scalable backend architectures"
          />
          <Card
            icon={<Code />}
            title="Engine & Systems Programming"
            text="C++, OpenGL, ImGui, ECS-style architectures, performance optimization"
          />
        </div>
      </section>

      {/* Philosophy */}
      <section>
        <h2 className="text-xl font-bold mb-3">Engineering Approach</h2>
        <div className="bg-[#1b1b1b] p-4 rounded-xl">
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-3">
              <Brain size={16} className="text-purple-400" />
              <span>
                Strong focus on correctness, performance, and system reliability
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Coffee size={16} className="text-yellow-400" />
              <span>
                Prefer simple, maintainable designs over unnecessary complexity
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Code size={16} className="text-blue-400" />
              <span>
                Learn by building real systems and testing them under load
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Location & Contact */}
      <section>
        <h2 className="text-xl font-bold mb-3">Location & Contact</h2>
        <div className="bg-[#1b1b1b] p-4 rounded-xl">
          <div className="space-y-3 text-gray-300 text-sm">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-green-400" />
              <span>Dublin, Ireland 🇮🇪</span>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap size={16} className="text-blue-400" />
              <span>
                B.Sc. (Hons.) Computing — Computer Science Specialisation, TU Dublin
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-yellow-400" />
              <span>betsunaidzeb@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
