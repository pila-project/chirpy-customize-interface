<template>
  <div class="wrapper">

    <Header />

    <p><em>The game always uses addition and subtraction. Adjust the settings below and click 'Create' to generate a new game.</em></p>

    <ChirpyOptions :options="options" />

    <div
      v-if="createdId"
      class="created-id"
    >
      Copy the id below to use this game in your PILA sequences and assignments.
      <br><br>
      {{ createdId }}
      <button
        class="copy-button"
        @click="copy"
      >
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </div>
    <button
      v-else
      class="create-button"
      @click="getCode"
    >
      Create
    </button>

  </div>
</template>

<script setup>
  import { ref, reactive, watch } from 'vue'
  import ChirpyOptions from './components/ChirpyOptions.vue'
  import Header from './components/Header.vue'

  const options = reactive({
    trackLength: 3,
    distractors: false,
    multiplication: true,
    division: false,
    divisionWithFractions: false,
    divisionWithNegatives: false
  })

  watch(
    () => options,
    () => createdId.value = null,
    { deep: true}
  )

  const createdId = ref(null)
  const copied = ref(false)

  async function getCode() {
    const id = await Agent.create({
      active: {
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
.create-button:hover {
  background-color: #ffb300;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.created-id {
  text-align: center;
  padding: 1em;
}

</style>