import { validate as isUUID } from 'uuid'
import Agent from '@knowlearning/agents'
import { createApp } from 'vue'
import App from './App.vue'
import EmbedCandli from './EmbedCandli.vue'
import NotFound from './components/NotFound.vue'
import './main.css'

window.Agent = Agent

const pathSegment = location.pathname.slice(1)

if (isUUID(pathSegment)) {
	createApp(EmbedCandli, { id: pathSegment }).mount('#app')
} else if (pathSegment === 'chirpy' || pathSegment === 'mixology') {
	createApp(App, { path: pathSegment }).mount('#app')
} else {
	createApp(NotFound).mount('#app')
}
