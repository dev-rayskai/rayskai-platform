"use client";

import {motion} from "framer-motion";
import {Bot, Pause, Play, User, Volume2} from "lucide-react";
import {useEffect, useState} from "react";

const messages=[
  ["Patient","I'd like to book a cleaning.","patient","0:02"],
  ["RayskAI","Absolutely. I can help with that. Do Tuesday at 2:30 PM or Wednesday at 10:00 AM work better?","agent","0:05"],
  ["Patient","Wednesday works.","patient","0:11"],
  ["RayskAI","You're all set for Wednesday at 10:00 AM. I'll send a confirmation text now.","agent","0:14"],
] as const;

const idleWaveHeights=Array.from({length:22},(_,index)=>8+Math.abs(Math.sin(index*0.9))*24);

export function VoiceDemo(){
  const [playing,setPlaying]=useState(false);
  const [step,setStep]=useState(2);

  useEffect(()=>{
    if(!playing){setStep(2);return;}
    if(step>=messages.length)return;
    const timeout=setTimeout(()=>setStep(current=>current+1),1500);
    return ()=>clearTimeout(timeout);
  },[playing,step]);

  const visible=messages.slice(0,step);
  const pending=playing&&step<messages.length?messages[step]:null;

  return <section id="demo" data-nav-label="Demo" className="mx-auto max-w-7xl px-6 py-28">
    <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
      <div>
        <p className="eyebrow">LIVE VOICE EXPERIENCE</p>
        <h2 className="section-title mt-5">A conversation that moves work forward.</h2>
        <p className="mt-6 max-w-lg leading-8 text-muted">RayskAI understands intent, follows your guidance, checks availability, and confirms the next step—without forcing callers through a phone tree.</p>
        <button onClick={()=>setPlaying(!playing)} className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-semibold hover:bg-foreground/5">
          {playing?<Pause size={17}/>:<Play size={17}/>} {playing?"Pause conversation":"Play conversation"}
        </button>
      </div>
      <div className="glass rounded-3xl p-5 sm:p-7">
        <div className="flex items-center justify-between border-b border-border pb-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-white">
              <Volume2 size={19}/>
            </span>
            <div>
              <p className="font-semibold">AI scheduling call</p>
              <p className="text-sm text-muted">Natural voice · 01:12</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"/>
            Live transcript
          </span>
        </div>
        <div className="min-h-[328px] space-y-4 pt-6">
          {visible.map(([speaker,copy,type,time],index)=>
            <motion.div
              key={copy}
              initial={{opacity:0,y:10}}
              animate={{opacity:1,y:0}}
              transition={{delay:index<2?index*0.12:0}}
              className={`flex w-fit max-w-[88%] items-end gap-2 ${type==="agent"?"":"ml-auto flex-row-reverse"}`}
            >
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${type==="agent"?"bg-primary text-white":"bg-border text-muted"}`}>
                {type==="agent"?<Bot size={13}/>:<User size={13}/>}
              </span>
              <div className={`rounded-2xl px-4 py-3 ${type==="agent"?"bg-primary text-white":"border border-border bg-surface text-foreground"}`}>
                <p className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] opacity-70">
                  <span>{speaker}</span>
                  <span className="font-normal normal-case">· {time}</span>
                </p>
                <p className="text-sm leading-6">{copy}</p>
              </div>
            </motion.div>
          )}
          {pending&&
            <motion.div
              initial={{opacity:0,y:10}}
              animate={{opacity:1,y:0}}
              className={`flex w-fit max-w-[88%] items-end gap-2 ${pending[2]==="agent"?"":"ml-auto flex-row-reverse"}`}
            >
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${pending[2]==="agent"?"bg-primary text-white":"bg-border text-muted"}`}>
                {pending[2]==="agent"?<Bot size={13}/>:<User size={13}/>}
              </span>
              <div className={`flex items-center gap-1.5 rounded-2xl px-4 py-3.5 ${pending[2]==="agent"?"bg-primary/10":"border border-border bg-surface"}`}>
                {[0,150,300].map(delay=>
                  <span
                    key={delay}
                    className={`h-1.5 w-1.5 animate-bounce rounded-full ${pending[2]==="agent"?"bg-primary":"bg-muted"}`}
                    style={{animationDelay:`${delay}ms`}}
                  />
                )}
              </div>
            </motion.div>
          }
        </div>
        <div className="mt-4 flex h-8 items-center gap-1.5">
          {idleWaveHeights.map((baseHeight,index)=>
            <motion.span
              key={index}
              animate={playing?{height:[baseHeight*0.5,baseHeight*1.5,baseHeight*0.5]}:{height:baseHeight}}
              transition={playing?{duration:0.7,repeat:Infinity,delay:index*0.03}:{duration:0.4}}
              className="w-1 rounded-full bg-gradient-to-t from-accent to-primary"
            />
          )}
        </div>
      </div>
    </div>
  </section>;
}
