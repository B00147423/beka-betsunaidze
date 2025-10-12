export default function Card({ icon, title, text }) {
  return (
    <div className="bg-[#1b1b1b] p-4 rounded-xl shadow hover:shadow-lg transition">
      <div className="flex items-center gap-2 mb-2 text-yellow-400">
        {icon}
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      <p className="text-xs text-gray-400">{text}</p>
    </div>
  );
}
