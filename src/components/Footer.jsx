import React from 'react'
import { ArrowUp } from "lucide-react";
import { siFacebook, siGithub, siMedium } from 'simple-icons';
import { Linkedin } from 'lucide-react';

const socialLinks = [
    {
        name: 'Facebook',
        href: 'https://web.facebook.com/manusha.perera.526/about',
        icon: siFacebook,
    },
    {
        name: 'GitHub',
        href: 'https://github.com/nirmal-404',
        icon: siGithub,
    },
    {
        name: 'Medium',
        href: 'https://medium.com/@nirmalperera2509',
        icon: siMedium,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/nirmal-perera-65446b252/',
        icon: null,
    },
];

const Footer = () => {
    return (
        <footer className="mt-12 border-t border-border bg-card/80 backdrop-blur-sm">
            <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-lg font-semibold text-foreground">Nirmal Perera</p>
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <a href="#hero" className="hover:text-primary transition-colors">Home</a>
                    <a href="#about" className="hover:text-primary transition-colors">About</a>
                    <a href="#education" className="hover:text-primary transition-colors">Education</a>
                    <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                    <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                    <a href="#certifications" className="hover:text-primary transition-colors">Certifications</a>
                    <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                    <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                </nav>

                <div className="flex items-center gap-3">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={link.name}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                            {link.icon ? (
                                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true" focusable="false">
                                    <path d={link.icon.path} />
                                </svg>
                            ) : (
                                <Linkedin />
                            )}
                        </a>
                    ))}
                    <a
                        href="#hero"
                        aria-label="Back to top"
                        className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:opacity-90"
                    >
                        <ArrowUp size={18} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
