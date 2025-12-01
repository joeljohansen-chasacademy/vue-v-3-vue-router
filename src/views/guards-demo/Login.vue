<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function login() {
	// Vi simulerar inloggning genom att sätta en token i localStorage
	localStorage.setItem("token", "fake-token");

	// Redirecta till den skyddade dashboarden
	router.push("/guards/dashboard");
}
</script>

<template>
	<h1>Login</h1>
	<button @click="login">Logga in (Sätt fake-token)</button>
</template>
