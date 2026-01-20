import { useState } from "react";

import { LiaCubesSolid } from "react-icons/lia";
import { MdCode } from "react-icons/md";
import { SlBadge } from "react-icons/sl";

import { useInViewAnimation } from "../../../../hooks/useInViewAnimation";

import Certificate from "./Certificate";
import Projects from "./Projects";
import Skills from "./Skills";

export default function DetailSection() {
  const [activebutton, setActiveButton] = useState("Projects");
  const { ref, visible } = useInViewAnimation();

  return (
    <div
      ref={ref}
      id="Portfolio"
      className={`flex flex-1 flex-col gap-4 pb-10 sm:pb-20 pt-14 sm:pt-20 px-4 transition-all duration-3000
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}
    `}
    >
      <h1 className="font-bold text-center text-4xl sm:text-5xl bg-linear-to-r from-[#a855f7] to-[#6366f1]  bg-clip-text text-transparent">
        Portfolio Showcase
      </h1>
      <div className="sm:w-[50%] mx-auto">
        <p className="text-center text-base sm:text-lg text-gray-400">
          Explore my journey through projects, certifications, and technical expertise. Each section
          represents a milestone in my continuous learning path.
        </p>
      </div>
      <div className="flex flex-1 gap-4 md:mx-24 my-6 px-5 py-3 rounded-2xl border border-white/20">
        {buttonList.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveButton(item.name)}
            className={`flex flex-col flex-1 items-center justify-center gap-1 py-4 sm:py-6 text-lg sm:text-2xl text-white rounded-2xl 
              ${activebutton === item.name && "bg-[#191737] text-[#a855f7]!"} cursor-pointer 
              ${activebutton !== item.name && "hover:bg-[#191737]/50"} transition-all duration-500 hover:-translate-y-1.25`}
          >
            {item.icon}
            <p className="text-white sm:font-bold text-sm sm:text-lg">{item.name}</p>
          </button>
        ))}
      </div>
      {activebutton === "Certificates" && <Certificate />}
      {activebutton === "Skills" && <Skills />}
      {activebutton === "Projects" && <Projects />}
    </div>
  );
}

const buttonList = [
  {
    id: 1,
    name: "Projects",
    icon: <MdCode />,
  },
  {
    id: 2,
    name: "Certificates",
    icon: <SlBadge />,
  },
  {
    id: 3,
    name: "Skills",
    icon: <LiaCubesSolid />,
  },
];
