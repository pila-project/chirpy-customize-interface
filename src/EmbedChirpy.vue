<script setup>
  import { ref } from 'vue'
  import { vueEmbedComponent } from '@knowlearning/agents/vue.js'

  const copy = x => JSON.parse(JSON.stringify(x))

  const { id } = defineProps({ id: String })

  const chirpyLink = ref(null)

  let gameId

  Agent
    .state(id)
    .then(async ({ game, configuration }) => {
      gameId = game
      const { variables } = await Agent.environment()
      variables.configuration = configuration
      const lang = variables.LANGUAGES?.[0]?.split('-')[0] || 'en'
      chirpyLink.value = `https://pila.cand.li/pila-play.html?game=${game}&lang=${lang}`
    })

  async function handleClose(info) {
    if (Agent.embedded) {
      await Agent.synced()
      const latestCompetencies = await Agent.state(`pila/latest_competencies/${gameId}`)
      Agent.close({ competencies: copy(latestCompetencies), success: info?.success })
    }
    else {
      closeInfo.value = info
    }
    await clearOutLatestCompetencies()
  }

  async function clearOutLatestCompetencies() {
    const competencies = await Agent.state(`pila/latest_competencies/${gameId}`)
    Object.keys(competencies).forEach(key => delete competencies[key])
  }
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
      @close="handleClose"
    />
  </div>
</template>