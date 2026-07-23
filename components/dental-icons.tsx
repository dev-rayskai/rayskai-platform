const TOOTH_PATH = "M12 2.2c-1.7 0-2.7.9-3.9.9-2 0-3.6 1.7-3.6 4.4 0 2.1.6 3.7 1.2 5.8.6 2 1.3 4.4 2.6 6.3.5.8 1.1 1.1 1.6.3.5-.8.6-2.3.9-3.5.3-1 .7-1.5 1.2-1.5s.9.5 1.2 1.5c.3 1.2.4 2.7.9 3.5.5.8 1.1.5 1.6-.3 1.3-1.9 2-4.3 2.6-6.3.6-2.1 1.2-3.7 1.2-5.8 0-2.7-1.6-4.4-3.6-4.4-1.2 0-2.2-.9-3.9-.9Z";

export function Tooth({size=24,className}:{size?:number;className?:string}){
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d={TOOTH_PATH}/>
  </svg>;
}

export function ToothBraces({size=24,className}:{size?:number;className?:string}){
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d={TOOTH_PATH}/>
    <line x1="7" y1="9.6" x2="17" y2="9.6"/>
    <rect x="8.3" y="8.4" width="2" height="2.4" rx="0.4"/>
    <rect x="13.7" y="8.4" width="2" height="2.4" rx="0.4"/>
  </svg>;
}
