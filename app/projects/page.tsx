import type { Metadata } from 'next';
import { club } from '@/lib/club';
export const metadata: Metadata = { title: 'Projects' };
export default function ProjectsPage() {
  return (
    <main id="main" className="wrap">
      <section className="page-heading">
        <p className="eyebrow">
          <span className="blue-dot" /> OUR PROJECTS
        </p>
        <h1>
          Beyond the idea.
          <br />
          <span className="muted-heading">Into the room.</span>
        </h1>
        <p className="body-copy">
          Five ways to connect with business, hear new perspectives, and get
          involved with Common Ground Club.
        </p>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <h2>What brings us together.</h2>
          <span className="eyebrow">05 INITIATIVES</span>
        </div>
        <div className="project-list">
          {club.projects.map((project, index) => (
            <article className="project-row" key={project.name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{project.name}</h3>
                <span className="project-category">{project.category}</span>
              </div>
              <div>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
