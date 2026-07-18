import joyed from "../assets/images/joyed.png";
import lense from "../assets/images/lense.png";
import polygrid from "../assets/images/polygrid.png";
import progressTracker from "../assets/images/progressTracker.png";
import sylvasense from "../assets/images/sylvasense.png";

export type Project = {
  id: number;
  /** URL segment for /project/:slug — keep stable, it is a public link. */
  slug: string;
  /** Short name on the home card. */
  title: string;
  /** Full name on the detail page heading. */
  headline: string;
  image: string;
  imageAlt: string;
  /** One line on the home card. */
  summary: string;
  /** Full paragraph on the detail page. */
  description: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "SylvaSense",
    title: "SylvaSense",
    headline: "SylvaSense — Forestry Survey & Stocking Analysis Portal",
    image: sylvasense,
    imageAlt: "SylvaSense forestry survey portal",
    liveUrl: "https://sylvasense.farmevo.ai",
    summary:
      "Turn drone forest surveys into stocking analysis and audit-ready reports, with in-browser AI segmentation.",
    description:
      "SylvaSense turns drone forest surveys into regeneration and stocking truth — tree counts and compliance status for every block and stratum on one map. Field crews enter plot data in the browser, and audit-ready survey reports come out in minutes instead of manual spreadsheets.",
    technologies: [
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
    features: [
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
    slug: "Lens-AI",
    title: "Lens AI",
    headline: "Lens AI — Precision Agriculture Intelligence Portal",
    image: lense,
    imageAlt: "Lens AI precision agriculture portal",
    liveUrl: "https://lense.farmevo.ai",
    summary:
      "Turn drone and satellite imagery into field health, plant counts and shareable agronomy reports.",
    description:
      "Lens AI turns drone and satellite imagery into clear, actionable field insights for farmers — field health, plant count and problem areas in one place. Growers map their farms, upload imagery and get ready-to-share reports in minutes, plus a built-in AI assistant that answers questions about their data.",
    technologies: [
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
    features: [
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
    slug: "Progress-Tracker",
    title: "Progress Tracker",
    headline: "Progress Tracker",
    image: progressTracker,
    imageAlt: "Progress Tracker habit dashboard",
    liveUrl: "https://progress-tracker-web-ten.vercel.app/",
    summary: "Track your daily habits with streaks, heatmaps and charts in a clean dark dashboard.",
    description:
      "Track your daily habits and hobbies with streaks, heatmaps and charts — a clean dark dashboard that shows your progress at a glance.",
    technologies: [
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
    features: [
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
    slug: "Polygrid",
    title: "Polygrid",
    headline: "Polygrid",
    image: polygrid,
    imageAlt: "Polygrid social feed app",
    summary: "Talk to current affairs of state and post your ideas about it.",
    description: "Talk to current affairs of state and post your ideas about it.",
    technologies: ["React Native", "RN Calenders", "RN Screens", "Firebase", "Redux"],
    features: [
      "Home – Simple, for new feeds.",
      "User Auth – Sign up/sign in via Firebase authentication.",
      "Chat – talk to other peoples.",
      "Post – post new ideas.",
      "Profile – create a user profile.",
    ],
  },
  {
    id: 5,
    slug: "Joyed",
    title: "Joyed",
    headline: "Joyed",
    image: joyed,
    imageAlt: "Joyed activity sharing app",
    summary: "Share your activities with others and make a new friends for your related activity.",
    description:
      "Share your activities with others and make a new friends for your related activity.",
    technologies: ["React Native", "axios", "lodash", "RN Screens", "Firebase", "Redux"],
    features: [
      "User Auth – Sign up/sign in via Firebase authentication.",
      "Home – Simple, for new challenges.",
      "Profile – create a user profile.",
    ],
  },
];

export const findProjectBySlug = (slug?: string) =>
  projects.find((project) => project.slug === slug);
