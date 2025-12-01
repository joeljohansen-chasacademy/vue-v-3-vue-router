<script setup>
import { useRouter } from "vue-router";

// useRouter ger oss tillgång till router-instansen för att navigera programmatiskt
const router = useRouter();

function goToProduct5() {
	// Programmatisk navigation
	// Motsvarar att klicka på <RouterLink to="/product/5">
	router.push("/product/5");
}
</script>

<template>
	<h1>Produkter</h1>
	<p>Välj en produkt för att se detaljer (Dynamisk routing):</p>

	<ul>
		<li><RouterLink to="/product/1">Produkt 1</RouterLink></li>
		<li><RouterLink to="/product/2">Produkt 2</RouterLink></li>
		<li><RouterLink to="/product/3">Produkt 3</RouterLink></li>
	</ul>

	<button @click="goToProduct5">Gå till Produkt 5 (Programmatiskt)</button>
</template>
