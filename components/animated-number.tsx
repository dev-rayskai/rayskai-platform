"use client";

import {animate, motion, useMotionValue, useTransform} from "framer-motion";
import {useEffect} from "react";

export function AnimatedNumber({value, format}: {value: number; format: (n: number) => string}) {
  const motionValue = useMotionValue(value);
  const display = useTransform(motionValue, format);

  useEffect(() => {
    const controls = animate(motionValue, value, {duration: 0.6, ease: "easeOut"});
    return controls.stop;
  }, [value, motionValue]);

  return <motion.span>{display}</motion.span>;
}
