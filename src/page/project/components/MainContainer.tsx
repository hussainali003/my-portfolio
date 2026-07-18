import { useEffect } from "react";
import { BsStack } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { IoCubeOutline } from "react-icons/io5";
import { Link, useParams } from "react-router";
import { findProjectBySlug } from "../../../data/projects";

export default function MainContainer() {
  const { name } = useParams();
  const data = findProjectBySlug(name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 mx-4 my-24">
        <h1 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
          Project not found
        </h1>
        <p className="text-base text-white/70">
          The project you are looking for does not exist or has been renamed.
        </p>
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2.5 text-white rounded-xl border border-blue-500/30 bg-linear-to-r from-blue-600/20 to-purple-600/20 transition-all duration-300 hover:scale-102 hover:border-blue-500"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col lg:flex-row gap-16 mx-4 my-4 2xl:mx-42">
      <div className="flex-1">
        <h1 className="text-3xl md:text-6xl font-bold bg-linear-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
          {data.headline}
        </h1>
        <div className="w-28 h-1 my-6 rounded-full bg-linear-to-r from-blue-500 to-purple-500 animate-pulse" />
        <h3 className="text-base text-white/70">{data.description}</h3>
        {data.liveUrl && (
          <a
            href={data.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 text-sm text-white rounded-xl border border-blue-500/30 bg-linear-to-r from-blue-600/20 to-purple-600/20 transition-all duration-300 hover:scale-102 hover:from-blue-600/30 hover:to-purple-600/30 hover:border-blue-500"
          >
            <FaExternalLinkAlt className="w-3 h-3" />
            View Live Demo
          </a>
        )}
        <div className="flex flex-1 gap-3 p-4 my-6 rounded-xl bg-white/3">
          <div className="flex flex-1 items-center gap-2 p-2 sm:p-3 rounded-xl border border-blue-300/30 bg-white/6 transition-all duration-300 hover:scale-101 hover:border-blue-300">
            <div className="flex items-center justify-center  size-7 sm:size-10 rounded-full bg-blue-300/10">
              <FaCode className="text-blue-300" />
            </div>
            <div>
              <h3 className="text-base text-blue-300/70">{data.technologies.length}</h3>
              <h5 className="text-xs text-gray-400 truncate">Total Technologies</h5>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-2 p-2 sm:p-3 rounded-xl border border-purple-700/30 bg-white/6 transition-all duration-300 hover:scale-101 hover:border-purple-700">
            <div className="flex items-center justify-center  size-7 sm:size-10 rounded-full bg-purple-700/10">
              <BsStack className="text-purple-700" />
            </div>
            <div>
              <h3 className="text-base text-purple-700/80">{data.features.length}</h3>
              <h5 className="text-xs text-gray-400 truncate">Key Features</h5>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FaCode className="text-blue-500" />
          <h3 className="font-medium text-xl text-white">Technologies Used</h3>
        </div>
        <div className="flex flex-wrap gap-2 py-6">
          {data.technologies.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-1 px-4 py-2.5 text-blue-300/70 rounded-xl border border-blue-500/10 bg-linear-to-r from-blue-600/10 to-purple-600/10 transition-all duration-300 hover:scale-102 hover:from-blue-600/15 hover:to-purple-600/15 hover:border-blue-500/30 cursor-default"
            >
              <IoCubeOutline />
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-12 flex-1">
        <div className="w-full aspect-video rounded-2xl border border-gray-700/70 overflow-hidden transition-all duration-300 hover:border-gray-700 group">
          <img
            src={data.image}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt={data.imageAlt}
          />
        </div>
        <div className="p-6 rounded-2xl border border-gray-700/70">
          <div className="flex items-center gap-2">
            <CiStar className="size-6 text-yellow-300" />
            <h1 className="text-medium text-2xl text-white">Key Features</h1>
          </div>
          <ul>
            {data.features.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 mt-2 p-2.5 rounded-xl border border-transparent bg-transparent transition-all duration-300 hover:bg-white/10 hover:border-gray-700"
              >
                <div className="size-2 rounded-full bg-purple-400" />
                <p className="text-medium text-base text-white">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
