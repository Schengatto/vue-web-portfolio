<script setup lang="ts">
import { usePageStore } from "@/stores/page";
import { storeToRefs } from "pinia";
import AppIcon from "@/components/AppIcon/AppIcon.vue";

const { userProfile } = storeToRefs(usePageStore());
const emailHref = `mailto:${userProfile.value.emailAddress}?subject=Get in touch`;
const telegramContact = `https://t.me/${userProfile.value.telegram}`;
</script>

<template>
  <div id="contact-me" class="page">
    <h1 class="paragraph-title">Get in touch!</h1>
    <div class="contact-extra">
      <a :href="emailHref" target="_blank">
        <AppIcon name="Gmail" /> Email
      </a>
      <a :href="telegramContact" target="_blank">
        <AppIcon name="Telegram" /> Telegram
      </a>
    </div>

    <div>Or write me a message:</div>
    <form class="" :action="userProfile.emailEndpoint" method="POST">
      <div class="form-field">
        <label for="sender">Your email:</label>
        <input id="sender" type="email" name="email" placeholder="Write your email address here" required>
      </div>

      <div class="form-field">
        <label for="message">Your Message:</label>
        <textarea id="message" name="message" class="form-control" placeholder="Write your message here" required
          rows="6"></textarea>
      </div>
      <button class="button" type="submit">Send</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.page {
  margin-bottom: 5em;

  .form-field {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
  }

  input {
    padding: 8px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    border: var(--content-dark-a06) solid 1px;
    font-family: var(--font-bold);
    width: 100%;
  }

  textarea {
    padding: 8px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    border: var(--content-dark-a06) solid 1px;
    font-family: var(--font-bold);
  }

  .contact-extra {
    display: flex;
    gap: 1em;
    margin: 1em auto;
  }
}
</style>