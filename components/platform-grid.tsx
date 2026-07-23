"use client";

import {motion} from "framer-motion";
import {CalendarCheck,LineChart,MessageSquareMore,Phone,ShieldCheck} from "lucide-react";

const features=[
  [Phone,"AI Receptionist","Answers every inbound patient call, handles FAQs, and creates a confident first impression."],
  [CalendarCheck,"AI Scheduler","Finds the right appointment, fills cancellations, and confirms every booking."],
  [MessageSquareMore,"AI Recall Coordinator","Reactivates overdue patients and keeps recall campaigns moving across voice and SMS."],
  [LineChart,"AI Revenue Analyst","Connects activity to recovered appointments, collections, and production in one view."],
  [ShieldCheck,"AI Treatment Coordinator","Follows up on unaccepted treatment with useful education and a clear next step."],
  [MessageSquareMore,"AI Collections Specialist","Recovers aging balances with friendly reminders, payment links, and plan setup."],
  [ShieldCheck,"AI Insurance Verifier","Reduces eligibility friction before the patient arrives."],
  [LineChart,"AI Marketing Coordinator","Turns referrals, reviews, and reactivation into repeatable growth campaigns."],
] as const;

export function PlatformGrid(){
  return <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {features.map(([Icon,title,copy],index)=>
      <motion.article
        key={title}
        initial={{opacity:0,y:16}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true,margin:"-60px"}}
        transition={{delay:(index%3)*0.08,duration:.5,ease:"easeOut"}}
        onMouseMove={event=>{
          const rect=event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty("--x",`${event.clientX-rect.left}px`);
          event.currentTarget.style.setProperty("--y",`${event.clientY-rect.top}px`);
        }}
        className="spotlight group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
      >
        <span aria-hidden className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"/>
        <span aria-hidden className="absolute right-5 top-5 font-mono text-xs text-muted/50">{String(index+1).padStart(2,"0")}</span>
        <span className="relative z-10 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
          <Icon size={22}/>
        </span>
        <h3 className="relative z-10 mt-7 text-lg font-semibold">{title}</h3>
        <p className="relative z-10 mt-3 leading-7 text-muted">{copy}</p>
      </motion.article>
    )}
  </div>;
}
