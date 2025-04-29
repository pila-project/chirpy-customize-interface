<script setup>
  import { ref } from 'vue'
  import { vueEmbedComponent } from '@knowlearning/agents/vue.js'

  const { id } = defineProps({ id: String })

  const chirpyLink = ref(null)

  Agent
    .state(id)
    .then(async ({ game, configuration }) => {
      const { variables } = await Agent.environment()
      variables.configuration = configuration
      chirpyLink.value = `https://pila.cand.li/pila-play.html?game=${game}`
    })
</script>

<template>
  <div
    style="
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    "
  >
    <vueEmbedComponent
      v-if="chirpyLink"
      :id="chirpyLink"
    />
  </div>
</template>