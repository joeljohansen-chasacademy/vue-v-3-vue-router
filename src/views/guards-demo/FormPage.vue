<script setup>
import { onBeforeRouteLeave } from "vue-router";
import { ref } from "vue";

const hasChanges = ref(true);

//Email

// In-component guard
// Körs när vi är på väg att lämna denna komponent
onBeforeRouteLeave((to, from) => {
	if (hasChanges.value) {
		const answer = window.confirm(
			"Du har osparade ändringar. Vill du verkligen lämna?"
		);
		if (answer) {
			return true;
			//next(); // Tillåt navigation (äldre sättet att skriva, alltså next())
		} else {
			return false;
			//next(false); // Avbryt navigation
		}
	} else {
		return true; // Inga ändringar
	}
});

//Watch eller computed property på ett objekt som körs varje gång något uppdateras
//När det uppdateras så sätter vi hasChanges = true;
</script>

<template>
	<h1>Formulär (Leave Guard)</h1>
	<p>Försök navigera härifrån utan att spara (klicka på en länk).</p>

	<label>
		<input type="checkbox" v-model="hasChanges" />
		Har osparade ändringar
	</label>
	<!-- Input för email -->
</template>
