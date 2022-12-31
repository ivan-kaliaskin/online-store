import cart from "../store/cart"

function onPlusMinusClick(event): void {
    const itemId = +event.target.closest('.product-in-cart-item').id.split('-').reverse()[0]
    const action = event.target.classList.contains('plus-btn') ? 'plus' : 'minus'
    cart.changeItemAmount(itemId, action)

    // refresh header
    // refresh ...
    // refresh ...
}

export default onPlusMinusClick