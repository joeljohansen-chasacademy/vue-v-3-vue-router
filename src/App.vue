<script setup>
// App.vue fungerar som en layout för hela appen
// Här lägger vi navigationen som ska synas på alla sidor
</script>

<template>
	<header>
		<nav>
			<!-- Demo 1: Basic Routing -->
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
			<RouterLink to="/contact">Contact</RouterLink>

			<!-- Demo 2: Dynamic Routes -->
			<RouterLink to="/products">Products</RouterLink>
			<RouterLink to="/search">Search</RouterLink>

			<!-- Demo 3: Nested Routes -->
			<RouterLink to="/dashboard">Dashboard</RouterLink>

			<!-- Demo 4: Layouts -->
			<RouterLink to="/layouts/main">Layouts: Main</RouterLink>
			<RouterLink to="/layouts/dashboard">Layouts: Dashboard</RouterLink>
			<RouterLink to="/layouts/auth">Layouts: Auth</RouterLink>

			<!-- Demo 5: Guards -->
			<RouterLink to="/guards/home">Guards: Home</RouterLink>
			<RouterLink to="/guards/dashboard">Guards: Dashboard</RouterLink>
			<RouterLink to="/guards/admin">Guards: Admin</RouterLink>
			<RouterLink to="/guards/form">Guards: Form</RouterLink>
		</nav>
	</header>

	<main>
		<!-- RouterView är där den matchade komponentens innehåll visas -->
		<RouterView />
	</main>
</template>

<style scoped>
nav {
	display: flex;
	gap: 1rem;
	padding: 1rem;
	background-color: #f0f0f0;
	margin-bottom: 2rem;
}

/* Vue Router lägger automatiskt till klassen 'router-link-active' på den aktiva länken */
.router-link-active {
	font-weight: bold;
	color: #42b883; /* Vue green */
	text-decoration: underline;
}
</style>
