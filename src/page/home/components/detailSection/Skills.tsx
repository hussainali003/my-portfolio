import { useEffect, useState } from "react";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiTypescript } from "react-icons/si";

export default function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`flex flex-wrap flex-1 gap-4 sm:mx-24 justify-center transition-all duration-1000 
        ${visible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}
    >
      {skills.map((item) => (
        <div
          key={item.id}
          className="flex grow sm:grow-0 basis-37.5 flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-[#191737]/70 cursor-pointer transition-transform duration-500 hover:scale-110 group"
        >
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
