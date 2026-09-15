'use client';

import { FormEvent, useState } from 'react';

const times = ['9:00 AM', '11:30 AM', '2:00 PM', '4:30 PM'];

export default function VIPConsultation() {
  const [step, setStep] = useState(1);
  const [priority, setPriority] = useState('Schedule recovery');
  const [size, setSize] = useState('1 location');
  const [time, setTime] = useState('11:30 AM');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = `Clinic: ${form.get('clinic')}\nName: ${form.get('name')}\nEmail: ${form.get('email')}\nPhone: ${form.get('phone')}\nPriority: ${priority}\nPractice size: ${size}\nPreferred consultation time: ${time}`;
    window.location.href = `mailto:hello@raysky.ai?subject=${encodeURIComponent('RaySky private revenue consultation')}&body=${encodeURIComponent(body)}`;
  }
  return <section id="consultation" className="vip-consultation" data-luxury-reveal>
    <div className="vip-copy"><span>Private consultation</span><h2>A focused plan for your clinic, not another generic software demo.</h2><p>Choose the revenue priority that matters now. We will map the workflow, integration path, safeguards, and measurement plan around your clinic.</p><small>Step {step} of 2</small></div>
    {step === 1 ? <div className="vip-panel"><fieldset><legend>Where should we begin?</legend>{['Growth and acquisition','Schedule recovery','Recall management','Treatment coordination','Payments and insurance'].map(item=><button className={priority===item?'active':''} type="button" key={item} onClick={()=>setPriority(item)}>{item}<i>↗</i></button>)}</fieldset><fieldset><legend>Practice footprint</legend>{['1 location','2 to 5 locations','6+ locations'].map(item=><button className={size===item?'active':''} type="button" key={item} onClick={()=>setSize(item)}>{item}</button>)}</fieldset><button className="vip-next" type="button" onClick={()=>setStep(2)}>Choose a consultation time <b>→</b></button></div>
    : <form className="vip-panel vip-schedule" onSubmit={submit}><div><span>Preferred time</span><div>{times.map(item=><button className={time===item?'active':''} type="button" key={item} onClick={()=>setTime(item)}>{item}</button>)}</div><small>Mountain Time · We will confirm the date by email</small></div><label><span>Name</span><input name="name" required autoComplete="name" /></label><label><span>Work email</span><input name="email" required type="email" autoComplete="email" /></label><label><span>Phone</span><input name="phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder="(403) 555-0123" /></label><label><span>Clinic</span><input name="clinic" required autoComplete="organization" /></label><button className="vip-next" type="submit">Request my private consultation <b>→</b></button><button className="vip-back" type="button" onClick={()=>setStep(1)}>Change priorities</button></form>}
  </section>;
}
