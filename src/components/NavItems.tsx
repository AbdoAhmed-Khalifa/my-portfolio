import { useEffect, useState } from 'react';
import { navLinks } from '../constants';

export default function NavItems() {
  const [activeHash, setActiveHash] = useState<string>('#home');

  useEffect(() => {
    const sections = navLinks.map(
      link => document.querySelector(link.href) as HTMLElement | null
    );
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5, 1] }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <a
          key={id}
          className={`nav-li ${activeHash === href ? 'text-white' : ''}`}
          href={href}
        >
          <span className="nav-li_a">{name}</span>
        </a>
      ))}
    </ul>
  );
}
