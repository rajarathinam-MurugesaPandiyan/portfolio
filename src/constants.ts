// ============================================================================
// PORTFOLIO GLOBAL CONSTANTS & CONTENT CONFIGURATION
// Edit this file to update any text, links, experiences, projects, or credentials.
// ============================================================================

// ----------------------------------------------------------------------------
// ASSET IMPORTS
// ----------------------------------------------------------------------------
import virtusaLogo from "./assets/virtusa.jpeg";
import calibraintLogo from "./assets/calibraint.jpeg";
import tekionLogo from "./assets/tekion.webp";
import fibonalabsLogo from "./assets/fibonalabs.jpeg";
import trophyAnim from "./assets/Trophy.json";
import trophyAnimation from "./assets/trophywon.json";
import resumePdf from "./assets/rajarathinam.pdf";
import portfolioImg from "./assets/portfolio.png";
import dartImg from "./assets/dart.jpeg";
import goImg from "./assets/go.png";
import jsImg from "./assets/javascript.png";
import tsImg from "./assets/typescript.png";

export const ASSETS = {
  virtusaLogo,
  calibraintLogo,
  tekionLogo,
  fibonalabsLogo,
  trophyAnim,
  trophyAnimation,
  resumePdf,
  portfolioImg,
  dartImg,
  goImg,
  jsImg,
  tsImg,
};

// ============================================================================
// 1. PERSONAL INFORMATION & SOCIAL LINKS
// ============================================================================
export const PERSONAL_INFO = {
  name: "Rajarathinam",
  fullName: "Rajarathinam M",
  role: "Software Engineer",
  experienceYears: "4.3",
  email: "rajamurugesan217@gmail.com",
  phone: "+91 8610068811",
  location: "Bengaluru / Chennai, India",
  githubUrl: "https://github.com/rajarathinam-MurugesaPandiyan",
  linkedinUrl: "https://www.linkedin.com/in/rajarathinam-murugesapandiyan",
  youtubeUrl: "https://www.youtube.com/channel/UCMuVmUfK1Hu9_zDXvOw5nYw",
  twitterUrl: "https://x.com/RajarathinamMu4",
  resumeDownloadName: "Rajarathinam_Resume.pdf",
};

// ============================================================================
// 2. HEADER COMPONENT
// ============================================================================
export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "service", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const HEADER_DATA = {
  logoIcon: "RR",
  logoText: "Rajarathinam",
  githubLabel: "GitHub",
  githubMobileLabel: "GitHub Profile",
  menuAriaLabel: "Toggle navigation menu",
};

// ============================================================================
// 3. HERO COMPONENT
// ============================================================================
export const HERO_DATA = {
  badge: "Hello!",
  titlePrefix: "I'm",
  highlightName: "Rajarathinam",
  role: "Software Engineer",
  quote: [
    "Clean code and smart architecture",
    "that scaled our product effortlessly.",
    "Loved the results",
  ],
  experienceStars: "★★★★★",
  experienceNumber: PERSONAL_INFO.experienceYears,
  experienceLabel: "Years\nExperience",
  ctaProjects: "View Projects",
  ctaResume: "Download CV",
  githubTitle: "GitHub Profile",
  linkedinTitle: "LinkedIn Profile",
  youtubeTitle: "YouTube Channel",
};

// ============================================================================
// 4. SERVICES COMPONENT
// ============================================================================
export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export const SERVICES_HEADER = {
  title: "My",
  highlight: "Services",
  subtitle:
    "Full-stack developer specializing in React, Flutter, and Go. I build scalable web and mobile apps with clean architecture, high performance, and seamless user experiences.",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    title: "Frontend Development",
    description:
      "Building fast, scalable, and responsive web apps using React, Next.js, and modern UI/UX practices for seamless user experiences.",
    icon: "layout",
  },
  {
    title: "Backend Development",
    description:
      "Designing high-performance APIs and systems using Go, focusing on scalability, security, and efficient data handling.",
    icon: "server",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile apps with Flutter, delivering smooth performance and native-like user experiences.",
    icon: "smartphone",
  },
];

// ============================================================================
// 4B. TECH STACK & PROGRAMMING LANGUAGES COMPONENT
// ============================================================================
export type TechCategory = "all" | "language" | "framework" | "backend";

