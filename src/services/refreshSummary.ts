import elements from "../constants/elements"
import SelectedItem from "../interfaces_and_types/TypeSelectedItem"
import cart from "../store/cart"

function refreshSummary(): void {
    elements.productsAmount.innerHTML = `Products: <span>${cart.selectedItems
        .map((item: SelectedItem) => item.amount)
        .reduce((origin: number, amount: number) => origin + amount, 0)}</span>`

    elements.totalCost.innerHTML = `Total: <span>${cart.selectedItems
        .map((item: SelectedItem) => item.amount * (item.item.price || 0))
        .reduce((origin: number, amount: number) => origin + amount, 0)}</span>`
}

export default refreshSummary
