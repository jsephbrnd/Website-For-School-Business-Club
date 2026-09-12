import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Meeting History' };

export default function MeetingHistoryPage() {
  return (
    <main id="main" className="wrap">
      <section className="page-heading">
        <p className="eyebrow"><span className="blue-dot" /> MEETING HISTORY</p>
        <h1>What we’ve<br /><span className="muted-heading">been discussing.</span></h1>
        <p className="body-copy">
          Recaps, guest speakers, and notes from past Common Ground Club meetings.
        </p>
      </section>
      <section className="content-section" aria-labelledby="past-meetings">
        <div className="section-heading">
          <h2 id="past-meetings">Past meetings</h2>
          <span className="eyebrow">THE CLUB ARCHIVE</span>
        </div>
        <article className="meeting-entry quiet-panel">
          <div className="section-heading">
            <time className="eyebrow" dateTime="2026-09-11">SEPTEMBER 11, 2026</time>
            <span className="eyebrow">55 ATTENDEES</span>
          </div>
          <h3>First meeting</h3>
          <p className="body-copy">
            We kicked off Common Ground Club with 55 people in attendance.
            Members met the club leadership, got an introduction to our projects,
            and learned about upcoming opportunities to get involved.
          </p>
        </article>
      </section>
    </main>
  );
}
