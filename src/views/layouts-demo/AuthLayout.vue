<script setup>
// AuthLayout.vue
// En centrerad layout för inloggning/registrering
</script>

<template>
	<div class="auth-layout">
		<div class="centered-box">
			<!-- Här renderas sidorna som använder denna layout -->
			<RouterView />
		</div>
	</div>
</template>

<style scoped>
.auth-layout {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 300px;
	background-color: #f5f5f5;
	margin-top: 1rem;
	border: 2px solid #ccc;
}

.centered-box {
	background: white;
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	color: #213547;
}
</style>
