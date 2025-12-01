<!--
Övning 2: Blogg med dynamiska routes

Skapa en blogg-app med lista och detaljsidor.

Uppgifter:
- Skapa en BlogList-sida som visar 4-5 blogg-titlar
- Varje titel ska vara en klickbar länk till /blog/:id
- Skapa en BlogDetail-sida som visar bloggens id och titel
- Lägg till en "Tillbaka till alla bloggar"-knapp på detaljsidan
- Använd hårdkodad data (array med blogg-objekt)

Vad ni kommer behöva använda:
- Route med params (/blog/:id)
- useRoute() för att hämta params
- RouterLink för att länka till dynamiska routes
- v-for för att loopa genom bloggar
- router.push() eller RouterLink för tillbaka-knapp

Tips:
- Skapa en array med bloggar: [{ id: 1, title: '...', content: '...' }]
- Använd :to="{ name: 'blog-detail', params: { id: blog.id } }"
- I BlogDetail: const route = useRoute() och route.params.id
-->

<script setup>
// TODO: Skapa BlogList.vue och BlogDetail.vue
// TODO: Lägg till routes i router/index.js
</script>

<template>
	<div>
		<h1>Övning 2: Blogg med dynamiska routes</h1>
		<p>Se instruktioner i kommentaren ovan</p>
	</div>
</template>
