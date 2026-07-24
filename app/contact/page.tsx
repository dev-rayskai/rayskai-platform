import {ContactForm} from "@/components/contact-form";
import {PageHero,SiteShell} from "@/components/site-shell";

export default function Contact(){return <SiteShell><PageHero eyebrow="BOOK A DEMO" title="Let’s turn missed calls into a growth plan." copy="Bring your missed-call volume, average customer value, and current workflow."/><section id="form" data-nav-label="Form" className="mx-auto max-w-2xl px-6 pb-28"><ContactForm/></section></SiteShell>}
