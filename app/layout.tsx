import type { Metadata } from "next";import "./globals.css";
export const metadata:Metadata={title:"RayskAI | AI revenue recovery for healthcare practices",description:"An AI revenue team for dental, med spa, orthodontic, primary care, and specialty practices.",metadataBase:new URL("https://rayskai.com")};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
