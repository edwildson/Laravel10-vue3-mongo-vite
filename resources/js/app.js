import './bootstrap';
import '../sass/app.scss';
import '@sysvale/cuida/dist/style.css';
import routes from './core/routes';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import Cuida from '@sysvale/cuida';
import { useAuthStore } from 's2/store/auth';

import App from './App.vue';
import PageWrapper from 's2/components/PageWrapper.vue';

const vueApp = createApp(App);
const pinia = createPinia();

const router = createRouter({
	history: createWebHistory(),
	routes,
});

vueApp.component('PageWrapper', PageWrapper);


vueApp.use(Cuida);
vueApp.use(router);
vueApp.use(pinia);

const authStore = useAuthStore();

delete window.user;

vueApp.provide('$user', authStore.user);

router.isReady().then(() => {
	vueApp.mount("#app");
})
