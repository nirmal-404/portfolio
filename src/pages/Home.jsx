import React from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import StraBackground from '@/components/StraBackground'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* Theme toggle */}
      <ThemeToggle />

      {/* Backgorund Effects*/}
      <StraBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer Section */}
      <Footer />

    </div>
  )
}

export default Home
