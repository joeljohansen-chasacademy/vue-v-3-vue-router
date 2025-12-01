<!--
Övning 3: Inställningar med tabs (nested routes)

Skapa en inställningssida med tabs som nested routes.

Uppgifter:
- Skapa en Settings-layout som parent route (/settings)
- Lägg till header med texten "Inställningar"
- Skapa tre tabs: Profile, Privacy, Notifications (nested routes)
- Varje tab ska bara visa en rubrik och lite förklarande text
- Tab-navigation med RouterLink
- RouterView i Settings-komponenten där tabs renderas

Vad ni kommer behöva använda:
- Nested routes (children-array i router config)
- RouterView i parent-komponenten (Settings.vue)
- RouterLink för tab-navigation
- router-link-active för att visa aktiv tab

Tips:
- I router: path: '/settings', children: [{ path: 'profile', ... }]
- Child paths är relativa (ingen / i början)
- Settings.vue har RouterView där children renderas
- Lägg till tom path ('') för default child om du vill
-->

<script setup>
// TODO: Skapa Settings.vue (parent) och tre child-komponenter
// TODO: Konfigurera nested routes i router/index.js
</script>

<template>
	<div>
		<h1>Övning 3: Inställningar med tabs</h1>
		<p>Se instruktioner i kommentaren ovan</p>
	</div>
</template>
