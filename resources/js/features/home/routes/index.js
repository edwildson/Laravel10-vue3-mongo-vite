import HomePage from '../../pages/HomePage.vue';

export default {
	HOME: {
		label: 'Início',
		name: 'home',
		path: '/',
		component: HomePage,
		meta: {
			description: 'Início',
			requiresAdmin: true,
		},
	},
};
