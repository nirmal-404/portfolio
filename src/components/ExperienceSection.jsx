import React from 'react'
import { ExternalLink } from 'lucide-react'

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

                <div className="mx-auto max-w-5xl space-y-6">
                    {experienceEntries.map(entry => (
                        <article
                            key={entry.company + entry.period}
                            className="gradient-border card-hover shadow-sm p-6 md:p-8"
                        >
                            <div className="grid gap-7 md:grid-cols-[minmax(220px,0.8fr)_minmax(0,2fr)] md:gap-10">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 p-1 text-primary overflow-hidden border border-primary/20 shadow-sm">
                                            <img src={entry.icon} alt={entry.company} className="h-full w-full rounded-full object-cover" />
                                        </div>
                                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
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
                                </div>

                                <ul className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
                                    {entry.points.map(point => (
                                        <li key={point} className="flex gap-3 items-start">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
