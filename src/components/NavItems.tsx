import { navLinks } from '../constants';
export default function NavItems() {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <a key={id} className="nav-li" href={href}>
          <span className="nav-li_a">{name}</span>
        </a>
      ))}
    </ul>
  );
}