export interface TechItem {
  id: string;
  name: string;
  category: "language" | "framework" | "backend";
  categoryLabel: string;
  iconType: "image" | "svg";
  imageSrc?: string;
  svgIcon?: string;
  level: string;
  experience: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export const TECH_STACK_HEADER = {
  badge: "Technical Arsenal",
  title: "Known Languages &",
  highlight: "Frameworks",
  subtitle:
    "Production-proven programming languages, cross-platform frameworks, and scalable cloud technologies engineered across enterprise systems and high-performance apps.",
};

export const TECH_STACK_HIGHLIGHTS = [
  { label: "Core Languages", value: "Go • TypeScript • JavaScript • Dart" },
  { label: "Production Scale", value: "4+ Years Full-Stack & Mobile" },
  { label: "Architecture", value: "Microservices • REST • Event-Driven" },
];

export const TECH_STACK_TABS = [
  { id: "all", label: "All Technologies" },
  { id: "language", label: "Programming Languages" },
  { id: "framework", label: "Frameworks & UI" },
  { id: "backend", label: "Backend, Cloud & DB" },
];

export const TECH_STACK_ITEMS: TechItem[] = [
  // Programming Languages (With user's uploaded images)
  {
    id: "golang",
    name: "Go (Golang)",
    category: "language",
    categoryLabel: "Programming Language",
    iconType: "image",
    imageSrc: goImg,
    level: "Advanced",
    experience: "3+ Years",
    description:
      "High-concurrency microservices, modular REST APIs, Goroutines & GORM persistence.",
    tags: ["Goroutines", "Gin / Fiber", "Microservices", "GORM"],
    featured: true,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "language",
    categoryLabel: "Programming Language",
    iconType: "image",
    imageSrc: tsImg,
    level: "Advanced",
    experience: "4+ Years",
    description:
      "Enterprise frontend architectures, strict type systems, modular routing & scalable SPAs.",
    tags: ["Strict Typing", "Generics", "React / Next.js", "Design Systems"],
    featured: true,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "language",
    categoryLabel: "Programming Language",
    iconType: "image",
    imageSrc: jsImg,
    level: "Advanced",
    experience: "4+ Years",
    description:
      "Modern ES2024+ web engineering, asynchronous event loops, DOM performance & APIs.",
    tags: ["ES2024+", "Async / Await", "Web APIs", "Event Loop"],
    featured: true,
  },
  {
    id: "dart",
    name: "Dart",
    category: "language",
    categoryLabel: "Programming Language",
    iconType: "image",
    imageSrc: dartImg,
    level: "Advanced",
    experience: "3.5+ Years",
    description:
      "Resilient cross-platform mobile architecture, sound null safety & reactive streams.",
    tags: ["Sound Null Safety", "Async Streams", "Mobile Architecture", "Dart FFI"],
    featured: true,
  },

  // Frameworks & UI
  {
    id: "flutter",
    name: "Flutter",
    category: "framework",
    categoryLabel: "Mobile Framework",
    iconType: "svg",
    svgIcon: "flutter",
    level: "Production Grade",
    experience: "3.5+ Years",
    description:
      "Production mobile apps, crypto wallet biometrics, offline SQLite & 60fps UX.",
    tags: ["Bloc / Riverpod", "Biometrics", "Offline SQLite", "Platform Channels"],
    featured: true,
  },
  {
    id: "react",
    name: "React.js",
    category: "framework",
    categoryLabel: "Frontend Library",
    iconType: "svg",
    svgIcon: "react",
    level: "Production Grade",
    experience: "4+ Years",
    description:
      "Enterprise SPA workflows, OAuth2 auth guards, custom hooks & design systems.",
    tags: ["Custom Hooks", "Context API", "React Router", "Vite SPAs"],
    featured: true,
  },
  {
    id: "gin-go",
    name: "Gin & Go Backend",
    category: "framework",
    categoryLabel: "Backend Framework",
    iconType: "svg",
    svgIcon: "server",
    level: "Advanced",
    experience: "3+ Years",
    description:
      "High-throughput HTTP microservices, middleware pipelines, JWT auth & REST routing.",
    tags: ["RESTful APIs", "Middleware", "JWT Auth", "GORM ORM"],
  },

  // Backend, Cloud & Database
  {
    id: "kafka",
    name: "Apache Kafka",
    category: "backend",
    categoryLabel: "Event Streaming",
    iconType: "svg",
    svgIcon: "kafka",
    level: "Proficient",
    experience: "2+ Years",
    description:
      "Real-time event streaming pipelines, pub/sub messaging & decoupled services.",
    tags: ["Event Streaming", "Pub / Sub", "Consumer Groups", "Data Pipelines"],
  },
  {
    id: "postgresql",
    name: "PostgreSQL & Databases",
    category: "backend",
    categoryLabel: "Relational DB",
    iconType: "svg",
    svgIcon: "database",
    level: "Advanced",
    experience: "3+ Years",
    description:
      "Relational schema modeling, index tuning, ACID transactions & SQLite caching.",
    tags: ["Schema Modeling", "GORM ORM", "Indexing", "SQLite Caching"],
  },
  {
    id: "docker",
    name: "Docker & Cloud",
    category: "backend",
    categoryLabel: "DevOps & Cloud",
    iconType: "svg",
    svgIcon: "docker",
    level: "Proficient",
    experience: "3+ Years",
    description:
      "Multi-stage container builds, microservice orchestration & CI/CD automation.",
    tags: ["Multi-Stage Builds", "Docker Compose", "Containerization", "CI/CD"],
  },
];

// ============================================================================
// 5. HIRE ME / STATS COMPONENT
// ============================================================================
export interface StatItem {
  number: string;
  label: string;
}

export const HIRE_ME_STATS: StatItem[] = [
  { number: "10+", label: "Projects Completed" },
  { number: "5+", label: "Happy Clients" },
  { number: "2", label: "Honors & Awards" },
];

export const HIRE_ME_DATA = {
  ctaText: "Get in Touch",
  emailSubject: "Opportunity Inquiry",
};

// ============================================================================
// 6. WORK EXPERIENCE COMPONENT
// ============================================================================
export interface ExperienceItem {
  company: string;
  logo: string;
  role: string;
  duration: string;
  description: string;
  skills: string[];
}

export const EXPERIENCE_HEADER = {
  title: "My Work",
  highlight: "Experience",
};

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    company: "Virtusa",
    logo: virtusaLogo,
    role: "Software Engineer",
    duration: "Jun 2025 - Present",
    description:
      "Architected scalable frontend routing systems and implemented secure OAuth authentication workflows. Engineered resilient document upload and management features, file processing flows, and enterprise-grade UI components using React and TypeScript.",
    skills: [
      "React",
      "TypeScript",
      "Routing Architecture",
      "OAuth 2.0",
      "Document Upload",
      "Frontend Architecture",
    ],
  },
  {
    company: "Calibraint",
    logo: calibraintLogo,
    role: "Software Development Engineer 2",
    duration: "Feb 2025 - Apr 2025",
    description:
      "Engineered a secure cross-platform crypto wallet application using Flutter and Dart. Implemented biometric authentication (Face ID / Fingerprint) and BIP-39 mnemonic seed phrase key generation and recovery, ensuring robust non-custodial wallet security and high-performance mobile UX.",
    skills: [
      "Flutter",
      "Dart",
      "Crypto Wallet",
      "BIP-39",
      "Biometrics",
      "Mobile Security",
    ],
  },
  {
    company: "Tekion",
    logo: tekionLogo,
    role: "Associate Software Engineer",
    duration: "Jun 2022 - Jan 2025",
    description:
      "Developed enterprise Flutter mobile applications including the CRM app, Support Portal, and Task Manager apps, ensuring smooth, responsive workflows. Built scalable Go backend services for the Support Portal, implementing secure OTP authentication, automated email unsubscribe systems, and event-driven data streaming with Apache Kafka.",
    skills: [
      "Flutter",
      "Dart",
      "Go",
      "Apache Kafka",
      "OTP Authentication",
      "Microservices",
      "Event-Driven Architecture",
    ],
  },
  {
    company: "Fibonalabs",
    logo: fibonalabsLogo,
    role: "Software Development Engineer 1",
    duration: "Feb 2022 - Jun 2022",
    description:
      "Engineered cross-platform mobile applications for 3EV using Flutter and Dart, alongside building high-performance web client applications with React and TypeScript. Delivered fluid UI/UX flows, state management, and reliable API integrations for EV mobility solutions.",
    skills: [
      "Flutter",
      "Dart",
      "React",
      "TypeScript",
      "3EV Mobility",
      "Cross-Platform UI",
    ],
  },
  {
    company: "Fibonalabs",
    logo: fibonalabsLogo,
    role: "Software Development Intern",
    duration: "Nov 2021 - Jan 2022",
    description:
      "Contributed to frontend feature development across React web applications and assisted in mobile app workflows using Flutter and Dart. Collaborated closely with design teams to deliver responsive, user-friendly interfaces.",
    skills: ["React", "Flutter", "Dart", "JavaScript", "Responsive Design"],
  },
];

