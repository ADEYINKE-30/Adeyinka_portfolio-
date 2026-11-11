export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  details: string;
  stack: string[];
  status: "Live" | "In progress";
  frontendUrl: string;
  backendUrl?: string;
  image: string;
  imageAlt: string;
  accent: "rust" | "blue";
};

export const projects: Project[] = [
  {
    slug: "devnotes",
    name: "DEVNOTES",
    eyebrow: "Full-stack blog & learning platform",
    description:
      "A focused space for publishing practical notes, ideas, and learning in public.",
    details:
      "DEVNOTES brings a React and TypeScript frontend together with a Node.js, Express, TypeScript, and MongoDB backend. The live product is available to explore now.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    status: "Live",
    frontendUrl: "https://devnotesade.netlify.app/",
    backendUrl: "https://devnotes-backend-zwnr.onrender.com/",
    image: "/devnotes-preview.png",
    imageAlt: "DEVNOTES learning platform dashboard",
    accent: "rust",
  },
  {
    slug: "her-growth-diary",
    name: "HER GROWTH DIARY",
    eyebrow: "Personal growth & journaling platform",
    description:
      "A calm, personal space designed to make reflection and intentional growth feel approachable.",
    details:
      "The React and TypeScript frontend is live and ready to explore. Backend functionality is still in development, so this project is clearly marked as a work in progress.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    status: "In progress",
    frontendUrl: "https://her-growth-diary-d1ttrthw2-adeyinka3.vercel.app/",
    image: "/her-growth-diary-preview.png",
    imageAlt: "HER GROWTH DIARY homepage",
    accent: "blue",
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Git & GitHub",
  "Backend development",
  "Database fundamentals",
  "API integration",
  "AI-assisted development",
];
