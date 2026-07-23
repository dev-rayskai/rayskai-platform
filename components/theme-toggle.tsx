"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/theme-provider";

const options = [
  ["system", Monitor, "System"],
  ["light", Sun, "Light"],
  ["dark", Moon, "Dark"],
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClick(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const current = options.find(([value]) => value === theme) ?? options[0];
  const CurrentIcon = current[1];

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        aria-label="Toggle color theme"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-primary/40 hover:text-primary"
      >
        <CurrentIcon size={16} />
      </button>
      {open && (
        <div className="absolute right-0 top-11 z-50 w-40 rounded-2xl border border-border bg-surface p-1.5 shadow-2xl">
          {options.map(([value, Icon, label]) => (
            <button
              type="button"
              key={value}
              onClick={() => {
                setTheme(value);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm ${
                theme === value ? "bg-primary/10 text-primary" : "text-muted hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
