import { validate as isUUID } from 'uuid'
import Agent from '@knowlearning/agents'
import { createApp } from 'vue'
import App from './App.vue'
import EmbedCandli from './EmbedCandli.vue'
import NotFound from './components/NotFound.vue'
import './main.css'

window.Agent = Agent
const pathSegment = location.pathname.slice(1)

const faviconMap = {
	chirpy: '/Chirpy.png',
	mixology: '/Mixology.png',
	invaders: '/Invaders.png',
}

function getAppTypeFromImage(image) {
	const lower = image.toLowerCase()
	if (lower.includes('chirpy')) return 'chirpy'
	if (lower.includes('mixology')) return 'mixology'
	if (lower.includes('invaders')) return 'invaders'
	return null
}

;(async () => {
	if (isUUID(pathSegment)) {
		const { image } = await Agent.state(pathSegment)
		const appType = getAppTypeFromImage(image)
		if (appType) setFavicon(faviconMap[appType])
		createApp(EmbedCandli, { id: pathSegment }).mount('#app')
		return
	}

	const favicon = faviconMap[pathSegment]

	if (favicon) {
		setFavicon(favicon)
		createApp(App, { path: pathSegment }).mount('#app')
		return
	}

	createApp(NotFound).mount('#app')
})()

function setFavicon(path) {
	const link =
		document.querySelector("link[rel~='icon']") ||
		document.createElement('link')
	link.rel = 'icon'
	link.href = path
	document.head.appendChild(link)
}
