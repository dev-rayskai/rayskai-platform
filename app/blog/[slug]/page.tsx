import {notFound} from "next/navigation";
import Link from "next/link";
import {PageHero,SiteShell} from "@/components/site-shell";
import {articles,getArticle} from "@/lib/articles";

export function generateStaticParams(){return articles.map(article=>({slug:article.slug}));}
export default async function Article({params}:{params:Promise<{slug:string}>}){const article=getArticle((await params).slug);if(!article)notFound();return <SiteShell><PageHero eyebrow={article.category} title={article.title} copy={article.description}/><article className="mx-auto max-w-3xl px-6 pb-28"><p className="text-sm text-slate-500">{article.readTime}</p>{article.sections.map(([heading,copy])=><section className="mt-10" key={heading}><h2 className="text-2xl font-semibold tracking-[-.04em]">{heading}</h2><p className="mt-4 leading-8 text-slate-300">{copy}</p></section>)}<div className="mt-14 border-t border-white/10 pt-8"><Link href="/contact" className="font-semibold text-emerald-100">Want to apply this workflow? Talk to RayskAI →</Link></div></article></SiteShell>}
