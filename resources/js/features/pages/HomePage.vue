<template>
	<PageWrapper
		title="Início"
		subtitle="Tela inicial"
	>
		<div class="d-flex">
			<cds-button
				v-for="page in pages"
				:key="page"
				style="margin-right: 10px"
				@click="$router.push({ path: page.path })"
			>
				{{ page.name }}
			</cds-button>
		</div>
	</PageWrapper>
</template>
<script>
export default {
	data() {
		return {
			pages: [
				{
					name: 'Página 1',
					path: '/pagina1'
				},
				{
					name: 'Página 2',
					path: '/pagina2'
				},
				{
					name: 'Página 3',
					path: '/pagina3'
				},
				{
					name: 'Página 4',
					path: '/pagina4'
				},
			]
		};
	},
}
</script>
