<template>
  <div class="input-text">
    <label class="input-text__label" :for="id">{{ label }}</label>
    <input
        v-model="model"
        class="input-text__input"
        type="text"
        :name="name"
        data-test="SearchBox__Input__searchTerm"
    />
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  modelValue: {
    required: true,
    type: String,
  },
  id: {
    required: true,
    type: String,
  },
  label: {
    required: false,
    type: String,
    default: "",
  },
  isDisabled: {
    required: false,
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const name = computed(() => `input-text-${props.id}`);

const model = computed({
  get: (): string => {
    return props.modelValue;
  },
  set: (value: string) => {
    emit("update:modelValue", value);
  },
});
</script>

<style lang="scss" scoped>
.input-text {
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: var(--content-dark-a06) solid 1px;
  border-radius: var(--radius-sm);
  font-family: var(--font-bold);
  color: var(--clickable-dark);
  width: 100%;

  &__label {
    display: flex;
    align-items: center;
  }

  &__input {
    padding: 8px;

    &:disabled,
    &[aria-disabled="true"] {
      color: var(--clickable-disabled-dark);
    }
  }
}
</style>
