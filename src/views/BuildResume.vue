<script setup lang="ts">
import {computed, ref} from "vue";
import {usePageStore} from "@/stores/page";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";

const pageStore = usePageStore();
const {sections, userProfile} = storeToRefs(pageStore);

const editableStore = ref<string>(JSON.stringify({userProfile: userProfile.value, sections: sections.value}, undefined, 2));
const modelError = ref<any>(null);

const model = computed({
  get: (): string => {
    return editableStore.value || JSON.stringify({userProfile: userProfile.value, sections: sections.value}, undefined, 2);
  },
  set: (value: string) => {
    editableStore.value = value;
  },
});

const router = useRouter();
const applyChanges = () => {
  try {
    const editedStore = JSON.parse(editableStore.value);
    modelError.value = null;
    pageStore.setPageSections(editedStore.sections || []);
    pageStore.setUserProfile(editedStore.userProfile);
    router.push({name: "MyPortfolio"})
  } catch (error) {
    modelError.value = error;
  }
}
</script>

<template>
  <header id="app-header">
  </header>
  <main id="app-main">
    <div class="editable-fields">
      <textarea v-model="model" rows="50"/>
    </div>
    <div v-if="modelError">{{ modelError }}</div>
    <button class="button" type="button" @click="applyChanges">Apply</button>
  </main>
  <footer id="app-footer">
  </footer>
</template>

<style scoped lang="scss">
#app-main {
  margin: 2em auto;
  text-align: center;
}

textarea {
  width: 90%;
  background: url(http://i.imgur.com/2cOaJ.png);
  background-attachment: local;
  background-repeat: no-repeat;
  background-color: white;
  padding-left: 35px;
  padding-top: 10px;
  border-color: #ccc;
}
</style>
