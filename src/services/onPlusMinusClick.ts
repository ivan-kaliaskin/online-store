import cart from "../store/cart"
import refreshCartList from "./refreshCartList"
import refreshHeader from "./refreshHeader"
import refreshSummary from "./refreshSummary"

function onPlusMinusClick(event): void {
    const itemId = +event.target.closest('.product-in-cart-item').id.split('-').reverse()[0]
    const action = event.target.classList.contains('plus-btn') ? 'plus' : 'minus'
    cart.changeItemAmount(itemId, action)

    refreshCartList()
    refreshHeader()
    refreshSummary()
    // refresh ...
}

export default onPlusMinusClick