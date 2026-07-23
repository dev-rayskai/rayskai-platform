"use client";

import {Eye, EyeOff, Lock, Mail} from "lucide-react";
import {useState} from "react";

function GoogleIcon(){
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.9A8.78 8.78 0 0 0 17.64 9.2Z"/>
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.19l-2.9-2.26c-.8.55-1.83.87-3.06.87-2.36 0-4.36-1.6-5.08-3.75H.94v2.33A9 9 0 0 0 9 18Z"/>
      <path fill="#FBBC05" d="M3.92 10.67A5.4 5.4 0 0 1 3.64 9c0-.58.1-1.15.28-1.67V5H.94A9 9 0 0 0 0 9c0 1.45.35 2.83.94 4l2.98-2.33Z"/>
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A8.94 8.94 0 0 0 9 0 9 9 0 0 0 .94 5l2.98 2.33C4.64 5.18 6.64 3.58 9 3.58Z"/>
    </svg>
  );
}

export function LoginForm(){
  const [showPassword,setShowPassword]=useState(false);

  return (
    <form onSubmit={event=>event.preventDefault()} className="w-full max-w-sm">
      <div className="grid gap-3">
        <button type="button" className="inline-flex items-center justify-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold transition hover:border-primary/40">
          <GoogleIcon/>
          Continue with Google
        </button>
        <button type="button" className="inline-flex items-center justify-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold transition hover:border-primary/40">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.66.8.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"/>
          </svg>
          Continue with GitHub
        </button>
      </div>

      <div className="my-7 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-muted">
        <span className="h-px flex-1 bg-border"/>
        or
        <span className="h-px flex-1 bg-border"/>
      </div>

      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <div className="relative mt-2">
            <Mail size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"/>
            <input
              type="email"
              placeholder="you@practice.com"
              className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 text-sm outline-none transition focus:border-primary/50"
            />
          </div>
        </label>

        <label className="block">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Password</span>
            <button type="button" className="text-sm font-medium text-primary hover:underline">
              Forgot password?
            </button>
          </div>
          <div className="relative mt-2">
            <Lock size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"/>
            <input
              type={showPassword?"text":"password"}
              placeholder="••••••••••"
              className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-11 text-sm outline-none transition focus:border-primary/50"
            />
            <button
              type="button"
              aria-label={showPassword?"Hide password":"Show password"}
              onClick={()=>setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted transition hover:text-foreground"
            >
              {showPassword?<EyeOff size={16}/>:<Eye size={16}/>}
            </button>
          </div>
        </label>

        <button type="submit" className="w-full rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:opacity-90">
          Sign in
        </button>
      </div>

      <p className="mt-7 text-center text-sm text-muted">
        Don&apos;t have an account?{" "}
        <button type="button" className="font-semibold text-primary hover:underline">
          Sign up now
        </button>
      </p>
    </form>
  );
}
