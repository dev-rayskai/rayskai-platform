import {NextResponse} from "next/server";

export async function POST(request:Request){
  const body=await request.json().catch(()=>null) as Record<string,unknown>|null;
  const name=typeof body?.name==="string"?body.name.trim():"";
  const email=typeof body?.email==="string"?body.email.trim():"";
  if(!name||!email||!email.includes("@")) return NextResponse.json({message:"Please provide your name and a valid work email."},{status:400});
  const webhook=process.env.CONTACT_WEBHOOK_URL;
  if(!webhook) return NextResponse.json({message:"Email fallback required."},{status:503});
  const response=await fetch(webhook,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,email,company:body?.company||"",message:body?.message||"",source:"rayskai.com/contact"})}).catch(()=>null);
  if(!response?.ok) return NextResponse.json({message:"We could not send your request. Please email hello@rayskai.com."},{status:502});
  return NextResponse.json({message:"Thanks — your request is on its way to the RayskAI team."});
}
