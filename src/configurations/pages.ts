import type { PageSection } from "@/types/page-info";
import type { ProfileInfo } from "@/types/profile";
import i18n from "@/i18n";

const { t, tm } = i18n.global;

export const profileInfo: ProfileInfo = {
    name: "Enrico Schintu",
    role: "Freelance Software Engineer",
    photoUrl: "https://enricoschintu.altervista.org/altro/pic.png",
    emailAddress: "schintu.enrico@gmail.com",
    phoneNumber: "",
    telegram: "schengatto",
    externalLinks: [
        { url: "https://www.linkedin.com/in/enrico-schintu-schengatto/", icon: "Linkedin", label: "Linkedin" },
        { url: "https://github.com/Schengatto", icon: "GitHub", label: "GitHub" },
        { url: "https://gitlab.com/enrico.schintu", icon: "GitLab", label: "GitLab" }
    ],
    emailEndpoint: "https://formspree.io/f/xdorvobp"
};

const experienceTags = [
    ["Java", "Spring Framework", "Javascript", "Bootstrap", "Typescript", "Angular", "Postgresql", "Elasticsearch", "AWS cloud", "Mentorship"],
    ["Java", "Spring Framework", "VueJs", "NestJs", "Typescript", "Node", "Postgresql", "Maria DB", "ELK stack", "AWS cloud", "Mentorship"],
    ["Java", "Spring Framework", "C#", ".NET", "Typescript", "Node", "Vue", "Nuxt", "Jester", "Vitest", "Cypress", "Datadog", "Contentful", "AWS cloud", "Terraform", "Mentorship"],
    ["Typescript", "Node", "Next.js", "Nest.js", "Cypress", "Synpress", "AWS cloud", "Web3 integration"],
];

const toolboxTags = [
    ["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "Vue", "React", "jQuery"],
    ["Java/Spring", "C#/.NET", "Node.js/Express.js/Fastify/NestJS", "Python/Django", "PostgreSQL", "MySQL", "Elasticsearch"],
    ["Cypress", "Cucumber", "Selenium", "pytest"],
    ["GitHub Actions", "GitLab CI/CD", "Docker", "AWS Cloud", "ELK Stack", "Nginx", "Apache", "Terraform", "Datadog"],
    ["Git", "VS Code", "Jira"],
];

const mentorshipTags = [
    ["Beginner", "Analysis", "Code"],
    ["Beginner", "Backend", "Code"],
    ["Beginner", "Frontend", "Code"],
    ["Intermediate", "Frontend", "Backend", "Code"],
];

const projectLinks = [
    "https://github.com/Schengatto/git-expansion",
    "https://funny-cards.netlify.app",
    "https://libre-tube.netlify.app",
    "https://finance.schengatto.cloud",
    "https://value.schengatto.cloud",
    "https://finance-toolbox.it",
    "https://github.com/Schengatto/quote-plus",
    "https://github.com/Schengatto/translations-node",
    "https://github.com/Schengatto/update-file-dates",
    "https://github.com/Schengatto/update-file-dates",
    "https://enricoschintu.altervista.org/ids",
    "https://enricoschintu.altervista.org/translation-manager",
    "https://enricoschintu.altervista.org/task-manager/",
    "https://enricoschintu.altervista.org/unity3D/Mahjong.zip",
    "https://enricoschintu.altervista.org/unity3D/Kaka-Bird.zip",
    "https://enricoschintu.altervista.org/unity3D/Space-Invaders.zip",
];

const projectTags = [
    ["Electron", "React", "TypeScript", "Vite"],
    ["Nuxt 4"],
    ["Youtube", "Vue 3"],
    ["Finance", "AI", "N8N", "Nuxt"],
    ["Finance", "Express.js", "AI"],
    ["Nuxt.js", "TypeScript", "Vue"],
    ["Next.js", "TypeScript", "React"],
    ["Node.js"],
    ["Bash", "Ubuntu"],
    ["Python", "Linux"],
    ["Angular"],
    ["Angular"],
    ["Angular"],
    ["Unity3D", "C#"],
    ["Unity3D", "C#"],
    ["Unity3D", "C#"],
];

const serviceTags = [
    ["Angular", "Vue", "React", "TypeScript", "JavaScript", "jQuery"],
    ["Java/Spring", "C#/.NET", "JavaScript/Node/Express.js/Fastify/NestJS", "Python/Django"],
    ["Cypress", "Cucumber", "Selenium", "pytest"],
    ["AWS Cloud", "ELK Stack", "Nginx", "Apache", "Terraform", "Datadog"],
    ["Java", "Spring Framework", "C#", ".NET", "TypeScript", "Node.js", "Angular", "React", "Vue", "Nuxt", "Jest", "Vitest", "Cypress", "Datadog", "Contentful", "AWS Cloud", "Terraform", "Mentorship"],
];

function getTranslatedItems(section: string, tags: string[][], links?: string[]) {
    const items = tm(`${section}.items`) as Array<Record<string, string>>;
    return items.map((item, i) => ({
        title: t(`${section}.items[${i}].title`),
        subtitle: item.subtitle ? t(`${section}.items[${i}].subtitle`) : undefined,
        description: item.description ? t(`${section}.items[${i}].description`) : undefined,
        tags: tags[i],
        link: links?.[i],
    }));
}

export function getTranslatedRole(): string {
    return t("profile.role");
}

export function getTranslatedSections(): PageSection[] {
    const about: PageSection = {
        id: "about",
        title: t("about.title"),
        isPrintable: true,
        descriptions: (tm("about.descriptions") as string[]).map((_, i) => t(`about.descriptions[${i}]`)),
    };

    const experiences: PageSection = {
        id: "experiences",
        title: t("experiences.title"),
        isPrintable: true,
        listItems: getTranslatedItems("experiences", experienceTags),
    };

    const toolbox: PageSection = {
        id: "toolbox",
        title: t("toolbox.title"),
        isPrintable: true,
        descriptions: [t("toolbox.description")],
        listItems: getTranslatedItems("toolbox", toolboxTags),
    };

    const mentorshipSection: PageSection = {
        id: "mentorship",
        title: t("mentorship.title"),
        isPrintable: true,
        descriptions: [t("mentorship.description")],
        listItems: getTranslatedItems("mentorship", mentorshipTags),
    };

    const projectPageSection: PageSection = {
        id: "projects",
        title: t("projects.title"),
        isPrintable: true,
        descriptions: [t("projects.description")],
        cardItems: getTranslatedItems("projects", projectTags, projectLinks),
    };

    return [about, experiences, toolbox, mentorshipSection, projectPageSection];
}

export function getTranslatedServiceSection(): PageSection {
    return {
        id: "services",
        title: t("services.title"),
        isPrintable: true,
        descriptions: [t("services.description")],
        listItems: getTranslatedItems("services", serviceTags),
    };
}

export function getTranslatedLinks() {
    const sections = getTranslatedSections();
    return [
        ...sections.map(section => ({ label: section.title, to: `#${section.id}` })),
        { label: t("ui.getInTouch"), to: "#contact-me" },
    ];
}
