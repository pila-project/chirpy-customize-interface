<template>
  <main>
    <h1>Hello World</h1>
    <ToggleSwitch v-model="switchValue" />
    {{ switchValue }}
  </main>
</template>

<script setup>
import ToggleSwitch from './components/ToggleSwitch.vue'

import { ref } from 'vue'
const switchValue = ref(false)

</script>
