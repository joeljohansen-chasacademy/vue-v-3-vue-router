<script setup>
import { onBeforeRouteLeave } from "vue-router";
import { ref } from "vue";

const isDirty = ref(true);

// In-component guard
// Körs när vi är på väg att lämna denna komponent
onBeforeRouteLeave((to, from, next) => {
	if (isDirty.value) {
		const answer = window.confirm(
			"Du har osparade ändringar. Vill du verkligen lämna?"
		);
		if (answer) {
			next(); // Tillåt navigation
		} else {
			next(false); // Avbryt navigation
		}
	} else {
		next(); // Inga ändringar, bara kör
	}
});
</script>

<template>
	<h1>Formulär (Leave Guard)</h1>
	<p>Försök navigera härifrån utan att spara (klicka på en länk).</p>

	<label>
		<input type="checkbox" v-model="isDirty" />
		Har osparade ändringar
	</label>
</template>
