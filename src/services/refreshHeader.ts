import elements from "../constants/elements"
import cart from "../store/cart"
import SelectedItem from "../interfaces_and_types/TypeSelectedItem"

function refreshHeader(): void {
    const selectedItems = cart.selectedItems
    let total = 0 // общая сумма товаров в корзине
    let cartTotal = 0 // общее количество товаров в корзине

    selectedItems.forEach((item: SelectedItem) => {
        total = total + (item.item.price || 0) * item.amount
        cartTotal = cartTotal + item.amount
    })

    elements.priceNumber.innerText = `€${total}.00`
    elements.cartTotal.innerText = `${cartTotal}`
}

export default refreshHeader