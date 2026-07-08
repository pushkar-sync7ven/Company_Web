import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  FileText,
  CheckCircle,
  AlertTriangle,
  Scale,
  RefreshCw,
  Shield,
  Gavel,
  Mail,
} from "lucide-react";

export default function TermsConditions() {
  const header = useScrollAnimation(0.15);
  const content = useScrollAnimation(0.1);

  const sections = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      content:
        "By accessing and using the SYNC7VEN website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services. These terms apply to all visitors, users, and others who access or use our services.",
    },
    {
      icon: FileText,
      title: "Services Description",
      content:
        "SYNC7VEN provides IT services, AI solutions, digital product development, and related consulting services. Our specific services include web and mobile application development, artificial intelligence and machine learning solutions, game development, automation services, digital marketing, and technology consulting. The exact scope, deliverables, and terms of each project are defined in individual service agreements.",
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content:
        "Unless otherwise agreed in writing, all intellectual property rights in deliverables created by SYNC7VEN during the provision of services shall be assigned to the client upon full payment. SYNC7VEN retains the right to use general knowledge, skills, and experience gained during the project. Pre-existing intellectual property owned by either party before the engagement remains the property of that party. We respect intellectual property rights and expect our clients to do the same.",
    },
    {
      icon: AlertTriangle,
      title: "User Responsibilities",
      content:
        "Users of our website and services agree to:\n\n• Provide accurate and complete information when requested\n• Maintain the confidentiality of any account credentials\n• Use our services only for lawful purposes\n• Not infringe on the rights of others\n• Not distribute malware or engage in hacking activities\n• Not attempt to gain unauthorized access to our systems\n• Not interfere with or disrupt our services\n• Not use automated systems to access our website without permission",
    },
    {
      icon: RefreshCw,
      title: "Payment Terms",
      content:
        "Payment terms are specified in individual service agreements. Generally, projects require a deposit before work commences, with the remaining balance due upon completion or in milestone-based installments. Late payments may incur interest charges and may result in suspension of services. All fees are non-refundable unless otherwise stated in the service agreement. We reserve the right to modify pricing with appropriate notice to clients.",
    },
    {
      icon: Shield,
      title: "Limitation of Liability",
      content:
        "To the maximum extent permitted by law, SYNC7VEN shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim. We are not responsible for any third-party content or services linked from our website.",
    },
    {
      icon: Gavel,
      title: "Warranties & Disclaimers",
      content:
        "We warrant that our services will be performed with reasonable skill and care. However, we do not guarantee that our services will be uninterrupted, error-free, or meet all your requirements. All warranties are disclaimed to the maximum extent permitted by law, except as explicitly stated in individual service agreements. Third-party integrations and dependencies may be subject to their own terms and limitations.",
    },
    {
      icon: RefreshCw,
      title: "Termination",
      content:
        "Either party may terminate a service agreement in accordance with the terms specified in that agreement. Upon termination, all outstanding fees become immediately due. Termination does not relieve either party of obligations incurred prior to termination. Termination for convenience may require payment for work completed plus reasonable costs of termination. We reserve the right to suspend or terminate access to our website for violations of these terms.",
    },
    {
      icon: FileText,
      title: "Confidentiality",
      content:
        "Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. Confidential information includes trade secrets, business strategies, technical information, customer data, and any information marked as confidential. This obligation survives termination and continues for a period of three years thereafter. Unauthorized disclosure may result in legal action and damages.",
    },
    {
      icon: Scale,
      title: "Governing Law & Dispute Resolution",
      content:
        "These Terms and Conditions shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these terms or our services shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes may be submitted to binding arbitration in accordance with applicable rules. Each party shall bear its own costs of dispute resolution unless otherwise determined.",
    },
  ];

  return (
    <div className="animate-page-enter">
      <SEO
        title="Terms & Conditions | SYNC7VEN"
        description="Read the SYNC7VEN Terms & Conditions governing the use of our website and services."
        canonicalPath="/terms"
        robots="index, follow"
        ogType="website"
      />
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
              <FileText size={14} />
              Legal
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Terms &{" "}
              <span className="bg-gradient-to-r from-[#c9956a] via-[#e8c9a0] to-[#c9956a] bg-clip-text text-transparent animate-gradient">
                Conditions
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Please read these terms carefully before using our website or
              services.
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
                Welcome to SYNC
                <span className=" text-xs sm:text-xl mx-[0.1px]">7</span>VEN.
                These Terms and Conditions ("Terms") govern your use of our
                website located at SYNC7VEN.com and our related services. By
                accessing or using our services, you agree to be bound by these
                Terms. Our services are offered worldwide, and your use of them
                is subject to these Terms regardless of your location.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-6 sm:space-y-8">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="group p-6 sm:p-8 rounded-2xl border border-white/8 bg-[#111] hover:border-[#c9956a]/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9956a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#c9956a]/20 transition-all duration-300">
                      <section.icon size={20} className="text-[#c9956a]" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#e8c9a0] transition-colors duration-300">
                      {section.title}
                    </h2>
                  </div>
                  <div className="pl-0 sm:pl-14">
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Modifications */}
            <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl border border-white/8 bg-[#111]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#c9956a]/10 flex items-center justify-center shrink-0">
                  <RefreshCw size={20} className="text-[#c9956a]" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Modifications to Terms
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    We reserve the right to modify these Terms at any time. We
                    will provide notice of any material changes by posting the
                    updated Terms on our website and updating the "Last updated"
                    date. Your continued use of our services after such
                    modifications constitutes your acceptance of the revised
                    Terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-[#c9956a]/20 bg-gradient-to-br from-[#c9956a]/5 to-transparent">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#c9956a]/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-[#c9956a]" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Questions?
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    If you have any questions about these Terms and Conditions,
                    please contact us:
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

            {/* Agreement */}
            <div className="mt-8 p-5 sm:p-6 rounded-xl border border-white/5 bg-[#0d0d0d]">
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                By using our website and services, you acknowledge that you have
                read, understood, and agree to be bound by these Terms and
                Conditions. If you are entering into these Terms on behalf of a
                company or other legal entity, you represent that you have the
                authority to bind such entity to these Terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
