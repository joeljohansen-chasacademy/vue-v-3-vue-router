<script setup>
import { useRoute, useRouter } from "vue-router";

// useRoute ger oss information om den *nuvarande* routen (URL, params, query)
const route = useRoute();
const router = useRouter();

function goBack() {
	// Gå tillbaka ett steg i historiken
	// Motsvarar webbläsarens bakåt-knapp
	router.go(-1);
}
</script>

<template>
	<!-- route.params.id matchar :id i router-konfigurationen -->
	<h1>Produkt {{ route.params.id }}</h1>

	<p>Här visas detaljer för produkt med ID: {{ route.params.id }}</p>

	<button @click="goBack">Tillbaka</button>
</template>
