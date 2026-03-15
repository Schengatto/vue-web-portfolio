<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import { usePageStore } from "@/stores/page";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import AppIcon from "@/components/AppIcon/AppIcon.vue";

const { t } = useI18n();
const { userProfile } = storeToRefs(usePageStore());
const emailHref = `mailto:${userProfile.value.emailAddress}?subject=Get in touch`;
const telegramContact = `https://t.me/${userProfile.value.telegram}`;

const downloadCV = () => window.print();

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer?.unobserve(entry.target);
      }
    },
    { threshold: 0.1 }
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});

onBeforeUnmount(() => { observer?.disconnect(); });
</script>

<template>
  <section ref="sectionRef" id="contact-me" :class="['contact', { 'contact--visible': isVisible }]">
    <div class="contact__inner">
      <div class="contact__header">
        <h2 class="contact__title">{{ t("ui.contactTitle") }}</h2>
        <p class="contact__subtitle">{{ t("ui.contactSubtitle") }}</p>
      </div>

      <div class="contact__grid">
        <!-- Quick contact cards -->
        <div class="contact__channels">
          <a :href="emailHref" target="_blank" class="contact__card">
            <div class="contact__card-icon">
              <AppIcon name="Gmail" size="md" />
            </div>
            <div class="contact__card-info">
              <span class="contact__card-label">{{ t("ui.email") }}</span>
              <span class="contact__card-value">{{ userProfile.emailAddress }}</span>
            </div>
            <span class="contact__card-arrow">&rarr;</span>
          </a>

          <a :href="telegramContact" target="_blank" class="contact__card">
            <div class="contact__card-icon">
              <AppIcon name="Telegram" size="md" />
            </div>
            <div class="contact__card-info">
              <span class="contact__card-label">{{ t("ui.telegram") }}</span>
              <span class="contact__card-value">@{{ userProfile.telegram }}</span>
            </div>
            <span class="contact__card-arrow">&rarr;</span>
          </a>

          <button class="contact__card contact__card--cv no-print" @click="downloadCV">
            <div class="contact__card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
            <div class="contact__card-info">
              <span class="contact__card-label">{{ t("ui.resume") }}</span>
              <span class="contact__card-value">{{ t("ui.downloadCv") }}</span>
            </div>
            <span class="contact__card-arrow">&rarr;</span>
          </button>
        </div>

        <!-- Contact form -->
        <div class="contact__form-wrapper">
          <h3 class="contact__form-title">{{ t("ui.sendMessage") }}</h3>
          <form class="contact__form" :action="userProfile.emailEndpoint" method="POST">
            <div class="contact__field">
              <label for="sender" class="contact__label">{{ t("ui.email") }}</label>
              <input id="sender" type="email" name="email" :placeholder="t('ui.emailPlaceholder')" required class="contact__input">
            </div>

            <div class="contact__field">
              <label for="message" class="contact__label">{{ t("ui.message") }}</label>
              <textarea id="message" name="message" :placeholder="t('ui.messagePlaceholder')" required rows="5" class="contact__textarea"></textarea>
            </div>

            <button class="contact__submit" type="submit">
              <span>{{ t("ui.sendButton") }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  padding: 5em 2em;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);

  &--visible {
    opacity: 1;
    transform: translateY(0);
  }

  &__inner {
    max-width: 900px;
    margin: 0 auto;
  }

  &__header {
    margin-bottom: 3em;
  }

  &__title {
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 700;
    color: var(--white);
    letter-spacing: -0.02em;
    margin-bottom: 0.4em;
  }

  &__subtitle {
    font-size: var(--text-md);
    color: var(--white-a60);
    line-height: 1.6;
    max-width: 500px;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 3em;
    align-items: start;
  }

  // --- Quick contact cards ---
  &__channels {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  &__card {
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 1.25em 1.5em;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-md);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: var(--glass-bg-hover);
      border-color: rgba(255, 255, 255, 0.15);
      transform: translateX(4px);

      .contact__card-arrow {
        opacity: 1;
        transform: translateX(0);
        color: var(--color-primary-text);
      }

      .contact__card-icon {
        background: var(--color-primary-glow);
        border-color: hsla(160, 87%, 47%, 0.25);
      }
    }
  }

  &__card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.06);
    flex-shrink: 0;
    color: var(--color-primary-text);
    transition: all 0.3s ease;
  }

  &__card-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
    min-width: 0;
  }

  &__card-label {
    font-size: var(--text-xxs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--white-a60);
  }

  &__card-value {
    font-size: var(--text-sm);
    color: var(--white-a80);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__card-arrow {
    font-size: 18px;
    color: var(--white-a60);
    opacity: 0;
    transform: translateX(-6px);
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  &__card--cv {
    font-family: var(--font-sans);
    cursor: pointer;
    text-align: left;
  }

  // --- Form ---
  &__form-wrapper {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-md);
    padding: 2em;
  }

  &__form-title {
    font-size: var(--text-md);
    font-weight: 600;
    color: var(--white);
    margin-bottom: 1.5em;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1.25em;
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
  }

  &__label {
    font-size: var(--text-xxs);
    font-weight: 600;
    color: var(--white-a60);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  &__input,
  &__textarea {
    padding: 0.75em 1em;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-sm);
    color: var(--white);
    font-family: var(--font-sans);
    font-size: var(--text-sm);
    transition: all 0.3s ease;
    width: 100%;

    &::placeholder {
      color: var(--color-text-muted);
    }

    &:hover {
      border-color: rgba(255, 255, 255, 0.15);
    }

    &:focus {
      outline: none;
      border-color: var(--color-primary-text);
      box-shadow: 0 0 0 3px var(--color-primary-glow);
      background: rgba(255, 255, 255, 0.05);
    }
  }

  &__textarea {
    resize: vertical;
    min-height: 120px;
  }

  &__submit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    padding: 0.85em 1.75em;
    background: var(--color-primary-text);
    color: var(--vt-c-black);
    border: none;
    border-radius: var(--radius-sm);
    font-family: var(--font-sans);
    font-size: var(--text-sm);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    align-self: flex-start;

    svg {
      transition: transform 0.3s ease;
    }

    &:hover {
      background: hsl(160, 87%, 55%);
      box-shadow: 0 4px 20px hsla(160, 87%, 47%, 0.3);

      svg {
        transform: translateX(3px);
      }
    }

    &:active {
      transform: scale(0.98);
    }
  }
}

