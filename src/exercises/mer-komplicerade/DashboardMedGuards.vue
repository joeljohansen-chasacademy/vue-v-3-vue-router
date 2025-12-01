<!--
Övning 5: Skyddad dashboard med guards

Skapa en app med autentisering och navigation guards.

Uppgifter:
- Login-sida med "fake login"-knapp
- Login-knappen sätter localStorage.setItem('token', 'fake-token')
- Dashboard som kräver inloggning (ska vara skyddad)
- Profil-sida (också skyddad)
- Global navigation guard som kollar om användaren är inloggad
- Om ej inloggad och försöker nå skyddad sida → redirect till /login
- Om redan inloggad och går till /login → redirect till /dashboard
- Logout-knapp som rensar localStorage och går till home
- Minst en sida med onBeforeRouteLeave som frågar "Är du säker?"

Vad ni kommer behöva använda:
- router.beforeEach() för global guard
- meta: { requiresAuth: true } på skyddade routes
- localStorage för fake token
- useRouter() för programmatisk navigation
- onBeforeRouteLeave i en komponent
- window.confirm() för bekräftelse-dialog

Tips:
- I router.beforeEach: kolla to.meta.requiresAuth
- Använd localStorage.getItem('token') för att kolla om inloggad
- Return { name: 'login' } för att redirecta i guard
- onBeforeRouteLeave kan returnera false för att stoppa navigation
- Testa att guards fungerar genom att navigera runt i appen
-->

<script setup>
// TODO: Skapa Login.vue, Dashboard.vue, Profile.vue
// TODO: Implementera global guard i router/index.js
// TODO: Lägg till meta fields på skyddade routes
// TODO: Implementera onBeforeRouteLeave i en komponent
</script>

<template>
	<div>
		<h1>Övning 5: Skyddad dashboard med guards</h1>
		<p>Se instruktioner i kommentaren ovan</p>
	</div>
</template>
