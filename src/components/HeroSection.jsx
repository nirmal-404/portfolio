import React from 'react'
import { ArrowDown } from 'lucide-react'


const HeroSection = () => {
    return (
        <section id="hero" className='relative min-h-screen flex flex-col items-center justify-center px-4 pt-20'>
            <div className='container max-w-5xl mx-auto text-center z-10'>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
                    Available for meaningful work
                </div>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.95]">
                    <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                    <span className='text-primary ml-2 opacity-0 animate-fade-in-delay-1 block md:inline'>
                        {""}
                        Nirmal
                    </span>
                    <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-1'>
                        {""}
                        Perera
                    </span>

                </h1>
                <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-8 opacity-0 animate-fade-in-delay-3'>
                    I design and build sharp, human-centered web experiences where thoughtful interfaces meet dependable engineering.
                </p>

                <div className='pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4'>
                    <a href="#projects" className='cosmic-button'>
                        View my work
                    </a>
                    <a href="#contact" className='px-6 py-3 rounded-md border border-border bg-card/40 font-semibold text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary/10'>
                        Start a conversation
                    </a>
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}

export default HeroSection
