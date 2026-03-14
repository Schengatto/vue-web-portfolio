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
    <div v-for="(step, index) in items" :key="index" class="list-item">
      <div class="list-item__indicator">
        <div class="list-item__dot"></div>
        <div v-if="index < items.length - 1" class="list-item__line"></div>
      </div>

      <div class="list-item__content">
        <div class="list-item__header">
          <h3 class="list-item__title">{{ step.title }}</h3>
          <div v-if="step.link" @click="visitLink(step.link)" class="list-item__link">
            <AppIcon name="Folder" @click="visitLink(step.link)" size="md"></AppIcon>
          </div>
        </div>
        <div v-if="step.subtitle" class="list-item__subtitle">{{ step.subtitle }}</div>
        <div v-if="step.description" class="list-item__description">{{ step.description }}</div>
        <div v-if="step.tags" class="list-item__tags">
          <Tag v-for="tag in step.tags" :key="tag" color="green">{{ tag }}</Tag>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
}

.list-item {
  display: flex;
  gap: 1.5em;
  position: relative;

  &__indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    padding-top: 6px;
  }

  &__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--color-primary-text);
    box-shadow: 0 0 10px hsla(160, 87%, 47%, 0.3);
    flex-shrink: 0;
  }

  &__line {
    width: 1px;
    flex: 1;
    background: linear-gradient(180deg, var(--color-primary-text) 0%, transparent 100%);
    opacity: 0.3;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
    padding-bottom: 2em;
    flex: 1;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  &__title {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--color-primary-text);
    letter-spacing: -0.01em;
  }

  &__subtitle {
    font-weight: 500;
    color: var(--white-a80);
    font-size: var(--text-sm);
  }

  &__description {
    color: var(--white-a60);
    font-size: var(--text-sm);
    line-height: 1.7;
  }

  &__tags {
    display: flex;
    gap: 0.4em;
    flex-wrap: wrap;
    margin-top: 0.25em;
  }

  &__link {
    cursor: pointer;
    color: var(--white-a60);
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-primary-text);
    }
  }
}

@media (max-width: 1024px) {
  .list-item {
    gap: 1em;

    &__title {
      font-size: var(--text-lg);
    }
  }
}

@media print {
  .list-item {
    &__indicator {
      display: none;
    }

    &__title {
      font-size: 14px !important;
      color: #000;
    }

    &__subtitle {
      font-size: 12px;
      color: #333;
    }

    &__description {
      font-size: 11px;
      color: #444;
      line-height: 1.5;
    }

    &__content {
      padding-bottom: 0.75em;
    }

    &__tags {
      gap: 0.2em;
    }

    &__link {
      display: none;
    }
  }
}
</style>
