<template>
  <div class="wrapper">

    <Header :language="language" @language="language = $event"/>

    <p><em>{{ t('instructions_1') }}</em></p>

    <ChirpyOptions :options="options" :language="language" />

    <div
      v-if="createdId"
      class="created-id"
    >
      {{ t('instructions_2') }}
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
    <div
      v-else
      style="
        display: flex;
        justify-content: space-between;
      "
    >
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
  import Header from './components/Header.vue'
  import matchNavigatorLanguage from './translations/matchNavigatorLanguage.js'
  import translations from './translations/translations.js'

  function t(slug) {
    return translations(slug, language.value) // so lang isn't needed as argument for each call
  }

  const language = ref(matchNavigatorLanguage(['en', 'th']))
  const nameInput = ref(t('new_chirpy_game'))

  const options = reactive({
    length: 3,
//    distractors: false,
    multiplication: true,
    division: false,
    nonIntegerDivision: false,
    negDivision: false
  })

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
        game: '25a6ac35e1c25713b5fedd0008599a52',
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
    window.open(`/${createdId.value}`, '_blank')
  }


</script>


<style scoped>
.wrapper {
  font-family: sans-serif;
  font-size: 14px;

  display: flex;
  flex-direction: column;
  width: 400px;
  padding:  4px 40px;
  border: dodgerblue solid 2px;
  border-radius: 16px;
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
  background-color: dodgerblue;
}

.play-button:hover {
  background-color: dodgerblue;
  opacity: 0.8;
}

.created-id {
  text-align: center;
  padding: 1em;
}

#name-input {
  border: none;
  border-bottom: 4px solid #AAAAAA;
  padding: 0px 16px;
  flex-grow: 1;
  font-size: 20px;
}

</style>