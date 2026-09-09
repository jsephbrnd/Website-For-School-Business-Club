import Link from 'next/link';
import type { Metadata } from 'next';
import { club } from '@/lib/club';
export const metadata: Metadata = { title: 'Team' };
export default function TeamPage() {
  return (
    <main id="main" className="wrap">
      <section className="page-heading">
        <p className="eyebrow">
          <span className="blue-dot" /> OUR TEAM
        </p>
        <h1>
          Shared ambition.
          <br />
          <span className="muted-heading">Individual perspectives.</span>
        </h1>
        <p className="body-copy">Meet the students behind Common Ground.</p>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <h2>Student led. Together built.</h2>
          <span className="eyebrow">CLUB LEADERSHIP</span>
        </div>
        <div className="team-grid">
          {club.leaders.map((leader, index) => (
            <article className="team-card" key={leader.name}>
              <div
                className={`initial-panel initial-panel-${index}`}
                aria-hidden="true"
              >
                <span className="initials">
                  {leader.initials}
                  <span className="initial-dot">.</span>
                </span>
                <span className="initial-panel-label">
                  COMMON GROUND / {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="team-caption">
                <div>
                  <h2>{leader.name}</h2>
                  <p>{leader.role}</p>
                </div>
                <span className="class-year">Class of {leader.classYear}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="intro content-section">
        <p className="eyebrow">MORE THAN A LEADERSHIP TEAM</p>
        <div>
          <h2>
            A club is the people
            <br />
            who show up.
          </h2>
          <p className="body-copy">
            Every question, conversation, and contribution helps shape Common
            Ground. You don’t need a title to make a difference here.
          </p>
          <Link className="text-link" href="/contact">
            Find out how to join <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="closing">
        <span className="eyebrow">
          COME WITH A QUESTION. LEAVE WITH AN IDEA.
        </span>
        <Link href="/contact">
          Find your people.<span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
