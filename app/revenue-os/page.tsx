import {PageHero,SiteShell} from "@/components/site-shell";

const workflows=[
  ["Capture", "Every call, form, booking request, and payment question enters one coordinated patient journey."],
  ["Recover", "Voice and SMS follow up on missed calls, cancellations, unfinished treatment, and overdue balances."],
  ["Convert", "AI books appointments, confirms eligibility, collects payments, and hands your team the full context."],
  ["Measure", "A single dashboard ties activity to recovered appointments, collections, and patient retention."],
];
const employees=[['AI Receptionist','Answers inbound calls, handles FAQs, and creates a confident first impression.'],['AI Scheduler','Books, confirms, and fills appointments across your calendar.'],['AI Recall Coordinator','Reactivates overdue patients through voice and SMS campaigns.'],['AI Treatment Coordinator','Follows up on unaccepted treatment with useful education and next steps.'],['AI Collections Specialist','Recovers balances, sends payment links, and supports payment plans.'],['AI Insurance Verifier','Checks eligibility and flags coverage questions before the visit.'],['AI Reputation Manager','Requests reviews, routes service recovery, and protects your practice reputation.'],['AI Marketing Coordinator','Runs referral, reactivation, and patient-retention campaigns.']];

export default function RevenueOs(){
  return <SiteShell>
    <PageHero eyebrow="RAYSKAI REVENUE OS" title="One revenue operating system for every patient opportunity." copy="Replace disconnected front-desk workflows with a coordinated AI revenue team that works around the clock."/>
    <section id="employees" className="mx-auto max-w-7xl px-6 pb-16"><p className="eyebrow">YOUR AI REVENUE TEAM</p><h2 className="section-title mt-5 max-w-2xl">Specialized employees for every patient moment.</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{employees.map(([title,copy])=><article key={title} className="glass rounded-2xl p-6"><span className="text-emerald-100">✦</span><h2 className="mt-6 font-semibold">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p></article>)}</div></section><section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{workflows.map(([title,copy],index)=><article key={title} className="glass rounded-3xl p-7"><span className="text-sm font-semibold text-emerald-100">0{index+1}</span><h2 className="mt-8 text-2xl font-semibold tracking-[-.04em]">{title}</h2><p className="mt-4 leading-7 text-slate-400">{copy}</p></article>)}</div>
    </section>
    <section className="mx-auto max-w-7xl px-6 pb-28"><div className="overflow-hidden rounded-3xl border border-emerald-100/20 bg-emerald-200/[.07] p-8 sm:p-12"><p className="eyebrow">BUILT TO SCALE WITH YOUR PRACTICE</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-.055em] sm:text-5xl">Start with revenue recovery. Grow into a complete Revenue OS.</h2><div className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-3"><p>✓ Multi-location orchestration</p><p>✓ Dedicated AI employees</p><p>✓ Custom integrations & reporting</p></div><a href="/contact" className="mt-10 inline-flex rounded-full bg-emerald-200 px-6 py-3.5 font-semibold text-[#07111f]">Talk to sales</a></div></section>
  </SiteShell>;
}
