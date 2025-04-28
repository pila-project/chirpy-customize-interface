import { validate as isUUID } from 'uuid'
import Agent from '@knowlearning/agents'
import { createApp } from 'vue'
import App from './App.vue'
import EmbedChirpy from './EmbedChirpy.vue'
import './main.css'

window.Agent = Agent

const id = location.pathname.slice(1)

if (isUUID(id)) createApp(EmbedChirpy, { id }).mount('#app')
else createApp(App).mount('#app')
