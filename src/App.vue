<template>
	<div class="app__wrapper">
		<main class="main">
			<Dashboard></Dashboard>
		</main>
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from "./components/Footer.vue"
import Dashboard from "./components/Dashboard.vue"
export default {
	name: "App",
	components: { Footer, Dashboard }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
@import "./assets/scss/index.scss";

.app {
	height: 100%;
	color: var(--textMainColor);
	background-color: var(--bgColor);
	&__wrapper {
		min-height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
}
.main {
	flex: 1 1 auto;

	@media (min-width: 1024px) {
		position: relative;
		&::before {
			content: "";
			position: absolute;
			width: 100%;
			height: 33%;
			top: 0;
			left: 0;
			background-color: var(--bgDecorColor);
			border-radius: 0 0 35px 35px;
		}
	}
}
</style>

// theme - colors
<style>
:root {
	--bgColor: hsl(0, 0%, 100%);
	--bgDecorColor: hsl(0, 0%, 98%);
	--bgHeaderColor: hsl(225, 100%, 98%);
	--bgCardsColor: hsl(227, 47%, 96%);
	--bgCardsColorHover: hsl(232, 33%, 91%);
	--textMainColor: hsl(230, 17%, 14%);
	--textSecondaryColor: hsl(228, 12%, 44%);
	--switchThemeColor: hsl(230, 22%, 74%);

	--limeGreen: hsl(163, 72%, 41%);
	--brightRed: hsl(356, 69%, 56%);

	--facebook: hsl(208, 92%, 53%);
	--twitter: hsl(203, 89%, 53%);
	--instagram: linear-gradient(to left, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
	--youtube: hsl(348, 97%, 39%);
}
[dark] {
	--bgColor: hsl(230, 17%, 14%);
	--bgDecorColor: hsl(230, 17%, 16%);
	--bgHeaderColor: hsl(232, 19%, 15%);
	--bgCardsColor: hsl(228, 28%, 20%);
	--bgCardsColorHover: hsl(228, 26%, 27%);
	--textMainColor: hsl(0, 0%, 100%);
	--textSecondaryColor: hsl(228, 34%, 66%);
	--switchThemeColor: linear-gradient(
		to left,
		hsl(146, 68%, 55%),
		hsl(210, 78%, 56%)
	);
}
</style>
