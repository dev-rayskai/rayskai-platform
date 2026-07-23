"use client";

import {motion} from "framer-motion";

const tags=["Dental","Med Spa","Orthodontics","Primary Care","Specialty Clinics"];
const track=[...tags,...tags,...tags,...tags];

export function TrustMarquee(){
  return <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:gap-8">
    <p className="shrink-0 text-xs font-semibold uppercase tracking-[.16em] text-muted">
      Trusted workflows for leading practice operations
    </p>
    <div className="marquee-mask relative flex-1 overflow-hidden">
      <motion.div
        className="flex w-max gap-3"
        animate={{x:["-50%","0%"]}}
        transition={{duration:24,repeat:Infinity,ease:"linear"}}
      >
        {track.map((tag,index)=>
          <span key={index} className="shrink-0 whitespace-nowrap rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[.14em] text-muted">
            {tag}
          </span>
        )}
      </motion.div>
    </div>
  </div>;
}
