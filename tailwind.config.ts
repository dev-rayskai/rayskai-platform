import type { Config } from "tailwindcss";
export default { content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"], theme:{extend:{colors:{ink:"#07111f",mint:"#a7f3d0",sky:"#6ee7f9"},fontFamily:{display:["Arial","sans-serif"]}}}, plugins:[] } satisfies Config;
