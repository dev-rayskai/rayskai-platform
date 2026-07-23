"use client";

import {AnimatePresence, motion} from "framer-motion";
import {Minus, Plus} from "lucide-react";
import {useState} from "react";

const faqs=[
  ["Does RayskAI replace our front desk?","No. RayskAI handles repeatable conversations and escalates nuanced moments to your team with the relevant context."],
  ["How quickly can we go live?","Most teams start with a focused workflow and go live in about 14 days, without replacing their phone system."],
  ["Can it work with our existing tools?","Yes. We design the integration around your phone, calendar, practice-management, CRM, and payment workflow."],
  ["Is RayskAI appropriate for healthcare teams?","RayskAI supports healthcare-oriented workflows and can be configured around your privacy, escalation, and access requirements."],
] as const;

export function FaqAccordion(){
  const [open,setOpen]=useState<number|null>(0);
  return <div className="mt-10 space-y-3">
    {faqs.map(([question,answer],index)=>{
      const isOpen=open===index;
      return <div
        key={question}
        onMouseEnter={()=>setOpen(index)}
        className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen?"border-primary/40 bg-primary/[.04]":"border-border bg-surface/60"}`}
      >
        <button
          type="button"
          onClick={()=>setOpen(isOpen?null:index)}
          onFocus={()=>setOpen(index)}
          aria-expanded={isOpen}
          className="flex w-full items-center gap-4 px-6 py-5 text-left"
        >
          <span className="font-mono text-xs text-muted/60">{String(index+1).padStart(2,"0")}</span>
          <span className="flex-1 font-semibold">{question}</span>
          <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors duration-300 ${isOpen?"bg-primary text-white":"bg-primary/10 text-primary"}`}>
            {isOpen?<Minus size={14}/>:<Plus size={14}/>}
          </span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen&&
            <motion.div
              initial={{height:0,opacity:0}}
              animate={{height:"auto",opacity:1}}
              exit={{height:0,opacity:0}}
              transition={{duration:.3,ease:"easeInOut"}}
            >
              <p className="max-w-2xl px-6 pb-6 pl-14 leading-7 text-muted">{answer}</p>
            </motion.div>
          }
        </AnimatePresence>
      </div>;
    })}
  </div>;
}
