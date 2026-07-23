"use client";

import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import {Logo} from "@/components/logo";

export function PageLoader(){
  const [visible,setVisible]=useState(true);

  useEffect(()=>{
    document.documentElement.style.overflow="hidden";
    const timeout=setTimeout(()=>{
      setVisible(false);
      document.documentElement.style.overflow="";
    },900);
    return ()=>{
      clearTimeout(timeout);
      document.documentElement.style.overflow="";
    };
  },[]);

  return <AnimatePresence>
    {visible&&
      <motion.div
        initial={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:0.5,ease:"easeInOut"}}
        className="fixed inset-0 z-[100] grid place-items-center bg-background"
      >
        <div className="relative grid place-items-center">
          <motion.span
            aria-hidden
            className="absolute h-20 w-20 rounded-full border-2 border-primary/15 border-t-primary"
            animate={{rotate:360}}
            transition={{duration:1,repeat:Infinity,ease:"linear"}}
          />
          <motion.div
            animate={{scale:[1,1.08,1]}}
            transition={{duration:1.4,repeat:Infinity,ease:"easeInOut"}}
          >
            <Logo size={34}/>
          </motion.div>
        </div>
      </motion.div>
    }
  </AnimatePresence>;
}
