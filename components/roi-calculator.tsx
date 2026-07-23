"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {Clock, DollarSign, PhoneMissed, TrendingUp, Users} from "lucide-react";
import {useMemo, useState} from "react";
import {AnimatedNumber} from "@/components/animated-number";
import {Odometer} from "@/components/odometer";

const money = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD", maximumFractionDigits: 0});
const PLAN_COST = 1997;

function Slider({
  icon: Icon,
  label,
  value,
  min,
  max,
  onChange,
  formatValue,
}: {
  icon: React.ComponentType<{size?: number}>;
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  formatValue: (value: number) => string;
}) {
  const [active, setActive] = useState(false);
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <label className="block">
      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="flex items-center gap-2.5 text-muted">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <Icon size={15} />
          </span>
          {label}
        </span>
        <span className="font-semibold text-primary">
          <AnimatedNumber value={value} format={formatValue} />
        </span>
      </div>
      <div className="relative py-3" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
        <div
          className={`pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-[26px] whitespace-nowrap rounded-lg bg-foreground px-2 py-1 text-xs font-semibold text-background shadow-lg transition-opacity duration-150 ${active ? "opacity-100" : "opacity-0"}`}
          style={{left: `${percent}%`}}
        >
          {formatValue(value)}
        </div>
        <div className="pointer-events-none absolute left-0 top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-border" />
        <div
          className="pointer-events-none absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary to-accent"
          style={{width: `${percent}%`}}
        />
        <input
          type="range"
          aria-label={label}
          min={min}
          max={max}
          value={value}
          onChange={event => onChange(Number(event.target.value))}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          className="range-thumb relative z-10 m-0 block h-1.5 w-full cursor-pointer bg-transparent align-middle"
        />
      </div>
    </label>
  );
}

export function RoiCalculator() {
  const [providers, setProviders] = useState(3);
  const [missedCalls, setMissedCalls] = useState(24);
  const [patientValue, setPatientValue] = useState(850);

  const result = useMemo(() => {
    const recovered = Math.round(missedCalls * 4.3 * patientValue * 0.32 + providers * 1700);
    return {
      recovered,
      roi: recovered / PLAN_COST,
      days: Math.max(4, Math.round((PLAN_COST / recovered) * 30)),
      costShare: Math.max(3, Math.min(100, (PLAN_COST / recovered) * 100)),
    };
  }, [providers, missedCalls, patientValue]);

  return (
    <section id="roi" className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{opacity: 0, y: 24}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: "-80px"}}
        transition={{duration: 0.6, ease: "easeOut"}}
        onMouseMove={event => {
          const rect = event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
          event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
        }}
        className="spotlight relative grid overflow-hidden rounded-3xl border border-border bg-surface lg:grid-cols-[1.1fr_.9fr]"
      >
        <div className="relative overflow-hidden p-7 sm:p-10">
          <div className="grid-mask absolute inset-0 -z-10 opacity-60" />
          <p className="eyebrow">SEE YOUR ROI IN 60 SECONDS</p>
          <h2 className="section-title mt-5 max-w-xl">Find the revenue hiding in your current workflow.</h2>
          <p className="mt-5 max-w-xl leading-7 text-muted">Adjust the operating inputs below for a conservative monthly recovery estimate.</p>
          <div className="mt-10 space-y-8">
            <Slider icon={Users} label="Providers" value={providers} min={1} max={20} onChange={setProviders} formatValue={v => `${Math.round(v)}`} />
            <Slider icon={PhoneMissed} label="Missed calls each week" value={missedCalls} min={1} max={200} onChange={setMissedCalls} formatValue={v => `${Math.round(v)}`} />
            <Slider icon={DollarSign} label="Average patient value" value={patientValue} min={100} max={5000} onChange={setPatientValue} formatValue={v => money.format(v)} />
          </div>
        </div>
        <div className="relative overflow-hidden border-t border-border bg-primary p-7 text-white sm:p-10 lg:border-l lg:border-t-0">
          <motion.div
            aria-hidden
            animate={{x: [0, 24, 0], y: [0, 16, 0]}}
            transition={{duration: 9, repeat: Infinity, ease: "easeInOut"}}
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            aria-hidden
            animate={{x: [0, -18, 0], y: [0, -14, 0]}}
            transition={{duration: 11, repeat: Infinity, ease: "easeInOut"}}
            className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold uppercase tracking-[.15em]">Projected monthly gain</p>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/70">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                Live
              </span>
            </div>
            <p className="mt-5 text-5xl font-semibold tracking-[-.07em] sm:text-6xl">
              <Odometer value={money.format(result.recovered)} />
            </p>

            <div className="mt-7 space-y-3">
              <div className="flex items-center justify-between text-xs text-white/70">
                <span>Your plan</span>
                <span>{money.format(PLAN_COST)}/mo</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/15">
                <motion.div animate={{width: `${result.costShare}%`}} transition={{duration: 0.5, ease: "easeOut"}} className="h-full rounded-full bg-white/50" />
              </div>
              <div className="flex items-center justify-between text-xs text-white">
                <span className="font-semibold">Revenue recovered</span>
                <span className="font-semibold">
                  <AnimatedNumber value={result.recovered} format={n => money.format(Math.round(n))} />
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-full rounded-full bg-white" />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
                  <TrendingUp size={18} />
                </span>
                <div>
                  <p className="text-2xl font-semibold">
                    <AnimatedNumber value={result.roi} format={n => `${n.toFixed(1)}×`} />
                  </p>
                  <p className="text-sm text-white/80">Projected ROI</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
                  <Clock size={18} />
                </span>
                <div>
                  <p className="text-2xl font-semibold">
                    <AnimatedNumber value={result.days} format={n => `${Math.round(n)} days`} />
                  </p>
                  <p className="text-sm text-white/80">Estimated payback</p>
                </div>
              </div>
            </div>
            <Link href="/contact?topic=roi" className="mt-8 inline-flex rounded-full bg-background px-6 py-3.5 font-semibold text-foreground">
              Review this with an expert
            </Link>
            <p className="mt-4 text-xs leading-5 text-white/65">Estimate only. Your actual outcome depends on volume, fit, and workflows.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
