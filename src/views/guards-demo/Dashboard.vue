<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function logout() {
	// Ta bort token
	localStorage.removeItem("token");

	// Redirecta till startsidan
	router.push("/");
}
</script>

<template>
	<h1>Dashboard (Skyddad)</h1>
	<p>Du ser detta för att du har en token i localStorage.</p>
	<button @click="logout">Logga ut</button>
</template>
