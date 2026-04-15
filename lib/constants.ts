export type NavItem = {
  href: string;
  label: string;
};

export type ProjectCategory = "Web" | "ML/AI" | "Systems";

export type Project = {
  title: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  outcome: string;
  github: string;
  linkLabel?: string;
  live?: string;
  featured?: boolean;
};

export type SkillGroup = {
  category: string;
  summary: string;
  items: string[];
};

export type ExperienceEntry = {
  role: string;
  organization: string;
  dates: string;
  highlights: string[];
};

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const navItems: NavItem[] = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const contactDetails = {
  email: "pshuk004@gmail.com",
  phone: "+44 7498257208",
  github: "https://github.com/PranjalShukla2004",
  linkedin: "https://www.linkedin.com/in/pranjal-shukla-274a49271/",
  location: "Edinburgh, UK",
  resume: `${siteBasePath}/pranjal-shukla-cv.pdf`,
};

export const heroContent = {
  badge: "BEng(Hons) @ The University of Edinburgh",
  roleLine: "Software Engineer | ML Systems | Quant & Backend Builder",
  intro:
    "I am an Integrated MEng Electronics with Computer Science student at the University of Edinburgh with internship experience in ML-enabled products, backend services, and high-performance systems. My work is spread across Android OCR pipelines, trading systems, RAG search tools, and uncertainty-aware machine learning research.",
  pills: [
    "University of Edinburgh",
    "Kaiteki AI and Tech Mahindra",
    "ML, systems, and APIs",
  ],
};

export const heroStats = [
  {
    label: "Education",
    value: "BEng(Hons) Electronics with Computer Science, 1st Class (76%) and Incoming Msc in AI at University of Edinburgh",
  },
  {
    label: "Experience",
    value: "SWE internships at Kaiteki AI and Tech Mahindra Makers Lab",
  },
  {
    label: "Highlights",
    value: "FlowUKT research, HackTheBurgh winner(x2), Optiver challenge 4th place",
  },
];

export const introPromptLines = [
  "Initializing profile reconstruction...",
  "Loading public signals...",
  "Building Pranjal Shukla embedding...",
  "Running inference...",
];

export const introTerminalSequence = [
  {
    command: 'load_profile --subject "Pranjal Shukla"',
    output: ["Profile graph linked", "Confidence: 0.94"],
  },
  {
    command: "parse_experience",
    output: ["Internships, education, and research extracted"],
  },
  {
    command: "extract_projects",
    output: ["ML, quant, and systems builds indexed"],
  },
  {
    command: "map_skills",
    output: ["Technical stack clustered into capability groups"],
  },
  {
    command: "render_interface",
    output: ["Launching final portfolio surface"],
  },
];

