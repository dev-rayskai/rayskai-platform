"use client";

import {motion} from "framer-motion";
import {CalendarCheck, LineChart, MessageSquareMore, Phone, ShieldCheck} from "lucide-react";
import {useEffect, useState} from "react";

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

const CARD_STEP=340;
const VISIBLE_RANGE=3;
const AUTOPLAY_DELAY=2500;

export function PlatformCarousel(){
  const [index,setIndex]=useState(0);
  const [paused,setPaused]=useState(false);
  const total=features.length;

  const go=(dir:number)=>setIndex(current=>(current+dir+total)%total);

  useEffect(()=>{
    if(paused)return;
    const timer=setInterval(()=>go(1),AUTOPLAY_DELAY);
    return ()=>clearInterval(timer);
  },[paused]);

  return (
    <div className="mt-4">
      <div
        tabIndex={0}
        onMouseEnter={()=>setPaused(true)}
        onMouseLeave={()=>setPaused(false)}
        onKeyDown={event=>{
          if(event.key==="ArrowLeft")go(-1);
          if(event.key==="ArrowRight")go(1);
        }}
        className="relative flex h-[500px] items-center justify-center overflow-hidden outline-none"
      >
        <motion.div
          drag="x"
          dragConstraints={{left:0,right:0}}
          dragElastic={0.15}
          onDragStart={()=>setPaused(true)}
          onDragEnd={(_,info)=>{
            if(info.offset.x<-70)go(1);
            else if(info.offset.x>70)go(-1);
            setPaused(false);
          }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          {features.map(([Icon,title,copy],i)=>{
            let offset=i-index;
            if(offset>total/2)offset-=total;
            if(offset<-total/2)offset+=total;
            const abs=Math.abs(offset);
            if(abs>VISIBLE_RANGE)return null;
            const isActive=offset===0;

            return (
              <motion.button
                key={title}
                type="button"
                onClick={()=>setIndex(i)}
                initial={false}
                animate={{
                  x:offset*CARD_STEP,
                  scale:isActive?1:0.88,
                  zIndex:VISIBLE_RANGE-abs,
                }}
                transition={{duration:0.45,ease:"easeOut"}}
                className={`absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-surface p-7 text-left shadow-lg sm:w-80 ${isActive?"border-primary shadow-2xl":"border-border"}`}
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22}/>
                </span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2">
        {features.map(([,title],i)=>
          <button
            type="button"
            key={title}
            aria-label={`Go to slide ${i+1}`}
            onClick={()=>setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i===index?"w-6 bg-primary":"w-2 bg-border"}`}
          />
        )}
      </div>
    </div>
  );
}
