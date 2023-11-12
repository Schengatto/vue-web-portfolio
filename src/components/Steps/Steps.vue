<script setup lang="ts">

import {PropType} from "vue";
import {StepInfo} from "@/components/Steps/Steps.d";
import Tag from "@/components/Tag/Tag.vue";

defineProps({
  steps: {
    type: Array as PropType<StepInfo[]>,
    required: true,
  },
});
</script>

<template>
  <div class="steps">
    <div v-for="step in steps" class="step-item">
      <h2 class="step-title">{{ step.title }}</h2>
      <h4 class="step-subtitle">{{ step.subtitle }}</h4>
      <p class="step-description">{{ step.description }}</p>
      <div v-if="step.tags" class="step-tags">
        <Tag v-for="tag in step.tags" :key="tag" color="green">{{ tag }}</Tag>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.step-item {
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  gap: 0.5em;

  .step-title {
    color: hsla(160, 100%, 37%, 1)
  }

  .step-subtitle {
    font-weight: bold;
  }

  .step-description {
    font-style: italic;
  }

  .step-tags {
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
  }
}

</style>
