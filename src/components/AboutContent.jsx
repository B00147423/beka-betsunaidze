import { Code, Heart, Brain, Coffee, Database, Globe, Cpu, MapPin, GraduationCap, Mail } from "lucide-react";
import Card from "./Card";

export default function AboutContent() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-xl font-bold mb-3 flex items-center gap-2">
          About Me
          <div className="w-6 h-0.5 bg-yellow-400"></div>
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed">
          I'm a dedicated Software Engineer from Dublin, Ireland, currently pursuing a B.Sc. (Hons.) in Computing 
          with Computer Science Specialisation at Technological University Dublin. I specialize in full-stack development, 
          real-time systems, and game engine development with expertise in C++, Python, JavaScript, and modern web technologies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Technical Expertise</h2>
        <div className="grid grid-cols-2 gap-3">
          <Card icon={<Code />} title="Full-Stack Development" text="Django, FastAPI, React, Next.js, and modern web frameworks" />
          <Card icon={<Database />} title="Backend Systems" text="Python, C++, PostgreSQL, WebSockets, and distributed systems" />
          <Card icon={<Globe />} title="Game Development" text="C++, OpenGL, ImGui, custom game engines, and real-time rendering" />
          <Card icon={<Cpu />} title="System Programming" text="C++, real-time networking, multiplayer servers, and performance optimization" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">My Philosophy</h2>
        <div className="bg-[#1b1b1b] p-4 rounded-xl">
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-3">
              <Heart size={16} className="text-red-400" />
              <span>Passionate about creating meaningful software solutions</span>
            </li>
            <li className="flex items-center gap-3">
              <Brain size={16} className="text-purple-400" />
              <span>Continuously learning and adapting to new technologies</span>
            </li>
            <li className="flex items-center gap-3">
              <Coffee size={16} className="text-yellow-400" />
              <span>Committed to writing clean, efficient, and maintainable code</span>
            </li>
          </ul>
        </div>
      </section>

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
              <span>B.Sc. Computing (CS Specialisation) - TU Dublin</span>
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
