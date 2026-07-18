import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";

import joyed from "../../../../assets/images/joyed.png";
import lense from "../../../../assets/images/lense.png";
import polygrid from "../../../../assets/images/polygrid.png";
import progressTracker from "../../../../assets/images/progressTracker.png";
import sylvasense from "../../../../assets/images/sylvasense.png";

export default function Projects() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const handleNavigate = (name: string) => {
    navigate(`/project/${name}`);
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-1 gap-4 md:mx-28 transition-all duration-1000
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
              className="w-full h-full transition-transform duration-500 group-hover:scale-105"
              alt={item.alt}
            />
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-xl font-semibold bg-linear-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {item.title}
            </h3>
            {item.isLive && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 text-[10px] uppercase tracking-wide text-emerald-300 rounded-full border border-emerald-400/30 bg-emerald-400/10">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            )}
          </div>
          <p className="text-gray-300/80 text-xs sm:text-sm">{item.description}</p>
          <button
            onClick={() => handleNavigate(item.name)}
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
    img: sylvasense,
    alt: "SylvaSense forestry survey portal",
    name: "SylvaSense",
    title: "SylvaSense",
    isLive: true,
    description:
      "Turn drone forest surveys into stocking analysis and audit-ready reports, with in-browser AI segmentation.",
  },
  {
    id: 2,
    img: lense,
    alt: "Lens AI precision agriculture portal",
    name: "Lens-AI",
    title: "Lens AI",
    isLive: true,
    description:
      "Turn drone and satellite imagery into field health, plant counts and shareable agronomy reports.",
  },
  {
    id: 3,
    img: progressTracker,
    alt: "Progress Tracker habit dashboard",
    name: "Progress-Tracker",
    title: "Progress Tracker",
    isLive: true,
    description:
      "Track your daily habits with streaks, heatmaps and charts in a clean dark dashboard.",
  },
  {
    id: 4,
    img: polygrid,
    alt: "Polygrid social feed app",
    name: "Polygrid",
    title: "Polygrid",
    description: "Talk to current affairs of state and post your ideas about it.",
  },
  {
    id: 5,
    img: joyed,
    alt: "Joyed activity sharing app",
    name: "Joyed",
    title: "Joyed",
    description:
      "Share your activities with others and make a new friends for your related activity.",
  },
];
