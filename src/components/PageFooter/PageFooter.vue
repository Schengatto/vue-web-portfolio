<script setup lang="ts">
import AppIcon from "@/components/AppIcon/AppIcon.vue";
import { usePageStore } from "@/stores/page";
import { storeToRefs } from "pinia";

const { userProfile } = storeToRefs(usePageStore());
</script>

<template>
  <div class="footer">
    <div class="footer__inner">
      <div class="footer__links">
        <a v-for="link in userProfile.externalLinks"
           :key="link.label"
           :href="link.url"
           target="_blank"
           class="footer__link"
        >
          <AppIcon :name="link.icon" size="sm" />
          <span>{{ link.label }}</span>
        </a>
      </div>
      <div class="footer__copy">
        &copy; {{ new Date().getFullYear() }} {{ userProfile.name }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2em;

  &__inner {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__links {
    display: flex;
    gap: 1.5em;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 0.5em;
    color: var(--white-a60);
    text-decoration: none;
    font-size: var(--text-xs);
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-primary-text);
    }
  }

  &__copy {
    font-size: var(--text-xxs);
    color: var(--color-text-muted);
  }
}

@media (max-width: 1024px) {
  .footer {
    &__inner {
      flex-direction: column;
      gap: 1em;
      text-align: center;
    }

    &__links {
      gap: 1em;
    }
  }
}
</style>
