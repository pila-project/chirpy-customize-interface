<template>
  <div class="table">
    <div class="row" v-for="(val, key) in options" :key="key">
      <span class="label">{{ optionText[key] }}</span>
      <span class="action">
        <ToggleSwitch
          v-if="typeof val === 'boolean'"
          v-model="options[key]"
        />
        <ModelNaturalNumber
          v-else-if="typeof val === 'number'"
          :max="6"
          v-model="options[key]"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import ToggleSwitch from './ToggleSwitch.vue'
import ModelNaturalNumber from './ModelNaturalNumber.vue'

defineProps({ options: Object })

const optionText = {
  length: 'Track length',
  distractors: 'Distracting wrong paths',
  multiplication: 'Multiplication',
  division: 'Division',
  nonIntegerDivision: 'Division resulting in non-integers',
  negDivision: 'Division with negative numbers'
}

</script>


<style scoped>
.table {
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
}

.row:nth-child(odd) {
  background-color: #ffffff;
}

.row:nth-child(even) {
  background-color: #f7f7f7;
}

.label {
  flex: 1;
  color: #333;
}

.action {
  margin-left: 12px;
}

</style>