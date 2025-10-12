import { Brain, Code, Workflow, Camera, Gamepad2 } from "lucide-react";
import Card from "./Card";
import TestimonialCard from "./TestimonialCard";

export default function HomeContent() {
  return (
    <div className="space-y-6">
      {/* What I'm Doing Section */}
      <section>
        <h1 className="text-xl font-bold mb-3 flex items-center gap-2">
          What I'm Doing
          <div className="w-6 h-0.5 bg-yellow-400"></div>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Card
            icon={<Brain />}
            title="Learning"
            text="Exploring computer science and AI to solve real-world problems."
          />
          <Card
            icon={<Code />}
            title="Coding"
            text="Building full-stack projects using C++, Python, and JavaScript."
          />
          <Card
            icon={<Workflow />}
            title="Automation"
            text="Automating workflows using scripts and APIs."
          />
          <Card
            icon={<Camera />}
            title="Documentation"
            text="Documenting my work and sharing knowledge with others."
          />

          {/* Game Engine Development*/}
          <div className="bg-[#1b1b1b] p-4 rounded-xl shadow hover:shadow-lg transition col-span-1 sm:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Gamepad2 size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">Game Engine Development</h3>
                <p className="text-gray-400 text-sm">
                  Building custom engines from the ground up
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              I'm deeply passionate about game engine development and real-time rendering. 
              Currently working on <span className="text-blue-400 font-semibold">Chained</span>, 
              a custom 2D game engine built with C++, OpenGL, and ImGui. 
              I love the challenge of creating efficient rendering pipelines, implementing ECS architectures, 
              and building tools that empower game developers.
            </p>
            <div className="flex flex-wrap gap-2">
              {["C++", "OpenGL", "ImGui", "ECS", "Real-time Rendering"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-800 text-xs rounded-full text-gray-300 border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-xl font-bold mb-3">Testimonials</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <TestimonialCard
            name="Project Collaborator"
            text="Beka is an excellent developer with strong problem-solving skills and attention to detail."
            avatar="👨‍💻"
          />
          <TestimonialCard
            name="Team Lead"
            text="Great communication skills and always delivers high-quality code on time."
            avatar="👩‍💼"
          />
        </div>
        <div className="flex gap-1 mt-4">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </section>
    </div>
  );
}
