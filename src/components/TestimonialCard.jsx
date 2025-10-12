export default function TestimonialCard({ name, text, avatar }) {
  return (
    <div className="bg-[#1b1b1b] p-4 rounded-xl shadow">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm">
          {avatar}
        </div>
        <h4 className="font-semibold text-sm">{name}</h4>
      </div>
      <p className="text-xs text-gray-400">{text}</p>
    </div>
  );
}
