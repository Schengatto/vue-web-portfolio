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
  <div :class="['item', linkClass ]">
    <BaseCard :tags="item.tags" @click="visitLink(item.link)">
      <template #content>
        <div class="item-content">
          <div class="d-flex">
            <div class="item-title">{{ item.title }}</div>
          </div>
          <div v-if="item.subtitle" class="item-subtitle">{{ item.subtitle }}</div>
          <div v-if="item.description" class="item-description">{{ item.description }}</div>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<style scoped lang="scss">
.item-content {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.item-title {
  font-size: 32px;
  color: var(--color-primary-text);
}

.item-subtitle {
  font-weight: bold;
}

.item-description {
  font-style: italic;
}

.item-tags {
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
}

.item-link {
  cursor: pointer;
  margin: 0 0.5em;
}

/* override styles when printing */
@media print {
  .item-title {
    font-size: 24px !important;
  }
}
</style>
