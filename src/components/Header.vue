<template>
	<div class="logo-and-title">
		<div class="left">
			<img :src="logoSrc">
		</div>

		<div class="right">
			<h3>{{ t(titleKey, props.language) }}</h3>
			<h3>{{ t('game_creator', props.language) }}</h3>
		</div>

		<select
			style="height: 30px; margin: 30px;"
			:value="props.language"
			@change="emits('language', $event.target.value)"
		>
			<option
				v-for="lang in languages"
				:key="lang.code"
				:value="lang.code"
			>
				{{ lang.label }}
			</option>
		</select>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import t from '../translations/translations.js'

const props = defineProps([ 'language', 'path' ])
const emits = defineEmits([ 'language' ])

const gameMap = {
	chirpy: {
		logoSrc: '/Chirpy.png',
		titleKey: 'chirpys_adventure',
	},
	mixology: {
		logoSrc: '/Mixology.png',
		titleKey: 'magical_mixology',
	},
	invaders: {
		logoSrc: '/Invaders.png',
		titleKey: 'math_invaders',
	},
}

const defaultGame = gameMap.chirpy

const gameConfig = computed(() => gameMap[props.path] || defaultGame)
const logoSrc = computed(() => gameConfig.value.logoSrc)
const titleKey = computed(() => gameConfig.value.titleKey)

const languages = [
	{ code: 'en', label: 'EN' },
	{ code: 'th', label: 'TH' },
	// { code: 'fr', label: 'FR' },
	// { code: 'pl', label: 'PL' },
	// { code: 'pt', label: 'PT' },
	// { code: 'km', label: 'KM' },
]
</script>

<style scoped>
.logo-and-title {
	display: flex;
	justify-content: center;
}

.logo-and-title .right {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.logo-and-title .right h3 {
	margin: 4px;
}

.logo-and-title .right h3:first-child {
	font-weight: normal;
}

img {
	width: 80px;
	margin: 10px 30px;
}
</style>