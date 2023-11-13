import {defineStore} from 'pinia'
import type {PageSection} from "@/types/page-info";
import {profileInfo, sections} from "@/configurations/pages";
import type {ProfileInfo} from "@/types/profile";

interface PageLink {
    label: string;
    to: string;
}

interface State {
    userProfile: ProfileInfo;
    sections: PageSection[];
}

export const usePageStore = defineStore('page', {
    state: (): State => ({
        userProfile: profileInfo,
        sections: sections,
    }),
    getters: {
        links: (state): PageLink[] => ([
            ...state.sections.map(section => ({label: section.title, to: `#${section.id}`})),
            {label: "Get in touch", to: "#contact-me"}
        ]),
    },
    actions: {
        setUserProfile(profileInfo: ProfileInfo) {
            this.userProfile = profileInfo;
        },
        setPageSections(sections: PageSection[]) {
            this.sections = sections;
        },
    },
})