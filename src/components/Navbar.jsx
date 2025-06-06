import { HeartOff, Menu, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]
const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // Check initial scroll position
        
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    
    return (
        <header>
            {/* Fixed navbar */}
            <nav className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
            )}>
                <div className="container flex items-center justify-between">
                    <a className='text-xl font-bold text-primary flex items-center'
                        href='#hero'>
                        <span className='relative z-10'>
                            {""}
                            <span className='text-glow text-foreground'> Nirmal's </span> Portfolio
                        </span>
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile nav toggle */}
                    <button className='md:hidden p-2 text-foreground z-50' 
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    > 
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>
            
            {/* Mobile menu overlay - completely separate from navbar */}
            <div
                className={cn(
                    "fixed inset-0 z-30 bg-background backdrop-blur-md flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Navbar