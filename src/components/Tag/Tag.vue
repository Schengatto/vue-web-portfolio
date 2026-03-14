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
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 4px 10px;
  border-radius: 100px;
  font-size: var(--text-xxs);
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
}

.tag--white {
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--white-a80);
  background: transparent;
}

.tag--yellow {
  color: #F39300;
  background-color: rgba(243, 147, 0, 0.1);
  border: 1px solid rgba(243, 147, 0, 0.2);
}

.tag--green {
  color: var(--color-primary-text);
  background-color: var(--color-primary-glow);
  border: 1px solid hsla(160, 87%, 47%, 0.2);
}

@media print {
  .tag {
    border: none !important;
    background: none !important;
    padding: 0 !important;
    font-size: 11px;
    &:not(:last-child)::after {
      content: ",";
    }
  }
}
</style>
