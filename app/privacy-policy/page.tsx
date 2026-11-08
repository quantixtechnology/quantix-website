import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Globe, Mail, ShieldCheck } from "lucide-react";
import Navbar from "@/app/sections/Navbar";
import Footer from "@/app/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Quantix Technology",
  description:
    "How Quantix Technology collects, uses, shares, retains, and protects personal information submitted through website forms, Meta, Facebook and Instagram Instant Lead Forms, and customer communications.",
  alternates: {
    canonical: "https://www.quantixtechnology.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Quantix Technology",
    description:
      "How Quantix Technology collects, uses, shares, retains, and protects personal information.",
    url: "https://www.quantixtechnology.in/privacy-policy",
    type: "website",
  },
};

const LAST_UPDATED = "8 November 2026";

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold text-[#1a3a6b] tracking-tight mb-4">
        {title}
      </h2>
      <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#1a3a6b] pt-32 pb-16 sm:pt-36 sm:pb-20">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at 50% 0%, rgba(249,115,22,0.14) 0%, transparent 70%)",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-blue-100 text-xs font-semibold px-4 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f97316]" />
              Legal
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-black tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="mt-5 text-blue-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              How Quantix Technology collects, uses, shares, retains, and
              protects personal information when you interact with our website,
              submit an enquiry, or communicate with our team.
            </p>
            <p className="mt-4 text-xs sm:text-sm text-blue-300">
              Last updated: {LAST_UPDATED}
            </p>
            <Link
              href="/"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-100 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </div>
        </section>

        <section className="bg-slate-50 py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 lg:p-12 space-y-10 sm:space-y-12">
              <PolicySection title="Overview">
                <p>
                  This Privacy Policy explains how Quantix Technology collects,
                  uses, shares, retains, and protects personal information when
                  you visit https://www.quantixtechnology.in, submit a demo
                  enquiry, contact us, or interact with us through Meta,
                  Facebook, or Instagram lead forms.
                </p>
                <p>
                  By using this website or submitting your information, you
                  acknowledge the practices described in this policy.
                </p>
              </PolicySection>

              <PolicySection title="Information We Collect">
                <p>
                  You may provide personal information directly when you fill in
                  a form, request a demo, contact us by email, or communicate
                  with our team. This information may include:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Business name</li>
                  <li>Business type</li>
                  <li>City</li>
                  <li>
                    The content of your demo enquiry or message, including any
                    other details you choose to share
                  </li>
                </ul>
                <p>
                  We also receive information when you submit a lead through a
                  Meta, Facebook, or Instagram Instant Lead Form. The information
                  we receive depends on the fields in that form and the details
                  you choose to share. It may include the categories listed
                  above.
                </p>
                <p>
                  We may collect limited technical information automatically
                  when you visit the website, such as browser type, device type,
                  pages viewed, referring pages, and approximate location
                  derived from your IP address. This information is used for
                  analytics, security, and improving the website.
                </p>
              </PolicySection>

              <PolicySection title="How We Use Your Information">
                <p>We use personal information to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Respond to demo enquiries, contact requests, and questions</li>
                  <li>
                    Schedule demos and provide information about our products
                    and services
                  </li>
                  <li>
                    Set up and administer services, provide support, and manage
                    our relationship with you
                  </li>
                  <li>
                    Communicate with you about your enquiry, services, updates,
                    and relevant information
                  </li>
                  <li>
                    Send marketing communications where permitted by applicable
                    law, with an option to opt out
                  </li>
                  <li>
                    Understand how the website is used and improve our website,
                    services, and customer experience
                  </li>
                  <li>
                    Detect, prevent, and address fraud, abuse, security
                    incidents, and technical issues
                  </li>
                  <li>
                    Comply with legal obligations and enforce our rights and
                    agreements
                  </li>
                </ul>
              </PolicySection>

              <PolicySection title="Website Forms and Demo Enquiries">
                <p>
                  When you submit the demo enquiry form on this website, the
                  information you enter is sent to the Quantix customer
                  relationship management system used by our team. We use this
                  information to contact you, understand your business needs,
                  and respond to your request.
                </p>
                <p>
                  Please do not submit personal information about another person
                  unless you have their permission to do so.
                </p>
              </PolicySection>

              <PolicySection title="Meta, Facebook, and Instagram Instant Lead Forms">
                <p>
                  When you submit a lead form through Meta, Facebook, or
                  Instagram, we receive the information that Meta shares with us
                  for that lead. This may include your name, phone number, email
                  address, business details, city, and any other information you
                  provide in the form.
                </p>
                <p>
                  Meta also processes information in connection with its
                  platforms, and its handling of your information is governed by
                  the privacy policy of Meta. We encourage you to review the
                  privacy settings and privacy policy of the platform you use.
                </p>
              </PolicySection>

              <PolicySection title="Cookies, Analytics, and Advertising">
                <p>
                  Our website uses cookies and similar technologies to operate
                  the site, understand how it is used, measure the effectiveness
                  of our communications and advertising, and improve our
                  services.
                </p>
                <p>
                  We use Google Analytics for website analytics and the Meta
                  Pixel to measure advertising and understand the performance of
                  our campaigns. These tools may collect information such as
                  pages viewed, interactions, device and browser information,
                  and approximate location.
                </p>
                <p>
                  You can control cookies through your browser settings and
                  manage advertising preferences through the relevant platform.
                  Disabling cookies may affect how the website works.
                </p>
              </PolicySection>

              <PolicySection title="Customer Communication">
                <p>
                  We may contact you by phone, email, or other communication
                  channels you provide to respond to your enquiry, schedule a
                  demo, provide support, or share information about our
                  services.
                </p>
                <p>
                  Where we send marketing communications, you can opt out at any
                  time by using the unsubscribe option provided or by contacting
                  us at support@quantixtechnology.in. We may still send
                  non-marketing communications related to an active enquiry or
                  service.
                </p>
              </PolicySection>

              <PolicySection title="How We Share Information">
                <p>We do not sell your personal information. We may share it in the following circumstances:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold text-slate-700">
                      Service providers.
                    </span>{" "}
                    We may share information with hosting, CRM, communication,
                    analytics, advertising, and support providers that help us
                    operate the website and services. We take reasonable steps
                    to require these providers to use the information only for
                    the purposes for which it was shared and to protect it
                    appropriately.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-700">
                      Meta platforms.
                    </span>{" "}
                    When you submit a lead through Meta, Facebook, or Instagram,
                    we receive and process the lead information shared through
                    that platform.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-700">
                      Legal and safety reasons.
                    </span>{" "}
                    We may disclose information when required by law,
                    regulation, legal process, or when necessary to protect the
                    rights, safety, and security of our business, users, or
                    others.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-700">
                      Business changes.
                    </span>{" "}
                    We may share information in connection with a merger,
                    acquisition, financing, reorganization, or sale of assets,
                    subject to appropriate safeguards.
                  </li>
                </ul>
              </PolicySection>

              <PolicySection title="Data Security">
                <p>
                  We use reasonable technical and organizational measures
                  designed to protect personal information against unauthorized
                  access, loss, misuse, or alteration. These measures include
                  limiting access to personal information to personnel and
                  service providers who need it for the purposes described in
                  this policy.
                </p>
                <p>
                  However, no method of transmission over the internet or method
                  of electronic storage is completely secure, and we cannot
                  guarantee absolute security.
                </p>
              </PolicySection>

              <PolicySection title="Data Retention">
                <p>
                  We retain personal information for as long as necessary to
                  fulfill the purposes described in this policy, including
                  responding to enquiries, providing services, maintaining
                  business records, resolving disputes, and complying with legal
                  obligations.
                </p>
                <p>
                  When personal information is no longer needed, we will delete
                  it or anonymize it, unless we are required to retain it by law
                  or for legitimate business purposes.
                </p>
              </PolicySection>

              <PolicySection title="Your Rights and Choices">
                <p>
                  Depending on applicable law, you may have the right to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>
                    Withdraw consent where processing is based on your consent
                  </li>
                  <li>Object to or request restriction of certain processing</li>
                  <li>Opt out of marketing communications</li>
                </ul>
                <p>
                  To exercise these rights, contact us at
                  support@quantixtechnology.in. We may need to verify your
                  identity before responding. We will handle requests in
                  accordance with applicable law. You may also have the right to
                  contact a relevant data protection authority.
                </p>
              </PolicySection>

              <PolicySection title="Children and Minors">
                <p>
                  This website and our services are intended for businesses and
                  adults. We do not knowingly collect personal information from
                  children. If you believe that a child has provided personal
                  information to us, please contact us so that we can take
                  appropriate action.
                </p>
              </PolicySection>

              <PolicySection title="Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, services, or legal requirements.
                  When we update the policy, we will revise the Last updated date
                  on this page. We encourage you to review this page
                  periodically.
                </p>
              </PolicySection>

              <PolicySection title="Contact Us">
                <p>
                  If you have questions about this Privacy Policy, want to
                  exercise your rights, or have a privacy concern, contact us:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href="mailto:support@quantixtechnology.in"
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:border-[#1a3a6b]/30 hover:bg-white transition-colors"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#1a3a6b]/10 text-[#1a3a6b] shrink-0">
                      <Mail className="w-4 h-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                        Email
                      </span>
                      <span className="block text-sm font-semibold text-[#1a3a6b] break-all">
                        support@quantixtechnology.in
                      </span>
                    </span>
                  </a>
                  <a
                    href="https://www.quantixtechnology.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:border-[#1a3a6b]/30 hover:bg-white transition-colors"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#1a3a6b]/10 text-[#1a3a6b] shrink-0">
                      <Globe className="w-4 h-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                        Website
                      </span>
                      <span className="block text-sm font-semibold text-[#1a3a6b] break-all">
                        https://www.quantixtechnology.in
                      </span>
                    </span>
                  </a>
                </div>
              </PolicySection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
