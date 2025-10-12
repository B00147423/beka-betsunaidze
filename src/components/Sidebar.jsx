import Image from "next/image";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">BB</span>
      </div>
      
      <h2 className="text-xl font-bold mb-1">Beka Betsunaidze</h2>
      <p className="text-sm text-gray-400 mb-4">Software Engineer & Game Developer</p>

      <div className="w-full border-t border-gray-700 my-3"></div>

      <div className="text-xs space-y-2 w-full">
        <div className="flex items-center gap-2 justify-center">
          <Mail size={14} className="text-yellow-400" /> 
          <span>betsunaidzeb@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <MapPin size={14} className="text-yellow-400" /> 
          <span>Dublin, Ireland</span>
        </div>
      </div>

      <div className="flex gap-3 justify-center mt-6">
        <a 
          href="https://github.com/B00147423" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
        >
          <Github size={16} className="text-white" />
        </a>
        <a 
          href="https://www.linkedin.com/in/beka-betsunaidze-76b612292" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
        >
          <Linkedin size={16} className="text-blue-400" />
        </a>
      </div>
    </aside>
  );
}
