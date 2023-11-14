<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {usePageStore} from "@/stores/page";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";
import BaseCard from "@/components/BaseCard/BaseCard.vue";
import InputText from "@/components/Form/InputText/InputText.vue";
import {profileInfo} from "@/configurations/pages";

const pageStore = usePageStore();
const {sections, userProfile} = storeToRefs(pageStore);

const editableUserProfile = ref<any>({...userProfile.value});
const editableSections = ref<string>(JSON.stringify(sections.value, undefined, 2));
const modelError = ref<unknown>("");

// const userProfileModel = computed({
//   get: (): string => {
//     return editableUserProfile.value || JSON.stringify({...userProfile.value}, undefined, 2);
//   },
//   set: (value: string) => {
//     editableUserProfile.value = value;
//   },
// });

const sectionsModel = computed({
  get: (): string => {
    return editableSections.value || JSON.stringify(sections.value, undefined, 2);
  },
  set: (value: string) => {
    editableSections.value = value;
  },
});

const router = useRouter();
const applyChanges = () => {
  try {
    // const editedUserProfile = JSON.parse(editableUserProfile.value);
    const editedSections = JSON.parse(editableSections.value);
    modelError.value = "";
    pageStore.setUserProfile(editableUserProfile);
    pageStore.setPageSections(editedSections || []);
    router.push({name: "MyPortfolio"})
  } catch (error) {
    modelError.value = error;
  }
}

onMounted(() => {
  window.scrollTo({top: 0});
});
</script>

<template>
  <header id="app-header">
  </header>
  <main id="app-main">
    <BaseCard>
      <template #content>
        <div class="editable-fields">
          <div class="title">User profile</div>
          <div class="fields-row">
            <InputText label="Name" v-model="editableUserProfile.name" id="profile-name"/>
            <InputText label="Role" v-model="editableUserProfile.role" id="profile-role"/>
            <InputText label="Email" v-model="editableUserProfile.emailAddress" id="profile-email"/>
            <InputText label="Phone number" v-model="editableUserProfile.phoneNumber" id="profile-phone"/>
            <InputText label="Picture URL" v-model="editableUserProfile.photoUrl" id="profile-photo"/>
            <InputText label="Formspree URL" v-model="profileInfo.emailEndpoint" id="profile-photo"/>
          </div>

          <div class="external-profiles">
            <InputText label="Linkedin profile" v-model="profileInfo.externalLinks[0].url" id="profile-linkedin"/>
            <InputText label="GitHub profile" v-model="profileInfo.externalLinks[1].url" id="profile-github"/>
            <InputText label="GitLab profile" v-model="profileInfo.externalLinks[2].url" id="profile-gitlab"/>
          </div>

          <div class="title">Sections</div>
          <textarea v-model="sectionsModel" rows="40"/>
        </div>

        <div v-if="modelError">{{ modelError }}</div>
        <button class="button" type="button" @click="applyChanges">Apply</button>
      </template>
    </BaseCard>
  </main>
  <footer id="app-footer">
  </footer>
</template>

<style scoped lang="scss">
#app-main {
  margin: 2em auto;
  text-align: center;
  max-width: 90%;
}

.fields-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.title {
  font-size: 32px;
  color: var(--color-primary-text);
}

textarea {
  width: 100%;
  background: url(http://i.imgur.com/2cOaJ.png);
  background-attachment: local;
  background-repeat: no-repeat;
  background-color: white;
  padding-left: 35px;
  padding-top: 10px;
  border-color: #ccc;
}

/* Mobile */
@media (max-width: 1024px) {
  .fields-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
