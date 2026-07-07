import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  ExternalLink,
  X,
  ArrowRight,
  Layers,
  Clock,
  Users,
  TrendingUp,
  Target,
  Cpu,
  Zap,
  Globe,
  Smartphone,
  Gamepad2,
  Sparkles,
  Star,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Project {
  title: string;
  desc: string;
  longDesc: string;
  tech: string[];
  category: string;
  images: string[];
  featured?: boolean;
  client: string;
  duration: string;
  team: string;
  impact: string;
  results: string[];
  year: string;
}

type Page = "contact";

interface WorkProps {
  onNavigate: (page: Page) => void;
}

const projects: Project[] = [
  {
    title: "FlowPilot AI",
    featured: true,
    desc: "An advanced agentic AI platform that automates research, content creation, task execution, and business workflows through intelligent autonomous agents.",

    longDesc:
      "AgentOS AI is a next-generation agentic AI platform designed to help businesses automate complex workflows using autonomous AI agents. The platform allows users to create intelligent workflows where multiple specialized agents collaborate to perform research, analyze data, generate content, automate repetitive tasks, and execute business operations. Featuring a modern dashboard, workflow builder, real-time monitoring, and natural language interaction, AgentOS AI demonstrates how organizations can leverage AI agents to improve productivity, reduce manual effort, and scale operations efficiently. The platform showcases the future of AI-powered business automation through seamless collaboration between humans and intelligent agents.",

    tech: [
      "React",
      "Vite",
      "Express.js",
      "Tailwind CSS",
      "OpenAI API",
      "MongoDB",
    ],

    category: "AI",

    images: ["/utils/agenticAi-dashboard.png", "/utils/agenticAi-workflow.png"],

    client: "AI Innovation Showcase",

    duration: "4 months",

    team: "Solo Developer",

    impact:
      "Demonstrates autonomous AI workflows capable of reducing manual effort and improving operational efficiency.",

    results: [
      "Multi-agent workflow orchestration",
      "AI-powered research and analysis",
      "Natural language task automation",
      "Real-time workflow monitoring",
      "Intelligent content generation",
      "Scalable business automation architecture",
    ],

    year: "2026",
  },
  {
    title: "Head Count Analyzer",

    desc: "An AI-powered people counting and occupancy monitoring system that tracks real-time crowd density and sends automated alerts when capacity limits are exceeded.",

    longDesc:
      "Head Count Analyzer is an intelligent computer vision solution designed to monitor occupancy levels in real time. Using AI-based detection and tracking, the system accurately counts people entering monitored areas, visualizes occupancy statistics through an interactive dashboard, and automatically sends email notifications when predefined capacity thresholds are exceeded. The platform helps businesses, offices, retail stores, event venues, and public spaces improve safety, optimize crowd management, and make data-driven operational decisions.",

    tech: [
      "Python",
      "OpenCV",
      "YOLOv8n",
      "Streamlit",
      "Django",
      "Email Automation",
    ],

    category: "AI",

    images: ["/utils/headcount-1.jpeg", "/utils/headcount-2.jpeg"],

    client: "Smart Monitoring Solution",

    duration: "4 months",

    team: "3 Developers",

    impact:
      "Provides real-time occupancy insights and automated crowd management alerts.",

    results: [
      "Real-time people detection and counting",
      "Live occupancy dashboard",
      "Automated email alert system",
      "Capacity threshold monitoring",
      "AI-powered crowd analytics",
      "Improved operational safety",
    ],

    year: "2026",

    featured: true,
  },
  {
    title: "Giftify Business Showcase Platform",
    featured: true,
    desc: "A platform that helps small businesses create an online presence and showcase their products and services.",

    longDesc:
      "Giftify is a modern web platform built for small business owners, local brands, and entrepreneurs to showcase their products and services online. The platform provides customizable business profiles, product galleries, contact options, and responsive designs that help businesses reach more customers without needing advanced technical skills.",

    tech: [
      "React",
      "Vite",
      "Express.js",
      "Tailwind CSS",
      "MongoDB",
      "Payment Gateway",
      "Firebase",
    ],

    category: "Web",

    images: ["/utils/giftify-1.png", "/utils/giftify-2.png"],

    client: "Personal Project",

    duration: "3 months",

    team: "Solo Developer",

    impact: "Helping small business",

    results: [
      "Responsive business showcase platform",
      "Product and service listing management",
      "Mobile-friendly user experience",
      "Fast page load performance",
    ],

    year: "2026",
  },
  {
    title: "MedicoConnect",

    desc: "A comprehensive healthcare platform that enables patients to find doctors, book appointments, manage medical records, and access healthcare services online.",

    longDesc:
      "MedicoConnect is a modern healthcare management platform designed to bridge the gap between patients and healthcare providers. The platform allows users to search for verified doctors by specialty, location, and experience, book appointments online, manage medical records, view prescriptions, and communicate with healthcare professionals. With an intuitive user interface and secure data management, MedicoConnect simplifies healthcare access while improving the overall patient experience.",

    tech: ["Angular", "SpringBoot", "Hibernate", "JWT", "SQL"],

    category: "Web",

    images: ["/utils/mediconnect-1.png", "/utils/mediconnect-2.png"],

    client: "Healthcare Solution",

    duration: "4 months",

    team: "3 Developers",

    impact:
      "Simplifies healthcare access by connecting patients with verified doctors through a centralized digital platform.",

    results: [
      "Doctor discovery and search system",
      "Online appointment booking",
      "Medical record management",
      "Prescription tracking",
      "Responsive patient dashboard",
      "Secure healthcare data handling",
    ],

    year: "2026",

    // featured: true,
  },
  {
    title: "StockVista AI",

    desc: "An AI-powered stock market analytics platform that combines financial data, sentiment analysis, and predictive insights to support smarter investment decisions.",

    longDesc:
      "StockVista AI is an intelligent stock market analytics platform designed to help investors and analysts understand market behavior through data-driven insights. The platform integrates financial market data with sentiment analysis from news and social media to provide a comprehensive view of stock performance. It identifies market trends, highlights top-performing sectors and companies, evaluates volatility and risk, and generates AI-driven buy, sell, and hold signals. By comparing predicted market movements with actual outcomes, StockVista AI enables users to measure prediction accuracy, refine investment strategies, and make confident, informed decisions using interactive dashboards and advanced analytics.",

    tech: [
      "Excel",
      "SQL",
      "Power BI",
      "DAX",
      "Data Modeling",
      "Sentiment Analysis",
      "Predictive Analytics",
    ],

    category: "Analytics",

    images: ["/utils/stock1.jpeg", "/utils/stock2.jpeg"],

    client: "Analytics Solution",

    duration: "3 months",

    team: "2 Data Analysts",

    impact:
      "Transforms financial and sentiment data into actionable investment insights through interactive dashboards and predictive analytics.",

    results: [
      "Interactive Power BI dashboards",
      "AI-driven buy, sell & hold signals",
      "Market sentiment analysis",
      "Sector and company performance tracking",
      "Stock trend forecasting",
      "Risk and volatility analysis",
    ],

    year: "2026",

    // featured: true,
  },
  {
    title: "Kidutainment",
    // featured: true,

    desc: "An educational mobile application featuring interactive mini-games that make learning fun and engaging for children.",

    longDesc:
      "Kidutainment is an educational gaming application developed using Unity to provide children with an engaging learning experience through interactive mini-games. The platform combines education and entertainment with games designed to improve logical thinking, mathematics, vocabulary, and environmental awareness. It includes a user-friendly game selection screen, smooth animations, Firebase-based progress tracking, and a parental dashboard for monitoring achievements and learning progress. The application is designed with a child-friendly interface and responsive gameplay to encourage continuous learning through gamification.",

    tech: [
      "Unity",
      "C#",
      "Firebase",
      "LeanTween",
      "UI/UX Design",
      "Adobe Photoshop",
    ],

    category: "App",

    images: ["/utils/kido1.png", "/utils/kido2.png"],

    client: "Academic Project",

    duration: "5 Months",

    team: "3 Developers",

    impact:
      "Built an engaging gamified learning platform that helps children improve cognitive and problem-solving skills through interactive educational games.",

    results: [
      "4 educational mini-games",
      "Smooth swipe navigation",
      "Firebase progress tracking",
      "Parental dashboard",
      "Achievement & rewards system",
      "Responsive Android application",
    ],

    year: "2026",
  },

  // {
  //   title: 'EcoTrack IoT Platform',
  //   desc: 'Smart building energy management system with predictive maintenance and carbon tracking.',
  //   longDesc: 'An IoT platform connecting thousands of sensors across commercial buildings to optimize energy usage. Uses ML to predict equipment failures, automate HVAC scheduling, and generate sustainability reports for ESG compliance.',
  //   tech: ['Python', 'React', 'MQTT', 'InfluxDB', 'Grafana', 'Kubernetes'],
  //   category: 'Automation',
  //   image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   client: 'Commercial Real Estate Firm',
  //   duration: '11 months',
  //   team: '6 engineers',
  //   impact: '35% energy reduction',
  //   results: ['35% energy cost reduction', '2,400+ sensors deployed', 'Predictive accuracy 94%', 'LEED Platinum certified'],
  //   year: '2026',
  // },
  // {
  //   title: 'SocialBoost Analytics',
  //   desc: 'All-in-one social media analytics and content optimization platform for creators.',
  //   longDesc: 'A creator-focused platform that analyzes performance across all major social networks, suggests optimal posting times, generates AI-powered content ideas, and provides competitor benchmarking. Used by 10,000+ content creators.',
  //   tech: ['Next.js', 'Python', 'PostgreSQL', 'Redis', 'OpenAI', 'Chart.js'],
  //   category: 'Web',
  //   image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   client: 'Creator Economy Startup',
  //   duration: '6 months',
  //   team: '4 engineers',
  //   impact: '10,000+ active creators',
  //   results: ['10,000+ active creators', 'Average 43% engagement boost', 'Cross-platform analytics', 'AI content suggestions'],
  //   year: '2026',
  // },
];

