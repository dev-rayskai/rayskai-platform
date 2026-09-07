'use client';

import { FormEvent, useState } from 'react';

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const campaign = new URLSearchParams(window.location.search);
    const body = [
      'I would like a RaySky dental revenue assessment.',
      '',
      `Name: ${form.get('name')}`,
      `Work email: ${form.get('email')}`,
      `Phone: ${form.get('phone')}`,
      `Clinic: ${form.get('clinic')}`,
      `Primary opportunity: ${form.get('priority')}`,
      `Campaign source: ${campaign.get('utm_source') || 'Direct / not provided'}`,
      `Campaign: ${campaign.get('utm_campaign') || 'Not provided'}`,
    ].join('\n');
    setSubmitted(true);
    const trackedWindow = window as Window & { dataLayer?: Array<Record<string,string>> };
    trackedWindow.dataLayer?.push({ event: 'assessment_request', primary_opportunity: String(form.get('priority')) });
    window.location.href = `mailto:hello@raysky.ai?subject=${encodeURIComponent('Dental revenue assessment request')}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="ad-lead-form" onSubmit={submitRequest}>
      <div className="form-heading">
        <span>Free clinic assessment</span>
        <strong>See where revenue is slipping away.</strong>
        <p>We’ll map your highest-value recovery opportunity and show what RaySky can complete.</p>
      </div>
      <label><span>Your name</span><input name="name" autoComplete="name" required placeholder="Jane Smith" /></label>
      <label><span>Work email</span><input name="email" type="email" autoComplete="email" required placeholder="jane@yourclinic.com" /></label>
      <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" required placeholder="(555) 000-0000" /></label>
      <label><span>Clinic name</span><input name="clinic" autoComplete="organization" required placeholder="Your dental clinic" /></label>
      <label className="form-wide"><span>Where is the biggest opportunity?</span><select name="priority" defaultValue="Missed calls and unbooked leads"><option>Missed calls and unbooked leads</option><option>Overdue recall and cancellations</option><option>Unscheduled treatment</option><option>Insurance and eligibility friction</option><option>Outstanding patient balances</option><option>I’m not sure yet</option></select></label>
      <button className="ad-primary form-wide" type="submit">{submitted ? 'Opening your email…' : 'Get my recovery assessment'} <b aria-hidden="true">↗</b></button>
      <small className="form-wide">No patient information. By submitting, you agree RaySky may contact you about this request.</small>
    </form>
  );
}
