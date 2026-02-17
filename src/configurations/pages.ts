import type { PageSection } from "@/types/page-info";
import type { ProfileInfo } from "@/types/profile";

export const profileInfo: ProfileInfo = {
    name: "Enrico Schintu",
    role: "Freelance Software Engineer",
    photoUrl: "http://enricoschintu.altervista.org/pic.png",
    emailAddress: "schintu.enrico@gmail.com",
    phoneNumber: "",
    telegram: "schengatto",
    externalLinks: [
        { url: "https://www.linkedin.com/in/enrico-schintu-schengatto/", icon: "Linkedin", label: "Linkedin" },
        { url: "https://github.com/Schengatto", icon: "GitHub", label: "GitHub" },
        { url: "https://gitlab.com/enrico.schintu", icon: "GitLab", label: "GitLab" }
    ],
    emailEndpoint: "https://formspree.io/f/xdorvobp" //get a free account at https://formspree.io/
};

export const about: PageSection = {
    id: "about",
    title: "About me",
    isPrintable: true,
    descriptions: [
        `As a full-stack developer, I architect and build end-to-end solutions that bridge robust backend systems with polished, responsive front-end interfaces. My expertise spans from database design and API development to creating intuitive user experiences with modern frameworks.`,
        `With a background in computer science and a strong analytical mindset, I approach every project by first understanding its core challenges and constraints. This methodical approach, combined with my commitment to staying at the forefront of emerging technologies, allows me to deliver solutions that are both innovative and maintainable. I have a particular passion for cloud architecture, performance optimization, and implementing clean, scalable code patterns.`,
        `My passion for gaming goes beyond entertainment — it’s a source of technical inspiration that deeply influences my work. In my spare time, I develop game prototypes as practical laboratories to explore new technologies, design patterns, and optimization techniques. This blend of play and programming sharpens my problem-solving skills and brings a creative dimension to my professional projects.`,
        `I believe the best software emerges from the intersection of technical excellence, creative problem-solving, and continuous experimentation. Whether optimizing database queries, crafting seamless UIs, or architecting distributed systems, I approach every challenge with curiosity and a drive to deliver elegant, efficient solutions that exceed expectations.`
    ],
};

export const experiences: PageSection = {
    id: "experiences",
    title: "Experiences",
    isPrintable: true,
    listItems: [
        {
            title: "2015-2018 | Add Value",
            subtitle: "Full Stack Engineer",
            description: "Product analysis and development in a FinTech context. Development and analysis of company products with web and batch elements for financial context. Technical leadership of the front-end development.",
            tags: ["Java", "Spring Framework", "Javascript", "Bootstrap", "Typescript", "Angular", "Postgresql", "Elasticsearch", "AWS cloud", "Mentorship"],
        },
        {
            title: "2019 | Nivaura",
            subtitle: "Senior Full Stack Engineer",
            description: "Product analysis and development in a FinTech context. Analysis and development of microservices architectures and environment infrastructures.",
            tags: ["Java", "Spring Framework", "VueJs", "NestJs", "Typescript", "Node", "Postgresql", "Maria DB", "ELK stack", "AWS cloud", "Mentorship"],
        },
        {
            title: "2020-2023 | Tui Musement",
            subtitle: "Senior Software Engineer",
            description: "Analysis and development of products oriented to the tourism business.",
            tags: ["Java", "Spring Framework", "C#", ".NET", "Typescript", "Node", "Vue", "Nuxt", "Jester", "Vitest", "Cypress", "Datadog", "Contentful", "AWS cloud", "Terraform", "Mentorship"],
        },
        {
            title: "2024-... | Libre Capital",
            subtitle: "Senior Software Engineer | Tech Lead",
            description: "Led development and technical teams for the frontend and backend components of the Libre Capital platform, overseeing architecture, implementation, and delivery of scalable, high-quality solutions.",
            tags: ["Typescript", "Node", "Next.js", "Nest.js", "Cypress", "Synpress", "AWS cloud", "Web3 integration"],
        }
    ]
};

