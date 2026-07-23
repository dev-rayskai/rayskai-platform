"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";

const links = [
  ["Integrations", "/integrations"],
  ["Customers", "/customers"],
  ["Pricing", "/pricing"],
];
const employees = [
  ["AI Receptionist", "Answers calls and handles patient questions."],
  ["AI Scheduler", "Books, confirms, and fills appointments."],
  ["AI Recall Coordinator", "Reactivates overdue patients by voice and SMS."],
  ["AI Treatment Coordinator", "Follows up on unaccepted treatment."],
  ["AI Collections Specialist", "Recovers balances and sets payment plans."],
  ["AI Insurance Verifier", "Checks eligibility before the visit."],
  ["AI Reputation Manager", "Requests reviews and routes service recovery."],
  ["AI Marketing Coordinator", "Runs referral and reactivation campaigns."],
];
const solutions = [
  [
    "Dental",
    "/solutions/dental",
    "Recover missed calls and treatment opportunities.",
  ],
  [
    "Med Spa",
    "/solutions/med-spa",
    "Turn consultations into booked treatment.",
  ],
  [
    "Orthodontics",
    "/solutions/orthodontics",
    "Move every prospective smile forward.",
  ],
  [
    "Primary Care",
    "/solutions/primary-care",
    "Make access and recall effortless.",
  ],
  [
    "Specialty Clinics",
    "/solutions/specialty-clinics",
    "Coordinate complex patient journeys.",
  ],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [employeeOpen, setEmployeeOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <nav className="relative mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold"
          onClick={() => setOpen(false)}
        >
          <Logo size={30} />
        </Link>
        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          <div className="relative">
            <button
              aria-expanded={employeeOpen}
              onClick={() => {
                setEmployeeOpen(!employeeOpen);
                setSolutionsOpen(false);
              }}
              className="inline-flex items-center gap-1 hover:text-foreground"
            >
              AI employees{" "}
              <ChevronDown
                size={15}
                className={
                  employeeOpen ? "rotate-180 transition" : "transition"
                }
              />
            </button>
            {employeeOpen && (
              <div className="absolute left-1/2 top-10 grid w-[680px] -translate-x-1/2 grid-cols-2 gap-2 rounded-2xl border border-border bg-surface p-3 shadow-2xl">
                {employees.map(([name, copy]) => (
                  <Link
                    key={name}
                    href="/revenue-os#employees"
                    onClick={() => setEmployeeOpen(false)}
                    className="rounded-xl p-4 hover:bg-foreground/5"
                  >
                    <p className="font-semibold text-foreground">{name}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{copy}</p>
                  </Link>
                ))}
                <Link
                  href="/revenue-os#employees"
                  onClick={() => setEmployeeOpen(false)}
                  className="col-span-2 rounded-xl bg-primary/10 p-4 text-primary hover:bg-primary/15"
                >
                  See the full AI Revenue Team →
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              aria-expanded={solutionsOpen}
              onClick={() => {
                setSolutionsOpen(!solutionsOpen);
                setEmployeeOpen(false);
              }}
              className="inline-flex items-center gap-1 hover:text-foreground"
            >
              Solutions{" "}
              <ChevronDown
                size={15}
                className={
                  solutionsOpen ? "rotate-180 transition" : "transition"
                }
              />
            </button>
            {solutionsOpen && (
              <div className="absolute left-1/2 top-10 grid w-[620px] -translate-x-1/2 grid-cols-2 gap-2 rounded-2xl border border-border bg-surface p-3 shadow-2xl">
                {solutions.map(([name, href, copy]) => (
                  <Link
                    key={name}
                    href={href}
                    onClick={() => setSolutionsOpen(false)}
                    className="rounded-xl p-4 hover:bg-foreground/5"
                  >
                    <p className="font-semibold text-foreground">{name}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{copy}</p>
                  </Link>
                ))}
                <Link
                  href="/revenue-os"
                  onClick={() => setSolutionsOpen(false)}
                  className="col-span-2 rounded-xl bg-primary/10 p-4 text-primary hover:bg-primary/15"
                >
                  Explore RayskAI Revenue OS →
                </Link>
              </div>
            )}
          </div>
          {links.map(([name, href]) => (
            <Link key={name} href={href} className="hover:text-foreground">
              {name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white md:block"
          >
            Log in
          </Link>
          <ThemeToggle />
          <button
            aria-label="Toggle navigation"
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[.15em] text-muted">
              AI employees
            </p>
            {employees.map(([name]) => (
              <Link
                key={name}
                href="/revenue-os#employees"
                onClick={() => setOpen(false)}
                className="text-muted"
              >
                {name}
              </Link>
            ))}
            <p className="mt-2 text-xs font-semibold uppercase tracking-[.15em] text-muted">
              Solutions
            </p>
            {solutions.map(([name, href]) => (
              <Link
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="text-muted"
              >
                {name}
              </Link>
            ))}
            <Link
              href="/revenue-os"
              onClick={() => setOpen(false)}
              className="text-primary"
            >
              Revenue OS
            </Link>
            <div className="my-1 border-t border-border" />
            {links.map(([name, href]) => (
              <Link
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="text-muted"
              >
                {name}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center font-semibold text-white"
            >
              Log in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
