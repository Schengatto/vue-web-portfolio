<script setup lang="ts">
import { usePageStore } from "@/stores/page";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const { userProfile, links } = storeToRefs(usePageStore());

onMounted(() => {
  if (userProfile.value.photoUrl) {
    const linkElement = document.createElement('link');
    linkElement.rel = 'preload';
    linkElement.as = 'image';
    linkElement.href = userProfile.value.photoUrl;
    document.head.appendChild(linkElement);
  }
});
</script>

<template>
  <div class="home-view">
    <div class="home-view__right">
      <link v-if="userProfile.photoUrl" rel="preload" as="image" :href="userProfile.photoUrl">

      <div class="home-view__highlight">
        <div class="home-view__highlight__title">{{ userProfile.name }}</div>
        <div class="home-view__highlight__subtitle typewriter">{{ userProfile.role }}</div>
      </div>

      <div class="home-view__links no-print">
        <a v-for="(link, index) in links" :key="index" :href="link.to">{{ link.label }}</a>
      </div>
    </div>

    <div v-if="userProfile.photoUrl" class="home-view__picture">
      <img :src="userProfile.photoUrl" alt="my-photo" class="my-photo" width="250" height="250">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 900px;
  gap: 1em;

  .home-view__right {
    min-height: 90vh;
    width: 650px;
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
    font-size: 30px;
    font-variant: all-small-caps;
  }

  .home-view__picture {
    display: flex;
    min-width: 250px;
    flex-direction: column;
    justify-content: start;
    height: 250px;
  }

  .my-photo {
    border: 2px solid var(--color-primary-text);
    border-radius: 120px;
    max-width: 250px;
    max-height: 250px;
    height: auto;
    width: auto;
  }
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
      width: 100%;
      min-height: 0vh;
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
    align-items: center;
  }

  .my-photo {
    max-height: 250px;
    max-width: 250px;
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

  .home-view__right {
    width: 100%;
  }
}
</style>
