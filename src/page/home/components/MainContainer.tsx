import { CiMail, CiShare1 } from "react-icons/ci";
import { useInViewAnimation } from "../../../hooks/useInViewAnimation";

function MainContainer() {
  const { ref, visible } = useInViewAnimation();

  return (
    <div
      ref={ref}
      id="Home"
      className={`min-h-screen flex flex-col flex-1 justify-center sm:items-center gap-4 px-4 transition-all duration-1500
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}
      `}
    >
      <p className="font-bold text-5xl sm:text-7xl text-white line">Frontend</p>
      <p className="pb-1 font-bold text-5xl sm:text-7xl bg-linear-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent -tracking-tight">
        Developer
      </p>
      <p className="text-white text-xl sm:text-4xl">Computer Science & Engg. Student</p>
      <p className="text-gray-400 text-base sm:text-lg">
        Enhancing digital experiences that are scalable, and made to impress.
      </p>
      <div className="hidden gap-4 sm:flex">
        <div className="flex-1 items-center justify-center py-2 px-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-700 cursor-text">
          <p className="text-xs sm:text-sm text-center text-gray-300 ">Javascript</p>
        </div>
        <div className="flex-1 items-center justify-center py-2 px-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-700 cursor-text">
          <p className="text-xs sm:text-sm text-center text-gray-300 ">React</p>
        </div>
        <div className="flex-1 items-center justify-center py-2 px-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-700 cursor-text">
          <p className="text-xs sm:text-sm text-center text-gray-300 ">Express</p>
        </div>
        <div className="flex-1 items-center justify-center py-2 px-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-700 cursor-text">
          <p className="text-xs sm:text-sm text-center text-gray-300 ">PostgreSQL</p>
        </div>
      </div>
      <div className="flex gap-4">
        <a
          href="#Portfolio"
          className="w-30 sm:w-40 h-9 sm:h-11 flex items-center justify-center gap-2 text-sm text-gray-200 font-medium bg-[#030014] rounded-lg border border-white/10
            drop-shadow-[0_0_0.4em_#4f52c9] hover:drop-shadow-[0_0_0.7em_#8633C5] transition-[filter] duration-700 linear group
          "
        >
          Projects
          <CiShare1
            strokeWidth={1}
            className="transition-transform duration-300 linear group-hover:translate-x-1.25"
          />
        </a>
        <a
          href="#Contact"
          className="w-30 sm:w-40 h-9 sm:h-11 flex items-center justify-center gap-2 text-sm text-gray-200 font-medium bg-[#030014] rounded-lg border border-white/10
            drop-shadow-[0_0_0.4em_#4f52c9] hover:drop-shadow-[0_0_0.7em_#8633C5] transition-[filter] duration-700 linear group
          "
        >
          Contact
          <CiMail
            strokeWidth={1}
            className="transition-transform duration-300 linear group-hover:translate-x-1.25"
          />
        </a>
      </div>
    </div>
  );
}

export default MainContainer;
