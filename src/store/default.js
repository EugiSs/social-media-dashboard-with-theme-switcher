import { defineStore } from "pinia"
import { ref } from "vue"
import SocmediaCardsData from "@/assets/js/SocmediaCardsData"

export const useCardsStore = defineStore("cards", () => {
	const cards = ref(null)

	function getCards() {
		cards.value = SocmediaCardsData
		return cards.value
	}

	function getTodayCards() {
		let ret = []
		for (let elem of cards.value) {
			if (elem.today && Array.isArray(elem.today)) {
				elem.today.forEach((td) => {
					ret.push({
						icon: elem.icon,
						networkName: elem.networkName,
						title: td.title,
						count: td.count,
						status: td.status,
						changes: td.changes
					})
				})
			}
		}
		return ret
	}

	return { cards, getCards, getTodayCards }
})
