import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import progressTracker from "../../../../assets/images/progressTracker.png";

export default function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`flex flex-col lg:flex-row flex-1 gap-4 md:mx-28 transition-all duration-1000
        ${visible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}
    >
      {projectList.map((item) => (
        <div
          key={item.id}
          className="flex-1 flex flex-col gap-3 rounded-2xl p-4 border border-white/10
          bg-linear-to-br from-slate-900/90 to-slate-700/90 cursor-pointer 
          transition-all duration-300 hover:border-[#a855f7]/60 group"
        >
          <div className="flex-1 rounded-lg overflow-hidden">
            <img
              src={item.img}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              alt={item.alt}
            />
          </div>
          <h3 className="text-base sm:text-xl font-semibold bg-linear-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
            {item.name}
          </h3>
          <p className="text-gray-300/80 text-xs sm:text-sm">{item.description}</p>
          <button
            type="button"
            className="self-end flex items-center gap-1.5 sm:gap-2 text-white rounded-sm px-3 py-1 cursor-pointer transition-color duration-500 bg-white/10 hover:bg-white/30"
          >
            <h3 className="text-xs sm:text-sm">Details</h3>
            <FaArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          </button>
        </div>
      ))}
    </div>
  );
}

const projectList = [
  {
    id: 1,
    img: progressTracker,
    alt: "",
    name: "Progress Tracker",
    description: "Track you daily progress and make a habit for a life time.",
  },
  {
    id: 2,
    img: progressTracker,
    alt: "",
    name: "Polygrid",
    description: "Talk to others about politics and choose the best candidate for election.",
  },
  {
    id: 3,
    img: progressTracker,
    alt: "",
    name: "Joyed",
    description:
      "Share your activities with others and make a new friends for your related activity.",
  },
];
