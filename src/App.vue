<template>
  <div class="wrapper">

    <Header />

    <p><em>The game always uses addition and subtraction. Adjust the settins below and click 'Create' to generate a new game.</em></p>

    <ChirpyOptions />

    <button class="create-button"> Create </button>

  </div>
</template>

<script setup>
import ChirpyOptions from './components/ChirpyOptions.vue'
import Header from './components/Header.vue'

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

.create-button:hover {
  background-color: #ffb300;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

</style>