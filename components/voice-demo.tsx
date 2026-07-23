"use client";

import {motion} from "framer-motion";
import {Pause, Play, Volume2} from "lucide-react";
import {useState} from "react";

const messages=[
  ["Patient","I'd like to book a cleaning.","patient"],
  ["RayskAI","Absolutely. I can help with that. Do Tuesday at 2:30 PM or Wednesday at 10:00 AM work better?","agent"],
  ["Patient","Wednesday works.","patient"],
  ["RayskAI","You're all set for Wednesday at 10:00 AM. I'll send a confirmation text now.","agent"],
] as const;

export function VoiceDemo(){
  const [playing,setPlaying]=useState(false);
  const visible=playing?messages:messages.slice(0,2);
  return <section id="demo" className="mx-auto max-w-7xl px-6 py-28"><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><p className="eyebrow">LIVE VOICE EXPERIENCE</p><h2 className="section-title mt-5">A conversation that moves work forward.</h2><p className="mt-6 max-w-lg leading-8 text-slate-400">RayskAI understands intent, follows your guidance, checks availability, and confirms the next step—without forcing callers through a phone tree.</p><button onClick={()=>setPlaying(!playing)} className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold hover:bg-white/5">{playing?<Pause size={17}/>:<Play size={17}/>} {playing?"Pause conversation":"Play conversation"}</button></div><div className="glass rounded-3xl p-5 sm:p-7"><div className="flex items-center justify-between border-b border-white/10 pb-5"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-200 text-[#07111f]"><Volume2 size={19}/></span><div><p className="font-semibold">AI scheduling call</p><p className="text-sm text-slate-400">Natural voice · 01:12</p></div></div><span className="rounded-full bg-emerald-200/10 px-3 py-1 text-xs text-emerald-100">Live transcript</span></div><div className="min-h-[328px] space-y-4 pt-6">{visible.map(([speaker,copy,type],index)=><motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:index*.12}} key={copy} className={`max-w-[88%] rounded-2xl px-4 py-3 ${type==="agent"?"bg-emerald-200 text-[#07111f]":"ml-auto bg-white/10 text-slate-100"}`}><p className="mb-1 text-xs font-bold uppercase tracking-[.12em] opacity-70">{speaker}</p><p className="text-sm leading-6">{copy}</p></motion.div>)}</div><div className="mt-4 flex gap-1.5">{Array.from({length:22}).map((_,index)=><motion.span animate={playing?{height:[8,20+(index%5)*5,8]}:{height:8}} transition={{duration:.7,repeat:Infinity,delay:index*.03}} className="w-1 rounded-full bg-cyan-200" key={index}/>)}</div></div></div></section>;
}
