<template>
  <div :class="['tag', colorClass]">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import {computed, PropType} from "vue";

const props = defineProps({
  color: {
    type: String as PropType<"yellow" | "green" | "white">,
    required: false,
    default: "white",
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
  color: #30B675;
  border: 1px solid #C5E4CD;
  padding: 6px 8px;

  svg {
    margin-right: 6px;
  }
}
</style>
