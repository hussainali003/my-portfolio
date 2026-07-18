import { useEffect } from "react";
import { BsStack } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { IoCubeOutline } from "react-icons/io5";
import { Link, useParams } from "react-router";
import joyed from "../../../assets/images/joyed.png";
import lense from "../../../assets/images/lense.png";
import polygrid from "../../../assets/images/polygrid.png";
import progressTracker from "../../../assets/images/progressTracker.png";
import sylvasense from "../../../assets/images/sylvasense.png";

export default function MainContainer() {
  const { name } = useParams();
  const data = projectDataList.find((project) => project.name === name);

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
          {data.alt}
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
              <h3 className="text-base text-blue-300/70">{data.technologiesList.length}</h3>
              <h5 className="text-xs text-gray-400 truncate">Total Technologies</h5>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-2 p-2 sm:p-3 rounded-xl border border-purple-700/30 bg-white/6 transition-all duration-300 hover:scale-101 hover:border-purple-700">
            <div className="flex items-center justify-center  size-7 sm:size-10 rounded-full bg-purple-700/10">
              <BsStack className="text-purple-700" />
            </div>
            <div>
              <h3 className="text-base text-purple-700/80">{data.featuresList.length}</h3>
              <h5 className="text-xs text-gray-400 truncate">Key Features</h5>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FaCode className="text-blue-500" />
          <h3 className="font-medium text-xl text-white">Technologies Used</h3>
        </div>
        <div className="flex flex-wrap gap-2 py-6">
          {data.technologiesList.map((item, index) => (
            <div
              key={`${item[0]} ${index}`}
              className="flex items-center justify-center gap-1 px-4 py-2.5 text-blue-300/70 rounded-xl border border-blue-500/10 bg-linear-to-r from-blue-600/10 to-purple-600/10 transition-all duration-300 hover:scale-102 hover:from-blue-600/15 hover:to-purple-600/15 hover:border-blue-500/30 cursor-default"
            >
              <IoCubeOutline />
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-12 flex-1">
        <div className="flex-1 rounded-2xl border border-gray-700/70 overflow-hidden transition-all duration-300 hover:border-gray-700 group">
          <img
            src={data.image}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            alt={data.name}
          />
        </div>
        <div className="p-6 rounded-2xl border border-gray-700/70">
          <div className="flex items-center gap-2">
            <CiStar className="size-6 text-yellow-300" />
            <h1 className="text-medium text-2xl text-white">Key Features</h1>
          </div>
          <ul>
            {data.featuresList.map((item, index) => (
              <li
                key={`${item[0]} ${index}`}
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

type Project = {
  id: number;
  name: string;
  description: string;
  technologiesList: string[];
  image: string;
  alt: string;
  featuresList: string[];
  liveUrl?: string;
};

const projectDataList: Project[] = [
  {
    id: 1,
    name: "SylvaSense",
    alt: "SylvaSense — Forestry Survey & Stocking Analysis Portal",
    image: sylvasense,
    liveUrl: "https://sylvasense.farmevo.ai",
    description:
      "SylvaSense turns drone forest surveys into regeneration and stocking truth — tree counts and compliance status for every block and stratum on one map. Field crews enter plot data in the browser, and audit-ready survey reports come out in minutes instead of manual spreadsheets.",
    technologiesList: [
      "React 19",
      "TypeScript 5.9",
      "Vite 7",
      "Tailwind CSS 4",
      "Redux Toolkit 2",
      "React-Redux 9",
      "Redux Persist + IndexedDB",
      "Apollo Client 4",
      "GraphQL 16",
      "GraphQL Code Generator 6",
      "React Router 7",
      "OpenLayers 10 (+ ol-ext)",
      "Turf.js 7",
      "JSTS",
      "proj4 + WKT",
      "GeoTIFF + geoblaze",
      "Transformers.js 4 (SAM 2, ONNX)",
      "WebGPU + WASM inference",
      "Web Workers",
      "SheetJS / xlsx",
      "shpjs / shp-write",
      "togeojson / tokml",
      "jsPDF 3 + jspdf-autotable",
      "html2canvas-pro / html2pdf.js",
      "Recharts 3",
      "dnd-kit",
      "Firebase 10 (Auth + FCM)",
      "Google OAuth + Azure MSAL 5",
      "Sentry 10",
      "PostHog",
      "Headless UI 2 + Heroicons + Lucide",
      "Axios, Luxon, RxJS, react-window, JSZip",
    ],
    featuresList: [
      "Block & Stratum Mapping – Draw or import forest blocks on the map, then build strata inside them with overlap detection.",
      "AI Segment Tool – Drag a box and an in-browser SAM 2 model turns the tree crown or boundary into a polygon, on WebGPU with no server round-trip.",
      "Plot Data Entry – Field crews record species tallies and brush observations directly in the app, no spreadsheet needed.",
      "Stocking & SPH Analysis – Stems-Per-Hectare, 80% lower confidence limit and compliance against target/minimum SPH are derived from plot tallies.",
      "Survey Report PDF – Generate a formatted survey report with charts and map snapshots, previewable in-app.",
      "Excel Import with Template Manager – Auto-detect client spreadsheet formats and build custom column-mapping templates for new ones.",
      'Tolko LRM XML Export – Export saved surveys to the industry Tolko "TFM" survey XML format for direct client ingestion.',
      "Flight History & Scout Imagery – Browse past drone flights, scan types and geotagged scout images on a date timeline.",
    ],
  },
  {
    id: 2,
    name: "Lens-AI",
    alt: "Lens AI — Precision Agriculture Intelligence Portal",
    image: lense,
    liveUrl: "https://lense.farmevo.ai",
    description:
      "Lens AI turns drone and satellite imagery into clear, actionable field insights for farmers — field health, plant count and problem areas in one place. Growers map their farms, upload imagery and get ready-to-share reports in minutes, plus a built-in AI assistant that answers questions about their data.",
    technologiesList: [
      "React 19",
      "TypeScript 5.9",
      "Vite 7",
      "Tailwind CSS 4",
      "Redux Toolkit 2",
      "React-Redux 9",
      "Redux Persist + IndexedDB",
      "Apollo Client 4",
      "GraphQL 16",
      "GraphQL Code Generator 6",
      "React Router 7",
      "OpenLayers 10 (+ ol-ext)",
      "Turf.js 7",
      "proj4",
      "JSTS",
      "GeoTIFF + geoblaze",
      "shpjs / shp-write",
      "togeojson / tokml",
      "Firebase 10 (Auth + FCM)",
      "Google OAuth",
      "Azure MSAL 5",
      "Anthropic Claude SDK",
      "Recharts 3",
      "jsPDF 3 + jspdf-autotable",
      "html2canvas / html2pdf.js",
      "SheetJS (xlsx)",
      "Sentry 10",
      "PostHog",
      "Headless UI 2 + Heroicons + Lucide",
      "Axios, Luxon, RxJS, react-window, JSZip",
    ],
    featuresList: [
      "Farm & Field Dashboard – Health summary, charts and the latest scan for every farm and field in one dashboard view.",
      "Interactive Field Mapping – Draw, edit and measure field boundaries on an OpenLayers map with live Turf.js area and geometry calculations.",
      "Multi-Format Field Import – Import fields from Shapefile, KML/KMZ or GeoJSON, or connect a John Deere Operations Center account.",
      "Chunked Raw Imagery Upload – Large drone image sets upload chunk-by-chunk in the background with resume and progress tracking.",
      "Agronomy Report Suite – Generate Scout, Plant Count and Off-Type reports and export them to PDF or Excel.",
      "AI Field Assistant – A Claude-powered chat that answers natural-language questions about your fields and reports.",
      "Flight & Data History Explorer – Drill down from farm to field to flight date to images to revisit any past scan.",
      "Subscription & Billing Flow – In-app pricing plans with checkout success handling.",
    ],
  },
  {
    id: 3,
    name: "Progress-Tracker",
    liveUrl: "https://progress-tracker-web-ten.vercel.app/",
    description:
      "Track your daily habits and hobbies with streaks, heatmaps and charts — a clean dark dashboard that shows your progress at a glance.",
    technologiesList: [
      "React 19",
      "TypeScript",
      "React Router 7",
      "Redux Toolkit",
      "Tailwind CSS 4",
      "Recharts",
      "Yup",
      "Luxon",
      "Vite (Rolldown)",
      "Express",
    ],
    image: progressTracker,
    alt: "Progress Tracker",
    featuresList: [
      "Habit Dashboard – Create, edit and track all your habits from one dark-themed home screen.",
      "Habit Detail & Heatmap – Per-habit page with a GitHub-style completion heatmap and derived stats.",
      "Progress Charts – Visualise streaks and completion trends over time with Recharts.",
      "Custom Scheduling – Set repeat rules, reminder times, end dates and a colour for every habit.",
      "Secure Auth – JWT-based register, login, forgot-password and reset-password flows.",
      "Persistent Sessions – Redux state with an /auth/me re-fetch, so a refresh never logs you out.",
    ],
  },
  {
    id: 4,
    name: "Polygrid",
    description: "Talk to current affairs of state and post your ideas about it.",
    technologiesList: ["React Native", "RN Calenders", "RN Screens", "Firebase", "Redux"],
    image: polygrid,
    alt: "Polygrid",
    featuresList: [
      "Home – Simple, for new feeds.",
      "User Auth – Sign up/sign in via Firebase authentication.",
      "Chat – talk to other peoples.",
      "Post – post new ideas.",
      "Profile – create a user profile.",
    ],
  },
  {
    id: 5,
    name: "Joyed",
    description:
      "Share your activities with others and make a new friends for your related activity.",
    technologiesList: ["React Native", "axios", "lodash", "RN Screens", "Firebase", "Redux"],
    image: joyed,
    alt: "Joyed",
    featuresList: [
      "User Auth – Sign up/sign in via Firebase authentication.",
      "Home – Simple, for new challenges.",
      "Profile – create a user profile.",
    ],
  },
];
