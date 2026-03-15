import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import type { PageSection } from "@/types/page-info"
import { profileInfo, getTranslatedSections, getTranslatedRole } from "@/configurations/pages"
import type { ProfileInfo } from "@/types/profile"
import { useI18n } from 'vue-i18n'

interface PageLink {
    label: string;
    to: string;
}

export const usePageStore = defineStore('page', () => {
    const { t, locale } = useI18n()

    const userProfile = ref<ProfileInfo>({ ...profileInfo, role: getTranslatedRole() })
    const sections = ref<PageSection[]>(getTranslatedSections())

    watch(locale, () => {
        userProfile.value = { ...profileInfo, role: getTranslatedRole() }
        sections.value = getTranslatedSections()
    })

    const links = computed<PageLink[]>(() => [
        ...sections.value.map(section => ({ label: section.title, to: `#${section.id}` })),
        { label: t("ui.getInTouch"), to: "#contact-me" },
    ])

    function setUserProfile(profile: ProfileInfo) {
        userProfile.value = profile
    }

    function setPageSections(newSections: PageSection[]) {
        sections.value = newSections
    }

    return { userProfile, sections, links, setUserProfile, setPageSections }
})
