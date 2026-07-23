"use client";

import {AnimatePresence, motion} from "framer-motion";
import {ArrowUp} from "lucide-react";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

const HIDDEN_ROUTES=["/login"];

export function BackToTop(){
  const pathname=usePathname();
  const [visible,setVisible]=useState(false);

  useEffect(()=>{
    const onScroll=()=>setVisible(window.scrollY>400);
    onScroll();
    window.addEventListener("scroll",onScroll,{passive:true});
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);

  if(HIDDEN_ROUTES.some(route=>pathname?.startsWith(route)))return null;

  return <AnimatePresence>
    {visible&&
      <motion.button
        type="button"
        initial={{opacity:0,y:12}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0,y:12}}
        onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-primary text-white shadow-lg transition hover:scale-110 lg:hidden"
      >
        <ArrowUp size={18}/>
      </motion.button>
    }
  </AnimatePresence>;
}
