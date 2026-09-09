import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { club } from '@/lib/club';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return club.leaders.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = club.leaders.find((member) => member.slug === slug);
  return { title: member?.name ?? 'Member not found' };
}
export default async function MemberPage({ params }: Props) {
  const { slug } = await params;
  const member = club.leaders.find((member) => member.slug === slug);
  if (!member) notFound();
  return (
    <main id="main" className="wrap member-page">
      <a className="text-link member-back" href="/team">
        Back to the team
      </a>
      <section className="member-layout">
        <div className="portrait-panel member-portrait">
          <Image
            unoptimized
            src={member.portrait}
            alt={member.name}
            width={600}
            height={600}
            className="team-portrait"
          />
        </div>
        <div className="member-copy">
          <p className="eyebrow">CLUB LEADERSHIP</p>
          <h1>{member.name}</h1>
          <p className="member-role">{member.role}</p>
          <p className="member-year">Class of {member.classYear}</p>
          <div className="member-bio">
            <h2>About {member.name.split(' ')[0]}</h2>
            <p className="body-copy">{member.bio}</p>
            <p className="bio-note">Full bio coming soon.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
