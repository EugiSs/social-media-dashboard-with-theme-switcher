<template>
	<div class="dashboard">
		<div class="dashboard__header">
			<div class="dashboard__header_left">
				<h1 class="dashboard__title">Social Media Dashboard</h1>
				<p class="dashboard__info">Total Followers: 23,004</p>
			</div>
			<div class="dashboard__header_right">
				<div class="dashboard__theme-switcher theme-switcher">
					<span class="theme-switcher__text">Dark Mode</span>
					<label class="theme-switcher__switch">
						<input type="checkbox" @click="changeTheme" />
						<span class="theme-switcher__slider"></span>
					</label>
				</div>
			</div>
		</div>
		<div class="dashboard__socmedia socmedia">
			<div class="socmedia__total socmedia-total">
				<div class="socmedia-total__cards">
					<SocmediaTotalCard
						v-for="(card, index) in cards"
						:key="index"
						:card="card"
						class="socmedia-total__card"
					/>
				</div>
			</div>
			<div class="socmedia__today socmedia-today">
				<h2 class="socmedia-today__title">Overview - Today</h2>
				<div class="socmedia-today__cards">
					<SocmediaTodayCard
						v-for="(card, index) in todayCards"
						:key="index"
						:card="card"
						class="socmedia-today__card"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import SocmediaTotalCard from "./SocmediaTotalCard.vue"
import SocmediaTodayCard from "./SocmediaTodayCard.vue"
import { useCardsStore } from "../store/default"
import { onMounted } from "vue"

const CardsStore = useCardsStore()
const cards = CardsStore.getCards()
const todayCards = CardsStore.getTodayCards()

onMounted(() => {
	let dark = window.matchMedia("(prefers-color-scheme: dark)").matches
  let inputchangeTheme = document.querySelector('.theme-switcher__switch input')

	if (dark) {
		document.body.setAttribute("dark", "")
    inputchangeTheme.checked = true
	} else {
		document.body.removeAttribute("dark")
	}
})

const changeTheme = (e) => {
	if (e.target.checked) {
		document.body.setAttribute("dark", "")
	} else {
		document.body.removeAttribute("dark")
	}
}
</script>

<style lang="scss">
.dashboard {
	max-width: 1114px;
  position: relative;
  z-index: 99;
	padding: 40px 20px 50px;
	margin-inline: auto;

	&__header {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;

		&_left {
			padding-bottom: 20px;
			border-bottom: 1px solid var(--textSecondaryColor);
		}

		&_right {
			padding-block: 20px;
		}
	}

	&__title {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	&__info {
		font-size: 16px;
		font-weight: 700;
		color: var(--textSecondaryColor);
	}

	&__theme-switcher {
	}

	&__socmedia {
	}
}

.theme-switcher {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 15px;

	&__text {
		font-weight: 700;
		color: var(--textSecondaryColor);
	}

	&__switch {
		display: inline-block;
		position: relative;
		width: 48px;
		height: 24px;
		& input {
			opacity: 0;
			width: 0;
			height: 0;
		}
		& input:checked + .theme-switcher__slider:after {
			transform: translateX(-24px);
		}
		& input + .theme-switcher__slider:hover {
			background: linear-gradient(
				to left,
				hsl(146, 68%, 55%),
				hsl(210, 78%, 56%)
			);
		}
	}

	&__slider {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		cursor: pointer;
		background: var(--switchThemeColor);
		border-radius: 24px;
		&::after {
			position: absolute;
			content: "";
			height: 18px;
			width: 18px;
			right: 3px;
			bottom: 3px;
			background: var(--bgColor);
			border-radius: 50%;
			transition: 0.4s;
		}
	}
}

.socmedia {
	&__total {
		margin-bottom: 50px;
	}

	&__today {
	}
}

.socmedia-total {
	&__cards {
		display: flex;
		flex-direction: column;
		gap: 22px;
	}

	&__card {
	}
}

.socmedia-today {
	&__title {
		font-size: 26px;
		font-weight: 700;
		color: var(--textSecondaryColor);
		margin-bottom: 30px;
	}

	&__cards {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	&__card {
	}
}

@media (min-width: 550px) {
	.socmedia-total {
		&__cards {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		&__card {
			flex: 0 1 45%;
		}
	}
	.socmedia-today {
		&__cards {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		&__card {
			flex: 0 1 45%;
		}
	}
}
@media (min-width: 1024px) {
	.dashboard {
		&__header {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 45px;
			&_left {
				border-bottom: none;
			}
		}
		&__title {
			font-size: 30px;
		}
	}
	.theme-switcher {
		&__text {
			font-size: 15px;
		}
	}
	.socmedia-total {
		&__card {
			flex: 0 1 23%;
		}
	}
	.socmedia-today {
		&__card {
			flex: 0 1 23%;
			&:nth-of-type(1) {
				order: 1;
			}
			&:nth-of-type(2) {
				order: 2;
			}
			&:nth-of-type(3) {
				order: 5;
			}
			&:nth-of-type(4) {
				order: 6;
			}
			&:nth-of-type(5) {
				order: 3;
			}
			&:nth-of-type(6) {
				order: 4;
			}
			&:nth-of-type(7) {
				order: 7;
			}
			&:nth-of-type(8) {
				order: 8;
			}
		}
	}
}
</style>
