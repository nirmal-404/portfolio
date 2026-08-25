import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

const educationEntries = [
    {
        period: '2023 August – Present',
        institution: 'SLIIT',
        website: 'https://www.sliit.lk/',
        title: 'BSc (Hons) in Information Technology',
        subtitle: 'Specialization in Software Engineering',
        icon: '/icons/sliit.png',
    },
    {
        period: '2013 – 2023',
        institution: 'Royal College',
        website: 'https://royalcollege.lk/',
        title: 'G.C.E. Advanced Level – Physical Sciences',
        subtitle: 'G.C.E. Ordinary Level',
        icon: '/icons/royalcollege.png',
    },
]

const EducationSection = () => {
    return (
        <section id="education" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Education</span>
                </h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                    Academic background and qualifications that shaped my software engineering journey.
                </p>

                <div className="relative mx-auto max-w-3xl">
                    <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border/80 md:-translate-x-1/2" />

                    <div className="space-y-8 md:space-y-10">
                        {educationEntries.map((entry, index) => {
                            const isLeft = index % 2 === 0

                            return (
                                <motion.div
                                    key={entry.institution + entry.period}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.45, ease: 'easeOut' }}
                                    whileHover={{ y: -4 }}
                                    className="relative"
                                >
                                    <div className="md:grid md:grid-cols-2 md:items-center">
                                        <div className={cn(
                                            'md:col-span-1',
                                            isLeft ? 'md:pr-10 md:text-right' : 'md:col-start-2 md:pl-10 md:text-left'
                                        )}>
                                            <motion.article className="gradient-border p-6 card-hover shadow-sm">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 p-1 text-primary overflow-hidden border border-primary/20 shadow-sm">
                                                        <img
                                                            src={entry.icon}
                                                            alt={entry.institution}
                                                            className="h-full w-full rounded-full object-cover"
                                                        />
                                                    </div>
                                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                                        {entry.period}
                                                    </span>
                                                </div>

                                                <a
                                                    href={entry.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300"
                                                >
                                                    <span>{entry.institution}</span>
                                                    <ExternalLink className="h-4 w-4 shrink-0" />
                                                </a>
                                                <p className="mt-2 text-base font-medium text-foreground/90">{entry.title}</p>
                                                <p className="mt-2 text-sm text-muted-foreground">{entry.subtitle}</p>
                                            </motion.article>
                                        </div>
                                    </div>

                                    <div className="absolute left-3 top-8 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-background bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.12)] md:left-1/2" />
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EducationSection
