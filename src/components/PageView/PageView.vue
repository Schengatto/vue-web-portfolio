<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, type PropType } from "vue";
import type { PageSection } from "@/types/page-info";
import List from "@/components/List/List.vue";
import CardItem from "@/components/CardItem/CardItem.vue";

const props = defineProps({
  section: {
    type: Object as PropType<PageSection>,
    required: true,
  },
});

const printableClass = props.section?.isPrintable ? "" : "no-print";

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer?.unobserve(entry.target);
      }
    },
    { threshold: 0.1 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<template>
  <section
    ref="sectionRef"
    :id="section.id"
    :class="['section', printableClass, { 'section--visible': isVisible }]"
  >
    <div class="section__inner">
      <h2 class="paragraph-title">{{ section.title }}</h2>

      <div class="section__descriptions" v-if="section.descriptions?.length">
        <p class="paragraph-content" v-for="(description, index) in section.descriptions" :key="index">
          {{ description }}
        </p>
      </div>

      <div v-if="section.listItems" class="section__list">
        <List :items="section.listItems"/>
      </div>

      <div v-if="section.cardItems" class="section__cards">
        <CardItem v-for="(item, index) in section.cardItems" :key="index" :item="item"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  padding: 4em 2em;
  position: relative;

  /* Start hidden, animate in */
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);

  &--visible {
    opacity: 1;
    transform: translateY(0);
  }

  &__inner {
    max-width: 900px;
    margin: 0 auto;
  }

  &__descriptions {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin-bottom: 2em;
  }

  &__cards {
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5em;
  }

  &__list {
    margin-top: 0.5em;
  }
}


@media (max-width: 1024px) {
  .section {
    padding: 3em 1.5em;

    &__cards {
      grid-template-columns: 1fr;
      gap: 1.5em;
    }
  }
}

/* Disable animations for print and reduced motion */
@media print {
  .section {
    opacity: 1;
    transform: none;
    transition: none;
    padding: 1em 0;
    break-inside: avoid;

    &__descriptions {
      margin-bottom: 0.5em;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .section {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
