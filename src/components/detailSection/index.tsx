import { useState } from "react";

import { LiaCubesSolid } from "react-icons/lia";
import { MdCode } from "react-icons/md";
import { SlBadge } from "react-icons/sl";

import Certificate from "./Certificate";

export default function DetailSection() {
  const [activebutton, setActiveButton] = useState("Projects");

  return (
    <div id="Portfolio" className="pt-40 flex flex-1 flex-col gap-4 px-4">
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
            className={`flex flex-col flex-1 items-center justify-center gap-1 py-4 sm:py-6 text-lg sm:text-2xl text-white rounded-2xl ${activebutton === item.name && "bg-[#191737] text-[#a855f7]!"} cursor-pointer ${activebutton !== item.name && "hover:bg-[#191737]/50"} transition-transform duration-300 hover:-translate-y-1.25`}
          >
            {item.icon}
            <p className="text-white sm:font-bold text-sm sm:text-lg">{item.name}</p>
          </button>
        ))}
      </div>
      <Certificate />
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
    id: 1,
    name: "Tech Stack",
    icon: <LiaCubesSolid />,
  },
];
