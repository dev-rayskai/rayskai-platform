"use client";

import {motion} from "framer-motion";

const steps=[
  ["Connect","Connect your phone system, calendar, and the systems your team already trusts."],
  ["Train","RayskAI learns your policies, scripts, FAQs, and escalation preferences."],
  ["Launch","Go live with AI voice and SMS automation while your team keeps visibility."],
  ["Scale","Track recovered revenue, then add workflows and locations as results compound."],
] as const;

export function RolloutSteps(){
  return <div className="relative">
    <div aria-hidden className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent"/>
    <motion.span
      aria-hidden
      animate={{top:["2%","94%"],opacity:[0,1,1,0]}}
      transition={{duration:3.4,repeat:Infinity,repeatType:"loop",ease:"easeInOut"}}
      className="absolute left-[18px] z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(0,212,255,.75)]"
    />
    <ol className="space-y-6">
      {steps.map(([step,copy],index)=>
        <motion.li
          key={step}
          initial={{opacity:0,y:18}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true,margin:"-60px"}}
          transition={{delay:index*0.1,duration:.5,ease:"easeOut"}}
          className="group relative flex gap-5"
        >
          <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary font-bold text-white ring-4 ring-background transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(106,36,219,.15)]">
            {index+1}
          </span>
          <div className="glass flex-1 rounded-2xl p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-xl">
            <h3 className="font-semibold">{step}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
          </div>
        </motion.li>
      )}
    </ol>
  </div>;
}