export const projects: Project[] = [
  {
    title: "FLOW-UKT",
    description:
      "An uncertainty-aware knowledge tracing system built in Python and PyTorch that implements FlowUKT with normalizing flows, alongside UKT and MC-Dropout baselines on the ASSIST2009 benchmark.",
    category: "ML/AI",
    stack: ["Python", "PyTorch", "Normalizing Flows", "ASSIST2009", "Experiment Pipelines"],
    outcome:
      "Reached 0.829 validation AUC and 0.817 test AUC, while the referenced state-of-the-art sits at 0.851 test AUC.",
    github: contactDetails.github,
    linkLabel: "GitHub Profile",
    featured: true,
  },
  {
    title: "Quantitative Sports Betting",
    description:
      "A real-time NBA betting terminal built for HackTheBurgh that combines live game stats, bookmaker odds, expected-value views, and risk management across thousands of bet categories.",
    category: "ML/AI",
    stack: ["Python", "Statistical Modeling", "ML", "Real-Time Data", "Risk Analysis"],
    outcome:
      "Finished runner-up, hit ROC-AUC 0.87 on a training set of 880,000 games, and cut model prediction latency from 12 minutes to 30 seconds.",
    github: contactDetails.github,
    linkLabel: "GitHub Profile",
    featured: true,
  },
  {
    title: "Optiver Trading Challenge",
    description:
      "A high-performance multi-threaded trading system that combines dual-listing arbitrage, market-making, and news-driven momentum strategies on the Optibook API.",
    category: "Systems",
    stack: ["Python", "Concurrency", "Trading Systems", "Optibook API", "Sentiment Analysis"],
    outcome:
      "Placed 4th and achieved sub-second trade latency with thread-safe execution, adaptive quote management, and custom sentiment scoring.",
    github: contactDetails.github,
    linkLabel: "GitHub Profile",
    featured: true,
  },
  {
    title: "Code For Good AI Search Tool",
    description:
      "An AI-powered nonprofit discovery tool that uses lightweight RAG, vectorized search, and PocketBase to help users reach the right organizations and services quickly.",
    category: "Web",
    stack: ["React", "React Native", "Tailwind CSS", "PocketBase", "RAG", "LLM Integration"],
    outcome:
      "Improved access, maintainability, and data accuracy with admin verification, automated reminders, and TTL-based freshness controls.",
    github: contactDetails.github,
    linkLabel: "GitHub Profile",
  },
  {
    title: "Spring Boot Pizza Drone Controller",
    description:
      "A Spring Boot API service that processes orders, fetches no-fly zones, and computes drone routes with A-star pathfinding plus route output in JSON for map visualization.",
    category: "Systems",
    stack: ["Java", "Spring Boot", "JUnit", "A-Star", "Postman", "curl"],
    outcome:
      "Delivered roughly 400 ms average routing response times and a fully testable service surface with endpoint verification and geo-spatial route output.",
    github: contactDetails.github,
    linkLabel: "GitHub Profile",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    summary: "Core implementation languages used across backend services, ML projects, and systems-heavy coursework.",
    items: ["Java", "Python", "JavaScript", "C", "SQL", "Swift"],
  },
  {
    category: "Frameworks",
    summary: "Product and service frameworks used across internships, hackathons, and application builds.",
    items: ["Spring Boot", "React", "React Native", "Tailwind CSS", "Django", "Flask", "Express.js", "PocketBase"],
  },
  {
    category: "ML/AI",
    summary: "Hands-on ML tooling across experimentation, uncertainty modeling, NLP, and retrieval-driven product work.",
    items: ["PyTorch", "NumPy", "Pandas", "Matplotlib", "TensorFlow", "Keras", "RAG", "NLP"],
  },
  {
    category: "Systems & Tools",
    summary: "A mix of systems, hardware, and engineering tools spanning coursework and production-style projects.",
    items: ["Linux", "Postman", "JUnit", "LTSpice", "MATLAB", "STM32 CubeIDE", "Vivado", "Verilog"],
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "BEng(Hons) Student",
    organization: "The University of Edinburgh",
    dates: "September 2022 - May 2026",
    highlights: [
      "Studying Electronics with Computer Science and currently holding a 1st Class average of 76%.",
      "Coursework spans functional programming, OOP, algorithms and data structures, operating systems, computer security, software testing, and machine learning practicals.",
      "Built a foundation across both software systems and hardware-adjacent engineering rather than staying inside a single software niche.",
    ],
  },
  {
    role: "SWE Intern",
    organization: "Kaiteki AI",
    dates: "June 2025 - September 2025",
    highlights: [
      "Built a background Android service for automated screenshot capture and OCR, reducing runtime overhead by 35%.",
      "Integrated AI-based profanity and mental-health classification with secure alerts at roughly 400 ms latency.",
      "Optimized image handling, batching, and background execution to reduce computation cost while keeping the service usable in sandboxed environments such as iOS.",
    ],
  },
  {
    role: "SWE Intern",
    organization: "Tech Mahindra Makers Lab",
    dates: "July 2023 - September 2023",
    highlights: [
      "Designed a responsive React and Tailwind UI that improved forum engagement by 15%.",
      "Helped build a real-time chat assistant with Django and React for instant query responses.",
      "Explored TensorFlow, Keras, NLP basics, and text classification workflows to strengthen practical ML understanding.",
    ],
  },
  {
    role: "ML Research Project",
    organization: "FLOW-UKT",
    dates: "April 2026",
    highlights: [
      "Developed a flow-based uncertainty-aware knowledge tracing system in Python and PyTorch.",
      "Built training, evaluation, ablation, and plotting pipelines on the ASSIST2009 benchmark.",
      "Achieved 0.829 validation AUC and 0.817 test AUC while modeling predictive uncertainty more effectively than simpler baselines.",
    ],
  },
];
