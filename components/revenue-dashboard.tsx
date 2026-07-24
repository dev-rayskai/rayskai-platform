"use client";

import {motion} from "framer-motion";
import {ArrowRight, PhoneCall, TrendingUp} from "lucide-react";
import Link from "next/link";
import {AnimatedNumber} from "@/components/animated-number";

const money=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0});

const bars=[28,34,30,42,38,50,46,58,54,66,60,78];

const activity=[
  ["success","New patient · implant consult","$3,100"],
  ["primary","Recall · cleaning + exam","Booked"],
  ["primary","Treatment follow-up","Booked"],
] as const;

export function RevenueDashboard(){
  return (
    <section id="revenue" data-nav-label="Revenue" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <motion.div
          initial={{opacity:0,y:24}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true,margin:"-80px"}}
          transition={{duration:0.6,ease:"easeOut"}}
          className="glass relative rounded-3xl p-6 shadow-2xl sm:p-7"
        >
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-2.5">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-error/70"/>
                <span className="h-2.5 w-2.5 rounded-full bg-warning/70"/>
                <span className="h-2.5 w-2.5 rounded-full bg-success/70"/>
              </span>
              <span className="text-xs font-medium text-muted">revenue-os</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary"/>
              Live
            </span>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-muted">This month&apos;s recovered revenue</p>
            <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
              <TrendingUp size={12}/> +18%
            </span>
          </div>
          <p className="mt-2 text-4xl font-semibold tracking-[-.05em]">
            <AnimatedNumber value={74300} format={n=>money.format(Math.round(n))}/>
          </p>

          <div className="mt-6 flex h-24 items-end justify-between gap-1.5">
            {bars.map((height,index)=>(
              <motion.span
                key={index}
                initial={{height:0}}
                whileInView={{height:`${height}%`}}
                viewport={{once:true}}
                transition={{duration:0.6,delay:index*0.04,ease:"easeOut"}}
                className={`w-full rounded-t-md ${index===bars.length-1?"bg-gradient-to-t from-accent to-primary":"bg-primary/15"}`}
              />
            ))}
          </div>

          <div className="mt-6 space-y-3 border-t border-border pt-5">
            {activity.map(([tone,label,value])=>(
              <div key={label} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${tone==="success"?"bg-success":"bg-primary"}`}/>
                  {label}
                </span>
                <span className={`font-semibold ${tone==="success"?"text-success":"text-muted"}`}>{value}</span>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-6 -right-6 hidden items-center gap-3 rounded-2xl border border-border bg-surface p-4 shadow-2xl sm:flex">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-white">
              <PhoneCall size={18}/>
            </span>
            <div>
              <p className="text-sm font-semibold">Call answered</p>
              <p className="text-xs text-muted">1.4s average pickup</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity:0,y:24}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true,margin:"-80px"}}
          transition={{duration:0.6,ease:"easeOut",delay:0.1}}
        >
          <p className="eyebrow">SEE IT LIVE</p>
          <h2 className="section-title mt-5">Recover the revenue your practice is already earning and losing.</h2>
          <p className="mt-6 max-w-lg leading-8 text-muted">
            RayskAI turns missed calls, unbooked treatment, and overdue recall into a single live view—so you always know exactly what&apos;s being recovered, and what still needs attention.
          </p>
          <Link href="/revenue-os" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white">
            Explore Revenue OS <ArrowRight size={18}/>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
