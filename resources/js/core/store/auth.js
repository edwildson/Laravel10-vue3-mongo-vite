import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		user: null,
	}),

	getters: {
		isAdmin: ({ user }) => user.isAdmin,
	},
});