// ============================================================================
// 7. FEATURED PROJECTS & CAROUSEL COMPONENT
// ============================================================================
export type ProjectStatus = "Live" | "In Progress" | "Under Development";

export interface ProjectSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  status: ProjectStatus;
  statusBadge: string;
  bgColor: string;
  textColor: string;
  tags: string[];
  githubUrl: string;
}

export const PORTFOLIO_HEADER = {
  title: "Featured",
  highlight: "Engineering Projects",
  ctaButtonText: "GitHub Projects",
};

export const CAROUSEL_CONSTANTS = {
  badgeText: "Featured Case Study",
  viewGithubTitle: "View Project on GitHub",
};

export const PROJECT_CATEGORIES: string[] = [
  "React & Web Apps",
  "Go & Scalable Systems",
  "Flutter Apps",
  "Architecture & APIs",
  "UI/UX Craft",
  "Cloud & Deployment",
];

export const FEATURED_SLIDES: ProjectSlide[] = [
  {
    id: 1,
    title: "Xpense Cloud Mobile",
    subtitle: "Xpense Cloud - Mobile App using Flutter",
    description:
      "A cross-platform personal finance mobile application built with Flutter & Dart, actively undergoing a comprehensive architecture revamp. Engineered with high-efficiency expense tracking, offline SQLite caching, cloud synchronization, and responsive 60fps data visualization.",
    status: "In Progress",
    statusBadge: "Under Development • Revamp",
    bgColor: "#0F2942",
    textColor: "#38BDF8",
    tags: [
      "Flutter",
      "Dart",
      "Mobile App",
      "Revamp",
      "State Management",
      "REST API",
    ],
    githubUrl: "https://github.com/rajarathinam-MurugesaPandiyan",
  },
  {
    id: 2,
    title: "Xpense Cloud Backend",
    subtitle: "Xpense Cloud - Backend Services using Go",
    description:
      "A high-performance cloud backend written in Go, currently undergoing a full architecture revamp for high-concurrency microservices. Features modular RESTful APIs, JWT/OAuth2 authentication, PostgreSQL with GORM, and Docker containerized deployments.",
    status: "In Progress",
    statusBadge: "Under Development • Revamp",
    bgColor: "#111827",
    textColor: "#00ADD8",
    tags: ["Go", "PostgreSQL", "REST API", "Docker", "Microservices", "Revamp"],
    githubUrl: "https://dev.xpense-cloud.in/ping",
  },
  {
    id: 3,
    title: "Xpense",
    subtitle: "Xpense - Personal Finance & Expense Tracker",
    description:
      "A comprehensive expense tracking application designed to help users manage personal finances effectively. Features intuitive analytics for tracking daily spend, budgeting, and financial trajectory over time.",
    status: "Live",
    statusBadge: "Live",
    bgColor: "#1E293B",
    textColor: "#38BDF8",
    tags: ["React", "TypeScript"],
    githubUrl: "https://xpense-cloud.in/",
  },
  {
    id: 4,
    title: "Campus Desk",
    subtitle: "Campus Desk - School ERP Management System",
    description:
      "A comprehensive school ERP management platform engineered with a high-performance Go backend and modern responsive frontend. Streamlines student administration, attendance, academic records, fee tracking, and institutional workflows.",
    status: "Under Development",
    statusBadge: "Under Development",
    bgColor: "#1A1E2E",
    textColor: "#818CF8",
    tags: ["Go", "Frontend", "React", "PostgreSQL", "REST API", "School ERP"],
    githubUrl: "https://github.com/rajarathinam-MurugesaPandiyan",
  },
];

