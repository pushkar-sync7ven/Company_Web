import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Rocket, Users, Glasses, Gamepad2, Scale3d as Scale3D } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useCounter } from "../hooks/useCounter";
import SEO from "../components/SEO";

function StatItem({
  value,
  suffix,
  label,
  active,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  delay: number;
}) {
  const count = useCounter(value, 2000, active);
  return (
    <div
      className="text-center group cursor-pointer animate-stagger"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#c9956a] to-[#e8c9a0] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
        {count}
        {suffix}
      </div>
      <div className="text-gray-400 text-xs sm:text-sm tracking-wider uppercase group-hover:text-[#c9956a] transition-colors duration-300">
        {label}
      </div>
    </div>
  );
}

const highlights = [
  {
    icon: Sparkles,
    title: "AI-Powered Innovation",
    desc: "Intelligent AI solutions, automation systems, and smart digital experiences designed for the future.",
  },
  {
    icon: Rocket,
    title: "Custom Software Development",
    desc: "Scalable web applications, mobile apps, and enterprise-grade software tailored to your business.",
  },
  {
    icon: Glasses,
    title: "AR/VR Experiences",
    desc: "Immersive augmented and virtual reality solutions that engage users and elevate brands.",
  },
  {
    icon: Gamepad2,
    title: "Interactive Game Development",
    desc: "Captivating gaming experiences built with creativity, performance, and user engagement in mind.",
  },
  {
    icon: Scale3D,
    title: "Scalable Digital Products",
    desc: "From concept to launch, we create reliable products engineered for growth and long-term success.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    desc: "We work as an extension of your team, turning ambitious ideas into impactful digital realities.",
  },
];

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statsSection = useScrollAnimation(0.3);
  const highlightsSection = useScrollAnimation(0.15);
  const ctaSection = useScrollAnimation(0.2);
  const processSection = useScrollAnimation(0.15);

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

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
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
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(201,149,106,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
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
      <SEO
        title="SYNC7VEN | AI, Web, App & Digital Solutions"
        description="SYNC7VEN builds AI solutions, websites, mobile apps, automation, AR/VR experiences, games, and scalable digital products for modern businesses."
        canonicalPath="/"
        robots="index, follow"
        ogType="website"
      />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d0d]">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
          <img
            src="/sync7ven_Transparent_Logo.webp"
            alt=""
            width={1254}
            height={1254}
            className="w-[80vw] max-w-[1800px] opacity-5 select-none"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        <div className="absolute inset-0 bg-gradient-radial from-[#c9956a]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent" />

        {/* Decorative morphing blob */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#c9956a]/5 animate-morph-blob blur-3xl opacity-40 pointer-events-none" />
        <div
          className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-[#e8c9a0]/5 animate-morph-blob blur-3xl opacity-30 pointer-events-none"
          style={{ animationDelay: "-4s" }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Build.
            <span className="bg-gradient-to-r from-[#c9956a] via-[#e8c9a0] to-[#c9956a] bg-clip-text text-transparent animate-gradient">
              Sync.
            </span>
            Scale.
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-delay hover:text-gray-300 transition-colors duration-300 px-4"
            style={{ animationDelay: "0.7s" }}
          >
            From AI-powered platforms and modern web applications to immersive
            AR/VR experiences and interactive games, SYNC
            <span className=" text-xs sm:text-2xl  mx-[2px]">7</span>VEN creates
            future-ready digital solutions that help businesses build smarter,
            move faster, and scale further.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-delay-2 w-full max-w-md sm:max-w-none px-4 sm:px-0"
            style={{ animationDelay: "1.1s" }}
          >
            <Link
              to="/services"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-gradient-to-r from-[#c9956a] to-[#b87d52] text-[#0d0d0d] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg overflow-hidden transition-all duration-400 hover:shadow-xl hover:shadow-[#c9956a]/30 hover:gap-3 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#e8c9a0] to-[#c9956a] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <span className="relative flex items-center gap-2">
                Explore Services
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
            <Link
              to="/contact"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-4 border border-white/15 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-lg transition-all duration-400 hover:border-[#c9956a]/50 hover:shadow-lg hover:shadow-[#c9956a]/10 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#c9956a]/0 to-[#c9956a]/0 group-hover:from-[#c9956a]/5 group-hover:to-transparent rounded-lg transition-all duration-400" />
              <span className="relative">Get in Touch</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
          <div className="w-px h-8 bg-gradient-to-b from-[#c9956a]/50 to-transparent" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="group">
              <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-4 block group-hover:animate-text-glow transition-all">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-[#e8c9a0] transition-all duration-300">
                A new kind of tech partner
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                SYNC
                <span className=" text-xs sm:text-xl  mx-[2px]">7</span>VEN is a
                technology and innovation studio focused on building the future
                through AI, software, immersive experiences, and digital
                creativity.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-300">
                We partner with startups, growing businesses, and enterprises
                to design and develop intelligent AI solutions, modern web &
                mobile applications, interactive games, AR/VR experiences, and
                high-impact digital products
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-300">
                Backed by a passionate team of 7 innovators, we blend strategy,
                creativity, and engineering excellence to transform bold ideas
                into powerful digital realities.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-[#c9956a] text-sm font-semibold tracking-wider uppercase hover:gap-3 transition-all duration-300"
              >
                Learn more about us
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  title: "Build",
                  subtitle: "Digital Products",
                  description: "Web Apps, Mobile Apps & SaaS Platforms",
                },
                {
                  title: "Sync",
                  subtitle: "AI & Automation",
                  description: "Intelligent Workflows, Agents & Integrations",
                },
                {
                  title: "Scale",
                  subtitle: "Cloud Infrastructure",
                  description: "Secure, Scalable & Performance-Driven Systems",
                },
                {
                  title: "Deliver",
                  subtitle: "Long-Term Partnership",
                  description: "Continuous Support, Growth & Innovation",
                },
              ].map((pillar, i) => (
                <div
                  key={pillar.title}
                  style={{ animationDelay: `${i * 100}ms` }}
                  className="relative overflow-hidden p-5 sm:p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-[#c9956a]/40 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-[#c9956a]/10 hover:-translate-y-1 group"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#c9956a]/10 via-transparent to-transparent" />

                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#c9956a] to-[#f0c79a] bg-clip-text text-transparent mb-2 tracking-wider">
                      {pillar.title}
                    </h3>

                    <p className="text-white font-semibold text-sm sm:text-base mb-2">
                      {pillar.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#090909] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div
            ref={highlightsSection.ref}
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              highlightsSection.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
              Why SYNC7VEN
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Built different, by design
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
              From AI-powered platforms to immersive digital experiences, we
              help ambitious businesses turn bold ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`group p-6 sm:p-7 rounded-2xl border border-white/8 bg-[#111] hover:border-[#c9956a]/40 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-[#c9956a]/15 hover:scale-[1.02] ${
                  highlightsSection.visible ? "animate-stagger" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#c9956a]/10 flex items-center justify-center mb-4 group-hover:bg-[#c9956a]/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={20} className="text-[#c9956a]" />
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-[#e8c9a0] transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <div
            ref={processSection.ref}
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              processSection.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Approach
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto px-4">
              A streamlined workflow designed to transform ambitious ideas into
              intelligent digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "We explore your vision, business goals, audience, and opportunities to create a clear roadmap for success.",
              },
              {
                step: "02",
                title: "Design",
                desc: "We craft intuitive user experiences, interactive prototypes, and immersive concepts that bring ideas to life.",
              },
              {
                step: "03",
                title: "Build",
                desc: "Our team develops AI solutions, applications, games, and digital experiences using agile, high-quality engineering practices.",
              },
              {
                step: "04",
                title: "Launch & Grow",
                desc: "We deploy, optimize, and continuously evolve your product to maximize performance, engagement, and long-term growth.",
              },
            ].map(({ step, title, desc }, i) => (
              <div
                key={step}
                className={`group relative p-6 rounded-2xl border border-white/8 bg-[#111] hover:border-[#c9956a]/40 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-[#c9956a]/15 ${
                  processSection.visible ? "animate-stagger" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-black text-[#c9956a]/20 mb-3 group-hover:text-[#c9956a]/40 transition-colors duration-300">
                  {step}
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-[#e8c9a0] transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                  {desc}
                </p>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#c9956a]/0 to-transparent group-hover:via-[#c9956a]/60 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#090909] border-y border-white/5">
        <div ref={statsSection.ref} className="max-w-5xl mx-auto">
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-10 transition-all duration-1000 ${statsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <StatItem
              value={1}
              suffix=""
              label="Shared Vison"
              active={statsSection.visible}
              delay={150}
            />
            <StatItem
              value={7}
              suffix=""
              label="Creative Minds"
              active={statsSection.visible}
              delay={0}
            />
            <StatItem
              value={8}
              suffix="+"
              label="Core Services"
              active={statsSection.visible}
              delay={100}
            />

            <StatItem
              value={100}
              suffix="%"
              label="Custom Solutions"
              active={statsSection.visible}
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaSection.ref}
        className={`py-16 sm:py-24 px-4 sm:px-6 bg-[#0d0d0d] transition-all duration-1000 ${ctaSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <div className="max-w-3xl mx-auto text-center p-8 sm:p-12 rounded-2xl border border-[#c9956a]/20 bg-gradient-to-br from-[#c9956a]/5 to-transparent hover:border-[#c9956a]/40 transition-all duration-300 group animate-border-glow">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#e8c9a0] transition-colors duration-300">
            Let's Build Something Remarkable
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-8 group-hover:text-gray-300 transition-colors duration-300">
            AI. Apps. Games. Immersive Experiences. One team to bring it all
            together.
          </p>
          <Link
            to="/contact"
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-gradient-to-r from-[#c9956a] to-[#b87d52] text-[#0d0d0d] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg hover:shadow-xl hover:shadow-[#c9956a]/40 transition-all duration-400 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#e8c9a0] to-[#c9956a] opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-lg" />
            <span className="relative flex items-center gap-2">
              Get Started
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
