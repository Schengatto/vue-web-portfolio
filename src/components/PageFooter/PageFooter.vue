<script setup lang="ts">
import AppIcon from "@/components/AppIcon/AppIcon.vue";
import { usePageStore } from "@/stores/page";
import { storeToRefs } from "pinia";

const { userProfile } = storeToRefs(usePageStore());
</script>

<template>
  <div class="page-footer__navbar">
    <div class="page-footer__container">
      <div class="page-footer__link" v-for="link in userProfile.externalLinks" :key="link.label">
        <div class="page-footer__link__icon">
          <AppIcon :name="link.icon" size="sm"></AppIcon>
        </div>
        <a :href="link.url" target="_blank">{{ link.label }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-footer__navbar {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1em;
  color: #f2f2f2;
}

.page-footer__container {
  margin: auto;
  display: flex;
  gap: 2em;
}

a {
  color: white;
  font-variant: all-small-caps;
}

a:hover {
  color: var(--color-primary-text);
}

.page-footer__link {
  display: flex;
  gap: 0.5em;
}

.page-footer__link__icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 16px;
}

@media (max-width: 1024px) {
  .page-footer__navbar {
    display: flex;
    position: relative;
    bottom: 0;
    width: 100%;
    gap: 2em;
    justify-content: end;
    padding: 1em;
    color: #f2f2f2;
    font-size: 10pt;
  }
}
</style>
