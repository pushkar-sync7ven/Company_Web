import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Users,
  Bell,
  Globe,
  Mail,
} from "lucide-react";

export default function PrivacyPolicy() {
  const header = useScrollAnimation(0.15);
  const content = useScrollAnimation(0.1);

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, company name, and any other information you choose to provide.",
        },
        {
          subtitle: "Automatically Collected Information",
          text: "When you visit our website, we automatically collect certain information about your device and usage patterns. This includes your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. We use cookies and similar tracking technologies to collect this data.",
        },
        {
          subtitle: "Usage Data",
          text: "We collect information about how you interact with our website and services, including pages visited, time spent on pages, links clicked, and other actions taken during your session.",
        },
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        {
          text: "Your information is used to:",
        },
        {
          text: "• Provide, maintain, and improve our services\n• Process and respond to your inquiries and requests\n• Send you technical notices, updates, and administrative messages\n• Communicate with you about products, services, and events\n• Monitor and analyze trends, usage, and activities\n• Detect, investigate, and prevent fraudulent transactions and other illegal activities\n• Personalize and improve your experience on our website",
        },
      ],
    },
    {
      icon: Shield,
      title: "Information Sharing",
      content: [
        {
          text: "We do not sell, trade, or otherwise transfer your personal information to outside parties except to trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.",
        },
        {
          text: "We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety.",
        },
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        {
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
        },
      ],
    },
    {
      icon: Users,
      title: "Third-Party Services",
      content: [
        {
          text: "Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.",
        },
      ],
    },
    {
      icon: Globe,
      title: "International Data Transfers",
      content: [
        {
          text: "Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our services, you consent to such transfers.",
        },
      ],
    },
    {
      icon: Bell,
      title: "Your Choices",
      content: [
        {
          text: "You can opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications. You may also contact us directly to update your preferences or request deletion of your personal information.",
        },
      ],
    },
  ];

  return (
    <div className="animate-page-enter">
      {/* Hero */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#0d0d0d]">
        <div className="absolute inset-0 bg-gradient-radial from-[#c9956a]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <div
            ref={header.ref}
            className={`transition-all duration-1000 ${
              header.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9956a]/30 bg-[#c9956a]/5 text-[#c9956a] text-xs tracking-widest uppercase mb-6">
              <Shield size={14} />
              Legal
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Privacy{" "}
              <span className="bg-gradient-to-r from-[#c9956a] via-[#e8c9a0] to-[#c9956a] bg-clip-text text-transparent animate-gradient">
                Policy
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Your privacy matters to us. This policy explains how we collect,
              use, and protect your personal information.
            </p>
            <p className="text-gray-600 text-xs mt-4">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <div
            ref={content.ref}
            className={`transition-all duration-1000 ${
              content.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Introduction */}
            <div className="mb-10 sm:mb-12 p-6 sm:p-8 rounded-2xl border border-white/8 bg-[#111]">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                SYNC<span className=" text-xs sm:text-xl mx-[0.1px]">7</span>VEN
                ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or use our
                services. Please read this privacy policy carefully. If you do
                not agree with the terms of this privacy policy, please do not
                access the site.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8 sm:space-y-10">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="group p-6 sm:p-8 rounded-2xl border border-white/8 bg-[#111] hover:border-[#c9956a]/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9956a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#c9956a]/20 transition-all duration-300">
                      <section.icon size={20} className="text-[#c9956a]" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#e8c9a0] transition-colors duration-300">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-4 pl-0 sm:pl-14">
                    {section.content.map((item, i) => (
                      <div key={i}>
                        {"subtitle" in item && item.subtitle && (
                          <h3>{item.subtitle}</h3>
                        )}
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl border border-[#c9956a]/20 bg-gradient-to-br from-[#c9956a]/5 to-transparent">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#c9956a]/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-[#c9956a]" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Contact Us
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    If you have questions or concerns about this Privacy Policy,
                    please contact us at:
                  </p>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p className="text-gray-300">
                      Email:{" "}
                      <span className="text-[#c9956a]">sync7ven@gmail.com</span>
                    </p>
                    {/* <p className="text-gray-300">
                      Phone:{" "}
                      <span className="text-[#c9956a]">+1 (555) 000-0000</span>
                    </p> */}
                  </div>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#c9956a] to-[#b87d52] text-[#0d0d0d] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#c9956a]/30 hover:scale-105"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Changes */}
            <div className="mt-8 p-5 sm:p-6 rounded-xl border border-white/5 bg-[#0d0d0d]">
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
