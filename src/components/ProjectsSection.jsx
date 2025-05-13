import React from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Github } from 'lucide-react'
const projects = [
    {
        id: 1,
        title: "Java MVC E-Commerce System",
        description: "An e-commerce application built using Java Servlets, JSP, and the MVC architecture and styled with Tailwind CSS",
        image: "/projects/jsp-ecommerce.png",
        tags: ["Java", "MVC", "Servlet", "JSP", "Tailwind"],
        url: "https://github.com/nirmal-404/oop-group-project"
    },
    {
        id: 2,
        title: "MERN Stack E-Commerce Platform",
        description: "An e-commerce platform built with the MERN stack. Integrations with payment gateways and email services.",
        image: "/projects/mern-ecommerce.png",
        tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "Tailwind", "ShadCN UI"],
        url: "https://github.com/nirmal-404/Rasaa-Spices"
    },
    {
        id: 3,
        title: "AI-Powered Canvas",
        description: "An AI-powered canvas capable of solving equations, recognizing drawings. - powered by Gemini API.",
        image: "/projects/ai-canvas.png",
        tags: ["React", "Tailwind", "TypeScript", "Python", "AI", "Gemini"],
        url: "https://github.com/nirmal-404/AI-Powered-Handwriting-processor.git"
    }
]
const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects i did as a student
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 flex-grow flex flex-col">

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                                <div className="mt-auto pt-2 border-t">
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            {/* <a
                                                href="#"
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                aria-label="Live Demo"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a> */}
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                aria-label="View Source on GitHub"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )).reverse()}
                </div>
                <div className='text-center mt-12'>
                    <a href="https://github.com/nirmal-404" target='_blank' className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                    Check my GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
