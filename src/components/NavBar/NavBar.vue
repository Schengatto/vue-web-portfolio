<script setup lang="ts">
import {computed, ref} from "vue";
import {usePageStore} from "@/stores/page";
import {storeToRefs} from "pinia";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher.vue";

const {userProfile, links} = storeToRefs(usePageStore());
const isMenuVisible = ref<boolean>(false);
const toggleMenu = () => isMenuVisible.value = !isMenuVisible.value;
const isOpenClass = computed<string>(() => isMenuVisible.value ? "is-open" : "");
</script>

<template>
  <div class="navbar">
    <div class="navbar__inner">
      <div class="navbar__toggle">
        <button
            ref="menuToggle"
            :class="['menu-toggle', isOpenClass]"
            @click.prevent="toggleMenu"
            aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar__logo">
        <a href="#" class="navbar__logo-link">
          <span class="navbar__name">{{ userProfile.name }}</span>
          <span class="navbar__role">{{ userProfile.role }}</span>
        </a>
      </div>
      <nav class="navbar__links">
        <a v-for="(link, index) in links" :key="index" :href="link.to" class="navbar__link">
          {{ link.label }}
        </a>
        <LanguageSwitcher />
      </nav>
    </div>

    <Transition name="menu-slide">
      <div class="navbar__mobile-menu" v-if="isMenuVisible">
        <a v-for="(link, index) in links"
           :key="index"
           :href="link.to"
           class="navbar__mobile-link"
           @click="toggleMenu"
        >
          {{ link.label }}
        </a>
        <div class="navbar__mobile-lang">
          <LanguageSwitcher />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  &__inner {
    display: flex;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2em;
    height: 60px;
    gap: 2em;
  }

  &__logo {
    flex-shrink: 0;
  }

  &__logo-link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    gap: 2px;
  }

  &__name {
    font-size: 14px;
    font-weight: 600;
    color: var(--white);
    letter-spacing: 0.02em;
  }

  &__role {
    font-size: 11px;
    color: var(--color-text-muted);
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  &__links {
    display: flex;
    gap: 1.5em;
    align-items: center;
    margin-left: auto;
  }

  &__link {
    font-size: 13px;
    font-weight: 500;
    color: var(--white-a60);
    text-decoration: none;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    transition: color 0.3s ease;
    white-space: nowrap;

    &:hover {
      color: var(--color-primary-text);
    }
  }

  &__toggle {
    display: none;
  }

  &__mobile-menu {
    display: none;
  }
}

.menu-toggle {
  position: relative;
  border: none;
  box-shadow: none;
  padding: 8px;
  margin: 0;
  background: transparent;
  cursor: pointer;

  span {
    display: block;
    width: 20px;
    height: 2px;
    margin-bottom: 4px;
    background: var(--white-a80);
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &.is-open {
    span:first-child {
      transform: rotate(45deg) translate(4px, 4px);
    }

    span:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }

    span:last-child {
      transform: rotate(-45deg) translate(4px, -4px);
    }
  }
}

/* Menu slide transition */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 1024px) {
  .navbar {
    &__inner {
      padding: 0 1em;
    }

    &__links {
      display: none;
    }

    &__toggle {
      display: flex;
      align-items: center;
    }

    &__mobile-menu {
      display: flex;
      flex-direction: column;
      gap: 0;
      background: rgba(10, 10, 15, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      padding: 0.5em 1.5em 1.5em;
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      height: calc(100vh - 60px);
    }

    &__mobile-lang {
      padding: 1.5em 0;
    }

    &__mobile-link {
      display: block;
      padding: 1em 0;
      font-size: 18px;
      font-weight: 500;
      color: var(--white-a80);
      text-decoration: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      transition: color 0.3s ease;

      &:hover {
        color: var(--color-primary-text);
      }
    }
  }
}
</style>
