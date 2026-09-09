export const club = {
  name: 'Common Ground Club',
  email: 'Barnardj28@student.jhs.net',
  leaders: [
    {
      name: 'Joseph Barnard',
      initials: 'JB',
      portrait: '/joseph-barnard.png',
      role: 'President / Founder',
      classYear: '2028',
    },
    {
      name: 'Grayson Gilbert',
      initials: 'GG',
      portrait: '/grayson-gilbert.png',
      role: 'Vice President',
      classYear: '2027',
    },
  ],
  projects: [
    {
      name: 'Virtual Guest Speaker Series',
      category: 'Perspectives, beyond the room',
      description:
        'Conversations with guest speakers in a virtual setting. A chance to ask questions and explore different paths in business.',
    },
    {
      name: 'Guest Speaker Meetings',
      category: 'Real stories. Open conversation.',
      description:
        'A space to meet guest speakers, hear their experiences, and discuss the ideas behind their work.',
    },
    {
      name: 'Club Meetings',
      category: 'Our common ground',
      description:
        'Time for members to connect, exchange ideas, and help shape what the club does next.',
    },
    {
      name: 'Business Professionals of America',
      category: 'Developing our professional interests',
      description:
        'Our Business Professionals of America initiative. Contact the club to learn about participation and next steps.',
    },
    {
      name: 'Entrepreneur Club Org',
      category: 'Exploring entrepreneurship',
      description:
        'An initiative for students interested in entrepreneurship. Contact the club to learn more and get involved.',
    },
  ],
};
export function emailLink(subject: string) {
  return `mailto:${club.email}?subject=${encodeURIComponent(subject)}`;
}