const categories = [
  "All",
  "AI",
  "Web",
  "App",
  "Game",
  "Automation",
  "Analytics",
];

const categoryIcons: Record<string, typeof Cpu> = {
  AI: Cpu,
  Web: Globe,
  App: Smartphone,
  Game: Gamepad2,
  Automation: Zap,
};

// const stats = [
//   { icon: Layers, label: 'Projects', value: '150+' },
//   { icon: Clock, label: 'Years', value: '5+' },
//   { icon: Users, label: 'Clients', value: '80+' },
//   { icon: TrendingUp, label: 'Success Rate', value: '99%' },
// ];

const stats = [
  { icon: Layers, label: "Projects Built", value: "5+" },
  { icon: Clock, label: "Learning & Building", value: "1+" },
  { icon: Users, label: "Team Members", value: "7" },
  { icon: TrendingUp, label: "Commitment", value: "100%" },
];

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const { ref, visible } = useScrollAnimation(0.1);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group relative rounded-2xl overflow-hidden border border-white/8 bg-[#111] hover:border-[#c9956a]/50 transition-all duration-600 cursor-pointer ${
        visible
          ? "opacity-100 translate-y-0 animate-stagger"
          : "opacity-0 translate-y-10"
      } hover:shadow-2xl hover:shadow-[#c9956a]/20 hover:scale-[1.02]`}
      style={{ animationDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="relative overflow-hidden h-52 sm:h-56">
        <img
          src={project.images[currentImage]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent" />
        <div className="absolute inset-0 bg-[#c9956a]/0 group-hover:bg-[#c9956a]/10 transition-colors duration-500" />

        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-full
            bg-[#c9956a]/20 border border-[#c9956a]/40
            backdrop-blur-md text-[#e8c9a0] text-xs font-semibold"
            >
              <Star size={12} fill="currentColor" />
              Featured
            </div>
          </div>
        )}

        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#c9956a]/20 border border-[#c9956a]/30 text-[#c9956a] text-xs font-semibold tracking-wider backdrop-blur-sm">
          {project.category}
        </span>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
          <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-[#c9956a]/30 transition-all duration-300">
            <ExternalLink size={15} className="text-white" />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-base sm:text-lg mb-1 group-hover:text-[#e8c9a0] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-xs line-clamp-2 group-hover:text-gray-300 transition-colors">
            {project.desc}
          </p>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-500 text-xs">{project.client}</span>
          <span className="text-[#c9956a]/60 text-xs font-medium">
            {project.year}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 6).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-gray-400 border border-white/8 group-hover:border-[#c9956a]/30 group-hover:text-[#c9956a] transition-all duration-300"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 6 && (
            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-gray-500 border border-white/8">
              +{project.tech.length - 6}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const [currentImage, setCurrentImage] = useState(0);

  const CategoryIcon = categoryIcons[project.category] || Target;

  useEffect(() => {
    if (!project.images?.length) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, [project.images]);

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0d0d0d] animate-scale-in">
        {/* Header Image */}
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img
            src={project.images[currentImage]}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-[#c9956a]/30 transition-all duration-300 hover:scale-110"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-4 left-4 sm:left-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c9956a]/20 border border-[#c9956a]/30 text-[#c9956a] text-xs font-semibold tracking-wider mb-2">
              <CategoryIcon size={12} />
              {project.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h2>
          </div>
        </div>

        <div className="p-5 sm:p-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 sm:mb-8">
            {[
              { icon: Target, label: "Client", value: project.client },
              { icon: Clock, label: "Duration", value: project.duration },
              { icon: Users, label: "Team", value: project.team },
              { icon: TrendingUp, label: "Impact", value: project.impact },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="p-3 rounded-xl border border-white/8 bg-[#111] hover:border-[#c9956a]/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon size={12} className="text-[#c9956a]" />
                  <span className="text-gray-500 text-[10px] uppercase tracking-wider">
                    {label}
                  </span>
                </div>
                <div className="text-white text-xs sm:text-sm font-medium group-hover:text-[#e8c9a0] transition-colors truncate">
                  {value}
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-white font-bold text-sm sm:text-base mb-2 flex items-center gap-2">
              <Sparkles size={16} className="text-[#c9956a]" />
              Overview
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              {project.longDesc}
            </p>
          </div>

          {/* Results */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-white font-bold text-sm sm:text-base mb-3 flex items-center gap-2">
              <TrendingUp size={16} className="text-[#c9956a]" />
              Key Results
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.results.map((result, i) => (
                <div
                  key={result}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg border border-white/8 bg-[#111] hover:border-[#c9956a]/30 transition-all duration-300 group animate-stagger"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="w-5 h-5 rounded-full bg-gradient-to-r from-[#c9956a] to-[#e8c9a0] flex items-center justify-center shrink-0 group-hover:scale-125 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-[#0d0d0d]" />
                  </span>
                  <span className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors">
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base mb-3 flex items-center gap-2">
              <Layers size={16} className="text-[#c9956a]" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg border border-white/10 bg-[#111] text-gray-300 text-xs font-medium hover:border-[#c9956a]/40 hover:text-[#c9956a] hover:bg-[#c9956a]/5 transition-all duration-300 hover:scale-105"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default function Work({ onNavigate }: WorkProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  // const [selectedCategory, setSelectedCategory] = useState("All");
  // const [showAllProjects, setShowAllProjects] = useState(false);
  const header = useScrollAnimation(0.2);
  const statsSection = useScrollAnimation(0.15);
  const projectsHeader = useScrollAnimation(0.2);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter]);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const visibleProjects = filtered.slice(0, visibleCount);

  //const hasMore = filtered.length > visibleCount;

  return (
    <div className="animate-page-enter">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-[#0d0d0d] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#c9956a]/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#c9956a]/5 animate-morph-blob blur-3xl opacity-30 pointer-events-none" />
        <div
          className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-[#e8c9a0]/5 animate-morph-blob blur-3xl opacity-20 pointer-events-none"
          style={{ animationDelay: "-4s" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div
            ref={header.ref}
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              header.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[#c9956a] via-[#e8c9a0] to-[#c9956a] bg-clip-text text-transparent animate-gradient">
                Work
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
              A curated selection of projects that showcase our expertise,
              creativity, and commitment to delivering exceptional results for
              every client.
            </p>
          </div>

          {/* Stats */}
          <div
            ref={statsSection.ref}
            className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 max-w-3xl mx-auto transition-all duration-1000 ${
              statsSection.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map(({ icon: Icon, label, value }, i) => (
              <div
                key={label}
                className="text-center p-4 sm:p-5 rounded-xl border border-white/8 bg-[#111] hover:border-[#c9956a]/30 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-[#c9956a]/10 hover:scale-[1.03] animate-stagger"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-[#c9956a]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#c9956a]/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={18} className="text-[#c9956a]" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-[#c9956a] mb-1 group-hover:text-[#e8c9a0] transition-colors">
                  {value}
                </div>
                <div className="text-gray-500 text-xs group-hover:text-gray-400 transition-colors">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#090909] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div
            ref={projectsHeader.ref}
            className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
              projectsHeader.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
              Featured Projects
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Case Studies
            </h3>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setVisibleCount(6);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105 ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-[#c9956a] to-[#b87d52] text-[#0d0d0d] shadow-lg shadow-[#c9956a]/40"
                    : "border border-white/10 text-gray-400 hover:border-[#c9956a]/40 hover:text-[#c9956a]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Count */}
          <div className="text-center mb-6">
            <span className="text-gray-500 text-xs tracking-wider">
              Showing {visibleProjects.length} of {filtered.length} projects
            </span>
          </div>

          {/* Grid */}
          <div
            id="projects"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          >
            {visibleProjects.map((p, i) => (
              <ProjectCard
                key={p.title}
                project={p}
                index={i}
                onClick={() => setSelectedProject(p)}
              />
            ))}
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onOpen={setSelectedProject}
              />
            ))}
          </div> */}

          {/* {projects.length > 4 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-8 py-3 rounded-full border border-[#c9956a] text-[#c9956a]
                hover:bg-[#c9956a] hover:text-black transition-all duration-300 font-medium"
              >
                {showAllProjects ? 'Show Less' : 'View More Projects'}
              </button>
            </div>
          )} */}

          <div className="flex justify-center mt-12">
            {visibleCount < filtered.length ? (
              <button
                onClick={() =>
                  setVisibleCount((prev) => Math.min(prev + 6, filtered.length))
                }
                className="px-8 py-3 rounded-full border border-[#c9956a]
      text-[#c9956a] hover:bg-[#c9956a]
      hover:text-black transition-all duration-300
      font-medium"
              >
                View More Projects
              </button>
            ) : (
              filtered.length > 6 && (
                <button
                  onClick={() => {
                    setVisibleCount(6);

                    // Optional: Scroll back to the projects section
                    document.getElementById("projects")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="px-8 py-3 rounded-full border border-[#c9956a]
        text-[#c9956a] hover:bg-[#c9956a]
        hover:text-black transition-all duration-300
        font-medium"
                >
                  View Less
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto text-center p-8 sm:p-12 rounded-2xl border border-[#c9956a]/20 bg-gradient-to-br from-[#c9956a]/5 to-transparent hover:border-[#c9956a]/40 transition-all duration-300 group animate-border-glow">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#e8c9a0] transition-colors duration-300">
            Have a project in mind?
          </h3>
          <p className="text-sm sm:text-base text-gray-400 mb-8 group-hover:text-gray-300 transition-colors duration-300">
            Let's create something extraordinary together. Our team is ready to
            bring your vision to life.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="group/btn relative inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-gradient-to-r from-[#c9956a] to-[#b87d52] text-[#0d0d0d] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg hover:shadow-xl hover:shadow-[#c9956a]/40 transition-all duration-400 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#e8c9a0] to-[#c9956a] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-400 rounded-lg" />
            <span className="relative flex items-center gap-2">
              Start Your Project
              <ArrowRight
                size={16}
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </span>
          </button>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
