<script setup lang="ts">
import {usePageStore} from "@/stores/page";
import {storeToRefs} from "pinia";

const {userProfile} = storeToRefs(usePageStore());
const emailHref = `mailto:${userProfile.value.emailAddress}?subject=Get in touch`;
</script>

<template>
  <div id="contact-me" class="page">
    <h1 class="paragraph-title">Get in touch</h1>
    <form :action="userProfile.emailEndpoint" method="POST">
      <div class="form-field">
        <label for="sender">Your email:</label>
        <input id="sender" type="email" name="email" placeholder="Write your email address here" required>
      </div>

      <div class="form-field">
        <label for="message">Your Message:</label>
        <textarea id="message" name="message" class="form-control" placeholder="Write your message here"
                  required rows="6"></textarea>
      </div>
      <button class="button" type="submit">Send</button>
    </form>
    <div class="contact-extra">
      <span>Or send me an email at <a :href="emailHref">{{ userProfile.emailAddress }}</a>.</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  .form-field {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
  }

  .contact-extra {
    margin: 2em auto;
  }
}
</style>