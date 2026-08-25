import React from 'react'
import StraBackground from '@/components/StraBackground'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import EducationSection from '@/components/EducationSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import CertificationsSection from '@/components/CertificationsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>

      {/* Backgorund Effects*/}
      <StraBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer Section */}
      <Footer />

    </div>
  )
}

export default Home
