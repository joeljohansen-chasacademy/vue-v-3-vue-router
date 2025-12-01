<script setup>
import { onBeforeRouteLeave } from "vue-router";
import { ref, computed } from "vue";

// Formulärdata
const name = ref("");
const email = ref("");
const phoneNumber = ref("");

// Initiala värden för jämförelse
const initialValues = {
	name: "",
	email: "",
	phoneNumber: "",
};

// Computed property som kollar om något har ändrats
const hasChanges = computed(() => {
	return (
		name.value !== initialValues.name ||
		email.value !== initialValues.email ||
		phoneNumber.value !== initialValues.phoneNumber
	);
});

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
</script>

<template>
	<h1>Formulär (Leave Guard)</h1>
	<p>Försök navigera härifrån utan att spara (klicka på en länk).</p>

	<form>
		<label>
			Namn:
			<input type="text" v-model="name" />
		</label>

		<label>
			Email:
			<input type="email" v-model="email" />
		</label>

		<label>
			Telefonnummer:
			<input type="tel" v-model="phoneNumber" />
		</label>
	</form>

	<p v-if="hasChanges">Du har osparade ändringar</p>
</template>
