<template>
  <div class="card" @click="handleCardClick">
    <div class="card__content">
      <slot name="content"/>
    </div>

    <div class="d-flex card__tags">
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

$image-height: 320px;

.card {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  border: 1px solid var(--color-primary-text);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card) 0 4px 16px 0;
  position: relative;
  height: 100%;

  &__image-wrapper {
    position: relative;
  }

  &__image {
    height: #{$image-height};
    border-radius: var(--radius-md) var(--radius-md) 0 0;
    overflow: hidden;
  }

  &__tags {
    position: absolute;
    justify-content: end;
    top: var(--space-sm);
    left: var(--space-sm);
    width: calc(100% - 2 * var(--space-sm));
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  &__content {
    align-items: center;
    justify-content: space-between;
    padding: 48px 28px;
    align-self: stretch;
  }
}

/* override styles when printing */
@media print {
  .card {
    border: none;
    border-radius: 0;

    &__tags {
      position: relative;
      top: auto;
      bottom: auto;
      left: auto;
      justify-content: start;
      margin-top: 0.5em;
      gap: 4px;
    }

    &__content {
      padding: 0;
    }
  }
}
</style>
