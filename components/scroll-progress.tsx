"use client";

import {motion, useScroll, useSpring} from "framer-motion";
import {usePathname} from "next/navigation";

const HIDDEN_ROUTES=["/login"];

export function ScrollProgress(){
  const pathname=usePathname();
  const {scrollYProgress}=useScroll();
  const scaleX=useSpring(scrollYProgress,{stiffness:200,damping:30,restDelta:0.001});

  if(HIDDEN_ROUTES.some(route=>pathname?.startsWith(route)))return null;

  return <motion.div
    aria-hidden
    style={{scaleX}}
    className="fixed left-0 top-[76px] z-40 h-0.5 w-full origin-left bg-gradient-to-r from-primary to-accent"
  />;
}
