'use client';

import { FormEvent, useState } from 'react';

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false);

  function submitAudit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const campaign = new URLSearchParams(window.location.search);
    const body = [
      'I would like a RaySky clinic revenue audit and demo.', '',
      `Name: ${form.get('name')}`,
      `Work email: ${form.get('email')}`,
      `Phone: ${form.get('phone')}`,
      `Clinic: ${form.get('clinic')}`,
      `Clinic type: ${form.get('type')}`,
      `Primary goal: ${form.get('goal')}`,
      `Campaign source: ${campaign.get('utm_source') || 'Direct / not provided'}`,
      `Campaign: ${campaign.get('utm_campaign') || 'Not provided'}`,
    ].join('\n');
    setSubmitted(true);
    const trackedWindow = window as Window & { dataLayer?: Array<Record<string,string>> };
    trackedWindow.dataLayer?.push({ event: 'revenue_audit_request', clinic_type: String(form.get('type')), primary_goal: String(form.get('goal')) });
    window.location.href = `mailto:hello@raysky.ai?subject=${encodeURIComponent('Clinic revenue audit request')}&body=${encodeURIComponent(body)}`;
  }

  return <form id="audit" className="bp-form" onSubmit={submitAudit}>
    <div className="bp-form-head"><span>Free revenue audit + demo</span><h2>Find your highest-value revenue leak.</h2><p>Tell us a little about your clinic. We’ll prepare a focused 15-minute review.</p></div>
    <label><span>Your name</span><input name="name" autoComplete="name" required placeholder="Jane Smith" /></label>
    <label><span>Work email</span><input name="email" type="email" autoComplete="email" required placeholder="jane@yourclinic.com" /></label>
    <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" required placeholder="(555) 000-0000" /></label>
    <label><span>Clinic name</span><input name="clinic" autoComplete="organization" required placeholder="Your clinic" /></label>
    <label><span>Clinic type</span><select name="type" defaultValue="Dental clinic"><option>Dental clinic</option><option>Medical clinic</option><option>Multi-location group</option><option>Other outpatient clinic</option></select></label>
    <label><span>Primary goal</span><select name="goal" defaultValue="Recover missed calls"><option>Recover missed calls</option><option>Fill cancellations and no-shows</option><option>Convert pending treatment</option><option>Prove marketing ROI</option><option>Improve collections</option><option>I’m not sure yet</option></select></label>
    <button type="submit">{submitted?'Opening your email…':'Book my free revenue audit'}<b>↗</b></button>
    <small>No patient information. RaySky will only use these details to respond to your request.</small>
  </form>;
}
