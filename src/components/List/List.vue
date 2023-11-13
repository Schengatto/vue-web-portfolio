<script setup lang="ts">
import type {PropType} from "vue";
import Tag from "@/components/Tag/Tag.vue";
import AppIcon from "@/components/AppIcon/AppIcon.vue";
import type {ListItem} from "@/types/page-info";

defineProps({
  items: {
    type: Array as PropType<ListItem[]>,
    required: true,
  },
});

const visitLink = (link: string | undefined) => {
  if (!link) return;
  window.open(link, "_blank");
}
</script>

<template>
  <div class="list">
    <div v-for="step in items" class="item">
      <div class="d-flex">
        <div class="item-title">{{ step.title }}</div>

        <div v-if="step.link" @click="visitLink(step.link)" class="item-link">
          <AppIcon name="Folder" @click="visitLink(step.link)" size="md"></AppIcon>
        </div>
      </div>
      <div v-if="step.subtitle" class="item-subtitle">{{ step.subtitle }}</div>
      <div v-if="step.description" class="item-description">{{ step.description }}</div>
      <div v-if="step.tags" class="item-tags">
        <Tag v-for="tag in step.tags" :key="tag" color="green">{{ tag }}</Tag>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  gap: 0.5em;

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
}

/* override styles when printing */
@media print {
  .item-title {
    font-size: 24px !important;
  }
}

</style>
