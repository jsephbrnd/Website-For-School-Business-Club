import Image from 'next/image';
export default function Home() {
  return <main id="main" className="wrap home-page">
    <section className="home-window">
      <div className="window-bar">COMMON GROUND CLUB <span aria-hidden="true">▣ ▣ ▣</span></div>
      <div className="space-hero">
        <div className="hero-copy"><h1>Big ideas.<br />Beyond orbit.</h1><p>A student business club for curious minds. Meet people, explore business, and build something together.</p><a className="button" href="/projects">Explore our projects</a><a className="button secondary" href="/team">Meet the crew</a></div>
        <div className="space-scene"><Image src="/pixel-space.svg" alt="Pixel-art astronaut with a briefcase exploring a moon beneath a ringed planet" width={640} height={560} priority unoptimized /></div>
      </div>
    </section>
    <section className="mission-strip"><h2>Your next mission?</h2><p>Guest speakers, new ideas, and room to try something new.</p><a className="button" href="/about">About the club</a></section>
    <section className="home-log"><div><p className="eyebrow">THE FLIGHT LOG</p><h2>Missed a meeting?</h2><p>Find club recaps and notes in our meeting history.</p></div><a className="button secondary" href="/meeting-history">Open meeting history</a></section>
  </main>;
}
