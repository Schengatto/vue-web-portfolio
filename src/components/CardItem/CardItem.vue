<script setup lang="ts">
import type {PropType} from "vue";
import type {ListItem} from "@/types/page-info";
import BaseCard from "@/components/BaseCard/BaseCard.vue";

const props = defineProps({
  item: {
    type: Object as PropType<ListItem>,
    required: true,
  },
});

const visitLink = (link: string | undefined) => {
  if (!link) return;
  window.open(link, "_blank");
}

const linkClass = props.item?.link ? "clickable" : "";
</script>

<template>
  <div :class="['card-item', linkClass]">
    <BaseCard :tags="item.tags" @click="visitLink(item.link)">
      <template #content>
        <div class="card-item__content">
          <h3 class="card-item__title">{{ item.title }}</h3>
          <div v-if="item.subtitle" class="card-item__subtitle">{{ item.subtitle }}</div>
          <div v-if="item.description" class="card-item__description">{{ item.description }}</div>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<style scoped lang="scss">
.card-item__content {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.card-item__title {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-primary-text);
  letter-spacing: -0.01em;
}

.card-item__subtitle {
  font-weight: 500;
  color: var(--white-a80);
  font-size: var(--text-sm);
}

.card-item__description {
  color: var(--white-a60);
  font-size: var(--text-xs);
  line-height: 1.7;
}

@media print {
  .card-item__title {
    font-size: 18px !important;
  }
}
</style>
