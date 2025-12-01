<script setup>
// MainLayout.vue
// En standardlayout med header och footer
</script>

<template>
	<div class="main-layout">
		<header class="main-header">
			<h2>Main Header</h2>
			<nav>
				<RouterLink to="/layouts/main">Home</RouterLink> |
				<RouterLink to="/layouts/main/about">About</RouterLink>
			</nav>
		</header>

		<main class="main-content">
			<!-- Här renderas sidorna som använder denna layout -->
			<RouterView />
		</main>

		<footer class="main-footer">
			<p>Main Footer</p>
		</footer>
	</div>
</template>

<style scoped>
.main-layout {
	border: 2px solid #42b883;
	padding: 1rem;
	margin-top: 1rem;
	color: #213547;
}

.main-content {
	border: 2px solid #42b883;
	padding: 1rem;
	margin-top: 1rem;
	color: #e0f2f1;
}

.main-header {
	background-color: #e0f2f1;
	padding: 1rem;
	margin-bottom: 1rem;
}

.main-footer {
	background-color: #e0f2f1;
	padding: 1rem;
	margin-top: 1rem;
	text-align: center;
}
</style>
