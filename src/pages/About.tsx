import { useEffect, useRef } from "react";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Lightbulb,
  Shield,
  Globe as Globe2,
  ArrowRight,
  Rocket,
  Layers,
  Diamond,
  MessageCircle,
  Compass,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const values = [
  {
    icon: Target,
    title: "Precision",
    desc: "We deliver products that work flawlessly in the real world. Every detail is tested thoroughly before it reaches you. We do not settle for anything less than excellence.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We explore new technologies before they become common. This keeps our clients ahead of the curve with modern, future-ready solutions.",
  },
  {
    icon: Heart,
    title: "Partnership",
    desc: "We work as an extension of your team. Your success is our success. We measure our work by the real business results we create together.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Transparency at every step. You get real-time updates, regular check-ins, and open access to our progress so you are never left guessing.",
  },
];

const teamValues = [
  {
    icon: Shield,
    title: "Security First",
    desc: "Every system we build is designed with security in mind from day one. We follow industry best practices to protect your data and your users.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "Our team works remotely from across the world. We design systems that serve users everywhere with fast, reliable performance.",
  },
  {
    icon: Rocket,
    title: "Speed",
    desc: "We move fast without cutting corners. Our modular approach lets us deliver quickly while keeping quality high.",
  },
  {
    icon: Diamond,
    title: "Craftsmanship",
    desc: "Clean, well-organized code with thorough testing and clear documentation. We build systems that are easy to improve and maintain over time.",
  },
];

const milestones = [
  {
    year: "2026",
    title: "Founded",
    desc: "Seven founding members from different domains came together with a shared vision: to bridge the gap between ambitious ideas and real-world digital products.",
  },
  {
    year: "2026",
    title: "First Enterprise Client",
    desc: "Landed our first major client and delivered a mission-critical platform that proved our ability to execute at the highest level.",
  },
  {
    year: "2026",
    title: "Global Team",
    desc: "Built a remote team working across time zones, bringing together diverse perspectives and skills from around the world.",
  },
  {
    year: "2026",
    title: "Growing Portfolio",
    desc: "Successfully delivered 9 projects spanning artificial intelligence, web applications, mobile apps, games, and automation.",
  },
  {
    year: "2027",
    title: "The Future",
    desc: "Expanding into advanced artificial intelligence, immersive virtual experiences, and next-generation cloud solutions. The journey is just beginning.",
  },
];

const differentiators = [
  "Teams spanning engineering, design, data science, and strategy all under one roof",
  "Agile delivery with real-time progress tracking and weekly demos with stakeholders",
  "Post-launch support with guaranteed response times and continuous improvements",
  "Tested across finance, healthcare, online retail, gaming, and many other industries",
  "Artificial intelligence built into our development process, not added as an afterthought",
  "Full ownership transfer of all work. No vendor lock-in on any project",
];

