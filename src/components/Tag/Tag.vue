<template>
  <div :class="['tag', colorClass]">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import {computed} from "vue";

const props = defineProps({
  color: {
    type: String as PropType<"yellow" | "green" | "white">,
    required: false,
    default: "green",
  },
});

const colorClass = computed<string>(() => `tag--${props.color}`);
</script>

<style lang="scss" scoped>
.tag {
  display: flex;
  gap: 2px;
  padding: 2px 4px;
  border-radius: var(--radius-md);
  font-size: var(--text-xs);
}

.tag--white {
  border: 1px solid #fafafa;
  background: white;
}

.tag--yellow {
  color: #F39300;
  background-color: #FFEFBD;
  padding: 6px 8px;

  svg {
    margin-right: 6px;
  }
}

.tag--green {
  color: var(--color-primary-text);
  border: 1px solid var(--color-primary-text);
  padding: 6px 8px;

  svg {
    margin-right: 6px;
  }
}

/* override styles when printing */
@media print {
  .tag {
    border: none !important;
    padding: 0 !important;
    &:not(:last-child)::after {
      content: ",";
    }
  }
}
</style>
