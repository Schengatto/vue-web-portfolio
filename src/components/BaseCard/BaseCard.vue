<template>
  <div class="card" @click="handleCardClick">
    <div class="card__content">
      <slot name="content"/>
    </div>

    <div v-if="tags?.length" class="card__tags">
      <Tag v-for="(tag, index) in tags" :key="index" color="green">{{ tag }}</Tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from "@/components/Tag/Tag.vue";
import type {PropType} from "vue";

const props = defineProps({
  url: {
    type: String,
    required: false,
  },
  tags: {
    type: Array as PropType<String[]>,
    required: false,
  }
});

const handleCardClick = () => {
  if (props.url) {
    window.open(props.url);
  }
};
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  position: relative;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    background: var(--glass-bg-hover);
    border-color: rgba(255, 255, 255, 0.12);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 0 24px 20px;
  }

  &__content {
    padding: 28px 24px 16px;
    flex: 1;
  }
}

@media print {
  .card {
    border: none;
    border-radius: 0;
    background: transparent;

    &:hover {
      transform: none;
      box-shadow: none;
    }

    &__tags {
      padding: 0;
      margin-top: 0.5em;
      gap: 4px;
    }

    &__content {
      padding: 0;
    }
  }
}
</style>
