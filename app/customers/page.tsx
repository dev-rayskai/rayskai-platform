import { PageHero, SiteShell } from "@/components/site-shell";
const stories = [
  [
    "Dental",
    "A more responsive first impression",
    "Help new-patient demand find its path to the appointment calendar.",
  ],
  [
    "Med Spa",
    "More consultations from existing demand",
    "Keep treatment interest warm between the first enquiry and the next appointment.",
  ],
  [
    "Orthodontics",
    "A clearer path to accepted treatment",
    "Coordinate prospective-patient follow-up without adding front-desk load.",
  ],
  [
    "Primary Care",
    "Access that feels easier for patients",
    "Reduce friction across scheduling, intake, and recall.",
  ],
  [
    "Specialty Clinics",
    "One clearer view of complex journeys",
    "Create a consistent patient experience across referrals and locations.",
  ],
];
export default function Customers() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="PRACTICE OUTCOMES"
        title="Built around the moments patients choose you."
        copy="Make the first response more useful, consistent, and revenue-aware."
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-28 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map(([type, title, copy]) => (
          <article key={type} className="glass rounded-3xl p-7">
            <p className="text-sm font-semibold text-primary">{type}</p>
            <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-7 text-muted">{copy}</p>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
