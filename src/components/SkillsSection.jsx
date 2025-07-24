import React, { useState } from 'react'
import { cn } from '@/lib/utils'

// Define skill categories with their icons
const skillsByCategory = {
  language: [
    { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
    { name: "C", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
    { name: "C++", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
    { name: "C#", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
    { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
    { name: "Python", icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
    { name: "Kotlin", icon: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" },
    { name: "PHP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" }
  ],
  frontend: [
    { name: "HTML", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
    { name: "CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
    { name: "Bootstrap", icon: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" },
    { name: "Tailwind", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
    { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
    {name : "Angular", icon : "https://angular.io/assets/images/logos/angular/angular.svg" },
    { name: "Redux", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
    { name: "Clerk", icon: "https://clerk.com/v2/favicon.ico" },
    { name: "Expo", icon: "https://www.vectorlogo.zone/logos/expoio/expoio-ar21~bgwhite.svg" },
    { name: "Next.js", icon: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" }
  ],
  backend: [
    { name: "Node.js", icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
    { name: "Express", icon: "https://i.cloudup.com/zfY6lL7eFa-3000x3000.png" },
    { name: "NestJS", icon: "https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg" },
    { name: "Spring", icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
    { name: ".NET", icon: "https://www.vectorlogo.zone/logos/dotnet/dotnet-tile.svg" },
    { name: "Bun", icon: "https://www.vectorlogo.zone/logos/bunsh/bunsh-icon.svg" },
    { name: "Hono", icon: "https://upload.wikimedia.org/wikipedia/commons/6/60/Hono-logo.svg" },
    { name: "GraphQL", icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" },
    { name: "Socket.IO", icon: "https://www.vectorlogo.zone/logos/socketio/socketio-icon.svg" },
    { name: "RabbitMQ", icon: "https://www.svgrepo.com/show/303576/rabbitmq-logo.svg" },
    { name: "Kafka", icon: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-ar21~bgwhite.svg" },
    { name: "Upstash", icon: "https://upstash.com/icons/apple-touch-icon.png" },
    { name: "Drizzle", icon: "https://orm.drizzle.team/favicon.ico" },
    { name: "Better Auth", icon: "https://www.better-auth.com/favicon/favicon.ico" },
    { name: "Appwrite", icon: "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg" },
  ],
  database: [
    { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
    { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
    { name: "PostgreSQL", icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
    { name: "SQL Server", icon: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
    { name: "MariaDB", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP2TPZEoU_WaztHovZN7mFiZRk5Zfd1ZfP1hYqwFDDVw&s" },
    { name: "SQLite", icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" },
    { name: "Redis", icon: "https://www.vectorlogo.zone/logos/redis/redis-official.svg" },
    { name: "Prisma", icon: "https://www.svgrepo.com/show/373776/light-prisma.svg" },
    { name: "Neon", icon: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/neon-icon.svg" },
  ],
  devops: [
    { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
    { name: "GitHub Actions", icon: "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg" },
    // { name: "Azure", icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
    { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
    { name: "Railway", icon: "https://railway.com/favicon-96x96.png" },
    { name: "LocalStack", icon: "https://cdn.prod.website-files.com/6539036f80ddc9e9a467134e/65546e419e7e9b3f9cf3408c_favicon.png" },
    // { name: "Jenkins", icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" },
    { name: "Prometheus", icon: "https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg" },
    { name: "Grafana", icon: "https://www.svgrepo.com/show/353829/grafana.svg" },
    { name: "Sentry", icon: "https://www.vectorlogo.zone/logos/sentryio/sentryio-ar21~bgwhite.svg" },
  ],
  tools: [
    { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
    { name: "GitHub", icon: "https://www.vectorlogo.zone/logos/github/github-tile.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Figma", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
    { name: "Linux", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
    { name: "Jira", icon: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg" },
    { name: "Trello", icon: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },
  ]
};

// Categories with display names
const categories = [
  { id: "all", name: "All Skills" },
  { id: "language", name: "Languages" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Databases" },
  { id: "devops", name: "DevOps" },
  { id: "tools", name: "Tools" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const getVisibleSkills = () => {
    if (activeCategory === "all") {
      // Get all skills from all categories
      return Object.values(skillsByCategory).flatMap(skills => skills);
    }
    return skillsByCategory[activeCategory] || [];
  };

  return (
    <section id="skills" className="py-12 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-3 py-1 rounded-full text-xs transition-colors duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 hover:bg-secondary"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Icons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
          {getVisibleSkills().map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 rounded-lg bg-card hover:bg-card/80 transition-all duration-300 group"
            >
              <div className="w-10 h-10 mb-2 flex items-center justify-center">
                <img 
                  src={skill.icon}
                  alt={skill.name}
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
              <span className="text-xs text-center opacity-80 group-hover:opacity-100">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;