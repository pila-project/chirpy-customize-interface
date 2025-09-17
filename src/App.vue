<template>
  <div :class="`wrapper ${props.path}`">

    <Header
      :path="props.path"
      :language="language"
      @language="language = $event"
    />

    <ChirpyOptions v-if="props.path ==='chirpy'"
      :options="options"
      :language="language"
    />
    <MixologyOptions v-else-if="props.path === 'mixology'"
      :options="options"
      :language="language"
    />


    <div v-if="createdId" class="created-id">
      {{ t('created_message') }}
      <br><br>
      {{ createdId }}
      <button
        class="copy-button"
        @click="copy"
      >
        {{ copied ? t('copied') : t('copy') }}
      </button>
      <br>
      <button
        class="play-button"
        @click="play"
      >
        {{ t('play') }}
      </button>
    </div>
    <div v-else class="input-and-create-wrapper">
      <input
        id="name-input"
        type='text'
        v-model="nameInput"
      />
      <button
        class="create-button"
        @click="getCode"
      >
        {{ t('create') }}
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, watch } from 'vue'
  import ChirpyOptions from './components/ChirpyOptions.vue'
  import MixologyOptions from './components/MixologyOptions.vue'
  import Header from './components/Header.vue'
  import matchNavigatorLanguage from './translations/matchNavigatorLanguage.js'
  import translations from './translations/translations.js'

  const props = defineProps([ 'path' ])

  function t(slug) {
    return translations(slug, language.value) // so lang isn't needed as argument for each call
  }

  const language = ref(matchNavigatorLanguage(['en', 'th', 'pl', 'fr', 'pt', 'km']))
  const nameInput = ref(t('new_chirpy_game'))


  const defaultOptions = {
    chirpy: {
      length: 3,
      multiplication: true,
      division: false,
      nonIntegerDivision: false,
      negDivision: false
    },
    mixology: {
      potion_making_rounds: 4,
      mixed_units: false,
      difficulty: 0, // { 0: easy, 1: medium, 2: hard }
    }
  }
  const gameId = {
    chirpy: '25a6ac35e1c25713b5fedd0008599a52',
    mixology: 'de6a2f6f709e57a1b3aa6358a5a8d0bb'
  }
  const gameImages = {
    chirpy: 'https://chirpy-bird.pilaproject.org/Chirpy.png',
    mixology: 'https://chirpy-bird.pilaproject.org/Chirpy.png',
    default: 'https://chirpy-bird.pilaproject.org/Chirpy.png',

  }
  const options = reactive(defaultOptions[props.path])

  watch(
    () => options,
    () => createdId.value = null,
    { deep: true }
  )

  const createdId = ref(null)
  const copied = ref(false)

  async function getCode() {
    const id = await Agent.create({
      active: {
        name: nameInput.value,
        game: gameId[props.path],
        image: gameImages[props.path],
        configuration: JSON.parse(JSON.stringify(options))
      }
    })
    createdId.value = id
  }

  function copy() {
    const textarea = document.createElement("textarea")
    textarea.value = createdId.value

    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    document.body.removeChild(textarea)
    copied.value = true
  }

  function play() {
    window.open(`/${createdId.value}?lang=${language.value}`, '_blank')
  }


</script>


<style scoped>


.wrapper {
  --accent-color: dodgerblue;
  --secondary-color: red;

  font-family: sans-serif;
  font-size: 14px;

  display: flex;
  flex-direction: column;
  width: 400px;
  padding:  4px 40px;
  border: var(--accent-color) solid 2px;
  border-radius: 16px;
}
.wrapper.mixology {
  --accent-color: var(--secondary-color);
}

.copy-button,
.play-button,
.create-button {
  width: fit-content;
  align-self: flex-end;
  margin: 4px 12px;

  background-color: #ffca28;
  color: white;
  border: none;
  border-radius: 24px; /* rounded */
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.copy-button:hover,
.play-button:hover,
.create-button:hover {
  background-color: #ffb300;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}


.play-button {
  background-color: var(--accent-color);
}
.play-button

.play-button:hover {
  background-color: var(--accent-color);
  opacity: 0.8;
}

.input-and-create-wrapper {
  display: flex;
  justify-content: space-between;
}
.created-id {
  text-align: center;
  padding: 1em;
}

#name-input {
  border: none;
  border-bottom: 4px solid #AAAAAA;
  padding: 0px 16px;
  margin-right: 8px;
  flex-grow: 1;
  font-size: 20px;
}

</style>