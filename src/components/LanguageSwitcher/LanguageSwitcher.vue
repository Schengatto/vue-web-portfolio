<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { setLocale, type SupportedLocale } from "@/i18n";

const { locale } = useI18n();

const toggle = () => {
  const next: SupportedLocale = locale.value === "en" ? "it" : "en";
  setLocale(next);
};
</script>

<template>
  <button class="lang-switch" @click="toggle" :aria-label="`Switch to ${locale === 'en' ? 'Italian' : 'English'}`">
    <span :class="['lang-switch__flag', { 'lang-switch__flag--active': locale === 'it' }]">IT</span>
    <span class="lang-switch__divider">/</span>
    <span :class="['lang-switch__flag', { 'lang-switch__flag--active': locale === 'en' }]">EN</span>
  </button>
</template>

<style scoped lang="scss">
.lang-switch {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 0.35em 0.6em;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;

  &:hover {
    background: var(--glass-bg-hover);
    border-color: rgba(255, 255, 255, 0.15);
  }

  &__flag {
    color: var(--white-a60);
    transition: color 0.3s ease;

    &--active {
      color: var(--color-primary-text);
    }
  }

  &__divider {
    color: var(--white-a60);
    font-weight: 300;
  }
}
</style>
