<template>
	<div class="logo-and-title">
		<div class="left">
			<img src="../assets/Chirpy.png">
		</div>

		<div class="right">
			<h3>{{ t('chirpys_adventure',language) }}</h3>
			<h3>{{ t('game_creator',language) }}</h3>
		</div>

		<select
			style="height: 30px; margin: 30px;"
			:value="props.language"
			@change="emits('language', $event.target.value)"
		>
			<option value="en">EN</option>
			<option value="th">TH</option>
		</select>

	</div>
</template>

<script setup>
import t from '../translations/translations.js'
const props = defineProps([ 'language' ])
const emits = defineEmits([ 'language' ])

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
	width: 70px;
	margin-right: 30px;
}
</style>