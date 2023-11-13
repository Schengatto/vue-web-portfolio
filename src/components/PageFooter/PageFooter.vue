<script setup lang="ts">
import AppIcon from "@/components/AppIcon/AppIcon.vue";
import {usePageStore} from "@/stores/page";
import {storeToRefs} from "pinia";

const {userProfile} = storeToRefs(usePageStore());
</script>

<template>
  <div class="page-footer__navbar">
    <div class="page-footer__link" v-for="link in userProfile.externalLinks" :key="link.label">
      <div class="page-footer__link__icon">
        <AppIcon :name="link.icon" size="sm"></AppIcon>
      </div>
      <a :href="link.url" target="_blank">{{ link.label }}</a>
    </div>
  </div>
</template>

<style scoped>
.page-footer__navbar {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  gap: 2em;
  justify-content: end;
  padding: 1em;
  color: #f2f2f2;
}

a {
  color: white;
  font-variant: all-small-caps;
}

.page-footer__link {
  display: flex;
  gap: 0.5em;
}

.page-footer__link__icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
