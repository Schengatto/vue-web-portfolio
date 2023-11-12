<script setup lang="ts">
import {RouterLink} from "vue-router";
import {computed, ref} from "vue";
import {pages} from "@/configurations/pages";

const isMenuVisible = ref<boolean>(false);

const toggleMenu = () => isMenuVisible.value = !isMenuVisible.value;
const isOpenClass = computed<string>(() => isMenuVisible.value ? "is-open" : "");

</script>

<template>
  <div class="page-header__navbar">
    <div class="page-header__navbar__toggle-menu">
      <button
          ref="menuToggle"
          :class="['menu-toggle', isOpenClass]"
          @click.prevent="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="page-header__navbar__logo">
      <div class="title">Enrico Schintu</div>
      <div class="subtitle">Freelancer Software Engineer</div>
    </div>
    <div class="page-header__navbar__links">
      <nav v-for="route in pages" :key="route.label">
        <RouterLink :to="route.path">{{ route.label }}</RouterLink>
      </nav>
    </div>
    <div class="page-header__navbar__links-menu" v-if="isMenuVisible">
      <div v-for="route in pages" :key="route.label">
        <RouterLink :to="route.path" @click="toggleMenu">{{ route.label }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-header__navbar {
  background-color: rgb(10, 10, 10);
  display: flex;
  position: fixed;
  width: 100%;
  gap: 1em;

  &__logo {
    display: flex;
    flex-direction: column;
    margin: 0.5em 1em;

    .title {
      font-size: 14px;
    }

    .subtitle {
      font-size: 12px;
    }
  }
}

.page-header__navbar__links {
  display: flex;
  gap: 2em;
  align-items: center;
  align-content: center;

  nav {
    display: flex;
    gap: 2em;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
}

.page-header__navbar__toggle-menu {
  display: none;
  flex-direction: column;
  justify-content: center;
  margin: auto 0.5em;

  .menu-toggle {
    position: relative;
    border: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    background: white;
    cursor: pointer;
    top: 2px;

    span {
      display: block;
      width: 22px;
      height: 2px;
      margin-bottom: 5px;
      position: relative;
      background: #1b115c;
      border-radius: 3px;
      z-index: 1;
      transform-origin: 4px 0px;
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

      &:first-child {
        transform-origin: 0% 0%;
      }

      &:first-child {
        transform-origin: 0% 100%;
      }
    }

    &.is-open {
      span {
        opacity: 1;
        transform: rotate(45deg) translate(-4px, -9px);
      }

      span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      span:nth-last-child(2) {
        transform: rotate(-45deg) translate(-4px, 7px);
      }
    }
  }
}

@media (max-width: 780px) {
  .page-header__navbar__links {
    display: none;
  }
  .page-header__navbar__toggle-menu {
    display: flex;
  }
  .page-header__navbar__links-menu {
    position: fixed;
    top: 3em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: #080b17;
    width: 100%;
    padding: 1em;
    height: 100%;
  }
}

</style>
