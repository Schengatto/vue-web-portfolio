<script setup lang="ts">
import {useHead} from "@vueuse/head";
import {usePageStore} from "@/stores/page";

const {userProfile: {name, role}} = usePageStore();

useHead({
  title: `${name} Portfolio`,
  meta: [
    {
      name: `description`,
      content: `${name} Portfolio | ${role}`,
    },
  ],
});
</script>

<template>
  <RouterView/>
</template>
