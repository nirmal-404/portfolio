const projects = [
    {
        id: 24,
        title: "HealthSenseAi",
        description: "A hospital mangement system with AI symptom check",
        image: "/projects/24_HealthSenseAI.png",
        tags: ["React", "Microservices", "Langgraph", "Tailwind", "Firebase", "Node.js", "Docker", "K8s"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/EcoShore-Frontend" },
        ]
    },
    {
        id: 23,
        title: "Ecoshore",
        description: "A waste mangement and beach cleanup event mangement system",
        image: "/projects/23_Ecoshore.png",
        tags: ["React", "ShadCn UI", "Tailwind", "Redux", "Firebase", "Node.js", "JWT", "MongoDB"],
        urls: [
            { module: "(FE)", type: "github", href: "https://github.com/nirmal-404/EcoShore-Frontend" },
            { module: "(BE)", type: "github", href: "https://github.com/nirmal-404/EcoShore-Backend" }
        ]
    },
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
            // { type: "external", href: "https://ai-powered-handwriting-processor.vercel.app" },

        ]
    },
    // 13. MERN Stack E-Commerce Platform
    {
        id: 13,
        title: "Rasaa Agro Products",
        description: "An e-commerce platform built with the MERN stack. Integrations with payment gateways and email services.",
        image: "/projects/13_mern-ecommerce.png",
        tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "Tailwind", "ShadCN UI", "Full-Stack"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/Rasaa-Spices" },
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


export default projects

