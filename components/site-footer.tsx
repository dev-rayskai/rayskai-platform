import Link from "next/link";
import {ArrowRight} from "lucide-react";

export function SiteFooter(){
  return (
    <footer id="contact" data-nav-label="Contact" className="relative isolate mt-20 overflow-hidden bg-primary px-6 py-16 text-white">
      <div className="grid-mask-light absolute inset-0 -z-10"/>
      <div className="relative mx-auto max-w-7xl">
        <p className="font-semibold uppercase tracking-[.14em]">
          LIMITED PILOT AVAILABILITY
        </p>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-.055em] sm:text-5xl">
          Ready to recover your next $25,000?
        </h2>
        <p className="mt-5 max-w-xl leading-7 opacity-75">
          See the highest-impact workflow for your practice in a guided
          Revenue Recovery pilot.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 font-semibold text-foreground"
        >
          Book my pilot <ArrowRight size={18}/>
        </Link>
        <div className="mt-14 flex flex-col gap-7 border-t border-white/15 pt-10 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vanoji Stars Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy">Privacy</Link>
            <Link href="/security">Security</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <p>HIPAA-ready · PIPEDA aligned · SOC 2 roadmap</p>
        </div>
      </div>
    </footer>
  );
}
