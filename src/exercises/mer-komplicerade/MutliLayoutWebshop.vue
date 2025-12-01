<!--
Övning 4: Multi-layout webbshop

Skapa en mini-webbshop med olika layouts för olika delar av appen.

Uppgifter:
- Skapa MainLayout (header + footer) för publika sidor
- Skapa AdminLayout (sidebar) för admin-sidor
- Publika sidor: Home, Products (lista med produkter)
- Admin-sidor: /admin/products, /admin/orders
- Produktlista med länkar till /product/:id
- Produktdetalj visar info baserat på id från params
- Lägg till query parameter för filtrering: ?category=shoes
- Visa filtrerade produkter baserat på query parameter

Vad ni kommer behöver använda:
- Två layout-komponenter (MainLayout.vue, AdminLayout.vue)
- Nested routes för båda layouts
- Route params (:id) för produktdetaljer
- Query parameters (route.query.category)
- Hårdkodad array med produkter (minst 5-6 st)
- v-for för att visa produkter
- Computed property för att filtrera produkter

Tips:
- Produkter: [{ id: 1, name: '...', price: 100, category: 'shoes' }]
- MainLayout och AdminLayout ska ha tydligt olika struktur
- Använd flexbox för att positionera sidebar i AdminLayout
- För filtrering: computed som kollar route.query.category
-->

<script setup>
// TODO: Skapa layouts och view-komponenter
// TODO: Konfigurera routes med olika layouts
// TODO: Implementera filtrering med query params
</script>

<template>
	<div>
		<h1>Övning 4: Multi-layout webbshop</h1>
		<p>Se instruktioner i kommentaren ovan</p>
	</div>
</template>
