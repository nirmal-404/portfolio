import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Github, Download } from 'lucide-react'

const projects = [

    // 22. ChatApp - React native
    {
        id: 22,
        title: "ChatApp",
        description: "A real-time chat app with secure user-to-user messaging using Socket.IO and MongoDB.",
        image: "/projects/22_chat-app.png",
        tags: ["React", "DaisyUI", "Tailwind", "Zustand", "Socket.IO", "Node.js", "JWT", "MongoDB"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/ChatApp" } // Replace with correct link if different
        ]
    },

    // 21. Feastr - React native
    {
        id: 21,
        title: "Feastr - Mobile App",
        description: "A cross platform mobile aplication built using react native",
        image: "/projects/21_feastr.jpg",
        tags: ["React Native", "Appwrite", "Sentry", "Zustand", "Native Wind", "Expo", "Mobile App",],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/Feastr" }
        ]
    },
    // 20. Patient managemt System
    {
        id: 20,
        title: "Restaurant POS Desktop App",
        description: "Offline POS desktop app using .NET MAUI, XAML, and SQLite for Windows/macOS.",
        image: "/projects/20_restarent-pos.png",
        tags: [".NET MAUI", "XAML", "SQLite", "C#", "Desktop App", "Cross-Platform",],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/Resturant-POS-.NET" }
        ]
    },
    // 19. Patient managemt System
    {
        id: 19,
        title: "Patient managemt System",
        description: "Microservices based rest api using Springboot",
        image: "/projects/19_patient-management.png",
        tags: ["Java", "SpringBoot", "Microservices", "Kafka", "Postgre", "gRPC", "Protobuf", "LocalStack"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/springboot-patient-managemnt-system" }
        ]
    },
    // 18. asset management
    {
        id: 18,
        title: "Asset Managemt System",
        description: "A system where users add assets, admins approve them, and users can purchase.",
        image: "/projects/18_asset-management.png",
        tags: ["Next JS", "Postgres", "Cloudinary", "Drizzle", "ShadCN UI", "Better Auth", "React", "Paypal"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/asset-manger" }
        ]
    },
    // 17. next js blog
    {
        id: 17,
        title: "Blog Application",
        description: "A blog where users can create blogs, update and delete their blogs and view / read all blogs.",
        image: "/projects/17_nextjs-blog.png",
        tags: ["Next JS", "Zustand", "Drizzle", "ShadCN UI", "better Auth", "React",],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/nextjs-blog" }
        ]
    },
    // 16. finace-traceker
    {
        id: 16,
        title: "Finance Tracker",
        description: "Cross-platform app to manage personal finances.",
        image: "/projects/16_finance-tracker.png",
        tags: ["React Native", "Expo", "Node.js", "Upstash", "Clerk", "PostgreSQL", "Railway"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/Finance-Tracker-React-Native" },
            { type: "resource", href: "https://expo.dev/accounts/nirmalperera/projects/mobile/builds/7c9baa78-a09e-4e8e-b674-a1d77018c855" },
        ]
    },
    // 15. Fitness microservices
    {
        id: 15,
        title: "FitTrack",
        description: "Logged fitness data with PostgreSQL & MongoDB. Used Gemini AI for smart tips and recommendations.",
        image: "/projects/15_fit-tack.png",
        tags: ["Spring Boot", "Eureka", "Keycloak", "Spring Cloud", "RabbitMQ", "PostgreSQL + Mongo DB", "Gemini"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/springboot-microservices" },
        ]
    },
    // 14. AI-Powered Canvas
    {
        id: 14,
        title: "AI-Powered Canvas",
        description: "An AI-powered canvas capable of solving equations, recognizing drawings. - powered by Gemini API.",
        image: "/projects/14_ai-canvas.png",
        tags: ["React", "Tailwind", "TypeScript", "Python", "AI", "Gemini", "Full-Stack"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/AI-Powered-Handwriting-processor" },
            { type: "external", href: "https://ai-powered-handwriting-processor.vercel.app" },

        ]
    },
    // 13. MERN Stack E-Commerce Platform
    {
        id: 13,
        title: "MERN Stack E-Commerce Platform",
        description: "An e-commerce platform built with the MERN stack. Integrations with payment gateways and email services.",
        image: "/projects/13_mern-ecommerce.png",
        tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "Tailwind", "ShadCN UI", "Full-Stack"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/AI-Powered-Handwriting-processor" },
        ]
    },
    // 12. microservices restapi - social media microservice
    {
        id: 12,
        title: "Microservices REST API",
        description: "A modular REST API built using a microservices architecture *Redis caching *rate limiting *RabbitMQ.",
        image: "/projects/12_nodejs-microservices-backend.png",
        tags: ["Node.js", "Express", "Redis", "Docker", "RabbitMQ", "Cloudinary", "Backend"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/node-concepts-IN/tree/main/social-media-microservice" }
        ]
    },
    // 11. postgres restapi
    {
        id: 11,
        title: "Postgres REST API",
        description: "A REST API using PostgreSQL and Prisma ORM - Graphana",
        image: "/projects/11_docker-prisma-prometheus-graphan.png",
        tags: ["PostgreSQL", "Prisma", "Prometheus", "Grafana", "Docker", "Backend"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/node-concepts-ad/tree/main/postgres/postgress-with-prisma" }
        ]
    },
    // 10. PyQt5 GUI Projects
    {
        id: 10,
        title: "PyQt5 GUI Projects",
        description: "A collection of simple desktop apps built with PyQt5, including a weather app, stopwatch, and digital clock.",
        image: "/projects/10_pyqt5-gui-projects.jpg",
        tags: ["Python", "PyQt5", "OpenWeatherMap"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/python" },
        ]
    },
    // 9. Java MVC E-Commerce System
    {
        id: 9,
        title: "Java MVC E-Commerce System",
        description: "An e-commerce application built using Java Servlets, JSP, and the MVC architecture and styled with Tailwind CSS",
        image: "/projects/09_jsp-ecommerce.png",
        tags: ["Java", "MVC", "Servlet", "JSP", "Tailwind", "Full-Stack"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/oop-group-project" },
        ]
    },
    // 8. TLoU-(-2.0)
    {
        id: 8,
        title: "Zombie Shooter game",
        description: "A 2D shooter game built with HTML, CSS, and JS, inspired after playing The Last of Us Part 1.",
        image: "/projects/08_tlou-(-2.0).png",
        tags: ["HTML", "CSS", "JavaScript"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/TLOU---2.0" },
            { type: "external", href: "https://tlou-2-0.vercel.app" },
        ]
    },
    // 7. Statistic Calcuator
    {
        id: 7,
        title: "Statistic Calculator",
        description: "A program that callulates and finds the mean, median, mode, range and the variance",
        image: "/projects/07_statistical-calculator.png",
        tags: ["HTML", "CSS", "JavaScript"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/statistical-calculator" },
            { type: "external", href: "https://statistical-calculator.vercel.app/" },
        ]
    },
    // 6. Music player
    {
        id: 6,
        title: "Music Player",
        description: "A simple music player with functions play, pause, skip, shuffle, and delete songs from a playlist",
        image: "/projects/06_music-player.png",
        tags: ["HTML", "CSS", "JavaScript"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/music-player" },
            { type: "external", href: "https://music-player-khaki-two.vercel.app" },
        ]
    },
    // 5. Number sorter
    {
        id: 5,
        title: "Number sorter",
        description: "A number sorting porgam build using html css and js",
        image: "/projects/05_number-sorter.png",
        tags: ["HTML", "CSS", "JavaScript"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/number-sorting" },
            { type: "external", href: "https://number-sorting-xi.vercel.app" },
        ]
    },
    // 4. Tik-Tac-Toe
    {
        id: 4,
        title: "Tik-Tac-Toe",
        description: "Tic Tac Toe game build using html css and js that can be played against the computer",
        image: "/projects/04_tik-tac-toe.png",
        tags: ["HTML", "CSS", "JavaScript"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/tic-tac-toe" },
            { type: "external", href: "https://tic-tac-toe-nine-psi-14.vercel.app/" },
        ]
    },
    // 3. Rock paper Scissor
    {
        id: 3,
        title: "Rock Paper Scissor",
        description: "A Rock paper scissor game that can be payed against computer",
        image: "/projects/03_rock-paper-scissor.png",
        tags: ["HTML", "CSS", "JavaScript"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/rock-paper-scissor" },
            { type: "external", href: "https://rock-paper-scissor-smoky-delta.vercel.app" },
        ]
    },
    // 2. Roman number Converter - have not pushed to github
    {
        id: 2,
        title: "Roman Number Converter",
        description: "A simpe roman conveter built usiing html css and js",
        image: "/projects/02_roman-number-converter.png",
        tags: ["HTML", "CSS", "JavaScript"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/decimal-to-roman-number-converter" },
            { type: "external", href: "https://decimal-to-roman-number-converter.vercel.app/" },
        ]
    },
    // 1. Decimal to Binary Converter
    {
        id: 1,
        title: "Decimal to Binary Converter",
        description: "A decimal to binary conveter with animations of showing the call stack",
        image: "/projects/01_dec-to-bin-coverter.gif",
        tags: ["HTML", "CSS", "JavaScript"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/Decimal-to-bincry-converter", },
            { type: "external", href: "https://decimal-to-bincry-converter.vercel.app" }
        ]
    },
]

const ProjectsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    // Calculate how many projects to show based on screen size
    const [projectsPerView, setProjectsPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setProjectsPerView(1);
            } else if (window.innerWidth < 1024) {
                setProjectsPerView(2);
            } else {
                setProjectsPerView(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(projects.length / projectsPerView);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    // Handle touch events for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            nextSlide();
        }
        if (touchStart - touchEnd < -50) {
            prevSlide();
        }
    };

    // Get current visible projects
    const visibleProjects = () => {
        const startIndex = currentSlide * projectsPerView;
        return projects.slice(startIndex, startIndex + projectsPerView);
    };

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects I did as a student
                </p>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-primary text-white hover:bg-primary/80 shadow-lg rounded-full p-3 transition-all duration-300"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div
                        className="overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                                >
                                    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col h-64">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.slice(0, 10).map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {project.tags.length > 10 && (
                                                    <span
                                                        title={project.tags.slice(10).join(', ')}
                                                        className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground cursor-help"
                                                    >
                                                        +{project.tags.length - 10}
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                                            <div className="mt-auto pt-2 border-t">
                                                <div className="flex justify-between items-center">
                                                    {project.urls.map((url, index) => (
                                                        <a
                                                            key={index}
                                                            href={url.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                                                            aria-label={url.type === "github" ? "View Source on GitHub" : "See Demo"}
                                                        >
                                                            {url.type === "github" ? (
                                                                <>
                                                                    <Github className="w-5 h-5" />
                                                                    <span className="text-sm">View Source</span>
                                                                </>
                                                            ) : url.type === "external" ? (
                                                                <>
                                                                    <ExternalLink className="w-5 h-5" />
                                                                    <span className="text-sm">See demo</span>
                                                                </>
                                                            ) : url.type === "resource" ? (
                                                                <>
                                                                    <Download className="w-5 h-5" />
                                                                    <span className="text-sm">Download</span>
                                                                </>
                                                            ) : null}
                                                        </a>
                                                    ))}

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-primary text-white hover:bg-primary/80 shadow-lg rounded-full p-3 transition-all duration-300"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                ? "bg-primary w-6"
                                : "bg-primary/30 hover:bg-primary/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <a
                        href="https://github.com/nirmal-404"
                        target='_blank'
                        rel="noopener noreferrer"
                        className='cosmic-button w-fit flex items-center mx-auto gap-2'
                    >
                        Check my GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection