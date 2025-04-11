<template>
  <div class="table">
    <div class="row" v-for="(val, key) in chirpyOptions" :key="key">
      <span class="label">{{ key }}</span>
      <span class="action">
        <ToggleSwitch
          v-if="typeof val === 'boolean'"
          v-model="chirpyOptions[key]"
        />
        <ModelNaturalNumber
          v-else-if="typeof val === 'number'"
          :max="6"
          v-model="chirpyOptions[key]"
        />
      </span>
    </div>
    <pre>{{ chirpyOptions }}</pre>
  </div>
</template>

<script setup>
import ToggleSwitch from './ToggleSwitch.vue'
import ModelNaturalNumber from './ModelNaturalNumber.vue'
import { reactive } from 'vue'

const copy = x => JSON.parse(JSON.stringify(x))

const defaultChirpyOptions = {
  trackLength: 3,
  distractors: false,
  multiplication: true,
  division: false,
  divisionWithFractions: false,
  divisionWithNegatives: false
}

const chirpyOptions = reactive(copy(defaultChirpyOptions))

</script>


<style scoped>
.table {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
  font-family: sans-serif;
  font-size: 14px;
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