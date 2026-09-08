'use client';

import { FormEvent, useMemo, useState } from 'react';

export default function RevenueAudit() {
  const [step, setStep] = useState(1);
  const [missedCalls, setMissedCalls] = useState(18);
  const [cancellations, setCancellations] = useState(10);
  const [visitValue, setVisitValue] = useState(550);
  const estimate = useMemo(() => {
    const completedVisits = ((missedCalls * 4.33 * 0.2) + (cancellations * 0.25)) * 0.85;
    return Math.round((completedVisits * visitValue) / 100) * 100;
  }, [missedCalls, cancellations, visitValue]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const campaign = new URLSearchParams(window.location.search);
    const body = [
      'I completed the RaySky revenue leak audit.', '',
      `Estimated monthly production opportunity: $${estimate.toLocaleString()}`,
      `Missed calls each week: ${missedCalls}`,
      `Monthly cancellations: ${cancellations}`,
      `Adjusted visit value: $${visitValue.toLocaleString()}`,
      `Name: ${form.get('name')}`,
      `Email: ${form.get('email')}`,
      `Clinic: ${form.get('clinic')}`,
      `Campaign source: ${campaign.get('utm_source') || 'Direct / not provided'}`,
      `Campaign: ${campaign.get('utm_campaign') || 'Not provided'}`,
    ].join('\n');
    const trackedWindow = window as Window & { dataLayer?: Array<Record<string,string|number>> };
    trackedWindow.dataLayer?.push({ event: 'revenue_leak_audit', estimated_opportunity: estimate });
    window.location.href = `mailto:hello@raysky.ai?subject=${encodeURIComponent('My RaySky revenue leak audit')}&body=${encodeURIComponent(body)}`;
  }

  return <div id="audit" className="rl-audit">
    <div className="rl-audit-head"><span>Free 2 minute clinic audit</span><strong>{step === 1 ? 'Find the revenue hiding in your schedule.' : 'Your first opportunity is visible.'}</strong><small>Step {step} of 2</small></div>
    {step === 1 ? <div className="rl-audit-controls">
      <label><span><b>Missed calls each week</b><strong>{missedCalls}</strong></span><input aria-label="Missed calls each week" type="range" min="0" max="80" value={missedCalls} onChange={event=>setMissedCalls(Number(event.target.value))} /></label>
      <label><span><b>Last minute cancellations each month</b><strong>{cancellations}</strong></span><input aria-label="Monthly cancellations" type="range" min="0" max="40" value={cancellations} onChange={event=>setCancellations(Number(event.target.value))} /></label>
      <label><span><b>Average completed visit value</b><strong>${visitValue.toLocaleString()}</strong></span><input aria-label="Average completed visit value" type="range" min="200" max="2000" step="50" value={visitValue} onChange={event=>setVisitValue(Number(event.target.value))} /></label>
      <button type="button" onClick={()=>setStep(2)}>Reveal my opportunity <b>→</b></button>
      <small>No contact details required for your estimate.</small>
    </div> : <form className="rl-audit-result" onSubmit={submit}>
      <div className="rl-estimate"><span>Illustrative monthly production opportunity</span><output>${estimate.toLocaleString()}</output><small>Based on visible planning assumptions, not a guarantee</small></div>
      <p>Get the full audit with your baseline, capacity, and practice system requirements.</p>
      <div><label><span>Name</span><input name="name" autoComplete="name" required placeholder="Jane Smith" /></label><label><span>Work email</span><input name="email" type="email" autoComplete="email" required placeholder="jane@yourclinic.com" /></label><label><span>Clinic</span><input name="clinic" autoComplete="organization" required placeholder="Your clinic" /></label></div>
      <button type="submit">Email my full audit request <b>→</b></button>
      <button className="rl-back" type="button" onClick={()=>setStep(1)}>Adjust my numbers</button>
      <small>No patient data. No credit card. You stay in control.</small>
    </form>}
  </div>;
}
