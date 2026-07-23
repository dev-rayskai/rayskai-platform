"use client";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
const bars = [
  30, 52, 78, 45, 92, 58, 38, 72, 100, 61, 44, 85, 51, 32, 68, 94, 57, 42,
];
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36">
      <div className="grid-mask absolute inset-0 -z-20" />
      <div className="absolute left-1/2 top-8 -z-10 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-primary/20 blur-[150px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-28 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="eyebrow">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            AI revenue recovery for healthcare practices
          </p>
          <h1 className="mt-7 text-5xl font-semibold leading-[.96] tracking-[-.065em] sm:text-6xl lg:text-6xl">
            Recover the revenue your practice is already{" "}
            <span className="text-primary">earning.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
            RayskAI gives dental and medical practices a team of AI employees
            that answers, schedules, follows up, verifies, collects, and
            protects every patient opportunity—around the clock.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white"
            >
              Book a live demo <ArrowRight size={18} />
            </a>
            <a
              href="/voice-agent"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 font-semibold"
            >
              Hear an AI call
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="glass rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-white">
                  <PhoneCall size={21} />
                </span>
                <div>
                  <p className="font-semibold">AI Receptionist</p>
                  <p className="text-sm text-muted">New patient · 00:18</p>
                </div>
              </div>
              <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
                AI active
              </span>
            </div>
            <div className="my-8 flex h-24 items-center justify-center gap-1.5">
              {bars.map((height, index) => (
                <motion.span
                  key={index}
                  animate={{
                    height: [
                      `${height * 0.38}px`,
                      `${height}px`,
                      `${height * 0.5}px`,
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2 + (index % 3) * 0.2,
                    delay: index * 0.04,
                  }}
                  className="w-1.5 rounded-full bg-gradient-to-t from-accent to-primary"
                />
              ))}
            </div>
            <div className="space-y-3 text-sm">
              <p className="ml-auto max-w-[86%] rounded-2xl rounded-tr-sm bg-foreground/10 px-4 py-3">
                I&apos;d like to book a cleaning.
              </p>
              <p className="max-w-[90%] rounded-2xl rounded-tl-sm bg-primary px-4 py-3 text-white">
                Absolutely. I have Tuesday at 2:30 PM or Wednesday at 10:00 AM.
                Which works best?
              </p>
            </div>
          </div>
          <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-border bg-surface p-4 shadow-2xl sm:block">
            <p className="text-2xl font-semibold text-primary">98.7%</p>
            <p className="text-xs text-muted">calls answered</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
