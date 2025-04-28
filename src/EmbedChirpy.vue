<script setup>
  import { ref } from 'vue'
  import { vueEmbedComponent } from '@knowlearning/agents/vue.js'

  const { id } = defineProps({ id: String })

  const chirpyLink = ref(null)

  console.log('iD????', id)

  Agent
    .state(id)
    .then(({ game, configuration }) => {
      console.log(configuration)
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