<script setup lang="ts">
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import PageFooter from "@/components/PageFooter/PageFooter.vue";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader.vue";
import PageView from "@/components/PageView/PageView.vue";
import ContactMe from "@/components/ContactMe/ContactMe.vue";
import {usePageStore} from "@/stores/page";
import {storeToRefs} from "pinia";

const {sections} = storeToRefs(usePageStore());

const currentY = ref<number>(0);
const onScroll = () => currentY.value = window.scrollY;

const isHeaderVisible = computed<boolean>(() => {
  return currentY.value > 200
});

onMounted(() => {
  window.scrollTo({top: 0});
  window.addEventListener("scroll", onScroll, true);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll, true)
});
</script>

<template>
  <header id="app-header" v-if="isHeaderVisible">
    <NavBar/>
  </header>
  <main id="app-main">
    <ProfileHeader/>
    <PageView v-for="(section, index) in sections" :key="index" :section="section"/>
    <ContactMe class="no-print"/>
    <div class="page no-print extra">
      <p>Hey! Did you like my website?</p>
      <p>You can try to build your own printable resume by using my web application!</p>
      <div class="extra-action"><RouterLink to="/build-resume">Try it now!</RouterLink></div>
    </div>
  </main>
  <footer id="app-footer">
    <PageFooter/>
  </footer>
</template>

<style scoped>
#app-main {
  padding-top: 5em;
  padding-bottom: 5em;
}

.extra {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.5em;
  border: 1px solid var(--color-primary-text);
  padding: 1em;

  .extra-action {
    text-align: end;
  }
}
</style>
