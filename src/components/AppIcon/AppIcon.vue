<template>
  <component :is="getComponent()" :class="['icon', sizeClass]"></component>
</template>

<script setup async lang="ts">
import {IconNameKeys} from "./AppIcon.d";
import type {PropType} from "vue";
import {computed, defineAsyncComponent} from "vue";

const props = defineProps({
  name: {
    type: String as PropType<keyof typeof IconNameKeys>,
    required: true,
  },
  size: {
    type: String as PropType<"xs" | "xssm" | "sm" | "md" | "lg" | "xl">,
    required: false,
    default: "md",
  },
});

const getComponent = () =>
    defineAsyncComponent(
        () => import(`./icons/${props.name}Icon.vue`)
    );
/* c8 ignore stop */

const sizeClass = computed<string>(() => `icon--${props.size}`);
</script>

<style scoped>
.icon {
  color: currentColor;
  pointer-events: none;
}

.icon--xs {
  height: var(--space-xs);
}

.icon--xssm {
  height: var(--space-xssm);
}

.icon--sm {
  height: var(--space-sm);
}

.icon--md {
  height: var(--space-md);
}

.icon--lg {
  height: var(--space-lg);
}

.icon--xl {
  height: var(--space-xl);
}
</style>
