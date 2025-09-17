<template>
  <div class="table">
    <p><em>{{ t('mixology_instructions') }}</em></p>
    <div class="row" v-for="(val, key) in options" :key="key">
      <span class="label">{{ t(key) }}</span>
      <span class="action">
        <ToggleSwitch
          v-if="key === 'mixed_units'"
          v-model="options[key]"
        />
        <ModelNaturalNumber
          v-else-if="key === 'potion_making_rounds'"
          :max="15"
          v-model="options[key]"
        />
        <ModelRadioSelection
            v-else-if="key === 'difficulty'"
            v-model="options[key]"
            :options="[
              { value: 0, display: t('easy') },
              { value: 1, display: t('medium') },
              { value: 2, display: t('hard') },

            ]"
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