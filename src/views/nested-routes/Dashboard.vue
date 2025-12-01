<script setup>
// Dashboard.vue är en "parent view" som har sina egna "child views"
// Detta kallas Nested Routes
</script>

<template>
	<h1>Dashboard</h1>
	<p>Detta är en parent view som har en egen RouterView inuti sig.</p>

	<nav class="dashboard-nav">
		<!-- Länkar till child routes -->
		<!-- Notera att vi skriver hela sökvägen -->
		<RouterLink to="/dashboard/overview">Overview</RouterLink>
		<RouterLink to="/dashboard/users">Users</RouterLink>
		<RouterLink to="/dashboard/settings">Settings</RouterLink>
	</nav>

	<div class="dashboard-content">
		<!-- Här visas child components (Overview, Users, Settings) -->
		<RouterView />
	</div>
</template>

<style scoped>
.dashboard-nav {
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
	border-bottom: 1px solid #ccc;
	padding-bottom: 0.5rem;
}

.dashboard-content {
	border: 1px dashed #ccc;
	padding: 1rem;
	background-color: #f9f9f9;
	color: #213547;
}
</style>
