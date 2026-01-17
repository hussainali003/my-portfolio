import { CiGlobe } from "react-icons/ci";
import { GrDocumentText } from "react-icons/gr";
import { MdCode } from "react-icons/md";
import { SlBadge } from "react-icons/sl";

export default function AboutSection() {
  return (
    <div id="About" className="pt-20 flex flex-1 flex-col gap-8 px-4">
      <h1 className="font-bold text-center text-4xl sm:text-5xl bg-linear-to-r from-[#a855f7] to-[#6366f1]  bg-clip-text text-transparent">
        About Me
      </h1>
      <div className="mx-auto sm:w-[50%]">
        <p className="text-center text-base sm:text-lg text-gray-400">
          Dedicated and results-driven Web Developer/Mobile App Developer with 1 years of experience
          in the field. Proven expertise in react and react native. committed to delivering
          high-quality solutions that exceed expectation.
        </p>
      </div>
      <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
        <button
          type="button"
          className="w-full flex items-center justify-center gap-1 sm:w-auto px-3 py-2 font-medium text-white rounded-lg bg-linear-to-r from-[#6366f1] to-[#a855f7] transition-all  duration-300 hover:scale-105 cursor-pointer"
        >
          <GrDocumentText />
          Download CV
        </button>
        <a
          href="#Portfolio"
          className="w-full flex items-center justify-center gap-1 sm:w-auto  px-3 py-2 font-medium text-[#a855f7] rounded-lg border border-[#a855f7]/50  transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <MdCode className="text-lg" />
          View Projects
        </a>
      </div>
      <div className="flex flex-col sm:flex-row flex-1 sm:items-center sm:justify-center gap-4">
        {cardList.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[20%] p-6 border rounded-2xl border-white/10 bg-gray-900/50 transition-all duration-300 hover:scale-105"
          >
            <div className="flex mb-4 items-center justify-between">
              <div className="w-13 h-13 flex items-center justify-center rounded-full bg-white/10">
                {item.id === 1 && <MdCode className="text-xl text-white" />}
                {item.id === 2 && <SlBadge className="text-xl text-white" />}
                {item.id === 3 && <CiGlobe className="text-xl text-white" />}
              </div>
              <p className="font-bold text-4xl text-white">{item.count}</p>
            </div>
            <h1 className="text-sm text-gray-300 truncate">{item.title}</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400 truncate">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardList = [
  {
    id: 1,
    title: "TOTAL PROJECTS",
    description: "Innovative web & mobile solutions crafted",
    count: 5,
  },
  {
    id: 2,
    title: "CERTIFICATES",
    description: "Professional skills validated",
    count: 2,
  },
  {
    id: 3,
    title: "YEARS OF EXPERIENCE",
    description: "Continoues learning journey",
    count: 3,
  },
];
