<template>
	<div class="today-card">
		<div class="today-card__content">
			<div class="today-card__head">
				<p class="today-card__title">{{ card.title }}</p>
				<div class="today-card__icon">
					<img
						:src="require(`../assets/images/${card.icon}`)"
						:alt="card.networkName"
					/>
				</div>
			</div>
			<div class="today-card__body">
				<div class="today-card__count">
					{{
						card.count >= 10000
							? String(card.count).slice(0, 2) + "k"
							: card.count
					}}
				</div>
				<div
					class="today-card__changes"
					:class="{
						up: card.status == 'up',
						down: card.status == 'down'
					}"
				>
					<span>{{ card.changes }}%</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from "vue"

defineProps({
	card: Object
})
</script>

<style lang="scss" scoped>
.today-card {
	background-color: var(--bgCardsColor);
	border-radius: 6px;
	transition: all 0.3s ease 0s;
	cursor: pointer;
	&:hover {
		background-color: var(--bgCardsColorHover);
	}
	&__content {
		padding: 20px;
	}

	&__head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 15px;
		margin-bottom: 25px;
	}

	&__title {
		font-size: 16px;
		font-weight: 700;
		color: var(--textSecondaryColor);
	}

	&__icon {
	}

	&__body {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 15px;
	}

	&__count {
		font-size: 34px;
		font-weight: 700;
	}

	&__changes {
		font-size: 14px;
		font-weight: 700;

		&.up {
			& span {
				position: relative;
				color: var(--limeGreen);
				&::before {
					content: url("@/assets/images/icon-up.svg");
					position: absolute;
					top: -1px;
					left: -14px;
				}
			}
		}
		&.down {
			& span {
				position: relative;
				color: var(--brightRed);
				&::before {
					content: url("@/assets/images/icon-down.svg");
					position: absolute;
					top: -1px;
					left: -14px;
				}
			}
		}
	}
}
</style>
