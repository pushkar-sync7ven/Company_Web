import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import SEO from "../components/SEO";
import {
  Cpu,
  BarChart3,
  Globe,
  Smartphone,
  Cloud,
  Database,
  Palette,
  Zap,
  Glasses,
  Gamepad2,
  Search,
  ArrowRight,
  X,
  Sparkles,
  TrendingUp,
  Users,
  ChevronRight,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Service {
  icon: typeof Cpu;
  title: string;
  tagline: string;
  desc: string;
  longDesc: string[];
  color: string;
  techStack: string[];
}

const services: Service[] = [
  {
    icon: Cpu,
    title: "AI Solutions Development",
    tagline: "Intelligent by Design",
    desc: "Empowering businesses with Agentic AI, Generative AI, automation, and intelligent digital transformation solutions.",
    longDesc: [
      "Artificial Intelligence is revolutionizing the way businesses operate by enabling smarter decision-making, enhanced customer experiences, and intelligent process automation. Our AI Solutions Development services help organizations leverage advanced technologies such as Agentic AI, Generative AI, Machine Learning, Natural Language Processing (NLP), Computer Vision, and Large Language Models (LLMs). We build intelligent systems that can understand data, automate repetitive tasks, generate content, and provide real-time business insights.",
      "From AI-powered chatbots and virtual assistants to predictive analytics and intelligent automation platforms, our solutions are designed to solve real business challenges. We focus on creating scalable, secure, and future-ready AI applications that improve operational efficiency and drive innovation. Whether you're looking to streamline workflows, improve customer engagement, or gain a competitive advantage, our AI experts deliver customized solutions that align with your business goals and digital transformation strategy.",
    ],
    color: "from-[#c9956a] to-[#e8c9a0]",
    techStack: ["Python", "OpenAI GPT", "LangChain", "TensorFlow"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    tagline: "Insights That Drive Action",
    desc: "Turning complex data into actionable insights through advanced analytics and business intelligence platforms.",
    longDesc: [
      "Data is one of the most valuable assets for modern organizations, but its true power lies in the ability to transform raw information into actionable insights. Our Data Analytics & Business Intelligence services help businesses collect, analyze, and visualize data to support informed decision-making. We create interactive dashboards, KPI tracking systems, business reports, and predictive analytics models that provide a clear understanding of performance and opportunities.",
      "Using advanced analytics tools and visualization platforms such as Power BI, we help organizations identify trends, optimize operations, and improve strategic planning. Our solutions consolidate data from multiple sources, enabling businesses to gain real-time visibility into their operations. Whether you need executive dashboards, sales performance reporting, financial analytics, or customer behavior insights, we deliver data-driven solutions that support growth, efficiency, and long-term success.",
    ],
    color: "from-[#e8c9a0] to-[#c9956a]",
    techStack: [
      "Power BI",
      "Tableau",
      "Python",
      "SQL Server",
      "Azure Data Factory",
    ],
  },
  {
    icon: Globe,
    title: "Website Development",
    tagline: "Pixel-perfect digital presence",
    desc: "Creating scalable websites and web applications that drive engagement, performance, and business growth.",
    longDesc: [
      "A powerful website is the foundation of a successful digital presence. Our Website Development services focus on creating responsive, scalable, and user-friendly web solutions tailored to your business objectives. From corporate websites and e-commerce platforms to SaaS products and custom web applications, we develop solutions that combine modern design with robust functionality.",
      "We use industry-leading technologies and development practices to ensure high performance, security, and seamless user experiences across all devices. Every website is optimized for speed, usability, and search engine visibility, helping businesses attract and engage customers effectively. Whether you're launching a new digital platform or modernizing an existing website, our development team delivers reliable and future-ready web solutions that support business growth and digital transformation.",
    ],
    color: "from-[#c9956a] to-[#e8c9a0]",
    techStack: ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Mobile-first experiences",
    desc: "Building innovative mobile experiences for Android, iOS, and cross-platform environments.",
    longDesc: [
      "Mobile applications have become essential for businesses seeking to engage customers and improve accessibility. Our Mobile App Development services help organizations create innovative, feature-rich applications for Android, iOS, and cross-platform environments. We focus on building intuitive, secure, and high-performance mobile experiences that align with user expectations and business objectives.",
      "From customer-facing applications and enterprise mobility solutions to on-demand service platforms and digital marketplaces, we develop apps that deliver measurable value. Our team ensures seamless functionality, responsive design, and scalability to support future growth. By combining modern technologies with user-centered design principles, we create mobile solutions that enhance customer engagement, increase productivity, and strengthen your digital presence.",
    ],
    color: "from-[#e8c9a0] to-[#c9956a]",
    techStack: ["Flutter", "React Native", "Kotlin", "Swift", "Firebase"],
  },
  {
    icon: Cloud,
    title: "Cloud & Enterprise Solutions",
    tagline: "Infrastructure that scales",
    desc: "Accelerating digital transformation through cloud infrastructure, Salesforce, DevOps, and enterprise solutions.",
    longDesc: [
      "Modern businesses require scalable and secure technology infrastructures to remain competitive. Our Cloud & Enterprise Solutions help organizations modernize operations through cloud computing, Salesforce CRM implementation, DevOps practices, and enterprise application integration. We design solutions that improve flexibility, reliability, and operational efficiency while reducing infrastructure complexity.",
      "Whether migrating to the cloud, optimizing existing systems, or implementing enterprise-grade applications, our experts provide end-to-end support throughout the transformation journey. We focus on creating secure, scalable environments that support collaboration, business continuity, and innovation. By leveraging modern cloud technologies and enterprise platforms, organizations can improve productivity, accelerate growth, and adapt quickly to changing market demands.",
    ],
    color: "from-[#c9956a] to-[#e8c9a0]",
    techStack: ["Salesforce", "AWS", "Microsoft Azure", "Docker", "Kubernetes"],
  },
  {
    icon: Database,
    title: "ERP Software Solutions",
    tagline: "Unified Business Operations",
    desc: "Integrating business operations through customized ERP platforms that improve efficiency and productivity.",
    longDesc: [
      "Efficient business management requires seamless coordination across departments and processes. Our ERP Software Solutions help organizations centralize operations through integrated systems that manage finance, inventory, human resources, customer relationships, and business workflows. By consolidating critical business functions into a unified platform, ERP systems improve visibility, control, and operational efficiency.",
      "We develop customized ERP solutions tailored to the unique needs of each organization, ensuring flexibility and scalability as the business grows. Our systems automate routine tasks, eliminate data silos, and provide real-time insights that support informed decision-making. Whether you're managing resources, streamlining operations, or improving productivity, our ERP solutions help organizations achieve greater efficiency and long-term business success.",
    ],
    color: "from-[#e8c9a0] to-[#c9956a]",
    techStack: [
      ".NET Core",
      "Java Spring Boot",
      "PostgreSQL",
      "SAP Integration",
      "REST APIs",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    tagline: "Designs That Delight",
    desc: "Crafting intuitive user experiences that enhance engagement, usability, and customer satisfaction.",
    longDesc: [
      "Exceptional user experiences are at the heart of every successful digital product. Our UI/UX Design services focus on creating intuitive, engaging, and visually appealing interfaces that enhance usability and customer satisfaction. Through user research, wireframing, prototyping, and usability testing, we design experiences that align with user needs and business objectives.",
      "We believe that great design goes beyond aesthetics—it should simplify interactions and improve functionality. Our design team creates responsive and accessible interfaces that provide consistent experiences across web and mobile platforms. By combining creativity, strategy, and user-centered design principles, we help businesses build products that increase engagement, improve retention, and strengthen brand perception.",
    ],
    color: "from-[#c9956a] to-[#e8c9a0]",
    techStack: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro"],
  },
  {
    icon: Zap,
    title: "Automation Services",
    tagline: "Work smarter, not harder",
    desc: "Optimizing workflows through intelligent automation, process integration, and operational excellence.",
    longDesc: [
      "Business automation enables organizations to improve efficiency, reduce manual effort, and streamline operations. Our Automation Services focus on automating repetitive tasks, workflows, and business processes through intelligent technologies, API integrations, and Robotic Process Automation (RPA). These solutions help businesses reduce errors, improve productivity, and optimize resource utilization.",
      "We analyze existing workflows and identify opportunities where automation can create measurable improvements. From data processing and approval workflows to system integrations and operational tasks, our solutions are designed to increase speed, accuracy, and scalability. By implementing automation strategies tailored to business needs, organizations can focus more on innovation and strategic growth while minimizing operational overhead.",
    ],
    color: "from-[#e8c9a0] to-[#c9956a]",
    techStack: ["UiPath", "Power Automate", "Zapier", "Python"],
  },
  {
    icon: Glasses,
    title: "AR/VR Solutions",
    tagline: "Immersive Digital Experiences",
    desc: "Delivering immersive digital experiences through cutting-edge augmented and virtual reality technologies.",
    longDesc: [
      "Augmented Reality (AR) and Virtual Reality (VR) technologies are transforming the way businesses engage with customers, train employees, and visualize products. Our AR/VR Solutions create immersive digital experiences that blend innovation with real-world applications. We develop interactive environments, virtual simulations, and augmented experiences that enhance engagement and improve learning outcomes.",
      "Whether used for training, product demonstrations, education, healthcare, real estate, or industrial applications, our solutions provide highly interactive and realistic experiences. We leverage modern 3D technologies and immersive design principles to deliver solutions that capture attention and drive user engagement. Our AR/VR expertise helps businesses unlock new possibilities and create memorable digital experiences.",
    ],
    color: "from-[#c9956a] to-[#e8c9a0]",
    techStack: ["Unity", "Unreal Engine", "ARKit", "ARCore", "Blender"],
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    tagline: "Worlds worth exploring",
    desc: "Creating interactive gaming experiences with advanced technologies and engaging gameplay mechanics.",
    longDesc: [
      "The gaming industry continues to evolve rapidly, creating opportunities for innovative and engaging digital experiences. Our Game Development services cover the design, development, and deployment of interactive games across mobile, desktop, web, and immersive platforms. We create games that combine compelling gameplay, engaging visuals, and optimized performance.",
      "From casual mobile games and multiplayer experiences to gamification solutions and AR/VR gaming environments, our team delivers projects tailored to audience expectations and business goals. We focus on creating scalable architectures, seamless user experiences, and long-term engagement strategies. Whether for entertainment, education, training, or brand engagement, our game development solutions bring ideas to life through creativity and technology.",
    ],
    color: "from-[#e8c9a0] to-[#c9956a]",
    techStack: ["Unity", "Unreal Engine", "C#", "Photon", "PlayFab"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    tagline: "Rank higher. Grow faster.",
    desc: "Boosting online visibility and search rankings through strategic optimization and sustainable growth.",
    longDesc: [
      "A strong online presence requires more than just a great website—it requires visibility. Our SEO Optimization services help businesses improve search engine rankings, increase organic traffic, and attract qualified visitors. We implement comprehensive SEO strategies that include technical optimization, keyword research, content enhancement, and website performance improvements.",
      "Our approach focuses on long-term growth through ethical and data-driven SEO practices. By optimizing website structure, improving user experience, and enhancing search visibility, we help businesses reach their target audience more effectively. Whether you're looking to increase brand awareness, generate leads, or improve conversions, our SEO solutions support sustainable digital growth and measurable business results.",
    ],
    color: "from-[#c9956a] to-[#e8c9a0]",
    techStack: [
      "Google Analytics",
      "Google Search",
      "Ahrefs",
      "SEMrush",
      "Screaming Frog",
    ],
  },
];

// Unified flat technology list (no grouping)
const allTechnologies = [
  { name: "Python", icon: "python" },
  { name: "OpenAI GPT", icon: "openai" },
  { name: "LangChain", icon: "langchain" },
  { name: "TensorFlow", icon: "tensorflow" },
  // { name: "Pinecone", icon: "pinecone" },
  { name: "Power BI", icon: "powerbi" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Flutter", icon: "flutter" },
  { name: "Kotlin", icon: "kotlin" },
  { name: "Firebase", icon: "firebase" },
  { name: "Salesforce", icon: "salesforce" },
  { name: "AWS", icon: "aws" },
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: ".NET Core", icon: "dotnet" },
  { name: "Java", icon: "java" },
  { name: "Spring Boot", icon: "spring" },
  { name: "SAP Integration", icon: "sap" },
  { name: "REST API", icon: "api" },
  { name: "Figma", icon: "figma" },
  { name: "InVision", icon: "invision" },
  { name: "UiPath", icon: "uipath" },
  { name: "Power Automate", icon: "powerautomate" },
  { name: "Unity", icon: "unity" },
  //{ name: "ARKit", icon: "arkit" },
  { name: "C#", icon: "csharp" },
  { name: "Google Analytics", icon: "ga" },
  { name: "Google Search", icon: "googlesearch" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "postgresql" },
];

function TechIcon({
  icon,
  size = "md",
}: {
  icon: string;
  size?: "sm" | "md" | "lg";
}) {
  const iconMap: Record<string, string> = {
    python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    openai:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg",
    langchain:
      "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/langchain-color.png",
    tensorflow:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    powerbi:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    react:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    nextjs:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    nodejs:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    typescript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    mongodb:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    flutter:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    kotlin:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    firebase:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    salesforce:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
    aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    docker:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    kubernetes:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    dotnet:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    spring:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    postgresql:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    //pinecone: "public/pinecone-removebg-preview (1).png",
    sap: "/sap_Logo.png",
    api: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
    figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    invision:
      "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg",
    uipath: "https://companieslogo.com/img/orig/PATH-4f96bcbf.png",
    powerautomate:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    unity:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
    // arkit:
    //   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    csharp:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    ga: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    googlesearch: "https://www.google.com/favicon.ico",
    mysql:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  };

  const fallback = iconMap[icon] || iconMap.python;

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-11 h-11 sm:w-12 sm:h-12",
    lg: "w-14 h-14 sm:w-16 sm:h-16",
  };

  const imgSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6 sm:w-7 sm:h-7",
    lg: "w-8 h-8 sm:w-9 sm:h-9",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-xl bg-white/[0.04] flex items-center justify-center p-2 group-hover:bg-white/[0.08] transition-all duration-300 group-hover:scale-105`}
    >
      <img
        src={fallback}
        alt={name}
        className={`${imgSizes[size]} object-contain transition-transform duration-300 group-hover:scale-110`}
        loading="lazy"
        decoding="async"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}

function ServiceCard({
  service,
  index,
  onOpen,
}: {
  service: Service;
  index: number;
  onOpen: () => void;
}) {
  const { ref, visible } = useScrollAnimation(0.1);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      onClick={onOpen}
      className={`group relative rounded-2xl border border-white/[0.06] bg-[#111] hover:border-[#c9956a]/40 transition-all duration-500 overflow-hidden cursor-pointer h-full ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } hover:shadow-[0_12px_48px_-12px_rgba(201,149,106,0.2)] hover:-translate-y-1.5`}
      style={{
        animationDelay: `${(index % 3) * 100}ms`,
        transitionDelay: `${(index % 3) * 50}ms`,
      }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9956a]/0 group-hover:via-[#c9956a]/60 to-transparent transition-all duration-500" />

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c9956a]/[0.03] to-[#c9956a]/0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10 p-6 sm:p-7 flex flex-col h-full">
        {/* Header row: icon + title */}
        <div className="flex items-start gap-4 mb-3">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-0.5 shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2`}
          >
            <div className="w-full h-full rounded-xl bg-[#111] flex items-center justify-center group-hover:bg-[#0d0d0d] transition-colors">
              <Icon
                size={22}
                className="text-[#c9956a] transition-all duration-300 group-hover:text-[#e8c9a0]"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-white text-base sm:text-lg font-bold group-hover:text-[#e8c9a0] transition-colors duration-300 leading-tight">
              {service.title}
            </h2>
            <span className="text-[#c9956a] text-[11px] tracking-widest uppercase font-bold mt-1 block group-hover:text-[#e8c9a0] transition-colors duration-300">
              {service.tagline}
            </span>
          </div>
          <div className="shrink-0 mt-1">
            <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center text-gray-500 group-hover:text-[#c9956a] group-hover:bg-[#c9956a]/10 transition-all duration-300 group-hover:scale-110">
              <ChevronRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300 flex-1">
          {service.desc}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {service.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md border border-white/[0.06] bg-white/[0.03] text-gray-500 text-[11px] font-medium group-hover:border-[#c9956a]/20 group-hover:text-[#c9956a]/80 group-hover:bg-[#c9956a]/[0.04] transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceModal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  const navigate = useNavigate();
  const Icon = service.icon;

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const handleContact = useCallback(() => {
    onClose();
    setTimeout(() => navigate("/contact"), 300);
  }, [onClose, navigate]);

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-white/[0.08] bg-[#0d0d0d] shadow-2xl shadow-black/50 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 z-10 border border-white/[0.06]"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="px-5 sm:px-8 pt-5 sm:pt-6 pb-0">
          {/* Icon + Title on same row */}
          <div className="flex items-center gap-3 mb-1">
            <div
              className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} p-0.5 shrink-0`}
            >
              <div className="w-full h-full rounded-xl bg-[#111] flex items-center justify-center">
                <Icon size={20} className="text-[#c9956a]" />
              </div>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white leading-tight">
                {service.title}
              </h2>
            </div>
          </div>

          {/* Tagline directly below */}
          <span className="text-[#c9956a] text-[11px] sm:text-xs tracking-widest uppercase font-bold block mt-1">
            {service.tagline}
          </span>
        </div>

        {/* Body */}
        <div className="px-5 sm:px-8 pt-3 pb-6 sm:pb-8">
          {/* Tech Stack section */}
          <div className="mb-4">
            <h4 className="text-[11px] tracking-widest uppercase text-gray-500 font-semibold mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg border border-white/[0.06] bg-white/[0.03] text-gray-300 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-4" />

          {/* Description paragraphs */}
          <div className="space-y-3 mb-5">
            {service.longDesc.map((paragraph, i) => (
              <p key={i} className="text-gray-400 text-sm leading-[1.7]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="flex justify-center pt-3 border-t border-white/[0.06]">
            <button
              onClick={handleContact}
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-3 bg-gradient-to-r from-[#c9956a] to-[#b87d52] text-[#0d0d0d] font-bold text-sm tracking-wider uppercase rounded-lg hover:shadow-xl hover:shadow-[#c9956a]/30 transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#e8c9a0] to-[#c9956a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <span className="relative flex items-center gap-2">
                Contact Us
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function TechCard({ tech }: { tech: { name: string; icon: string } }) {
  return (
    <div className="group w-[150px] sm:w-[170px] shrink-0 flex flex-col items-center gap-3 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:border-[#c9956a]/30 hover:bg-[#c9956a]/[0.04] hover:shadow-[0_8px_32px_-8px_rgba(201,149,106,0.15)] transition-all duration-300 hover:scale-[1.05] cursor-default">
      <TechIcon icon={tech.icon} size="lg" />
      <span className="text-gray-300 text-[11px] sm:text-xs text-center font-semibold leading-tight group-hover:text-white transition-colors duration-300">
        {tech.name}
      </span>
    </div>
  );
}

function TechnologyShowcase() {
  const sectionRef = useScrollAnimation(0.08);
  const row1 = allTechnologies.slice(0, Math.ceil(allTechnologies.length / 2));
  const row2 = allTechnologies.slice(Math.ceil(allTechnologies.length / 2));

  return (
    <div
      ref={sectionRef.ref}
      className={`transition-all duration-1000 ${
        sectionRef.visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-center mb-10 sm:mb-14">
        <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-3 block">
          Our Technology Ecosystem
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Technologies We Work On
        </h2>
        <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto px-4">
          Leveraging industry-leading technologies, frameworks, cloud platforms,
          and development tools to deliver scalable, secure, and innovative
          digital solutions.
        </p>
      </div>

      <div className="space-y-5">
        {/* Row 1: Left to Right */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#090909] to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#090909] to-transparent z-10 pointer-events-none" />

          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover
            className="overflow-hidden"
          >
            {row1.map((tech) => (
              <div key={tech.name} className="mx-2.5">
                <TechCard tech={tech} />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#090909] to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#090909] to-transparent z-10 pointer-events-none" />

          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover
            direction="right"
            className="overflow-hidden"
          >
            {row2.map((tech) => (
              <div key={tech.name} className="mx-2.5">
                <TechCard tech={tech} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const header = useScrollAnimation(0.2);
  const ctaSection = useScrollAnimation(0.15);

  return (
    <div className="animate-page-enter">
      <SEO
        title="Services | SYNC7VEN"
        description="Explore SYNC7VEN services across AI solutions, data analytics, web and mobile development, cloud, ERP, UI/UX, automation, AR/VR, game development, and SEO."
        canonicalPath="/services"
        robots="index, follow"
        ogType="website"
      />
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#090909] min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            ref={header.ref}
            className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
              header.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
              What We Offer
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Our Services
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
              From strategy to execution — we cover the full digital stack so
              you can focus on what matters most. Every service is backed by
              deep expertise and a track record of results.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                service={s}
                index={i}
                onOpen={() => setSelectedService(s)}
              />
            ))}
          </div>

          {/* Technology Showcase Section */}
          <div className="mt-20 sm:mt-28 md:mt-32">
            <TechnologyShowcase />
          </div>

          {/* Bottom CTA */}
          <div
            ref={ctaSection.ref}
            className={`mt-16 sm:mt-20 transition-all duration-1000 ${
              ctaSection.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
              {[
                {
                  icon: Sparkles,
                  label: "Free Consultation",
                  desc: "Book a 30-minute strategy call with our team.",
                },
                {
                  icon: TrendingUp,
                  label: "ROI-Focused",
                  desc: "Every project is measured by business impact.",
                },
                {
                  icon: Users,
                  label: "Dedicated Team",
                  desc: "Your own engineers, designers, and PM.",
                },
              ].map(({ icon: Icon, label, desc }, i) => (
                <div
                  key={label}
                  className="p-6 rounded-2xl border border-[#c9956a]/15 bg-gradient-to-br from-[#c9956a]/[0.04] to-transparent group hover:border-[#c9956a]/35 hover:shadow-lg hover:shadow-[#c9956a]/10 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <Icon
                    size={24}
                    className="text-[#c9956a] mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-white font-bold text-sm sm:text-base mb-1 group-hover:text-[#e8c9a0] transition-colors duration-300">
                    {label}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}
