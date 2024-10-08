<script setup lang="ts">
import {usePageStore} from "@/stores/page";
import {storeToRefs} from "pinia";

const {userProfile, links} = storeToRefs(usePageStore());
</script>

<template>
  <div class="home-view">
    <div class="home-view__right">
      <div class="home-view__highlight">
        <div class="home-view__highlight__title">{{ userProfile.name }}</div>
        <div class="home-view__highlight__subtitle typewriter">{{ userProfile.role }}</div>
      </div>

      <div class="home-view__links no-print">
        <a v-for="(link, index) in links" :key="index" :href="link.to">{{ link.label }}</a>
      </div>
    </div>

    <div v-if="userProfile.photoUrl" class="home-view__picture">
      <img :src="userProfile.photoUrl" alt="my-photo" class="my-photo">
    </div>
  </div>
</template>

<style scoped>
.home-view {
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 900px;
  gap: 1em;
}

.home-view__right {
  display: flex;
  flex-direction: column;
  gap: 3em;
}

.home-view__highlight {
  font-weight: bold;
  border-bottom: 1px solid var(--color-primary-text);
}

.home-view__highlight__title {
  font-size: 48px;
}

.home-view__highlight__subtitle {
  font-size: 38px;
  font-variant: all-small-caps;
}

.home-view__links {
  display: flex;
  flex-direction: column;
  gap: 1em;
  font-size: 30px
}

.home-view__picture {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.my-photo {
  height: 250px;
  border: 2px solid var(--color-primary-text);
  border-radius: 120px;
}

/** Mobile version **/
@media (max-width: 1024px) {
  .home-view {
    flex-direction: column-reverse;
    padding: 0.5em;
    max-width: 90%;

    .home-view__highlight__title {
      text-align: center;
      font-size: 2rem;
    }

    .home-view__highlight__subtitle {
      font-size: 24px;
      text-align: center;
      font-variant: all-small-caps;
    }

    .home-view__right {
      display: flex;
      flex-direction: column;
      gap: 1.5em;
      white-space: normal !important;
    }

    .home-view__links {
      display: flex;
      flex-direction: column;
      gap: 1em;
      font-size: 26px
    }
  }

  .home-view__picture {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .my-photo {
    max-height: 200px;
    max-width: 200px;
    border-radius: 100px;
  }
}

/* override styles when printing */
@media print {
  .home-view {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    margin: auto;
  }

  .my-photo {
    height: 80px;
    border: none;
  }

  .home-view__highlight__title {
    text-align: start !important;
  }

  .home-view__highlight__subtitle {
    text-align: start !important;
  }
}
</style>
