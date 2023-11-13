<script setup lang="ts">
import type {PropType} from "vue";
import type {PageSection} from "@/types/page-info";
import List from "@/components/List/List.vue";
import CardItem from "@/components/CardItem/CardItem.vue";

const props = defineProps({
  section: {
    type: Object as PropType<PageSection>,
    required: true,
  },
});

const printableClass = props.section?.isPrintable ? "" : "no-print";
</script>

<template>
  <div :id="section.id" :class="['page', printableClass]">
    <div class="page-item">
      <h1 class="paragraph-title">{{ section.title }}</h1>
      <p class="paragraph-content" v-for="(description, index) in section.descriptions" :key="index">
        {{ description }}
      </p>

      <div v-if="section.listItems">
        <List :items="section.listItems"/>
      </div>

      <div v-if="section.cardItems" class="page__cards">
        <CardItem v-for="(item, index) in section.cardItems" :key="index" :item="item"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page__cards {
  margin: 1em auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5em;
}

/* Mobile */
@media (max-width: 1024px) {
  .page__cards {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5em;
  }
}
</style>
