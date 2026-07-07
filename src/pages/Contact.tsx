import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import emailjs from "@emailjs/browser";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const faqs = [
  {
    q: "What types of solutions does SYNC7VEN build?",
    a: "We specialize in AI-powered applications, custom web platforms, mobile apps, immersive AR/VR experiences, games, and enterprise software tailored to your business goals.",
  },
  {
    q: "Can SYNC7VEN turn my idea into a complete product?",
    a: "Absolutely. From strategy and UI/UX design to development, deployment, and scaling, we handle the entire product journey from concept to launch.",
  },
  {
    q: "Do you develop custom AI solutions?",
    a: "Yes. We build AI chatbots, intelligent automation systems, recommendation engines, computer vision solutions, and custom AI integrations designed around your specific requirements.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We offer ongoing maintenance, performance optimization, feature enhancements, monitoring, and long-term technical support to ensure your product continues to grow.",
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const header = useScrollAnimation(0.2);
  const formSection = useScrollAnimation(0.15);
  const infoSection = useScrollAnimation(0.15);
  const faqSection = useScrollAnimation(0.15);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (!/^[A-Za-z\s]+$/.test(form.name.trim())) {
      newErrors.name = "Name can only contain letters and spaces.";
    }
    if (!form.email.trim() || !validateEmail(form.email))
      newErrors.email = "Please enter a valid email address.";
    if (form.phone && !/^[\d\s+\-()]{7,15}$/.test(form.phone))
      newErrors.phone = "Please enter a valid phone number.";
    if (!form.message.trim() || form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Run validation first
    if (!validate()) {
      return;
    }

    try {
      setStatus("loading");

      await emailjs.send(
        "service_sync7ven",
        "template_cmq6big",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "mAujVe1FcBPrk4PXf",
      );

      await emailjs.send(
        "service_sync7ven",
        "template_xc98fb3",
        {
          name: form.name,
          email: form.email,
        },
        "mAujVe1FcBPrk4PXf",
      );

      setStatus("success");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full bg-[#111] border rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-all duration-300 focus:ring-2 focus:scale-[1.02] ${
      errors[field]
        ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/20"
        : "border-white/10 focus:border-[#c9956a]/60 focus:ring-[#c9956a]/20 hover:border-white/20"
    }`;

  return (
    <div className="animate-page-enter">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#0d0d0d] min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div
            ref={header.ref}
            className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
              header.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Let's Work Together
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed px-2">
              Have a project in mind? We'd love to hear about it. Reach out and
              let's discuss how we can help transform your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 md:gap-10">
            {/* Form */}
            <div
              ref={formSection.ref}
              className={`lg:col-span-3 transition-all duration-1000 ${
                formSection.visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="p-6 sm:p-8 md:p-10 rounded-2xl border border-white/8 bg-[#111] hover:border-[#c9956a]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#c9956a]/10 group">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center animate-scale-in">
                    <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-5 animate-pulse-ring">
                      <CheckCircle
                        size={28}
                        className="sm:w-8 sm:h-8 text-green-400"
                      />
                    </div>
                    <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-8">
                      Thanks for reaching out. We'll get back to you within 24
                      hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2 border border-[#c9956a] text-[#c9956a] rounded-lg text-sm transition-all duration-400 hover:bg-gradient-to-r hover:from-[#c9956a] hover:to-[#b87d52] hover:text-[#0d0d0d] hover:shadow-lg hover:shadow-[#c9956a]/30 hover:border-transparent hover:scale-105"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-6 sm:mb-8">
                      Send a Message
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                      <div
                        className="group animate-stagger"
                        style={{ animationDelay: "0.1s" }}
                      >
                        <label className="text-gray-400 text-xs font-medium tracking-wider uppercase mb-2 block group-hover:text-[#c9956a] transition-colors">
                          Full Name <span className="text-[#c9956a]">*</span>
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Enter Your Full Name"
                          className={inputClass("name")}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 animate-shake">
                            <AlertCircle size={11} /> {errors.name}
                          </p>
                        )}
                      </div>
                      <div
                        className="group animate-stagger"
                        style={{ animationDelay: "0.15s" }}
                      >
                        <label className="text-gray-400 text-xs font-medium tracking-wider uppercase mb-2 block group-hover:text-[#c9956a] transition-colors">
                          Email <span className="text-[#c9956a]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={inputClass("email")}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 animate-shake">
                            <AlertCircle size={11} /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div
                      className="mb-4 sm:mb-5 group animate-stagger"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <label className="text-gray-400 text-xs font-medium tracking-wider uppercase mb-2 block group-hover:text-[#c9956a] transition-colors">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number with country code"
                        className={inputClass("phone")}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 animate-shake">
                          <AlertCircle size={11} /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div
                      className="mb-6 sm:mb-8 group animate-stagger"
                      style={{ animationDelay: "0.25s" }}
                    >
                      <label className="text-gray-400 text-xs font-medium tracking-wider uppercase mb-2 block group-hover:text-[#c9956a] transition-colors">
                        Message <span className="text-[#c9956a]">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and timeline..."
                        rows={4}
                        className={`${inputClass("message")} resize-none`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 animate-shake">
                          <AlertCircle size={11} /> {errors.message}
                        </p>
                      )}
                    </div>

                    {status === "error" && (
                      <div className="mb-5 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2 animate-shake">
                        <AlertCircle size={16} /> Something went wrong. Please
                        try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#c9956a] to-[#b87d52] text-[#0d0d0d] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg transition-all duration-400 hover:shadow-xl hover:shadow-[#c9956a]/40 disabled:opacity-60 hover:to-[#c9956a] hover:from-[#e8c9a0] hover:scale-[1.02] group"
                    >
                      {status === "loading" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#0d0d0d]/30 border-t-[#0d0d0d] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message{" "}
                          <Send
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info */}
            <div
              ref={infoSection.ref}
              className={`lg:col-span-2 flex flex-col gap-4 sm:gap-6 transition-all duration-1000 delay-200 ${
                infoSection.visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="p-6 sm:p-7 rounded-2xl border border-white/8 bg-[#111] hover:border-[#c9956a]/30 transition-all duration-400 hover:shadow-lg hover:shadow-[#c9956a]/10 group">
                <h4 className="text-white font-bold mb-4 sm:mb-6 group-hover:text-[#e8c9a0] transition-colors text-base sm:text-lg">
                  Contact Details
                </h4>
                <ul className="space-y-5">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "sync7ven@gmail.com",
                      href: "mailto:sync7ven@gmail.com",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91 9322450943",
                      href: "tel:+91 9322450943",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Global — Remote First",
                      href: "#",
                    },
                  ].map(({ icon: Icon, label, value, href }, i) => (
                    <li
                      key={label}
                      className="group/item animate-stagger"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      <span className="text-gray-600 text-xs tracking-widest uppercase mb-1 block group-hover/item:text-[#c9956a] transition-colors">
                        {label}
                      </span>
                      <a
                        href={href}
                        className="flex items-center gap-3 text-gray-300 hover:text-[#c9956a] transition-all duration-300 group-hover/item:translate-x-1 text-sm"
                      >
                        <Icon size={16} className="text-[#c9956a] shrink-0" />
                        {value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl border border-white/8 bg-[#111] hover:border-[#c9956a]/30 transition-all duration-400 hover:shadow-lg hover:shadow-[#c9956a]/10 group">
                <h4 className="text-white font-bold mb-6 sm:mb-11 group-hover:text-[#e8c9a0] transition-colors text-base sm:text-lg">
                  Follow Us
                </h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { icon: Twitter, label: "Twitter", href: "#" },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/company/sync7ven/",
                    },
                    {
                      icon: Instagram,
                      label: "Instagram",
                      href: "https://www.instagram.com/sync7ven?igsh=NzFjbnN6bXB6bmo1",
                    },
                    // { icon: Github, label: 'GitHub', href: '#' },
                  ].map(({ icon: Icon, label, href }, i) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      className="flex items-center gap-2.5 p-3 rounded-lg border border-white/8 text-gray-400 hover:text-white transition-all duration-400 hover:border-[#c9956a]/50 hover:bg-gradient-to-br hover:from-[#c9956a]/10 hover:to-transparent hover:shadow-md hover:shadow-[#c9956a]/20 text-sm group/social hover:scale-110 animate-stagger"
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      <Icon
                        size={16}
                        className="transition-transform group-hover/social:rotate-12"
                      />
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* <div className="p-6 sm:p-7 rounded-2xl border border-[#c9956a]/20 bg-gradient-to-br from-[#c9956a]/5 to-transparent group hover:border-[#c9956a]/40 hover:shadow-lg hover:shadow-[#c9956a]/20 transition-all duration-300">
                <h4 className="text-white font-bold mb-3 group-hover:text-[#e8c9a0] transition-colors text-base sm:text-lg">Response Time</h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                  We typically respond to all inquiries within 24 hours on business days. For urgent matters, please call us directly.
                </p>
                <div className="flex items-center gap-2 text-[#c9956a] text-xs sm:text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  <span className="w-2 h-2 rounded-full bg-[#c9956a] animate-pulse group-hover:w-3 group-hover:h-3" />
                  Available for new projects
                </div>
              </div> */}

              {/* Quick info cards */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                {[
                  { icon: Clock, label: '24hr Response', desc: 'We reply within one business day' },
                  { icon: MessageSquare, label: 'Free Consultation', desc: '30-min strategy call, no strings' },
                  { icon: Headphones, label: 'Dedicated PM', desc: 'Single point of contact always' },
                ].map(({ icon: Icon, label, desc }, i) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl border border-white/8 bg-[#111] hover:border-[#c9956a]/30 transition-all duration-300 group/card hover:shadow-md hover:shadow-[#c9956a]/10 hover:scale-[1.02] animate-stagger"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <Icon size={18} className="text-[#c9956a] mb-2 group-hover/card:scale-110 transition-transform" />
                    <div className="text-white text-xs sm:text-sm font-semibold mb-0.5 group-hover/card:text-[#e8c9a0] transition-colors">{label}</div>
                    <div className="text-gray-500 text-xs group-hover/card:text-gray-400 transition-colors">{desc}</div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* FAQ */}
          <div
            ref={faqSection.ref}
            className={`mt-16 sm:mt-20 md:mt-24 transition-all duration-1000 ${
              faqSection.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-[#c9956a] text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">
                FAQ
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Common questions
              </h3>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map(({ q, a }, i) => (
                <div
                  key={q}
                  className={`rounded-xl border border-white/8 bg-[#111] overflow-hidden transition-all duration-300 hover:border-[#c9956a]/30 animate-stagger ${
                    openFaq === i
                      ? "border-[#c9956a]/40 shadow-lg shadow-[#c9956a]/10"
                      : ""
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left group"
                  >
                    <span className="text-white text-sm sm:text-base font-semibold group-hover:text-[#e8c9a0] transition-colors pr-4">
                      {q}
                    </span>
                    <span
                      className={`text-[#c9956a] text-xl transition-transform duration-300 flex-shrink-0 ${openFaq === i ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="px-5 pb-5 text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
