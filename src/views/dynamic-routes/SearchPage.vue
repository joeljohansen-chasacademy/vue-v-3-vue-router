<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const searchTerm = ref("");

function search() {
	// Uppdatera URL:en med query parameter
	// T.ex. /search?q=kaffe
	router.push({ query: { q: searchTerm.value } });
}

// Vi kan också lyssna på ändringar i query-parametern om vi vill reagera direkt
// (Inte strikt nödvändigt för demot men bra att veta)
</script>

<template>
	<h1>Sök</h1>

	<input v-model="searchTerm" placeholder="Sök efter något..." />
	<button @click="search">Sök</button>

	<!-- Visa vad som ligger i URL:ens query string -->
	<p v-if="route.query.q">
		Du söker efter: <strong>{{ route.query.q }}</strong>
	</p>
</template>
