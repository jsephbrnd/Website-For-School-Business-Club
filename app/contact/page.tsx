import type { Metadata } from 'next';
import { club, emailLink } from '@/lib/club';
export const metadata: Metadata = { title: 'Contact Us' };
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string | string[] }>;
}) {
  const params = await searchParams;
  const selectedProject =
    typeof params.project === 'string' &&
    club.projects.some((p) => p.name === params.project)
      ? params.project
      : undefined;
  return (
    <main id="main" className="wrap">
      <section className="page-heading">
        <p className="eyebrow">
          <span className="blue-dot" /> CONTACT US
        </p>
        <h1>
          A good conversation
          <br />
          <span className="muted-heading">starts with hello.</span>
        </h1>
        <p className="body-copy">
          Want to join the club, share an idea, or be part of a meeting? We’d
          like to hear from you.
        </p>
      </section>
      <section className="content-section two-col">
        <div>
          <p className="eyebrow">LET’S CONNECT</p>
          <div className="contact-topics">
            <article className="contact-topic">
              <h3>Join the club</h3>
              <p>Ask about upcoming meetings and how to get involved.</p>
            </article>
            <article className="contact-topic">
              <h3>Speak or collaborate</h3>
              <p>
                Share your experience with our members or suggest a project.
              </p>
            </article>
            <article className="contact-topic">
              <h3>Bring an idea</h3>
              <p>
                A question, a possibility, or something you’d like to explore
                together.
              </p>
            </article>
          </div>
        </div>
        <div className="contact-panel">
          <span className="eyebrow">DIRECT TO THE CLUB</span>
          <h2>Our inbox is open.</h2>
          <p>
            Reach out to Joseph Barnard,
            <br />
            President / Founder.
          </p>
          <a
            className="contact-email"
            href={emailLink(
              selectedProject
                ? `Common Ground — ${selectedProject}`
                : 'Hello, Common Ground',
            )}
          >
            {club.email}
            <span aria-hidden="true">↗</span>
          </a>
          {selectedProject && (
            <p className="project-inquiry">Your topic: {selectedProject}</p>
          )}
          <a
            className="button"
            href={emailLink(
              selectedProject
                ? `Common Ground — ${selectedProject}`
                : 'Hello, Common Ground',
            )}
          >
            Write us an email <span aria-hidden="true">↗</span>
          </a>
          <span className="email-note">Opens in your email app.</span>
        </div>
      </section>
      <section className="contact-end">
        <p className="eyebrow">COMMON GROUND</p>
        <p>
          Different perspectives.
          <br />
          <span className="muted-heading">One place to start.</span>
        </p>
      </section>
    </main>
  );
}
