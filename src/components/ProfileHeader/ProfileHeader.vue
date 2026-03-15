<script setup lang="ts">
import { usePageStore } from "@/stores/page";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import AppIcon from "@/components/AppIcon/AppIcon.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher.vue";

const { t } = useI18n();
const { userProfile, links } = storeToRefs(usePageStore());

onMounted(() => {
  if (userProfile.value.photoUrl) {
    const linkElement = document.createElement('link');
    linkElement.rel = 'preload';
    linkElement.as = 'image';
    linkElement.href = userProfile.value.photoUrl;
    document.head.appendChild(linkElement);
  }
});
</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <div class="hero__text">
        <p class="hero__greeting">{{ t("ui.greeting") }}</p>
        <h1 class="hero__name">{{ userProfile.name }}</h1>
        <h2 class="hero__role typewriter">{{ userProfile.role }}</h2>

        <div class="hero__social no-print">
          <a v-for="link in userProfile.externalLinks"
             :key="link.label"
             :href="link.url"
             target="_blank"
             class="hero__social-link"
             :aria-label="link.label"
          >
            <AppIcon :name="link.icon" size="sm" />
          </a>
        </div>

        <div class="hero__actions no-print">
          <LanguageSwitcher />
        </div>

        <nav class="hero__nav no-print">
          <a v-for="(link, index) in links" :key="index" :href="link.to" class="hero__nav-link">
            {{ link.label }}
          </a>
        </nav>
      </div>

      <div v-if="userProfile.photoUrl" class="hero__photo-wrapper">
        <div class="hero__photo-glow"></div>
        <img :src="userProfile.photoUrl" alt="my-photo" class="hero__photo" width="280" height="280">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  margin-bottom: 4em;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    width: 100%;
    gap: 4em;
  }

  &__text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  &__greeting {
    font-size: var(--text-md);
    color: var(--color-primary-text);
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 0.25em;
  }

  &__name {
    font-size: clamp(36px, 5vw, 56px);
    font-weight: 700;
    color: var(--white);
    letter-spacing: -0.03em;
    line-height: 1.1;
  }

  &__role {
    font-size: clamp(20px, 3vw, 32px);
    font-weight: 300;
    color: var(--white-a80);
    letter-spacing: 0.02em;
    margin-bottom: 1em;
  }

  &__social {
    display: flex;
    gap: 1em;
    margin-bottom: 1.5em;

    &-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      color: var(--white-a60);
      transition: all 0.3s ease;

      &:hover {
        background: var(--color-primary-glow);
        border-color: var(--color-primary-text);
        color: var(--color-primary-text);
        transform: translateY(-2px);
      }
    }
  }

  &__actions {
    margin-bottom: 1em;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 0.6em;

    &-link {
      font-size: var(--text-md);
      font-weight: 500;
      color: var(--white-a60);
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
      padding-left: 0;

      &::before {
        content: '';
        display: inline-block;
        width: 0;
        height: 2px;
        background: var(--color-primary-text);
        margin-right: 0;
        vertical-align: middle;
        transition: all 0.3s ease;
      }

      &:hover {
        color: var(--color-primary-text);
        padding-left: 0.5em;

        &::before {
          width: 20px;
          margin-right: 0.5em;
        }
      }
    }
  }

  &__photo-wrapper {
    position: relative;
    flex-shrink: 0;
  }

  &__photo-glow {
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    background: radial-gradient(circle, hsla(160, 87%, 47%, 0.12) 0%, transparent 70%);
    filter: blur(20px);
  }

  &__photo {
    position: relative;
    border-radius: 50%;
    width: 280px;
    height: 280px;
    object-fit: cover;
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  }
}

@media (max-width: 1024px) {
  .hero {
    min-height: auto;
    padding: 4em 1.5em 2em;

    &__content {
      flex-direction: column-reverse;
      text-align: center;
      gap: 2em;
    }

    &__text {
      align-items: center;
    }

    &__social {
      justify-content: center;
    }

    &__nav {
      align-items: center;

      &-link {
        &:hover {
          padding-left: 0;
        }

        &::before {
          display: none;
        }
      }
    }

    &__photo {
      width: 200px;
      height: 200px;
    }
  }
}

@media print {
  .hero {
    min-height: auto;
    padding: 0;
    margin-bottom: 0;

    &__content {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.5em;
    }

    &__text {
      gap: 0.2em;
    }

    &__greeting {
      font-size: 11px;
      color: #555;
      margin-bottom: 0;
    }

    &__name {
      font-size: 28px;
      color: #000;
    }

    &__role {
      font-size: 16px;
      color: #333;
      margin-bottom: 0;
    }

    &__photo-wrapper {
      order: -1;
    }

    &__photo {
      width: 90px;
      height: 90px;
      border: 1px solid #ddd;
      box-shadow: none;
    }

    &__photo-glow {
      display: none;
    }
  }
}
</style>