@media (max-width: 1024px) {
  .contact {
    padding: 3em 1.5em;

    &__grid {
      grid-template-columns: 1fr;
      gap: 2em;
    }

    &__channels {
      flex-direction: row;
    }

    &__card {
      flex: 1;
    }

    &__card-arrow {
      display: none;
    }
  }
}

@media (max-width: 520px) {
  .contact {
    &__channels {
      flex-direction: column;
    }
  }
}

@media print {
  .contact {
    opacity: 1;
    transform: none;
    transition: none;
    padding: 1em 0;
    break-inside: avoid;

    &__header {
      margin-bottom: 1em;
    }

    &__title {
      font-size: 22px;
      color: #000;
      border-bottom: 1px solid var(--color-primary-text);
      padding-bottom: 0.5em;
    }

    &__subtitle {
      display: none;
    }

    &__grid {
      display: block;
    }

    &__channels {
      flex-direction: row;
      gap: 2em;
    }

    &__card {
      background: none;
      border: none;
      padding: 0.5em 0;

      &:hover {
        transform: none;
      }
    }

    &__card-icon {
      display: none;
    }

    &__card-arrow {
      display: none;
    }

    &__card-label {
      font-size: 10px;
      color: #555;
    }

    &__card-value {
      font-size: 12px;
      color: #000;
    }

    &__form-wrapper {
      display: none;
    }
  }
}
</style>
