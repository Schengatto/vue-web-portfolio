<template>
  <div class="checkbox">
    <label class="checkbox__label" :for="id">
      <input
        :id="id"
        v-model="model"
        :name="name"
        class="checkbox__input"
        type="checkbox"
        :disabled="isDisabled"
        :aria-disabled="isDisabled"
        :data-test="`Checkbox__Input__${id}`"
      />
      <div class="checkbox__checkmark" />
      <slot name="label" />
    </label>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  modelValue: {
    required: true,
    type: Boolean,
  },
  id: {
    required: true,
    type: String,
  },
  isDisabled: {
    required: false,
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const name = computed(() => `checkbox-${props.id}`);

const model = computed({
  get: (): boolean => {
    return props.modelValue;
  },
  set: (value: boolean) => {
    emit("update:modelValue", value);
  },
});
</script>

<style lang="scss" scoped>
.checkbox {
  padding: 8px;
  border: var(--content-dark-a06) solid 1px;
  border-radius: var(--radius-sm);
  font-family: var(--font-bold);
  background-color: var(--white);
  color: var(--clickable-dark);

  &__label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__input {
    display: none;

    &:disabled,
    &[aria-disabled="true"] {
      color: var(--clickable-disabled-dark);
    }
  }

  &__checkmark {
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: var(--space-xs);

    &:before {
      content: "";
      display: block;
      height: 20px;
      border-radius: 4px;
      border: var(--clickable-dark-a04) solid 1px;
      background-color: var(--background-1);
    }
  }

  &__input:checked + &__checkmark {
    &:before {
      content: "";
      display: block;
      border: var(--clickable-dark-a16) solid 2px;
    }

    &:after {
      content: "";
      position: absolute;
      top: 2px;
      left: 6px;
      transform: rotate(45deg);
      display: block;
      width: 7px;
      height: 13px;
      border: solid var(--clickable-dark);
      border-width: 0 3px 3px 0;
    }
  }
}
</style>
