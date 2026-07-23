"use client";

import {useEffect, useState} from "react";

const sections=[
  {id:"hero",label:"Home"},
  {id:"demo",label:"Demo"},
  {id:"roi",label:"ROI"},
  {id:"platform",label:"Platform"},
  {id:"pricing",label:"Pricing"},
  {id:"faq",label:"FAQ"},
  {id:"contact",label:"Contact"},
];

export function SectionDots(){
  const [active,setActive]=useState("hero");

  useEffect(()=>{
    const observer=new IntersectionObserver(
      entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting)setActive(entry.target.id);
        });
      },
      {rootMargin:"-45% 0px -45% 0px"}
    );
    const elements=sections
      .map(({id})=>document.getElementById(id))
      .filter((el):el is HTMLElement=>el!==null);
    elements.forEach(el=>observer.observe(el));
    return ()=>observer.disconnect();
  },[]);

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 rounded-full border border-border bg-surface/80 px-2.5 py-4 shadow-xl backdrop-blur-md lg:flex">
      {sections.map(({id,label})=>(
        <a key={id} href={`#${id}`} aria-label={label} className="group relative flex items-center justify-center py-1">
          <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-lg bg-foreground px-2 py-1 text-xs font-semibold text-background opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
            {label}
          </span>
          <span className={`rounded-full transition-all duration-300 ${active===id?"h-3 w-3 bg-primary":"h-2 w-2 bg-border group-hover:bg-primary/50"}`}/>
        </a>
      ))}
    </div>
  );
}
