"use client";

import {useMemo, useState} from "react";
import Link from "next/link";

export function RoiCalculator(){
  const [providers,setProviders]=useState(3);
  const [missedCalls,setMissedCalls]=useState(24);
  const [patientValue,setPatientValue]=useState(850);
  const result=useMemo(()=>{
    const recovered=Math.round(missedCalls*4.3*patientValue*.32+providers*1700);
    return {recovered,roi:(recovered/1997).toFixed(1),days:Math.max(4,Math.round(1997/recovered*30))};
  },[providers,missedCalls,patientValue]);
  const money=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0});
  return <section id="roi" className="mx-auto max-w-7xl px-6 py-28"><div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#0b1b2b] lg:grid-cols-[1.1fr_.9fr]"><div className="p-7 sm:p-10"><p className="eyebrow">SEE YOUR ROI IN 60 SECONDS</p><h2 className="section-title mt-5 max-w-xl">Find the revenue hiding in your current workflow.</h2><p className="mt-5 max-w-xl leading-7 text-slate-400">Adjust the operating inputs below for a conservative monthly recovery estimate.</p><div className="mt-10 space-y-7">{[["Providers",providers,1,20,setProviders],["Missed calls each week",missedCalls,1,200,setMissedCalls],["Average patient value",patientValue,100,5000,setPatientValue]].map(([label,value,min,max,setValue])=><label key={label as string} className="block"><div className="mb-3 flex justify-between text-sm"><span className="text-slate-300">{label as string}</span><span className="font-semibold text-emerald-100">{label==="Average patient value"?money.format(value as number):value as number}</span></div><input aria-label={label as string} className="w-full accent-emerald-200" type="range" min={min as number} max={max as number} value={value as number} onChange={event=>(setValue as (value:number)=>void)(Number(event.target.value))}/></label>)}</div></div><div className="border-t border-white/10 bg-emerald-200 p-7 text-[#07111f] sm:p-10 lg:border-l lg:border-t-0"><p className="text-sm font-bold uppercase tracking-[.15em]">Projected monthly gain</p><p className="mt-5 text-5xl font-semibold tracking-[-.07em] sm:text-6xl">{money.format(result.recovered)}</p><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><div className="rounded-2xl bg-[#07111f]/10 p-5"><p className="text-3xl font-semibold">{result.roi}×</p><p className="mt-1 text-sm">Projected ROI</p></div><div className="rounded-2xl bg-[#07111f]/10 p-5"><p className="text-3xl font-semibold">{result.days} days</p><p className="mt-1 text-sm">Estimated payback</p></div></div><Link href="/contact?topic=roi" className="mt-10 inline-flex rounded-full bg-[#07111f] px-6 py-3.5 font-semibold text-white">Review this with an expert</Link><p className="mt-4 text-xs leading-5 text-[#07111f]/65">Estimate only. Your actual outcome depends on volume, fit, and workflows.</p></div></div></section>;
}
