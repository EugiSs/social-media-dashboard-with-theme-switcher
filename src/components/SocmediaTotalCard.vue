<template>
	<div class="total-card" :id="card.networkName">
		<div
			class="total-card__decor"
			:style="{
				background: `var(--${card.networkName})`
			}"
		></div>
		<div class="total-card__content">
			<div class="total-card__address">
				<span class="total-card__network"
					><img
						:src="require(`../assets/images/${card.icon}`)"
						:alt="card.networkName"
				/></span>
				<span class="total-card__nickname">{{ card.nickname }}</span>
			</div>
			<div class="total-card__body">
				<div class="total-card__count">
					{{
						card.total.count >= 10000
							? String(card.total.count).slice(0, 2) + "k"
							: card.total.count
					}}
				</div>
				<p class="total-card__info">{{ card.total.info }}</p>
				<div
					class="total-card__changes"
					:class="{
						up: card.total.status == 'up',
						down: card.total.status == 'down'
					}"
				>
					<span>{{ card.total.changes }} Today</span>
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
.total-card {
	position: relative;
	&:hover {
		.total-card__content {
			background-color: var(--bgCardsColorHover);
		}
	}

	&__decor {
		position: absolute;
		width: 99%;
		height: 100%;
		top: -4px;
		left: 1px;
		border-radius: 6px;
	}
	&__content {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 25px;
		text-align: center;
		background-color: var(--bgCardsColor);
		border-radius: 0 0 6px 6px;
		cursor: pointer;
		transition: all 0.3s ease 0s;
		padding: 25px 10px 25px;
	}

	&__address {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	&__network {
	}

	&__nickname {
		font-size: 14px;
		font-weight: 700;
		color: var(--textSecondaryColor);
	}

	&__body {
	}

	&__count {
		font-size: 56px;
		font-weight: 700;
		margin-bottom: 5px;
	}

	&__info {
		font-size: 14px;
		color: var(--textSecondaryColor);
		text-transform: uppercase;
		letter-spacing: 4px;
		margin-bottom: 25px;
	}

	&__changes {
		font-size: 12px;
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

	@media (min-width: 1024px) {
		&__changes {
			font-size: 14px;
		}
	}
}
</style>
