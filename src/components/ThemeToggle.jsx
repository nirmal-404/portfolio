import { Moon, Sun } from 'lucide-react'
import React, { useEffect } from 'react'
import { cn } from '@/lib/utils'
const ThemeToggle = () => {


    useEffect(() => {
        localStorage.setItem('theme', 'dark')
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            setIsDarkMode(true)
        } else {
            document.documentElement.classList.remove('dark')
            setIsDarkMode(false)
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setIsDarkMode(true)
        }
    }
    const [isDarkMode, setIsDarkMode] = React.useState(true)
    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "hidden md:flex items-center justify-center h-10 w-10 rounded-full border border-border/70 bg-background/70 text-foreground shadow-sm transition-all duration-300 hover:border-primary/60 hover:text-primary",
                "focus:outline-hidden"
            )}
            aria-label="Toggle theme"
        >
            {isDarkMode ? <Sun className='h-5 w-5 text-yellow-300' /> : <Moon className='h-5 w-5 text-blue-900' />}
        </button>
    )
}

export default ThemeToggle
