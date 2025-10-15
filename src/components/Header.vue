<template>
	<div class="logo-and-title">
		<div class="left">
			<img v-if="props.path === 'mixology'" src="/Mixology.png">
			<img v-else-if="props.path ==='chirpy'" src="/Chirpy.png">
			<img v-else src="/Chirpy.png">
		</div>

		<div class="right">
			<h3>{{
				t(
					props.path === 'mixology' ? 'magical_mixology' : 'chirpys_adventure',
					language)
				}}
			</h3>
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
import t from '../translations/translations.js'
const props = defineProps([ 'language', 'path' ])
const emits = defineEmits([ 'language' ])

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
.logo-and-title .left {}

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