import { validate as isUUID } from 'uuid'
import Agent from '@knowlearning/agents'
import { createApp } from 'vue'
import App from './App.vue'
import EmbedCandli from './EmbedCandli.vue'
import NotFound from './components/NotFound.vue'
import './main.css'

window.Agent = Agent
const pathSegment = location.pathname.slice(1)

;(async () => {
	if (isUUID(pathSegment)) {
		// for favicon, gotta grab data of uuid. annoying
		// this image is a url, but I'll just use it to know what type it is and point to public
		const { image } = await Agent.state(pathSegment)
		setFavicon(image.includes('Chirpy') ? '/Chirpy.png' : '/Mixology.png')

		createApp(EmbedCandli, { id: pathSegment }).mount('#app')
	} else if (pathSegment === 'chirpy' || pathSegment === 'mixology') {
		setFavicon(pathSegment === 'chirpy' ? '/Chirpy.png' : '/Mixology.png')
		createApp(App, { path: pathSegment }).mount('#app')
	} else {
		createApp(NotFound).mount('#app')
	}
})()

function setFavicon(path) {
  const link =
    document.querySelector("link[rel~='icon']") ||
    document.createElement('link')
  link.rel = 'icon'
  link.href = path
  document.head.appendChild(link)
}
