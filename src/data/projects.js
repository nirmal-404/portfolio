const projects = [
    {
        id: 26,
        title: "NCR Solutions",
        description: "Portfolio of NCR Solutions assignments, software solutions, and digital projects developed for business and operational needs.",
        image: "/projects/26_ncrsolutions.png",
        tags: ["NCR Solutions", "Assignments", "Software Solutions", "Web Apps", "Business Systems"],
        urls: [
            { type: "external", href: "https://ncrsolutions.vercel.app" }
        ]
    },
    {
        id: 24,
        title: "HealthSense AI",
        description: "A hospital management system with an AI-powered symptom checker.",
        image: "/projects/24_HealthSenseAI.png",
        tags: ["React", "Microservices", "LangGraph", "Tailwind CSS", "Firebase", "Node.js", "Docker", "Kubernetes"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/HealthSenseAI" },
        ]
    },
    {
        id: 23,
        title: "EcoShore",
        description: "A waste management platform with beach cleanup event management.",
        image: "/projects/23_Ecoshore.png",
        tags: ["React", "shadcn/ui", "Tailwind CSS", "Redux", "Firebase", "Node.js", "JWT", "MongoDB"],
        urls: [
            { module: "(FE)", type: "github", href: "https://github.com/nirmal-404/EcoShore-Frontend" },
            { module: "(BE)", type: "github", href: "https://github.com/nirmal-404/EcoShore-Backend" }
        ]
    },
    // 22. ChatApp
    {
        id: 22,
        title: "ChatApp",
        description: "A real-time chat application with secure user-to-user messaging using Socket.IO and MongoDB.",
        image: "/projects/22_chat-app.png",
        tags: ["React", "daisyUI", "Tailwind CSS", "Zustand", "Socket.IO", "Node.js", "JWT", "MongoDB"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/ChatApp" } // Replace with correct link if different
        ]
    },

    // 21. Feastr mobile app
    {
        id: 21,
        title: "Feastr — Mobile App",
        description: "A cross-platform mobile application built with React Native.",
        image: "/projects/21_feastr.jpg",
        tags: ["React Native", "Appwrite", "Sentry", "Zustand", "NativeWind", "Expo", "Mobile App",],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/Feastr" }
        ]
    },
    // 20. Restaurant POS desktop app
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
    // 19. Patient management system
    {
        id: 19,
        title: "Patient Management System",
        description: "A microservices-based REST API built with Spring Boot.",
        image: "/projects/19_patient-management.png",
        tags: ["Java", "Spring Boot", "Microservices", "Kafka", "PostgreSQL", "gRPC", "Protobuf", "LocalStack"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/springboot-patient-managemnt-system" }
        ]
    },
    // 18. Asset management
    {
        id: 18,
        title: "Asset Management System",
        description: "An asset management system where users submit assets for admin approval and purchase.",
        image: "/projects/18_asset-management.png",
        tags: ["Next.js", "PostgreSQL", "Cloudinary", "Drizzle", "shadcn/ui", "Better Auth", "React", "PayPal"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/asset-manger" }
        ]
    },
    // 17. Next.js blog
    {
        id: 17,
        title: "Blog Application",
        description: "A blogging platform where users can create, edit, delete, and read posts.",
        image: "/projects/17_nextjs-blog.png",
        tags: ["Next.js", "Zustand", "Drizzle", "shadcn/ui", "Better Auth", "React",],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/nextjs-blog" }
        ]
    },
    // 16. Finance tracker
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
        description: "Tracks fitness data with PostgreSQL and MongoDB, and uses Gemini AI to provide personalized tips and recommendations.",
        image: "/projects/15_fit-tack.png",
        tags: ["Spring Boot", "Eureka", "Keycloak", "Spring Cloud", "RabbitMQ", "PostgreSQL", "MongoDB", "Gemini"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/springboot-microservices" },
        ]
    },
    // 14. AI-Powered Canvas
    {
        id: 14,
        title: "AI-Powered Canvas",
        description: "An AI-powered canvas that solves equations and recognizes drawings using the Gemini API.",
        image: "/projects/14_ai-canvas.png",
        tags: ["React", "Tailwind CSS", "TypeScript", "Python", "AI", "Gemini", "Full-Stack"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/AI-Powered-Handwriting-processor" },
            // { type: "external", href: "https://ai-powered-handwriting-processor.vercel.app" },

        ]
    },
    // 13. MERN stack e-commerce platform
    {
        id: 13,
        title: "Rasaa Agro Products",
        description: "An e-commerce platform built with the MERN stack. Integrations with payment gateways and email services.",
        image: "/projects/13_mern-ecommerce.png",
        tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "Tailwind CSS", "shadcn/ui", "Full-Stack"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/Rasaa-Spices" },
        ]
    },
    // 12. Microservices REST API
    {
        id: 12,
        title: "Microservices REST API",
        description: "A modular microservices REST API with Redis caching, rate limiting, and RabbitMQ messaging.",
        image: "/projects/12_nodejs-microservices-backend.png",
        tags: ["Node.js", "Express", "Redis", "Docker", "RabbitMQ", "Cloudinary", "Backend"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/node-concepts-IN/tree/main/social-media-microservice" }
        ]
    },
    // 11. PostgreSQL REST API
    {
        id: 11,
        title: "PostgreSQL REST API",
        description: "A REST API built with PostgreSQL and Prisma ORM, with Prometheus and Grafana monitoring.",
        image: "/projects/11_docker-prisma-prometheus-graphan.png",
        tags: ["PostgreSQL", "Prisma", "Prometheus", "Grafana", "Docker", "Backend"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/node-concepts-ad/tree/main/postgres/postgress-with-prisma" }
        ]
    },
    // 10. PyQt5 GUI projects
    {
        id: 10,
        title: "PyQt5 GUI Projects",
        description: "A collection of desktop applications built with PyQt5, including a weather app, stopwatch, and digital clock.",
        image: "/projects/10_pyqt5-gui-projects.jpg",
        tags: ["Python", "PyQt5", "OpenWeatherMap"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/python" },
        ]
    },
    // 9. Java MVC e-commerce system
    {
        id: 9,
        title: "Java MVC E-Commerce System",
        description: "An e-commerce application built with Java Servlets, JSP, and the MVC architecture, styled with Tailwind CSS.",
        image: "/projects/09_jsp-ecommerce.png",
        tags: ["Java", "MVC", "Servlet", "JSP", "Tailwind CSS", "Full-Stack"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/oop-group-project" },
        ]
    },
    // 8. Zombie shooter game
    {
        id: 8,
        title: "Zombie Shooter Game",
        description: "A 2D shooter game built with HTML, CSS, and JavaScript, inspired by The Last of Us Part I.",
        image: "/projects/08_tlou-(-2.0).png",
        tags: ["HTML", "CSS", "JavaScript"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/TLOU---2.0" },
            { type: "external", href: "https://tlou-2-0.vercel.app" },
        ]
    },
    // 7. Statistics calculator
    {
        id: 7,
        title: "Statistics Calculator",
        description: "Calculates the mean, median, mode, range, and variance of a data set.",
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
        description: "A simple music player with controls to play, pause, skip, shuffle, and remove songs from a playlist.",
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
        title: "Number Sorter",
        description: "A number-sorting program built with HTML, CSS, and JavaScript.",
        image: "/projects/05_number-sorter.png",
        tags: ["HTML", "CSS", "JavaScript"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/number-sorting" },
            { type: "external", href: "https://number-sorting-xi.vercel.app" },
        ]
    },
    // 4. Tic-Tac-Toe
    {
        id: 4,
        title: "Tic-Tac-Toe",
        description: "A Tic-Tac-Toe game built with HTML, CSS, and JavaScript, playable against the computer.",
        image: "/projects/04_tik-tac-toe.png",
        tags: ["HTML", "CSS", "JavaScript"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/tic-tac-toe" },
            { type: "external", href: "https://tic-tac-toe-nine-psi-14.vercel.app/" },
        ]
    },
    // 3. Rock Paper Scissors
    {
        id: 3,
        title: "Rock Paper Scissors",
        description: "A Rock Paper Scissors game you can play against the computer.",
        image: "/projects/03_rock-paper-scissor.png",
        tags: ["HTML", "CSS", "JavaScript"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/rock-paper-scissor" },
            { type: "external", href: "https://rock-paper-scissor-smoky-delta.vercel.app" },
        ]
    },
    // 2. Roman numeral converter
    {
        id: 2,
        title: "Roman Numeral Converter",
        description: "A Roman numeral converter built with HTML, CSS, and JavaScript.",
        image: "/projects/02_roman-number-converter.png",
        tags: ["HTML", "CSS", "JavaScript"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/decimal-to-roman-number-converter" },
            { type: "external", href: "https://decimal-to-roman-number-converter.vercel.app/" },
        ]
    },
    // 1. Decimal-to-binary converter
    {
        id: 1,
        title: "Decimal-to-Binary Converter",
        description: "Converts decimal numbers to binary and animates the call stack during conversion.",
        image: "/projects/01_dec-to-bin-coverter.gif",
        tags: ["HTML", "CSS", "JavaScript"],
        urls: [
            { type: "github", href: "https://github.com/nirmal-404/Decimal-to-bincry-converter", },
            { type: "external", href: "https://decimal-to-bincry-converter.vercel.app" }
        ]
    },
]


export default projects
