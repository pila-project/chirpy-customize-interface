<template>
  <div :class="`radio-choice-control ${props.secondaryColor ? 'secondary-color' : ''}`">
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
  },
  secondaryColor: {
    type: Boolean,
    required: false,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (val) => {
  emit('update:modelValue', val)
}
</script>

<style scoped>
.radio-choice-control {
  --accent-color: dodgerblue;
  --secondary-color: mediumpurple;

  display: flex;
  gap: 12px;
}

.radio-choice-control.secondary-color {
  --accent-color: var(--secondary-color);
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  user-select: none;
}

.radio-option input[type="radio"] {
  accent-color: var(--accent-color);
  width: 16px;
  height: 16px;
  cursor: pointer;
}
</style>