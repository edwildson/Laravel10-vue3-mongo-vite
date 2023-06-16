import NotFoundPage from 's2/pages/NotFoundPage.vue';
import HomeRoutes from '../../features/home/routes/index';

const routes = {
	...HomeRoutes,
};

const buildRoutes = () => {
	let xRoutes = [];
	Object.keys(routes).forEach((key) => {
		xRoutes = [
			...xRoutes,
			{
				...routes[key],
			},
		];
	});

	return [
		...xRoutes,
		{
			path: "/:catchAll(.*)",
			component: NotFoundPage,
		}
	];
};

export default buildRoutes();