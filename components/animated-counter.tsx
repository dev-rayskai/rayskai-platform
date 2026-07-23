"use client";

import {animate, useInView} from "framer-motion";
import {useEffect, useRef, useState} from "react";

export function Counter({value, suffix="", className}:{value: number; suffix?: string; className?: string}){
  const ref=useRef<HTMLSpanElement>(null);
  const isInView=useInView(ref, {once: true, margin: "-40px"});
  const [display, setDisplay]=useState(0);

  useEffect(()=>{
    if(!isInView) return;
    const controls=animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate(latest){ setDisplay(Math.round(latest)); },
    });
    return ()=>controls.stop();
  },[isInView, value]);

  return <span ref={ref} className={className}>{display}{suffix}</span>;
}
