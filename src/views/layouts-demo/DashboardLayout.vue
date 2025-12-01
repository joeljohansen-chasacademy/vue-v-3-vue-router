<script setup>
// DashboardLayout.vue
// En layout med sidebar, typisk för admin-gränssnitt
</script>

<template>
	<div class="dashboard-layout">
		<aside class="sidebar">
			<h3>Sidebar</h3>
			<ul>
				<li>Menu 1</li>
				<li>Menu 2</li>
				<li>Menu 3</li>
			</ul>
		</aside>

		<main class="dashboard-content">
			<!-- Här renderas sidorna som använder denna layout -->
			<RouterView />
		</main>
	</div>
</template>

<style scoped>
.dashboard-layout {
	display: flex;
	border: 2px solid #35495e;
	margin-top: 1rem;
	min-height: 200px;
}

.sidebar {
	width: 200px;
	background-color: #35495e;
	color: white;
	padding: 1rem;
}

.dashboard-content {
	flex: 1;
	padding: 1rem;
}
</style>
