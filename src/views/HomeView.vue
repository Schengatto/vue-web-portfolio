<script setup lang="ts">
import {RouterLink} from "vue-router";
import {pages} from "@/configurations/pages";
</script>

<template>
  <div class="home-view">
    <div class="home-view__right">
      <div class="home-view__highlight">
        <div class="home-view__highlight__title">Enrico Schintu</div>
        <div class="home-view__highlight__subtitle typewriter">Freelancer Software Engineer</div>
      </div>

      <div class="home-view__links">
        <RouterLink v-for="route in pages" :key="route.label" :to="route.path">{{ route.label }}</RouterLink>
      </div>
    </div>

    <div class="home-view__picture">
      <img src="http://enricoschintu.altervista.org/assets/img/myPhoto_mini.png" alt="my-photo"
           class="responsive-img my-photo">
    </div>
  </div>
</template>

<style scoped>
.home-view {
  display: flex;
  align-content: center;
  justify-content: center;
  margin: auto;
  max-width: 700px;
  gap: 1em;
}

.home-view__right {
  display: flex;
  flex-direction: column;
  gap: 3em;
}

.home-view__highlight {
  font-weight: bold;
  border-bottom: 1px solid hsla(160, 100%, 37%, 1);
}

.home-view__highlight__title {
  font-size: 34px;
}

.home-view__highlight__subtitle {
  font-size: 28px;
  font-variant: all-small-caps;
}

.home-view__links {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.home-view__picture {
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.my-photo {
  max-height: 200px;
  border: 2px solid hsla(160, 100%, 37%, 1);
  border-radius: 100px;
}
</style>
