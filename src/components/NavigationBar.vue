<template>
  <header class="header">
		<span class="header__title">SpaceX</span>
		<nav class="navigation">
			<router-link class="router-link" to="/" exact>Launches</router-link>
			<router-link class="router-link" to="/rockets">Rockets</router-link>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
	.header {
		display: flex;
		grid-area: header;
		align-items: center;
		
		margin: 0;
		padding: 0 16px 0 24px;

		height: 56px;
		background-color: #35495E;

		color: #ffffff;
		justify-content: space-between;

		&__title {
			display: block;
			position: relative;
			font-size: 20px;
			line-height: 1;
			letter-spacing: .02em;
			font-weight: 400;
			box-sizing: border-box;
		}
	}

	.navigation {
		text-transform: uppercase;
	}
</style>

