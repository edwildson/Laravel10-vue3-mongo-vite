<template>
	<div class="page-wrapper">
		<div class="page-wrapper__app-bar">
			<h2
				class="page-wrapper__app-bar-title"
				@click="$router.push({ path: '/' })"
			>
				LARA 10 + VUE 3 + MONGODB + VITE + CUIDA
			</h2>
			<div class="page-wrapper__logout">
				<a
					class="page-wrapper__logout--link"
					href="javascript:void(0)"
					@click="logout"
				>
					Sair
				</a>
			</div>
		</div>
		<div class="page-wrapper__page-content">
			<div class="page-wrapper__page-content--header">
				<slot name="page-title">
					{{ title }}
				</slot>
				<div class="page-wrapper__page-content--header-action">
					<slot name="page-title-action"/>
				</div>
			</div>
			<slot name="page-subtitle">
				{{ subtitle }}
			</slot>
			<slot name="page-body">
				<div class="page-wrapper__page-content--body">
					<slot/>
				</div>
			</slot>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
		},
		subtitle: {
			type: String,
		}
	},

	methods: {
		logout() {
			window.location.href = '/sso/logout';
		},
	}
}
</script>
<style lang="scss">
@import 'node_modules/@sysvale/cuida/dist/@sysvale/tokens.scss';
@import url('http://fonts.cdnfonts.com/css/satoshi');

body {
	background: $n-10!important;
	font-family: 'Satoshi', sans-serif!important;
}

.page-wrapper {
	&__page-content {
		max-width: 100%;
		padding: pa(6);
		&--body {
			margin: mt(6);
			padding: pa(6);
			border-radius: $border-radius-small;
			border: 1px solid $n-40;
			background: white;
		}

		&--header {
			@include heading-1;
			display: flex;
			// font-weight: $font-weight-medium;
		}
		&--header-action {
			margin-left: auto!important
		}

	}

	&__logout {
		&--link {
			color: white !important;
			text-decoration: none;
		}
	}

	&__app-bar {
		background: $bn-500;
		color: $n-0;
		padding: pa(3);
		height: 64px;
		margin: mb(5);
		border-bottom: 2px solid $bn-700;
		text-align: center;
		display: flex;

	}

	&__app-bar-title {
		margin: 0 auto!important;
		cursor: pointer;
	}
}
</style>