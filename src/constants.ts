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
import portfolioImg from "./assets/portfolio.jpg";

export const ASSETS = {
  virtusaLogo,
  calibraintLogo,
  tekionLogo,
  fibonalabsLogo,
  trophyAnim,
  trophyAnimation,
  resumePdf,
  portfolioImg,
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
  { id: "experience", label: "Experience" },
  { id: "project", label: "Projects" },
  { id: "contact", label: "Contact" },
];

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
export interface ProjectSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  textColor: string;
  tags: string[];
  githubUrl: string;
}

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
    title: "Xpense",
    subtitle: "Xpense - Personal Finance & Expense Tracker",
    description:
      "A comprehensive expense tracking application designed to help users manage personal finances effectively. Features intuitive analytics for tracking daily spend, budgeting, and financial trajectory over time.",
    bgColor: "#1E293B",
    textColor: "#38BDF8",
    tags: ["React", "TypeScript", "Node.js", "Chart.js"],
    githubUrl: "https://github.com/rajarathinam-MurugesaPandiyan",
  },
  {
    id: 2,
    title: "OmniStack",
    subtitle: "OmniStack - Scalable Multi-Tenant SaaS",
    description:
      "A comprehensive high-performance backend and dashboard engineered for seamless data pipelines, secure multi-tenant access, and automated workflow orchestrations.",
    bgColor: "#0F172A",
    textColor: "#818CF8",
    tags: ["Go", "Next.js", "PostgreSQL", "Docker", "REST API"],
    githubUrl: "https://github.com/rajarathinam-MurugesaPandiyan",
  },
  {
    id: 3,
    title: "Streako",
    subtitle: "Streako - Cross-Platform Habit Tracker",
    description:
      "A habit-building mobile application designed to cultivate positive daily routines. Delivers native-feel 60fps animations, streak notifications, and offline data persistence.",
    bgColor: "#064E3B",
    textColor: "#34D399",
    tags: ["Flutter", "Dart", "Provider", "Local SQLite"],
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

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
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
  {
    id: 2,
    name: "Bhaskar Mavuri",
    role: "Senior Software Engineer",
    company: "Virtusa",
    initials: "BM",
    avatarBg: "linear-gradient(135deg, #0284C7, #0369A1)",
    relationship: "Collaborated on Web Applications",
    content:
      "Working with Rajarathinam on frontend architecture and enterprise web apps was a seamless experience. He writes clean, robust code, handles complex routing and authentication with precision, and has a knack for dissecting tricky architectural challenges under pressure.",
    highlightTag: "React , TypeScript",
  },
  {
    id: 3,
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
    id: 4,
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

export const AWARDS_DATA: AwardItem[] = [
  {
    title: "Top Contributor In NADA 2024 Awarded With Cash Prize",
    category: "Tekion Corp",
    author: "Hackathon & Innovation Excellence",
    date: "2024",
    bgColor: "#0A1128",
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
  brandDesc:
    "Software Engineer specializing in React, Go, and Flutter. Building reliable, scalable microservices and high-performance applications.",
  quickMsgPlaceholder: "What would you like to build?",
  quickMsgSubject: "Project Inquiry / Hello",
  opportunitySubject: "Opportunity Discussion",
};
