'use client';

import { FormEvent, useMemo, useState } from 'react';

type Opportunity = { label: string; value: number; note: string };

export default function RevenueAudit() {
  const [step, setStep] = useState(1);
  const [missedCalls, setMissedCalls] = useState(18);
  const [cancellations, setCancellations] = useState(10);
  const [overdueRecall, setOverdueRecall] = useState(180);
  const [unbookedLeads, setUnbookedLeads] = useState(14);
  const [unscheduledTreatment, setUnscheduledTreatment] = useState(48000);
  const [patientBalances, setPatientBalances] = useState(22000);

  const opportunities = useMemo<Opportunity[]>(() => [
    { label: 'Growth and acquisition', value: Math.round((missedCalls * 4.33 * .2 + unbookedLeads * .15) * 650), note: 'Calls, ads, web leads, and follow-up' },
    { label: 'Schedule recovery', value: Math.round(cancellations * .25 * 550), note: 'Cancellation and waitlist recovery' },
    { label: 'Recall management', value: Math.round(overdueRecall * .08 * 425), note: 'Overdue patients returned to care' },
    { label: 'Treatment coordination', value: Math.round(unscheduledTreatment * .05), note: 'Pending treatment moved forward' },
    { label: 'Payments and insurance', value: Math.round(patientBalances * .12), note: 'Eligible balances and coverage friction' },
  ], [missedCalls, cancellations, overdueRecall, unbookedLeads, unscheduledTreatment, patientBalances]);

  const estimate = opportunities.reduce((total, item) => total + item.value, 0);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const campaign = new URLSearchParams(window.location.search);
    const body = [
      'I completed the RaySky clinic revenue audit.', '',
      `Illustrative monthly opportunity: $${estimate.toLocaleString()}`,
      ...opportunities.map(item => `${item.label}: $${item.value.toLocaleString()}`), '',
      `Missed calls each week: ${missedCalls}`,
      `Monthly cancellations: ${cancellations}`,
      `Overdue recall patients: ${overdueRecall}`,
      `Ad and website leads not booked each month: ${unbookedLeads}`,
      `Unscheduled treatment: $${unscheduledTreatment.toLocaleString()}`,
      `Eligible patient balances: $${patientBalances.toLocaleString()}`,
      `Name: ${form.get('name')}`,
      `Email: ${form.get('email')}`,
      `Phone: ${form.get('phone')}`,
      `Clinic: ${form.get('clinic')}`,
      `Campaign source: ${campaign.get('utm_source') || 'Direct / not provided'}`,
      `Campaign: ${campaign.get('utm_campaign') || 'Not provided'}`,
    ].join('\n');
    const trackedWindow = window as Window & { dataLayer?: Array<Record<string,string|number>> };
    trackedWindow.dataLayer?.push({ event: 'clinic_revenue_audit', estimated_opportunity: estimate });
    window.location.href = `mailto:hello@raysky.ai?subject=${encodeURIComponent('My RaySky clinic revenue audit')}&body=${encodeURIComponent(body)}`;
  }

  return <div id="revenue-audit" className="rl-audit" tabIndex={-1}>
    <div className="rl-audit-head"><span>Free 2 minute revenue audit</span><strong>{step === 1 ? 'See where revenue is being left behind.' : 'Your revenue opportunity, by workflow.'}</strong><small>Step {step} of 2 · No patient data required</small></div>
    {step === 1 ? <div className="rl-audit-controls rl-audit-full">
      <div className="rl-audit-group"><span>Growth and scheduling</span>
        <label><span><b>Missed calls each week</b><strong>{missedCalls}</strong></span><input aria-label="Missed calls each week" type="range" min="0" max="80" value={missedCalls} onChange={event=>setMissedCalls(Number(event.target.value))} /></label>
        <label><span><b>Ad and website leads not booked</b><strong>{unbookedLeads}</strong></span><input aria-label="Ad and website leads not booked each month" type="range" min="0" max="60" value={unbookedLeads} onChange={event=>setUnbookedLeads(Number(event.target.value))} /></label>
        <label><span><b>Cancellations each month</b><strong>{cancellations}</strong></span><input aria-label="Monthly cancellations" type="range" min="0" max="40" value={cancellations} onChange={event=>setCancellations(Number(event.target.value))} /></label>
      </div>
      <div className="rl-audit-group"><span>Care and collections</span>
        <label><span><b>Overdue recall patients</b><strong>{overdueRecall}</strong></span><input aria-label="Overdue recall patients" type="range" min="0" max="800" step="10" value={overdueRecall} onChange={event=>setOverdueRecall(Number(event.target.value))} /></label>
        <label><span><b>Unscheduled treatment</b><strong>{'$'}{unscheduledTreatment.toLocaleString()}</strong></span><input aria-label="Unscheduled treatment value" type="range" min="0" max="250000" step="5000" value={unscheduledTreatment} onChange={event=>setUnscheduledTreatment(Number(event.target.value))} /></label>
        <label><span><b>Eligible patient balances</b><strong>{'$'}{patientBalances.toLocaleString()}</strong></span><input aria-label="Eligible patient balances" type="range" min="0" max="150000" step="5000" value={patientBalances} onChange={event=>setPatientBalances(Number(event.target.value))} /></label>
      </div>
      <div className="rl-audit-action"><button type="button" onClick={()=>setStep(2)}>Show my revenue audit <b>→</b></button><small>See your estimate before sharing contact details.</small></div>
    </div> : <div className="rl-audit-result rl-audit-report">
      <div className="rl-estimate"><span>Illustrative monthly revenue opportunity</span><output>{'$'}{estimate.toLocaleString()}</output><small>Planning estimate based on the assumptions shown below</small></div>
      <div className="rl-opportunity-grid">{opportunities.map(item => <article key={item.label}><span>{item.label}</span><strong>{'$'}{item.value.toLocaleString()}</strong><small>{item.note}</small></article>)}</div>
      <p className="rl-assumptions">Planning assumptions: 20% of missed calls, 15% of unbooked ad and website leads, 25% of cancellations, 8% of overdue recalls, 5% of unscheduled treatment, and 12% of eligible balances create a completed monthly opportunity. Your full audit replaces these assumptions with your baseline, acquisition channels, capacity, and practice rules.</p>
      <form className="rl-contact-form" onSubmit={submit}><div><strong>Want the full clinic audit?</strong><small>We will review your baseline, capacity, insurance friction, PMS fit, and reporting requirements.</small></div><label><span>Name</span><input name="name" autoComplete="name" required placeholder="Jane Smith" /></label><label><span>Work email</span><input name="email" type="email" autoComplete="email" required placeholder="jane@yourclinic.com" /></label><label><span>Phone</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="(403) 555-0123" /></label><label><span>Clinic</span><input name="clinic" autoComplete="organization" required placeholder="Your clinic" /></label><button type="submit">Request my full audit <b>→</b></button></form>
      <button className="rl-back" type="button" onClick={()=>setStep(1)}>Adjust my clinic numbers</button><small>No credit card. No patient data. A person reviews every request.</small>
    </div>}
  </div>;
}
