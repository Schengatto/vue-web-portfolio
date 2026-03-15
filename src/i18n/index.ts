import { createI18n } from "vue-i18n";
import en from "./en";
import it from "./it";

export type SupportedLocale = "en" | "it";

const STORAGE_KEY = "portfolio-locale";

function getDefaultLocale(): SupportedLocale {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "it") return saved;

    const browserLang = navigator.language.split("-")[0];
    return browserLang === "it" ? "it" : "en";
}

const i18n = createI18n({
    legacy: false,
    locale: getDefaultLocale(),
    fallbackLocale: "en",
    messages: { en, it },
});

export function setLocale(locale: SupportedLocale) {
    i18n.global.locale.value = locale;
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
}

export default i18n;
