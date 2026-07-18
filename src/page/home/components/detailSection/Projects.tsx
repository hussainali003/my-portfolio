import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

import { projects } from "../../../../data/projects";

export default function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-1 gap-4 md:mx-28 transition-all duration-1000
        ${visible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}
    >
      {projects.map((item) => (
        <Link
          key={item.id}
          to={`/project/${item.slug}`}
          className="flex-1 flex flex-col gap-3 rounded-2xl p-4 border border-white/10
          bg-linear-to-br from-slate-900/90 to-slate-700/90 cursor-pointer
          transition-all duration-300 hover:border-[#a855f7]/60 group
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a855f7]"
        >
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <img
              src={item.image}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt={item.imageAlt}
            />
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-xl font-semibold bg-linear-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {item.title}
            </h3>
            {item.liveUrl && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 text-[10px] uppercase tracking-wide text-emerald-300 rounded-full border border-emerald-400/30 bg-emerald-400/10">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            )}
          </div>
          <p className="text-gray-300/80 text-xs sm:text-sm">{item.summary}</p>
          <span className="mt-auto self-end flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/70 transition-colors duration-300 group-hover:text-white">
            View Details
            <FaArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  );
}
