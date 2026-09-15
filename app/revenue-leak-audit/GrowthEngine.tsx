export default function GrowthEngine() {
  const stages = [
    ['01', 'Demand strategy', 'Campaigns built around real clinic capacity', 'Google and Meta campaign planning for implants, cosmetics, orthodontics, emergency care, and other approved services.'],
    ['02', 'Creative and discovery', 'Ad copy, landing pages, and SEO', 'Dental-specific messaging and conversion pages that match patient intent and strengthen organic discovery.'],
    ['03', 'Instant response', 'Every lead receives a useful next step', 'Web forms, chat, calls, and campaign responses move into timely, approved SMS or voice follow-up.'],
    ['04', 'Qualification and booking', 'Interest becomes a scheduled appointment', 'RaySky qualifies nonclinical needs, checks availability, books when permitted, or escalates with context.'],
    ['05', 'Revenue attribution', 'See which source produced completed care', 'Follow the path from campaign and keyword to attended appointment, accepted treatment, and linked production.'],
  ];
  return <section className="growth-engine"><div className="rl-shell">
    <header className="rl-section-head reveal"><span>Growth, connected to care</span><h2>Bring in the right patients. Respond while intent is high. <em>Prove what became revenue.</em></h2><p>RaySky connects acquisition to the clinic workflows that follow, so marketing is measured by booked appointments, completed visits, accepted treatment, and eligible collections.</p></header>
    <div className="growth-journey" data-luxury-reveal>{stages.map(([number,label,title,copy])=><article key={number}><i>{number}</i><span>{label}</span><strong>{title}</strong><p>{copy}</p></article>)}</div>
    <div className="growth-services" data-luxury-reveal>{['Google Ads','Meta Ads','Ad copy','Landing pages','SEO','Web chat and forms','Lead nurturing','Call tracking','Campaign attribution'].map(item=><span key={item}>{item}</span>)}</div>
  </div></section>;
}