// ============================================================================
// 8. TESTIMONIALS COMPONENT
// ============================================================================
export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  initials: string;
  avatarBg: string;
  relationship: string;
  content: string;
  highlightTag: string;
}

export const TESTIMONIALS_HEADER = {
  badge: "Colleague Endorsements",
  title: "What Colleagues Say",
  subtitle:
    "Endorsements from tech leads, teammates, and cross-functional collaborators I've built with",
  verifiedTitle: "Verified Colleague",
  linkedinCta: "Endorse or Connect on LinkedIn",
};

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    name: "Sivakumar MN",
    role: "Product Engineer",
    company: "Fibonalabs",
    initials: "S",
    avatarBg: "linear-gradient(135deg, #4F46E5, #6366F1)",
    relationship: "Collaborated on UI/UX & Frontend",
    content:
      "Rajarathinam is an outspoken, hardworking, and broad-minded person who is always eager to learn and take on new challenges. His ability to learn quickly, adapt to new situations, and approach things with a positive mindset makes him a great person to work with.",
    highlightTag: "Frontend & UI/UX",
  },
  {
    id: 2,
    name: "Ananya S",
    role: "Junior Engineer",
    company: "Calibraint",
    initials: "AS",
    avatarBg: "linear-gradient(135deg, #4F46E5, #6366F1)",
    relationship: "Collaborated on Mobile Applications",
    content:
      "You were not only a colleague to me, but also you thought me how to think, how to approach problems. You were a senior but you helped me even in small doubts without any hesitation. I still tell members abt you, how you were standing with me even in tough situation of our project. And even if we apart ways for our future career, you gave me the comfort to reach out to you whenever I need any help from you. I'm happy that I got to work with one of the best persons with kind personality✨",
    highlightTag: "Mobile Applications",
  },
  {
    id: 3,
    name: "Pradeep Kumar",
    role: "SE 2",
    company: "Tekion Corp",
    initials: "PK",
    avatarBg: "linear-gradient(135deg, #2563EB, #1D4ED8)",
    relationship: "Collaborated on Enterprise Mobile Apps",
    content:
      "Rajarathinam is an exceptionally dependable engineer. His work on our Flutter mobile applications drastically improved load times and reliability across complex modules. He combines sharp technical execution with great product intuition.",
    highlightTag: "Flutter , Dart",
  },
];

