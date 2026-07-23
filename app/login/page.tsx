import Link from "next/link";
import {ArrowLeft} from "lucide-react";
import {Counter} from "@/components/animated-counter";
import {LoginForm} from "@/components/login-form";
import {Logo} from "@/components/logo";

export default function Login(){
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <div className="relative isolate hidden overflow-hidden bg-primary px-12 py-12 text-white lg:flex lg:flex-col">
        <div className="grid-mask-light absolute inset-0 -z-10"/>
        <Link href="/" className="relative inline-flex items-center gap-2 text-lg font-bold">
          <Logo size={30} className="[filter:brightness(0)_invert(1)]"/>
        </Link>
        <div className="relative flex flex-1 flex-col justify-center">
          <p className="eyebrow border-white/20 bg-white/10 text-white">REVENUE OS</p>
          <h1 className="mt-6 max-w-md text-4xl font-semibold leading-tight tracking-[-.03em]">
            Your revenue command center, always on.
          </h1>
          <p className="mt-5 max-w-sm leading-7 text-white/75">
            Sign in to see every missed call, unbooked treatment, and recovered
            dollar in one live view.
          </p>
        </div>
        <div className="relative grid grid-cols-3 gap-4 border-t border-white/15 pt-8">
          <div>
            <p className="text-3xl font-semibold">
              <Counter value={92} suffix="%"/>
            </p>
            <p className="mt-1 text-xs text-white/70">6-month retention</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">
              <Counter value={28} suffix="%"/>
            </p>
            <p className="mt-1 text-xs text-white/70">More appointments</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">
              <Counter value={7} suffix="×"/>
            </p>
            <p className="mt-1 text-xs text-white/70">Average ROI</p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-20">
        <Link
          href="/"
          aria-label="Back to home"
          className="absolute left-6 top-8 grid h-10 w-10 place-items-center rounded-full border border-border transition hover:border-primary/40 hover:text-primary sm:left-12 lg:left-20"
        >
          <ArrowLeft size={18}/>
        </Link>

        <div className="mx-auto w-full max-w-sm">
          <span className="mb-8 inline-flex lg:hidden">
            <Logo size={30}/>
          </span>
          <h2 className="text-3xl font-semibold tracking-[-.03em]">Welcome back</h2>
          <p className="mt-2 text-muted">Sign in to your account</p>

          <div className="mt-8">
            <LoginForm/>
          </div>
        </div>
      </div>
    </main>
  );
}
