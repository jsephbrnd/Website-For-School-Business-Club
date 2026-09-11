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
        <div className="meeting-empty">
          <span className="eyebrow">NOTHING POSTED YET</span>
          <h3>Meeting recaps will appear here.</h3>
          <p className="body-copy">Check back for meeting dates, highlights, and what comes next.</p>
        </div>
      </section>
    </main>
  );
}