// ============================================================================
// 9. HONORS & RECOGNITION (AWARDS) COMPONENT
// ============================================================================
export interface AwardItem {
  title: string;
  category: string;
  author: string;
  date: string;
  bgColor: string;
  animation: any;
}

export const AWARDS_HEADER = {
  badge: "Recognition",
  title: "Honors & Key Achievements",
  subtitle:
    "Milestones and acknowledgments earned across professional tenures",
};

export const AWARDS_DATA: AwardItem[] = [
  {
    title: "Top Contributor In NADA 2024 Awarded With Cash Prize",
    category: "Tekion Corp",
    author: "Hackathon & Innovation Excellence",
    date: "2024",
    bgColor: "#121622",
    animation: trophyAnimation,
  },
  {
    title: "Best Intern For The Month Of December",
    category: "Fibonalabs",
    author: "Multi-Stack Engineering Contribution",
    date: "Dec 2021",
    bgColor: "#1E293B",
    animation: trophyAnim,
  },
];

// ============================================================================
// 10. FOOTER COMPONENT
// ============================================================================
export const FOOTER_DATA = {
  connectTitle: "Let's Connect",
  connectSubtitle:
    "Have a project in mind, an open role, or just want to chat tech? Feel free to reach out.",
  emailMeCta: "Email Me",
  brandDesc:
    "Software Engineer specializing in React, Go, and Flutter. Building reliable, scalable microservices and high-performance applications.",
  quickMsgTitle: "Send a Quick Message",
  quickMsgDesc:
    "Type a quick note and hit send to reach my inbox directly.",
  quickMsgPlaceholder: "What would you like to build?",
  quickMsgSubject: "Project Inquiry / Hello",
  opportunitySubject: "Opportunity Discussion",
  navSectionTitle: "Navigation",
  contactSectionTitle: "Direct Contact",
  downloadCvText: "Download CV",
  rightsReserved: "All Rights Reserved.",
};
