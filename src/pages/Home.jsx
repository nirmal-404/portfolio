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
export default function Home() {
  const {
    pathname,
    hash
  } = useLocation();
  const pathParts = pathname.split('/').filter(Boolean);
  const hashTarget = hash.replace(/^#/, '');
  const targetFromPath = pathParts[0] || 'home';
  const target = hashTarget || targetFromPath;
  const isAboutTarget = pathParts[0] === 'about' || hashTarget === 'about' || hashTarget.startsWith('about/');
  const view = ['work', 'projects'].includes(target) ? 'work' : isAboutTarget ? 'about' : 'home';
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
 {view === 'about' && <div className="about-view">
   <AboutSection onContact={() => contact.current.showModal()} />
   <ExperienceSection />
   <SkillsSection />
   <EducationSection />
   <CertificationsSection />
 </div>}
 </div></main><Footer /><dialog ref={contact} className="portfolio-dialog contact-dialog" aria-label="Get in touch"><button className="dialog-close" aria-label="Close contact" onClick={() => contact.current.close()}><X /></button><ContactSection /></dialog></div>;
}
