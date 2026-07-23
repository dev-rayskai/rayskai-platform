"use client";

import {FormEvent, useState} from "react";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

export function ContactForm(){
  const [status,setStatus]=useState<Status>("idle");
  const [message,setMessage]=useState("");

  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setStatus("sending");
    const form=event.currentTarget;
    const payload=Object.fromEntries(new FormData(form));
    try{
      const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
      const result=await response.json();
      if(response.ok){setStatus("sent");setMessage(result.message);form.reset();return;}
      if(response.status===503){
        const subject=encodeURIComponent(`Demo request from ${payload.name}`);
        const body=encodeURIComponent(`Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company || "—"}\n\nWhat they'd like to improve:\n${payload.message || "—"}`);
        window.location.href=`mailto:hello@rayskai.com?subject=${subject}&body=${body}`;
        setStatus("fallback");setMessage("Your email app is opening with your request already filled in.");return;
      }
      throw new Error(result.message || "We could not submit your request.");
    }catch(error){setStatus("error");setMessage(error instanceof Error?error.message:"We could not submit your request.");}
  }

  return <form onSubmit={submit} className="glass rounded-3xl p-7"><h2 className="text-2xl font-semibold">Tell us about your team.</h2><div className="mt-7 grid gap-5 sm:grid-cols-2"><label className="text-sm">Name<input required name="name" autoComplete="name" className="mt-2 w-full rounded-xl border border-border bg-background p-3"/></label><label className="text-sm">Work email<input required type="email" name="email" autoComplete="email" className="mt-2 w-full rounded-xl border border-border bg-background p-3"/></label><label className="text-sm sm:col-span-2">Company<input name="company" autoComplete="organization" className="mt-2 w-full rounded-xl border border-border bg-background p-3"/></label><label className="text-sm sm:col-span-2">What would you like to improve?<textarea name="message" rows={5} className="mt-2 w-full rounded-xl border border-border bg-background p-3"/></label></div><button disabled={status==="sending"} className="mt-7 rounded-full bg-primary px-6 py-3.5 font-semibold text-white disabled:cursor-wait disabled:opacity-70">{status==="sending"?"Sending…":"Start the conversation"}</button>{status!=="idle"&&<p role="status" className={`mt-4 text-sm ${status==="error"?"text-error":"text-primary"}`}>{message}</p>}<p className="mt-4 text-xs text-muted">Or email <a className="underline" href="mailto:hello@rayskai.com">hello@rayskai.com</a> directly.</p></form>;
}
