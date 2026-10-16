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
        activities: [
            {
                label: 'Member of the Mozilla Campus Club of SLIIT',
                icon: '/icons/mozilla.png',
                website: 'https://www.sliitmozilla.org/',
            },
        ],
    },
    {
        period: '2013 – 2023',
        institution: 'Royal College',
        website: 'https://royalcollege.lk/',
        title: 'G.C.E. Advanced Level – Physical Sciences',
        subtitle: 'G.C.E. Ordinary Level',
        icon: '/icons/royalcollege.png',
        activities: [
            { label: 'Former cadet band member' },
            { label: 'Former scout' },
            { label: 'Member of the Gavel Club' },
        ],
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
                    My academic background, extracurricular activities, and campus community involvement.
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
                                                <div className="mt-5 border-t border-border pt-4 text-left">
                                                    <h3 className="text-sm font-semibold text-foreground">
                                                        {entry.activitiesHeading || 'Beyond the classroom'}
                                                    </h3>
                                                    <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                                                        {entry.activities.map(activity => (
                                                            <li key={activity.label} className="flex items-start gap-3">
                                                                {activity.icon ? (
                                                                    <img src={activity.icon} alt="Mozilla Campus Club logo" width={40} height={40} className="h-10 w-10 shrink-0 object-contain" />
                                                                ) : (
                                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                                                                )}
                                                                {activity.website ? (
                                                                    <a href={activity.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                                                                        {activity.label}
                                                                        <ExternalLink size={14} className="shrink-0" aria-hidden="true" />
                                                                    </a>
                                                                ) : <span>{activity.label}</span>}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
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
