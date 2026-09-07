import {
  Code,
  Database,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  TestTube2,
} from "lucide-react";
import Card from "./Card";

export default function AboutContent() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
          About Me
          <div className="w-6 h-0.5 bg-yellow-400" aria-hidden />
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed">
          Computing graduate based in Dublin with a focus on building practical
          software across backend, full-stack and real-time systems. I enjoy
          taking projects from initial development through testing, debugging
          and deployment, and I have published software used outside a
          university environment.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3 text-white">Technical Focus</h2>
        <div className="grid grid-cols-2 gap-3">
          <Card
            icon={<Database />}
            title="Backend & APIs"
            text="FastAPI, Django, REST APIs, PostgreSQL, Docker and service-oriented backends"
          />
          <Card
            icon={<Globe />}
            title="Full-Stack & Mobile"
            text="React, Next.js, React Native — including a Google Play–published Android app"
          />
          <Card
            icon={<Code />}
            title="Real-Time Systems"
            text="WebSockets, multiplayer sync, reconnect recovery and load-tested architectures"
          />
          <Card
            icon={<TestTube2 />}
            title="Testing & Delivery"
            text="Selenium, Jenkins, GitHub Actions, Postman and regression-focused QA practices"
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3 text-white">Location & Contact</h2>
        <div className="bg-[#1b1b1b] p-4 rounded-xl border border-gray-800">
          <div className="space-y-3 text-gray-300 text-sm">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-green-400" />
              <span>Dublin, Ireland</span>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap size={16} className="text-blue-400" />
              <span>
                B.Sc. (Hons.) Computing — Computer Science Specialisation, TU
                Dublin
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-yellow-400" />
              <a
                href="mailto:betsunaidzeb@gmail.com"
                className="hover:text-yellow-300 transition-colors"
              >
                betsunaidzeb@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
