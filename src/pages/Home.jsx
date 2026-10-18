import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import StraBackground from '@/components/StraBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AboutPreview from '@/components/AboutPreview';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
const aboutViews = {
  overview: AboutSection,
  experience: ExperienceSection,
  skills: SkillsSection,
  education: EducationSection,
  certifications: CertificationsSection
};
export default function Home() {
  const {
    pathname,
    hash
  } = useLocation();
  const pathParts = pathname.split('/').filter(Boolean);
  const hashTarget = hash.replace(/^#/, '');
  const targetFromPath = pathParts[0] || 'home';
  const target = hashTarget || targetFromPath;
  const aboutKey = pathParts[0] === 'about' ? (pathParts[1] || 'overview') : hashTarget.startsWith('about/') ? hashTarget.split('/')[1] : 'overview';
  const view = ['work', 'projects'].includes(target) ? 'work' : target === 'about' || Object.hasOwn(aboutViews, aboutKey) ? 'about' : 'home';
  const activeAbout = Object.hasOwn(aboutViews, aboutKey) ? aboutKey : 'overview';
  const AboutContent = aboutViews[activeAbout];
  const contact = useRef(null),
    main = useRef(null),
    initial = useRef(true);
  useEffect(() => {
    if (target === 'contact') {
      contact.current.showModal();
      return;
    }
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    if (!initial.current) main.current.focus({
      preventScroll: true
    });
    initial.current = false;
    document.title = view[0].toUpperCase() + view.slice(1) + ' · Nirmal Perera';
  }, [hash, target, view]);
  return <div className="portfolio-app min-h-screen bg-background text-foreground overflow-x-hidden"><StraBackground /><Navbar view={view} onContact={() => contact.current.showModal()} /><main ref={main} tabIndex={-1} className="portfolio-main"><div key={view} className="view-enter">
 {view === 'home' && <><HeroSection onContact={() => contact.current.showModal()} /><AboutPreview /><ProjectsSection featured /></>}
 {view === 'work' && <ProjectsSection />}
 {view === 'about' && <div className="about-view"><div className="container max-w-6xl"><p className="section-kicker">The person behind the work</p><h1 className="text-4xl sm:text-5xl font-bold mb-8">A little <span className="text-primary">about me.</span></h1><nav className="about-navigation" aria-label="About sections">{Object.keys(aboutViews).map(key => <a key={key} href={'/about/' + key} aria-current={key === activeAbout ? 'page' : undefined}>{key[0].toUpperCase() + key.slice(1)}</a>)}</nav></div><div key={activeAbout} className="about-content view-enter"><AboutContent onContact={() => contact.current.showModal()} /></div></div>}
 </div></main><Footer /><dialog ref={contact} className="portfolio-dialog contact-dialog" aria-label="Get in touch"><button className="dialog-close" aria-label="Close contact" onClick={() => contact.current.close()}><X /></button><ContactSection /></dialog></div>;
}
