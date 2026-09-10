import Image from 'next/image';
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
        <p className="body-copy">
          Meet the students behind Common Ground Club.
        </p>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <h2>Student led. Together built.</h2>
          <span className="eyebrow">CLUB LEADERSHIP</span>
        </div>
        <div className="team-grid">
          {club.leaders.map((leader, index) => (
            <a
              className="team-card team-card-link"
              key={leader.name}
              href={`/team/${leader.slug}`}
              aria-label={`View ${leader.name}’s profile`}
            >
              <div className="portrait-panel">
                {leader.slug === 'joseph-barnard' ? (
                  <video className="team-portrait team-video" src="/joseph-barnard.mp4" poster={leader.portrait} autoPlay muted loop playsInline preload="metadata" aria-label="Joseph Barnard" controls />
                ) : (
                  <Image
                  unoptimized
                  src={leader.portrait}
                  alt={leader.name}
                  width={600}
                  height={600}
                  className={`team-portrait portrait-${index}`}
                />
                )}
              </div>
              <div className="team-caption">
                <div>
                  <h2>{leader.name}</h2>
                  <p>{leader.role}</p>
                  <span className="profile-label">View profile</span>
                </div>
                <span className="class-year">Class of {leader.classYear}</span>
              </div>
            </a>
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
            Ground Club. You don’t need a title to make a difference here.
          </p>
        </div>
      </section>
    </main>
  );
}
