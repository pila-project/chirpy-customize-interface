<template>
  <div class="radio-choice-control">
    <label 
      v-for="(option, idx) in options" 
      :key="idx" 
      class="radio-option"
    >
      <input
        type="radio"
        :value="option.value"
        :checked="modelValue === option.value"
        @change="updateValue(option.value)"
      />
      <span>{{ option.display }}</span>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (val) => {
  emit('update:modelValue', val)
}
</script>

<style scoped>
.radio-choice-control {
  display: flex;
  gap: 12px;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  user-select: none;
}

.radio-option input[type="radio"] {
  accent-color: mediumpurple; /* modern browsers */
  width: 16px;
  height: 16px;
  cursor: pointer;
}
</style>