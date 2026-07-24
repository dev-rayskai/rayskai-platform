import Link from "next/link";
import { ArrowRight, Flower2, Hospital, Stethoscope } from "lucide-react";
import { Counter } from "@/components/animated-counter";
import { Tooth, ToothBraces } from "@/components/dental-icons";
import { FaqAccordion } from "@/components/faq-accordion";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PlatformCarousel } from "@/components/platform-carousel";
import { PlatformGrid } from "@/components/platform-grid";
import { RevenueDashboard } from "@/components/revenue-dashboard";
import { RoiCalculator } from "@/components/roi-calculator";
import { RolloutSteps } from "@/components/rollout-steps";
import { SectionDots } from "@/components/section-dots";
import { SiteFooter } from "@/components/site-footer";
import { TrustMarquee } from "@/components/trust-marquee";
import { VoiceDemo } from "@/components/voice-demo";

const industries = [
  [
    Tooth,
    "Dental",
    "Recall, treatment acceptance, collections",
    "/solutions/dental",
  ],
  [
    Flower2,
    "Med Spa",
    "Consultations, treatment follow-up, rebooking",
    "/solutions/med-spa",
  ],
  [
    ToothBraces,
    "Orthodontics",
    "Lead qualification, consults, accepted treatment",
    "/solutions/orthodontics",
  ],
  [
    Stethoscope,
    "Primary Care",
    "Intake, access, routing, and recall",
    "/solutions/primary-care",
  ],
  [
    Hospital,
    "Specialty Clinics",
    "Referrals, care coordination, complex scheduling",
    "/solutions/specialty-clinics",
  ],
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <SectionDots />
      <Hero />
      <section className="border-y border-border bg-surface/40 py-8">
        <TrustMarquee />
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-4 rounded-3xl border border-border bg-surface/60 p-6 text-center sm:grid-cols-3 sm:p-9">
          <div>
            <p className="text-4xl font-semibold text-primary">
              <Counter value={92} suffix="%" />
            </p>
            <p className="mt-2 text-sm text-muted">Retention after 6 months</p>
          </div>
          <div className="border-y border-border py-6 sm:border-x sm:border-y-0 sm:py-0">
            <p className="text-4xl font-semibold text-primary">
              <Counter value={28} suffix="%" />
            </p>
            <p className="mt-2 text-sm text-muted">
              More appointments recovered
            </p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-primary">
              <Counter value={7} suffix="×" />
            </p>
            <p className="mt-2 text-sm text-muted">Average ROI</p>
          </div>
        </div>
      </section>
      <VoiceDemo />
      {/* <RoiCalculator /> */}
      <RevenueDashboard />
      <section id="platform" data-nav-label="Platform" className="mx-auto max-w-7xl px-6 py-28">
        <p className="eyebrow">THE RAYSKAI PLATFORM</p>
        <h2 className="section-title mt-5 max-w-2xl">
          A better front door for your entire business.
        </h2>
        <PlatformGrid />
        {/* <PlatformCarousel /> */}
      </section>
      <section id="process" data-nav-label="Process" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">GO LIVE IN 14 DAYS</p>
            <h2 className="section-title mt-5">
              A clear path from first call to measurable growth.
            </h2>
            <p className="mt-6 leading-8 text-muted">
              No hardware, phone replacement, or drawn-out rollout. Begin with
              the work that has the clearest revenue impact.
            </p>
          </div>
          <RolloutSteps />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">BUILT FOR YOUR PRACTICE</p>
            <h2 className="section-title mt-5">
              One AI revenue team. Every patient moment.
            </h2>
          </div>
          <Link
            href="/solutions/dental"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Explore solutions <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map(([Icon, name, copy, href]) => (
            <Link
              href={href as string}
              key={name as string}
              className="group rounded-2xl border border-border bg-surface/60 p-6 transition hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                <Icon size={20} />
              </span>
              <p className="mt-5 text-lg font-semibold">{name as string}</p>
              <p className="mt-3 text-sm leading-6 text-muted">
                {copy as string}
              </p>
              <span className="mt-8 inline-flex text-primary transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-surface/60 to-transparent p-8 sm:p-12">
          <p className="eyebrow">CUSTOMER OUTCOME</p>
          <blockquote className="mt-7 max-w-4xl text-3xl font-semibold leading-tight tracking-[-.045em] sm:text-5xl">
            “We stopped thinking of RayskAI as software and started thinking of
            it as an additional revenue coordinator.”
          </blockquote>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-semibold">Ontario dental practice</p>
              <p className="mt-1 text-sm text-muted">
                Four providers · 45-day pilot
              </p>
            </div>
            <p className="text-4xl font-semibold text-primary">
              +$43,280{" "}
              <span className="block text-sm font-normal text-muted">
                recovered revenue
              </span>
            </p>
          </div>
        </div>
      </section>
      <section id="pricing" data-nav-label="Pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">SIMPLE, OUTCOME-ALIGNED PRICING</p>
            <h2 className="section-title mt-5">
              Start focused. Grow with results.
            </h2>
          </div>
          <Link
            href="/pricing"
            className="rounded-full border border-border px-5 py-3 text-sm font-semibold"
          >
            View all pricing
          </Link>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <article className="glass rounded-3xl p-7">
            <p className="font-semibold">Revenue Recovery</p>
            <p className="mt-5 text-4xl font-semibold text-primary">
              $997
              <span className="text-base font-normal text-muted">/month</span>
            </p>
            <p className="mt-5 text-sm leading-6 text-muted">
              Missed-call recovery, SMS campaigns, intake forms, online booking,
              and a real-time dashboard.
            </p>
            <Link
              href="/pricing"
              className="mt-7 inline-flex text-sm font-semibold text-primary"
            >
              Explore plan →
            </Link>
          </article>
          <article className="rounded-3xl bg-primary p-7 text-white">
            <p className="font-semibold">Revenue Growth</p>
            <p className="mt-5 text-4xl font-semibold">
              $1,997
              <span className="text-base font-normal opacity-70">/month</span>
            </p>
            <p className="mt-5 text-sm leading-6 opacity-80">
              Treatment follow-up, collections, insurance verification,
              marketing automation, and advanced analytics.
            </p>
            <Link
              href="/pricing"
              className="mt-7 inline-flex text-sm font-semibold"
            >
              Explore plan →
            </Link>
          </article>
        </div>
      </section>
      <section id="faq" data-nav-label="FAQ" className="mx-auto max-w-4xl px-6 py-24">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title mt-5">Questions, answered.</h2>
        <FaqAccordion />
      </section>
      <SiteFooter />
    </main>
  );
}
