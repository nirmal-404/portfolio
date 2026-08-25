import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

const experienceEntries = [
    {
        period: '2024 August – 2025 February (6 months)',
        company: 'Atlato Pty Ltd',
        website: 'https://www.atlato.com/',
        role: 'Intern Software Engineer',
        icon: '/icons/atlato.png',
        points: [
            'Developed scalable backend services using Node.js, TypeScript, MySQL, and Sequelize ORM, building and maintaining REST APIs for enterprise applications.',
            'Designed the database schema and implemented the backend of a Global Approval System supporting multi-level, cross-department workflows and rule-based auto-approvals.',
            'Built event-driven workflows with Apache Kafka, integrating a Messenger microservice for email notifications and Firebase real-time push notifications.',
            'Contributed to an Inventory Management System covering products, sellers, item tracking, and inter-warehouse inventory movement.',
            'Implemented secure file and image handling using AWS S3 pre-signed URLs.',
            'Worked with the Saga Pattern for reliable distributed transactions across microservices and used APIDog for API testing and documentation.',
        ],
    },
]

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Work <span className="text-primary">Experience</span>
                </h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                    A snapshot of my engineering work, systems thinking, and backend delivery experience.
                </p>

                <div className="relative mx-auto max-w-4xl">
                    <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border/80 md:-translate-x-1/2" />

                    <div className="space-y-8 md:space-y-12">
                        {experienceEntries.map((entry, index) => {
                            const isLeft = index % 2 === 0

                            return (
                                <motion.div
                                    key={entry.company + entry.period}
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
                                                <div className="flex items-center gap-3 mb-4 md:justify-start">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 p-1 text-primary overflow-hidden border border-primary/20 shadow-sm">
                                                        <img
                                                            src={entry.icon}
                                                            alt={entry.company}
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
                                                    <span>{entry.company}</span>
                                                    <ExternalLink className="h-4 w-4 shrink-0" />
                                                </a>
                                                <p className="mt-2 text-base font-medium text-foreground/90">{entry.role}</p>

                                                <ul className="mt-5 space-y-3 text-sm text-muted-foreground text-left md:text-left">
                                                    {entry.points.map((point) => (
                                                        <li key={point} className="flex gap-3 items-start">
                                                            <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
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

export default ExperienceSection
