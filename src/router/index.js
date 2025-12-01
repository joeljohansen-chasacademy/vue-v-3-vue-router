import { createRouter, createWebHistory } from "vue-router";

// Demo 1: Basic Routing
// Vi importerar komponenterna från 'basic-routing'-mappen
import Home from "../views/basic-routing/Home.vue";
import About from "../views/basic-routing/About.vue";
import Contact from "../views/basic-routing/Contact.vue";

// Definiera våra routes
const routes = [
	// --- Demo 1: Basic Routing ---
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/about",
		name: "about",
		component: About,
	},
	{
		path: "/contact",
		name: "contact",
		component: Contact,
	},

	// --- Demo 2: Dynamic Routes ---
	// Här använder vi lazy loading (import() inuti component)
	// Komponenterna ligger i 'dynamic-routes'-mappen
	{
		path: "/products",
		name: "product-list",
		component: () => import("../views/dynamic-routes/ProductList.vue"),
	},
	{
		// :id är en dynamisk parameter
		path: "/product/:id",
		name: "product-detail",
		component: () => import("../views/dynamic-routes/ProductDetail.vue"),
	},
	{
		path: "/search",
		name: "search",
		component: () => import("../views/dynamic-routes/SearchPage.vue"),
	},

	// --- Demo 3: Nested Routes ---
	{
		path: "/dashboard",
		// Vi namnger inte parent-routen om den har en default child
		component: () => import("../views/nested-routes/Dashboard.vue"),
		children: [
			{
				// Tom path '' matchar /dashboard
				path: "",
				// Redirect till overview så vi inte hamnar på en tom sida
				redirect: "/dashboard/overview",
			},
			{
				path: "overview", // Obs: ingen / i början på children paths
				name: "dashboard-overview",
				component: () => import("../views/nested-routes/Overview.vue"),
			},
			{
				path: "users",
				name: "dashboard-users",
				component: () => import("../views/nested-routes/Users.vue"),
			},
			{
				path: "settings",
				name: "dashboard-settings",
				component: () => import("../views/nested-routes/Settings.vue"),
			},
		],
	},

	// --- Demo 4: Layouts ---
	{
		path: "/layouts/main",
		component: () => import("../views/layouts-demo/MainLayout.vue"),
		children: [
			{
				path: "",
				component: () => import("../views/layouts-demo/Home.vue"),
			},
			{
				path: "about",
				component: () => import("../views/layouts-demo/About.vue"),
			},
		],
	},
	{
		path: "/layouts/dashboard",
		component: () => import("../views/layouts-demo/DashboardLayout.vue"),
		children: [
			{
				path: "",
				component: () => import("../views/layouts-demo/DashboardHome.vue"),
			},
		],
	},
	{
		path: "/layouts/auth",
		component: () => import("../views/layouts-demo/AuthLayout.vue"),
		children: [
			{
				path: "",
				component: () => import("../views/layouts-demo/Login.vue"),
			},
		],
	},

	// --- Demo 5: Guards ---
	{
		path: "/guards/home",
		name: "guards-home",
		component: () => import("../views/guards-demo/Home.vue"),
	},
	{
		path: "/guards/login",
		name: "guards-login",
		component: () => import("../views/guards-demo/Login.vue"),
	},
	{
		path: "/guards/dashboard",
		name: "guards-dashboard",
		component: () => import("../views/guards-demo/Dashboard.vue"),
		// Meta-fält kan användas för att skicka extra info till guards
		meta: { requiresAuth: true },
	},
	{
		path: "/guards/admin",
		name: "guards-admin",
		component: () => import("../views/guards-demo/Admin.vue"),
		// Per-route guard
		beforeEnter: (to, from, next) => {
			// Simulera en roll-check
			const role = "admin"; // Ändra till 'user' för att testa blockering
			if (role === "admin") {
				next();
			} else {
				alert("Du har inte behörighet!");
				next(false); // Avbryt navigation
			}
		},
	},
	{
		path: "/guards/form",
		name: "guards-form",
		component: () => import("../views/guards-demo/FormPage.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// Global Guard
// Körs inför VARJE navigation
router.beforeEach((to, from, next) => {
	// Kolla om routen vi är på väg till kräver inloggning
	if (to.meta.requiresAuth) {
		const token = localStorage.getItem("token");

		if (token) {
			// Har token -> släpp igenom
			next();
		} else {
			// Ingen token -> redirect till login
			next("/guards/login");
		}
	} else {
		// Kräver inte inloggning -> släpp igenom
		next();
	}
});

export default router;