interface AboutProps {
  onNavigate: (
    page: "home" | "services" | "about" | "work" | "contact",
  ) => void;
}

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof milestones)[0];
  index: number;
  isLast: boolean;
}) {
  const { ref, visible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`relative flex gap-4 sm:gap-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-[#c9956a] to-[#e8c9a0] ring-4 ring-[#c9956a]/20 animate-pulse-ring shrink-0" />
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-[#c9956a]/40 to-transparent my-2 min-h-[30px] sm:min-h-[40px]" />
        )}
      </div>

      <div className="pb-5 sm:pb-6 group">
        <span className="text-[#c9956a] text-xs sm:text-sm font-bold tracking-wider mb-1 block group-hover:animate-text-glow transition-all">
          {item.year}
        </span>
        <h4 className="text-white font-bold text-sm sm:text-base mb-1.5 group-hover:text-[#e8c9a0] transition-colors duration-300">
          {item.title}
        </h4>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed group-hover:text-gray-400 transition-colors max-w-md">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function About({ onNavigate }: AboutProps) {
  const header = useScrollAnimation(0.15);
  const missionSection = useScrollAnimation(0.12);
  const valuesSection = useScrollAnimation(0.12);
  const timelineSection = useScrollAnimation(0.1);
  const diffSection = useScrollAnimation(0.12);
  const principlesSection = useScrollAnimation(0.12);
  const ctaSection = useScrollAnimation(0.15);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.4 + 0.05,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,149,106,${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(201,149,106,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="animate-page-enter">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0d0d0d]">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-radial from-[#c9956a]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d0d0d] to-transparent" />

        <div className="absolute top-1/4 right-[15%] w-80 h-80 bg-[#c9956a]/4 animate-morph-blob blur-3xl opacity-30 pointer-events-none" />
        <div
          className="absolute bottom-1/4 left-[15%] w-60 h-60 bg-[#e8c9a0]/3 animate-morph-blob blur-3xl opacity-25 pointer-events-none"
          style={{ animationDelay: "-4s" }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
          <div
            ref={header.ref}
            className={`transition-all duration-1000 ${
              header.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-[#c9956a] via-[#e8c9a0] to-[#c9956a] bg-clip-text text-transparent animate-gradient">
                Us
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 ">
              Seven founders. Different disciplines. One vision. At SYNC
              <span className=" text-xs sm:text-2xl mx-[2px]">7</span>VEN, we
              believe the best technology feels invisible. It quietly solves
              complex problems behind the scenes, so every experience feels
              simple, intuitive, and effortless. That's how we build products
              people love to use.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div
            ref={missionSection.ref}
            className={`text-center mb-8 sm:mb-10 transition-all duration-1000 ${
              missionSection.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-3 block">
              Our Foundation
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              Purpose & Direction
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              Three pillars that define every decision we make and every product
              we ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Compass,
                label: "Our Mission",
                text: "To build smart, scalable digital systems that transform how businesses operate and grow. We connect your big ideas to real-world execution with care and speed.",
              },
              {
                icon: Eye,
                label: "Our Vision",
                text: "A future where technology-powered organizations lead by working smarter, not harder. Where tools amplify human creativity instead of replacing it.",
              },
              {
                icon: Award,
                label: "Our Standard",
                text: "We hold ourselves to the highest standards. Every line of code, every design detail, every user interaction is crafted with intention. We do not ship until it exceeds expectations.",
              },
            ].map(({ icon: Icon, label, text }, i) => (
              <div
                key={label}
                className={`relative p-6 sm:p-8 rounded-2xl border border-white/8 bg-[#111] hover:border-[#c9956a]/30 transition-all duration-500 group cursor-pointer hover:shadow-xl hover:shadow-[#c9956a]/15 animate-stagger hover:scale-[1.02] overflow-hidden ${
                  missionSection.visible ? "" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9956a]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#c9956a]/10 flex items-center justify-center mb-5 group-hover:bg-[#c9956a]/20 group-hover:scale-110 transition-all duration-300">
                    <Icon
                      size={22}
                      className="text-[#c9956a] group-hover:animate-pulse"
                    />
                  </div>
                  <h3 className="text-white font-bold text-base sm:text-lg mb-3 group-hover:text-[#e8c9a0] transition-colors duration-300">
                    {label}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#090909] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div
            ref={valuesSection.ref}
            className={`text-center mb-8 sm:mb-10 transition-all duration-1000 ${
              valuesSection.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-3 block">
              What Drives Us
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              Core Values
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              The non-negotiables that shape our culture, our craft, and our
              client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`group p-6 sm:p-7 rounded-2xl border border-white/8 bg-[#111] hover:border-[#c9956a]/30 hover:bg-[#c9956a]/[0.02] transition-all duration-500 text-center cursor-pointer hover:shadow-lg hover:shadow-[#c9956a]/15 animate-stagger hover:scale-[1.03] ${
                  valuesSection.visible ? "" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-[#c9956a]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#c9956a]/20 group-hover:scale-110 transition-all duration-300">
                  <Icon
                    size={22}
                    className="text-[#c9956a] group-hover:rotate-12 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-white font-bold mb-2 text-sm sm:text-base group-hover:text-[#e8c9a0] transition-colors duration-300">
                  {title}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div
            ref={timelineSection.ref}
            className={`text-center mb-8 sm:mb-10 transition-all duration-1000 ${
              timelineSection.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-3 block">
              Our Journey
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              The Road So Far
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              From seven founders with different backgrounds to a global digital
              team. Every milestone marks a commitment to excellence.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            {milestones.map((item, i) => (
              <TimelineItem
                key={item.title}
                item={item}
                index={i}
                isLast={i === milestones.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#090909] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div
            ref={diffSection.ref}
            className={`transition-all duration-1000 ${
              diffSection.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="rounded-2xl border border-[#c9956a]/20 bg-gradient-to-br from-[#c9956a]/5 to-transparent p-5 sm:p-8 group hover:border-[#c9956a]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#c9956a]/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-3 block group-hover:animate-text-glow transition-all">
                    The SYNC
                    <span className=" text-xs sm:text-xl mx-[0.1px]">7</span>VEN
                    Difference
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-[#e8c9a0] transition-colors duration-300">
                    Why industry leaders choose us
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                    We do not compete on price. We compete on results. Our
                    clients stay because we deliver real business impact — more
                    revenue, lower costs, smoother operations, and a stronger
                    market position.
                  </p>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    Our approach is built for long-term partnerships. We take
                    time to understand your business, your users, and your
                    challenges before we start building.
                  </p>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {differentiators.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-300 text-xs sm:text-sm animate-stagger group-hover:text-gray-200 transition-colors duration-300"
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      <span className="w-5 h-5 rounded-full bg-gradient-to-r from-[#c9956a] to-[#e8c9a0] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300">
                        <span className="w-2 h-2 rounded-full bg-[#0d0d0d]" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div
            ref={principlesSection.ref}
            className={`text-center mb-8 sm:mb-10 transition-all duration-1000 ${
              principlesSection.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-3 block">
              How We Operate
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              Principles That Guide Us
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto px-2">
              These principles shape how we design, how we communicate, and how
              we deliver every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {teamValues.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`group p-6 rounded-2xl border border-white/8 bg-[#111] hover:border-[#c9956a]/40 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-[#c9956a]/15 hover:scale-[1.02] animate-stagger ${
                  principlesSection.visible ? "" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#c9956a]/10 flex items-center justify-center mb-4 group-hover:bg-[#c9956a]/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={20} className="text-[#c9956a]" />
                </div>
                <h4 className="text-white font-bold text-sm sm:text-base mb-2 group-hover:text-[#e8c9a0] transition-colors duration-300">
                  {title}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#090909] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div
            ref={ctaSection.ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 transition-all duration-1000 ${
              ctaSection.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Portfolio CTA */}
            <div className="rounded-2xl border border-[#c9956a]/20 bg-gradient-to-br from-[#c9956a]/5 to-transparent p-6 sm:p-8 text-center group hover:border-[#c9956a]/40 hover:shadow-xl hover:shadow-[#c9956a]/20 transition-all duration-500">
              <div className="w-10 h-10 rounded-xl bg-[#c9956a]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c9956a]/20 group-hover:scale-110 transition-all duration-300">
                <Layers size={20} className="text-[#c9956a]" />
              </div>
              <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-2 block">
                Our Portfolio
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#e8c9a0] transition-colors duration-300">
                See our work in action
              </h3>
              <p className="text-gray-400 text-sm mb-5 group-hover:text-gray-300 transition-colors">
                Explore our projects across artificial intelligence, web,
                mobile, games, and automation.
              </p>
              <button
                onClick={() => onNavigate("work")}
                className="group/btn relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-gradient-to-r from-[#c9956a] to-[#b87d52] text-[#0d0d0d] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg transition-all duration-400 hover:shadow-xl hover:shadow-[#c9956a]/40 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#e8c9a0] to-[#c9956a] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-400 rounded-lg" />
                <span className="relative flex items-center gap-2">
                  View Our Work
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </span>
              </button>
            </div>

            {/* Contact CTA */}
            <div className="rounded-2xl border border-[#c9956a]/20 bg-gradient-to-br from-[#c9956a]/5 to-transparent p-6 sm:p-8 text-center group hover:border-[#c9956a]/40 hover:shadow-xl hover:shadow-[#c9956a]/20 transition-all duration-500">
              <div className="w-10 h-10 rounded-xl bg-[#c9956a]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c9956a]/20 group-hover:scale-110 transition-all duration-300">
                <MessageCircle size={20} className="text-[#c9956a]" />
              </div>
              <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-2 block">
                Start a Conversation
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#e8c9a0] transition-colors duration-300">
                Let's build something extraordinary
              </h3>
              <p className="text-gray-400 text-sm mb-5 group-hover:text-gray-300 transition-colors">
                Tell us about your vision. We will respond within 24 hours with
                a clear plan and next steps.
              </p>
              <button
                onClick={() => onNavigate("contact")}
                className="group/btn relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 border border-[#c9956a]/40 text-[#c9956a] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg transition-all duration-400 hover:bg-gradient-to-r hover:from-[#c9956a] hover:to-[#b87d52] hover:text-[#0d0d0d] hover:shadow-xl hover:shadow-[#c9956a]/30 hover:border-transparent hover:scale-105"
              >
                <span className="relative flex items-center gap-2">
                  Get In Touch
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
