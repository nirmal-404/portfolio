import { Home, Briefcase, User, ArrowUpRight } from 'lucide-react';
import { createElement } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
const items = [{
  name: 'Home',
  id: 'home',
  icon: Home
}, {
  name: 'Work',
  id: 'work',
  icon: Briefcase
}, {
  name: 'About',
  id: 'about',
  icon: User
}];
export default function Navbar({
  view,
  onContact
}) {
  const links = items.map(({
    name,
    id,
    icon: Icon
  }) => <Link key={id} to={id === 'home' ? '/' : `/${id}`} aria-current={view === id ? 'page' : undefined}>{createElement(Icon, { size: 17, 'aria-hidden': true })}<span>{name}</span></Link>);
  return <header><div className="portfolio-header"><div className="container flex items-center justify-between gap-3"><Link to="/" className="font-bold text-lg">Nirmal<span className="text-primary">.</span></Link><nav aria-label="Main navigation" className="desktop-navigation">{links}</nav><div className="flex items-center gap-2"><ThemeToggle /><button onClick={onContact} className="contact-trigger">Let’s talk <ArrowUpRight size={16} /></button></div></div></div><nav aria-label="Mobile navigation" className="mobile-dock">{links}</nav></header>;
}
