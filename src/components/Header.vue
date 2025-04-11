<template>
	<div class="logo-and-title">

		<div class="left">
			<img src="../assets/Chirpy.png">
		</div>

		<div class="right">
			<h3>Chirpy's Adventure</h3>
			<h3>Game Creator</h3>
		</div>

	</div>
</template>

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