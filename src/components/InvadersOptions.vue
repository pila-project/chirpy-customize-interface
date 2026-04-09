<template>
  <div class="table">
    <!-- <p><em>{{ t('invaders_instructions') }}</em></p> -->
    <div class="row" v-for="(val, key) in options" :key="key">
      <span class="label">{{ t(key) }}</span>
      <span class="action">
        <ModelNaturalNumber
          v-if="key === 'rounds_per_selected_operation'"
          :min="1"
          :max="20"
          secondaryColor
          v-model="options[key]"
        />
        <ToggleSwitch
          v-else-if="key === 'addition'"
          secondaryColor
          v-model="options[key]"
        />
        <ToggleSwitch
          v-else-if="key === 'subtraction'"
          secondaryColor
          v-model="options[key]"
        />
        <ToggleSwitch
          v-else-if="key === 'multiplication'"
          secondaryColor
          v-model="options[key]"
        />
        <ToggleSwitch
          v-else-if="key === 'division'"
          secondaryColor
          v-model="options[key]"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import ToggleSwitch from './ToggleSwitch.vue'
import ModelNaturalNumber from './ModelNaturalNumber.vue'
import ModelRadioSelection from './ModelRadioSelection.vue'
import translations from '../translations/translations.js'

const props = defineProps({
  options: Object,
  language: String
})

function t(slug) {
  return translations(slug, props.language) // so lang isn't needed as argument for each call
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