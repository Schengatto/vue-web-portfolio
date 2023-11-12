<script setup lang="ts">
import {computed} from "vue";
import {RouterView, useRoute} from 'vue-router'
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import PageFooter from "@/components/PageFooter/PageFooter.vue";

const isHeaderVisible = computed<boolean>(() => {
  const {path} = useRoute();
  return path !== "/";
});
</script>

<template>
  <header id="app-header">
    <PageHeader v-if="isHeaderVisible"/>
  </header>
  <main id="app-main">
    <RouterView/>
  </main>
  <footer id="app-footer">
    <PageFooter/>
  </footer>
</template>

<style scoped>
#app-main {
  padding-top: 5em;
}
</style>