export const toolbox: PageSection = {
    id: "toolbox",
    title: "My Toolbox",
    isPrintable: true,
    descriptions: [
        "Here is the list of technologies that I master."
    ],
    listItems: [
        {
            title: "Frontend",
            subtitle: "Building responsive and dynamic web interfaces",
            description: "Design and development of websites and web applications with a focus on performance, accessibility, and modern user experience.",
            tags: ["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "Vue", "React", "jQuery"]
        },
        {
            title: "Backend",
            subtitle: "Server-side application development and database management",
            description: "Designing and implementing robust, scalable backend architectures, APIs, and database systems to support complex applications.",
            tags: ["Java/Spring", "C#/.NET", "Node.js/Express.js/Fastify/NestJS", "Python/Django", "PostgreSQL", "MySQL", "Elasticsearch"]
        },
        {
            title: "QA",
            subtitle: "Ensuring software reliability and quality",
            description: "Development and execution of automated and manual tests to ensure the delivery of high-quality, bug-free software.",
            tags: ["Cypress", "Cucumber", "Selenium", "pytest"]
        },
        {
            title: "DevOps & CloudOps",
            subtitle: "Cloud infrastructure management and CI/CD automation",
            description: "Configuration of cloud services, monitoring systems, and deployment pipelines to ensure reliable, scalable, and efficient operations.",
            tags: ["GitHub Actions", "GitLab CI/CD", "Docker", "AWS Cloud", "ELK Stack", "Nginx", "Apache", "Terraform", "Datadog"]
        },
        {
            title: "General",
            subtitle: "Essential development tools and practices",
            description: "Daily use of development tools and best practices for code management, collaboration, and agile project tracking.",
            tags: ["Git", "VS Code", "Jira"]
        }
    ]
};

export const mentorship: PageSection = {
    id: "mentorship",
    title: "Mentorship courses",
    isPrintable: true,
    descriptions: [
        "I offer courses to share my knowledge with your staff to improve the quality of your products."
    ],
    listItems: [
        {
            title: "Software development basics",
            description: "This course is designed to train new developers to be able to analyze requirements and translate them into software. The course emphasizes the importance of understanding and analyzing the technical design of the application before embarking on the implementation of the code.",
            tags: ["Beginner", "Analysis", "Code"],
        },
        {
            title: "Node & Fastify for BE development",
            description: "This course introduces the development of server-side applications using Node.js in combination with the TypeScript language and the support of Fastify.",
            tags: ["Beginner", "Backend", "Code"],
        },
        {
            title: "Nuxt 3 & Vue 3",
            description: "Developing applications with Vue 3 using Nuxt 3 for server-side rendering and SEO",
            tags: ["Beginner", "Frontend", "Code"],
        },
        {
            title: "BDD with Cucumber (BE & FE)",
            description: "Always ensure the correct functioning of your application with fast and effective tests written using the Gherkin syntax.",
            tags: ["Intermediate", "Frontend", "Backend", "Code"],
        },
    ]
};

export const projectPage: PageSection = {
    id: "projects",
    title: "My projects",
    isPrintable: true,
    descriptions: [
        "This is a list of small side projects I worked on in my spare time while studying new technologies."
    ],
    cardItems: [
        {
            title: "Libre Tube",
            subtitle: "Free Youtube Player",
            description: "A Progressive Web App that lets users search and play YouTube videos without any advertising interruptions, with the ability to manage a personalized list of favorite channels.",
            tags: ["Youtube", "Vue 3"],
            link: "https://libre-tube.netlify.app/"
        },
        {
            title: "Gazzetta dei Mercati",
            subtitle: "Online Newspaper",
            description: "An experimental project built with n8n that processes hundreds of RSS feeds daily, using AI to generate a financial journal where news is classified as positive, negative, or neutral, with potential market impact.",
            tags: ["Finance", "AI", "N8N", "Nuxt"],
            link: "https://financial-newspaper.netlify.app"
        },
        {
            title: "Value Investing Analytics",
            subtitle: "Web Application",
            description: "A personal project that analyzes over 400 companies based on value investing principles. An AI system is used to refine and enhance the data analysis process.",
            tags: ["Finance", "Express.js", "AI"],
            link: "http://www.schengatto.cloud"
        },
        {
            title: "Finance Toolbox",
            subtitle: "Web Application",
            description: "A web platform offering financial management tools and resources tailored for self-employed professionals.",
            tags: ["Nuxt.js", "TypeScript", "Vue"],
            link: "https://finance-toolbox.it"
        },
        {
            title: "Quote Plus",
            subtitle: "Web Application",
            description: "A Next.js-based web app that enables authenticated users to create, manage, and edit product quotes with ease.",
            tags: ["Next.js", "TypeScript", "React"],
            link: "https://github.com/Schengatto/quote-plus"
        },
        {
            title: "XLIFF Generator",
            subtitle: "Web Application",
            description: "A Node.js tool that simplifies handling and generating translation files in XLIFF format.",
            tags: ["Node.js"],
            link: "https://github.com/Schengatto/translations-node"
        },
        {
            title: "Update File Dates",
            subtitle: "Linux Script",
            description: "A Bash script for Linux that allows users to easily modify file creation, modification, and access dates.",
            tags: ["Bash", "Ubuntu"],
            link: "https://github.com/Schengatto/update-file-dates"
        },
        {
            title: "PDF Page Numbers",
            subtitle: "Linux Application",
            description: "A Python-based Linux tool that enables users to add page numbers to existing PDF documents effortlessly.",
            tags: ["Python", "Linux"],
            link: "https://github.com/Schengatto/update-file-dates"
        },
        {
            title: "In Developer Shoes",
            subtitle: "Web Application",
            description: "An IT company simulator built with Angular, offering insights into project management and development processes.",
            tags: ["Angular"],
            link: "https://enricoschintu.altervista.org/ids"
        },
        {
            title: "Translation Manager",
            subtitle: "Web Application",
            description: "A tool designed to streamline the management of i18n translation files in JSON format for multilingual applications.",
            tags: ["Angular"],
            link: "https://enricoschintu.altervista.org/translation-manager"
        },
        {
            title: "Task Manager",
            subtitle: "Web Application",
            description: "A simple and intuitive task management application developed using Angular.",
            tags: ["Angular"],
            link: "https://enricoschintu.altervista.org/task-manager/"
        },
        {
            title: "Mahjong",
            subtitle: "Windows Video Game",
            description: "A personal take on the classic Mahjong game, built with Unity3D for Windows platforms.",
            tags: ["Unity3D", "C#"],
            link: "https://enricoschintu.altervista.org/unity3D/Mahjong.zip"
        },
        {
            title: "Kaka Bird",
            subtitle: "Windows Video Game",
            description: "A Unity3D clone of the iconic Flappy Bird game, featuring challenging gameplay and fun mechanics.",
            tags: ["Unity3D", "C#"],
            link: "https://enricoschintu.altervista.org/unity3D/Kaka-Bird.zip"
        },
        {
            title: "Space Invaders",
            subtitle: "Windows Video Game",
            description: "A modern reimagining of the classic Space Invaders, with procedurally generated levels to enhance replayability.",
            tags: ["Unity3D", "C#"],
            link: "https://enricoschintu.altervista.org/unity3D/Space-Invaders.zip"
        }
    ]
};

export const servicesPage: PageSection = {
    id: "services",
    title: "What I offer",
    isPrintable: true,
    descriptions: [
        "A comprehensive range of services available for contract work, combining technical expertise with practical, scalable solutions."
    ],
    listItems: [
        {
            title: "Frontend",
            subtitle: "Development of frontend applications",
            description: "Building responsive, dynamic, and user-friendly web applications using modern frameworks and best practices to deliver high-quality user experiences.",
            tags: ["Angular", "Vue", "React", "TypeScript", "JavaScript", "jQuery"]
        },
        {
            title: "Backend",
            subtitle: "Development of backend applications",
            description: "Designing and developing robust, secure, and scalable server-side applications, APIs, and microservices architectures tailored to business needs.",
            tags: ["Java/Spring", "C#/.NET", "JavaScript/Node/Express.js/Fastify/NestJS", "Python/Django"]
        },
        {
            title: "QA",
            subtitle: "Software quality assurance",
            description: "Implementing comprehensive testing strategies, both manual and automated, to ensure software reliability, performance, and user satisfaction.",
            tags: ["Cypress", "Cucumber", "Selenium", "pytest"]
        },
        {
            title: "CloudOps",
            subtitle: "Cloud services and infrastructure management",
            description: "Setting up, optimizing, and maintaining cloud infrastructures, monitoring systems, and deployment pipelines to ensure reliability and scalability.",
            tags: ["AWS Cloud", "ELK Stack", "Nginx", "Apache", "Terraform", "Datadog"]
        },
        {
            title: "Mentorship",
            subtitle: "Technical training and mentorship",
            description: "Delivering tailored training sessions, workshops, and mentorship programs to upskill your team in modern development technologies, cloud solutions, and best practices.",
            tags: [
                "Java", "Spring Framework", "C#", ".NET", "TypeScript", "Node.js",
                "Angular", "React", "Vue", "Nuxt", "Jest", "Vitest", "Cypress",
                "Datadog", "Contentful", "AWS Cloud", "Terraform", "Mentorship"
            ]
        }
    ]
};

export const sections: PageSection[] = [about, experiences, toolbox, mentorship, projectPage];

export const links = [
    ...sections.map(section => ({ label: section.title, to: `#${section.id}` })),
    { label: "Get in touch", to: "#contact-me" }
];