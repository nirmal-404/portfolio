import { ArrowUpRight, Code2, Award } from 'lucide-react'
import { createElement } from 'react'
import { Link } from 'react-router-dom'

const credentials = [
  {
    title: 'Former Software Engineering Intern',
    organization: 'Atlato Pty Ltd',
    detail: 'Built backend services, approval workflows, and event-driven integrations.',
    href: '/about/experience',
    logo: '/icons/atlato.png',
  },
  {
    title: 'Software Engineering Undergraduate',
    organization: 'SLIIT',
    detail: 'BSc (Hons) in IT, specializing in Software Engineering.',
    highlights: ['Member of the Mozilla Campus Club of SLIIT'],
    href: '/about/education',
    logo: '/icons/sliit.png',
  },
  {
    title: 'Proud Royalist',
    organization: 'Royal College',
    detail: '2013–2023 · A/L Physical Sciences',
    highlights: ['Former cadet band member', 'Former scout', 'Member of the Gavel Club'],
    href: '/about/education',
    logo: '/icons/royalcollege.png',
  },
  {
    title: 'Hands-on Project Experience',
    organization: 'Web · Mobile · Backend',
    detail: 'Explore applications, microservices, and practical engineering projects.',
    href: '/work',
    icon: Code2,
  },
  {
    title: 'Additional Certifications',
    organization: 'DevOps · AI/ML · Web Development',
    detail: 'Training from KodeKloud, SLIIT CODE, and more.',
    href: '/about/certifications',
    icon: Award,
  },
]

export default function AboutPreview() {
  return (
    <section className="container max-w-6xl mb-10 text-left" aria-labelledby="about-preview-title">
      <p className="section-kicker">My background at a glance</p>
      <h2 id="about-preview-title" className="mb-6 text-2xl font-bold sm:text-3xl">
        Industry experience. <span className="text-primary">A foundation to build on.</span>
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {credentials.map(({ title, organization, detail, highlights, href, logo, icon: Icon }, index) => (
          <Link key={title} to={href} className={`group rounded-xl border border-border bg-card/80 p-5 transition-colors hover:border-primary/60 hover:bg-primary/5 ${index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'} ${index === 4 ? 'sm:col-span-2' : ''}`}>
            <div className="mb-3 flex items-center justify-between text-primary">
              {logo ? (
                <img src={logo} alt={`${organization} logo`} width={48} height={48} className="h-12 w-12 object-contain" />
              ) : (
                <span className="flex h-12 w-12 items-center justify-center">{createElement(Icon, { size: 24, 'aria-hidden': true })}</span>
              )}
              <ArrowUpRight size={17} aria-hidden="true" />
            </div>
            <h3 className="text-base font-semibold leading-snug">{title}</h3>
            <p className="mt-1 text-sm font-medium text-primary">{organization}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
            {highlights && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-primary">
                {highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
              </ul>
            )}
          </Link>
        ))}
      </div>
    </section>
  )
}
