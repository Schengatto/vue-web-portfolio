<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import PageFooter from "@/components/PageFooter/PageFooter.vue";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader.vue";
import PageView from "@/components/PageView/PageView.vue";
import ContactMe from "@/components/ContactMe/ContactMe.vue";
import { usePageStore } from "@/stores/page";
import { storeToRefs } from "pinia";

const { sections } = storeToRefs(usePageStore());

const currentY = ref<number>(0);
const onScroll = () => currentY.value = window.scrollY;

const isHeaderVisible = computed<boolean>(() => {
  return currentY.value > 300;
});

onMounted(() => {
  window.scrollTo({ top: 0 });
  window.addEventListener("scroll", onScroll, true);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll, true);
});
</script>

<template>
  <Transition name="navbar-slide">
    <header v-if="isHeaderVisible" class="app-header">
      <NavBar />
    </header>
  </Transition>

  <main class="app-main">
    <ProfileHeader />

    <PageView v-for="(section, index) in sections" :key="index" :section="section" />

    <ContactMe />

  </main>

  <footer class="app-footer">
    <PageFooter />
  </footer>
</template>

<style scoped>
.app-main {
  padding-bottom: 2em;
}

/* Navbar slide transition */
.navbar-slide-enter-active,
.navbar-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.navbar-slide-enter-from,
.navbar-slide-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

</style>
