export type Role = {
  company: string;
  mark: string;
  role: string;
  type: string;
  start: string;
  end: string | null;
  location?: string;
  compact: boolean;
  points?: readonly string[];
  tags?: readonly string[];
  summary?: string;
};

export const profile = {
  name: "Varun M Bharadwaj",
  initials: "VB",
  tagline: "Building kiosks, POS and full-stack apps.",
  role: "Product Engineer",
  company: "ARCKS Technosoft",
  location: "Bengaluru, India",
  email: "vmbvarun@gmail.com",
  degreeLine: "MCA, CGPA 8.62",
  openTo: "Open to SWE roles",
  avatar: "/avatar.jpg",
  // Optional looping portrait clip (e.g. an animated cartoon of you). Drop the file in public/ to enable it.
  avatarVideo: "/avatar.mp4",
  resume: "/Varun_M_Bharadwaj_Resume.pdf",
  site: "https://portfolio-orpin-six-41.vercel.app",
  socials: {
    github: "https://github.com/V-M-B",
    linkedin: "TODO https://linkedin.com/in/your-handle",
  },
  banner: {
    ticket: "ORDER #001 KIOSK READY",
  },
  // The cover banner cycles through these, Apple "hello" style.
  // The first one is drawn as a handwritten stroke; the rest are written in.
  greetings: [
    { text: "hello", lang: "en", script: "latin" },
    { text: "hola", lang: "es", script: "latin" },
    { text: "bonjour", lang: "fr", script: "latin" },
    { text: "नमस्ते", lang: "hi", script: "devanagari" },
    { text: "ciao", lang: "it", script: "latin" },
    { text: "ನಮಸ್ಕಾರ", lang: "kn", script: "kannada" },
    { text: "こんにちは", lang: "ja", script: "japanese" },
    { text: "olá", lang: "pt", script: "latin" },
    { text: "hallo", lang: "de", script: "latin" },
  ],
  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#stack" },
  ],
  labels: {
    overview: "Overview",
    about: "About",
    stack: "Stack",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
    current: "Current",
    present: "present",
    yearsSuffix: "yrs",
    experienceLine: (years: string) => `with ${years} years of experience`,
    liveApp: "Live app",
    source: "Source",
    emailMe: "Email me",
    downloadResume: "Download resume",
    toggleTheme: "Toggle theme",
    footer: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      built: "Built",
      builtValue: "2026, Bengaluru",
    },
  },
  about: [
    "I'm Varun, a product engineer who builds software people touch in the real world: self-service kiosks, point-of-sale tools and the dashboards behind them.",
    "I own features end to end, from touch-first React interfaces to Node.js APIs and PostgreSQL schemas, and I care about the details that make a screen fast to use with one hand.",
    "Outside work I ship full-stack and mobile side projects, from an AI resume analyzer to cross-platform React Native apps.",
  ],
  stack: [
    { title: "Languages", icon: "Code", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
    { title: "Frontend", icon: "Monitor", items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS", "shadcn/ui"] },
    { title: "Backend", icon: "Server", items: ["Node.js", "Express", "REST APIs", "JWT auth", "Redis rate limiting"] },
    { title: "Database", icon: "Database", items: ["PostgreSQL", "Supabase", "Neon", "MongoDB", "Redis", "Appwrite"] },
    { title: "DevOps", icon: "Container", items: ["Docker", "GitHub Actions", "CI/CD pipelines", "Git", "Linux", "Vercel", "AWS"] },
    { title: "AI", icon: "Sparkles", items: ["OpenAI API", "OpenRouter", "Vapi AI", "Streamlit", "LangChain"] },
  ],
  experience: [
    {
      company: "ARCKS Technosoft", mark: "AT", role: "Product Engineer", type: "Full-time",
      start: "2026-08", end: null, location: "Bengaluru", compact: false,
      points: [
        "Built self-service kiosk software for in-store ordering: item browsing, cart, order review and checkout on a touch-first interface.",
        "Engineered a centralised menu management system where operators create, categorise, price and publish items from one dashboard, with availability and pricing synced across every terminal.",
        "Own features across frontend and backend, through QA, defect fixes and technical docs before production release.",
        "Developed and shipped the company website with responsive, component-driven layouts.",
      ],
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Touch UI", "POS"],
    },
    {
      company: "Epic Minds", mark: "EM", role: "L1 Support Specialist", type: "Full-time",
      start: "2025-10", end: "2026-08", compact: true,
      summary: "production support on an enterprise payroll platform",
      points: [
        "Supported HRMS 2.0, an enterprise HR and payroll platform running in production for client organisations.",
        "Triaged incoming tickets, reproduced live issues and traced them to the underlying data or code with SQL and PL/SQL queries on Oracle.",
        "Handed root-cause findings and clear reproduction steps to the backend team, then confirmed fixes with users once they shipped.",
      ],
      tags: ["Oracle", "SQL", "PL/SQL", "Production support", "HRMS", "Payroll"],
    },
    {
      company: "Danush Systems & Solutions", mark: "DS", role: "Frontend Developer Intern", type: "Internship",
      start: "2024-12", end: "2025-02", compact: true,
      summary: "frontend internship on marketing landing pages",
      points: [
        "Designed and shipped responsive landing pages in HTML, CSS and JavaScript that improved lead conversion across campaigns.",
        "Analyzed web traffic and user behavior in Zoho Analytics and wrote weekly insight reports that guided the marketing team's A/B tests.",
        "Worked with marketing to read campaign analytics and recommend changes that improved digital engagement.",
      ],
      tags: ["HTML", "CSS", "JavaScript", "Responsive design", "Zoho Analytics", "A/B testing"],
    },
  ] satisfies Role[],
  projects: [
    {
      name: "ResumeForge", mark: "RF", subtitle: "AI resume analyzer and ATS optimizer", open: true,
      points: [
        "Compares an uploaded resume with a job description and shows skill gaps and missing keywords in real time.",
        "Express REST APIs on PostgreSQL with JWT-protected routes; OpenAI generates ATS suggestions and tailored interview questions.",
      ],
      tags: ["React", "Express", "PostgreSQL", "OpenAI", "JWT"],
      links: { live: "TODO", source: "TODO" },
    },
    {
      name: "Wallet Tracker", mark: "WT", subtitle: "iOS and Android finance app",
      description: "Personal finance tracker with Clerk sign-in, email verification and 6-digit code login. Backend APIs are protected with Redis rate limiting.",
      tags: ["React Native", "Express", "Neon PostgreSQL", "Redis", "Clerk"],
      links: { source: "TODO" },
    },
    {
      name: "Habit Tracker", mark: "HT", subtitle: "Cross-platform mobile app",
      description: "Streak calculation, push notifications and real-time sync, with reusable animated components for progress.",
      tags: ["React Native", "Expo", "Appwrite"],
      links: { source: "TODO" },
    },
    {
      name: "Mental Health Support Chatbot", mark: "MH", subtitle: "Conversational assistant",
      description: "Privacy-focused chatbot that keeps multi-turn context per session and tailors replies to stress and anxiety.",
      tags: ["Python", "Streamlit", "OpenRouter"],
      links: { source: "TODO" },
    },
  ],
  education: [
    { school: "JSS Academy of Technical Education", degree: "Master of Computer Applications", period: "2022 – 2024", score: "CGPA 8.62" },
    { school: "KLE Society's Degree College", degree: "Bachelor of Computer Applications", period: "2019 – 2022", score: "CGPA 8.29" },
  ],
  contactLine: "Hiring for frontend, full-stack or product engineering? I reply to every email.",
  seo: {
    title: "Varun M Bharadwaj – Product Engineer",
    description:
      "Product engineer in Bengaluru building self-service kiosks, POS tools and full-stack apps with React, Next.js, Node.js and PostgreSQL.",
  },
} as const;

export type Profile = typeof profile;
export type Greeting = Profile["greetings"][number];
