import Image from "next/image";

const ASPECT = 4;

export function Logo({size = 30, className}: {size?: number; className?: string}) {
  const width = Math.round(size * ASPECT);
  return (
    <span className={`relative inline-block shrink-0 ${className ?? ""}`} style={{height: size, width}}>
      <Image src="/raysAI6.png" alt="RayskAI" fill priority sizes={`${width}px`} className="object-contain dark:hidden" />
      <Image src="/raysA11.png" alt="RayskAI" fill priority sizes={`${width}px`} className="hidden object-contain dark:block" />
    </span>
  );
}
