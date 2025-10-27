<script setup>
  import { ref } from 'vue'
  import { vueEmbedComponent } from '@knowlearning/agents/vue.js'

  const copy = x => JSON.parse(JSON.stringify(x))

  const { id } = defineProps({ id: String })

  const candliLink = ref(null)

  let gameId

  Agent
    .state(id)
    .then(async ({ game, configuration }) => {
      gameId = game
      const { variables } = await Agent.environment()
      variables.configuration = configuration
      const urlParams = new URLSearchParams(window.location.search)
      const langParam = urlParams.get('lang')



      const lang = langParam || variables.LANGUAGES?.[0]?.split('-')[0] || 'en'
      candliLink.value = `https://pila.cand.li/pila-play.html?game=${game}&lang=${lang}`
    })

  async function handleClose(info) {
    await Agent.synced()
    const latestCompetencies = await Agent.state(`pila/latest_competencies/${gameId}`)
    if (Agent.embedded) Agent.close({ competencies: copy(latestCompetencies), success: info?.success })
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
      v-if="candliLink"
      :id="candliLink"
      @close="handleClose"
    />
  </div>
</template>