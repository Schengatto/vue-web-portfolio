import type {PageSection} from "@/types/page-info";
import type {ProfileInfo} from "@/types/profile";

export const profileInfo: ProfileInfo = {
    name: "Enrico Schintu",
    role: "Freelance Software Engineer",
    photoUrl: "https://enricoschintu.altervista.org/myPhoto_mini.webp",
    emailAddress: "schintu.enrico@gmail.com",
    phoneNumber: "",
    telegram: "schengatto",
    externalLinks: [
        {url: "https://www.linkedin.com/in/enrico-schintu-schengatto/", icon: "Linkedin", label: "Linkedin"},
        {url: "https://github.com/Schengatto", icon: "GitHub", label: "GitHub"},
        {url: "https://gitlab.com/enrico.schintu", icon: "GitLab", label: "GitLab"}
    ],
    emailEndpoint: "https://formspree.io/f/xdorvobp" //get a free account at https://formspree.io/
};

export const about: PageSection = {
    id: "about",
    title: "About me",
    isPrintable: true,
    descriptions: [
        "I'm passionate about developing software from every angle, covering both the backend and frontend, as well as development and analysis. I'm always eager to learn and research new technologies to stay up-to-date with the latest trends.",
        "In addition to my professional interests, I'm also a gamer at heart and enjoy creating mini games for fun in my spare time.",
        "I believe that the best developers are always curious and willing to explore new ideas and approaches, and I strive to embody this philosophy in my work.",
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
            subtitle: "Development of Frontend side like websites and web application",
            description: "",
            tags: ["HTML", "CSS", "Javascript", "Angular", "Typescript", "Vue", "React", "JQuery"],
        },
        {
            title: "Backend",
            subtitle: "Development of Server side applications",
            description: "",
            tags: ["Java/Spring", "C#/.NET", "Javascript/Node/Express.js/Fastify/NestJs", "Python/Django", "PostgreSQL", "mySQL", "Elasticsearch"],
        },
        {
            title: "QA",
            subtitle: "Quality assurance for software",
            description: "",
            tags: ["Cypress", "Cucumber", "Selenium", "pyTest"],
        },
        {
            title: "DevOps & CloudOps",
            subtitle: "Cloud service configuration, log monitoring, infrastructure design",
            description: "",
            tags: ["GitHub pipelines", "GitLab pipelines", "Docker", "AWS Cloud", "ELK stack", "Nginx", "Apache", "Terraform", "Datadog"],
        },
        {
            title: "General",
            subtitle: "Other useful tools for development",
            description: "",
            tags: ["Git", "VS Code", "Jira"],
        },
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
        "Quote Plus is a web application built on Next.js where the authenticated users can create and edit quotes of their own products."
    ],
    cardItems: [
        {
            title: "Xliff generator",
            subtitle: "Web Application",
            description: "A node tool that help in handle the translations in xliff format.",
            tags: ["Next.js", "Typescript", "React"],
            link: "https://github.com/Schengatto/quote-plus"
        },
        {
            title: "Xliff generator",
            subtitle: "Web Application",
            description: "A node tool that help in handle the translations in xliff format.",
            tags: ["Node"],
            link: "https://github.com/Schengatto/translations-node"
        },
        {
            title: "Update file dates",
            subtitle: "Linux Script",
            description: "This is a script for Linux that allows you to easily change the date of creation, the date of edit and the date of the last access of a specific file.",
            tags: ["Bash", "Ubuntu"],
            link: "https://github.com/Schengatto/update-file-dates"
        },
        {
            title: "Pdf page numbers",
            subtitle: "Linux Application",
            description: "This is a script for Linux that allows you to easily add the page numbers into a pdf file.",
            tags: ["Python", "Linux"],
            link: "https://github.com/Schengatto/update-file-dates"
        },
        {
            title: "In developer shoes",
            subtitle: "Web Application",
            description: "An IT Company simulator built in Angular.",
            tags: ["Angular"],
            link: "https://enricoschintu.altervista.org/ids"
        },
        {
            title: "Translation manager",
            subtitle: "Web Application",
            description: "Useful projects that help developers in managing i18n translations files in JSON format.",
            tags: ["Angular"],
            link: "https://enricoschintu.altervista.org/translation-manager"
        },
        {
            title: "Task manager",
            subtitle: "Web Application",
            description: "A simple task manager created in Angular.",
            tags: ["Angular"],
            link: "https://enricoschintu.altervista.org/task-manager/"
        },
        {
            title: "Mahjong",
            subtitle: "Videogame for Windows",
            description: "My version of the classical mahjong game.",
            tags: ["Unity3D", "C#"],
            link: "https://enricoschintu.altervista.org/unity3D/Mahjong.zip"
        },
        {
            title: "Kaka bird",
            subtitle: "Videogame for Windows",
            description: "A clone of the famous flappy bird game.",
            tags: ["Unity3D", "C#"],
            link: "https://enricoschintu.altervista.org/unity3D/Kaka-Bird.zip"
        },
        {
            title: "Space invaders",
            subtitle: "Videogame for Windows",
            description: "A clone of the famous flappy bird game.",
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
        " Here is the list of services I offer under contract."
    ],
    listItems: [
        {
            title: "Frontend",
            subtitle: "Development of Frontend side applications",
            description: "",
            tags: ["Angular", "Vue", "React", "Typescript", "Javascript", "JQuery"],
        },
        {
            title: "Backend",
            subtitle: "Development of Backend side applications",
            description: "",
            tags: ["Java/Spring", "C#/.NET", "Javascript/Node/Express.js/Fastify/NestJs", "Python/Django"],
        },
        {
            title: "QA",
            subtitle: "Quality assurance for software",
            description: "",
            tags: ["Cypress", "Cucumber", "Selenium", "pyTest"],
        },
        {
            title: "CloudOps",
            subtitle: "Cloud service configuration, log monitoring, infrastructure design",
            description: "",
            tags: ["AWS Cloud", "ELK stack", "Nginx", "Apache", "Terraform", "Datadog"],
        },
        {
            title: "Mentorship",
            subtitle: "Training courses to train your staff",
            description: "",
            tags: ["Java", "Spring Framework", "C#", ".NET", "Typescript", "Node", "Angular", "React", "Vue", "Nuxt", "Jester", "Vitest", "Cypress", "Datadog", "Contentful", "AWS cloud", "Terraform", "Mentorship"],
        },
    ]
};

export const sections: PageSection[] = [about, experiences, toolbox, mentorship, projectPage];

export const links = [
    ...sections.map(section => ({label: section.title, to: `#${section.id}`})),
    {label: "Get in touch", to: "#contact-me"}
];