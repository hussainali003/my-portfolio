import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiTypescript } from "react-icons/si";

export default function Skills() {
  return (
    <div className="flex flex-wrap flex-1 gap-4 sm:mx-24 justify-center">
      {skills.map((item) => (
        <div
          key={item.id}
          className="relative flex grow sm:grow-0 basis-37.5 flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-[#191737]/70 cursor-pointer transition-transform duration-300 hover:scale-110 group"
        >
          <div className="invisible absolute top-3 w-[45%] aspect-square bg-linear-to-r from-[#a855f7] to-[#6366f1] rounded-full blur-xl group-hover:visible" />
          {item.icon}
          <p className="font-bold text-base text-white truncate z-3">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

const skills = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 className="w-15 h-15 z-3 text-orange-400" />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt className="w-15 h-15 z-3 text-blue-500" />,
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    icon: <IoLogoJavascript className="w-15 h-15 z-3 text-yellow-400" />,
  },
  {
    id: 4,
    name: "TYPESCRIPT",
    icon: <SiTypescript className="w-15 h-15 z-3 text-blue-400" />,
  },
  {
    id: 5,
    name: "REACT + Native",
    icon: <FaReact className="w-15 h-15 z-3 text-blue-300" />,
  },
  {
    id: 6,
    name: "EXPRESS",
    icon: <SiExpress className="w-15 h-15 z-3 text-purple-400" />,
  },
];
