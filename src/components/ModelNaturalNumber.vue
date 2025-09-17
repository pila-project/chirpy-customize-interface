<template>
  <div :class="`natural-number-control ${props.secondaryColor ? 'secondary-color' : ''}`">
    <button
    	@click="decrement"
    	:disabled="modelValue <= min"
    >−</button>
    <span class="value">{{ modelValue }}</span>
    <button
    	@click="increment"
    	:disabled="modelValue >= max"
    >+</button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  max: {
  	type: Number,
  	required: false,
  	default: Infinity
  },
  min: {
    type: Number,
    required: false,
    default: 0
  },
  secondaryColor: {
    type: Boolean,
    required: false,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const decrement = () => {
  emit('update:modelValue', props.modelValue - 1)
}

const increment = () => {
  emit('update:modelValue', props.modelValue + 1)
}
</script>

<style scoped>
.natural-number-control {
  --accent-color: dodgerblue;
  --secondary-color: mediumpurple;
  display: flex;
  align-items: center;
  gap: 8px;
}
.natural-number-control.secondary-color {
  --accent-color: var(--secondary-color);
}

.natural-number-control button {
  padding: 2px 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
}

.natural-number-control button:hover:not(:disabled) {
  background-color: #eee;
}

.natural-number-control button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.value {
  min-width: 20px;
  text-align: center;
}

.natural-number-control button {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--accent-color);
  color: white;
  border: none;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, opacity 0.2s ease;
}

.natural-number-control button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

</style>