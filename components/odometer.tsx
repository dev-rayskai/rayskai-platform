"use client";

import {AnimatePresence, motion} from "framer-motion";

export function Odometer({value, className}: {value: string; className?: string}) {
  return (
    <span className={`inline-flex tabular-nums ${className ?? ""}`}>
      {value.split("").map((char, index) => (
        <span key={index} className="relative inline-block overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={char}
              initial={{y: 18, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              exit={{y: -18, opacity: 0}}
              transition={{duration: 0.35, ease: "easeOut"}}
              className="inline-block"
            >
              {char}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
    </span>
  );
}
