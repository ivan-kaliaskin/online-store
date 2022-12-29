//Страница корзины выбранных товаров
import ProductInCartList from "../components/ProductInCartList"
import SelectedItem from "../interfaces_and_types/TypeSelectedItem"
import cart from "../store/cart"

function CartPage() {
    const itemsContainer = document.createElement('div')
    itemsContainer.setAttribute('id', 'cart-page-container')

    const productsInCartContainer = document.createElement('div')
    productsInCartContainer.setAttribute('id', 'products-in-cart-container')

    const productsInCartTitle = document.createElement('h2')
    productsInCartTitle.setAttribute('id', 'products-in-cart-container-title')
    productsInCartTitle.innerText = 'Products In Cart'

    const productsInCartListContainer = document.createElement('ul')
    productsInCartListContainer.setAttribute('id', 'products-in-cart-list-container')
    const productsInCartList = cart.selectedItems.map((product: SelectedItem, index: number) => {
        return ProductInCartList(product, index)
    })
    productsInCartListContainer.append(...productsInCartList)
    productsInCartContainer.append(productsInCartTitle, productsInCartListContainer)

    const summary = document.createElement('div')
    summary.setAttribute('id', 'summary')

    const summaryTitle = document.createElement('h2')
    summaryTitle.setAttribute('id', 'summary-title')
    summaryTitle.innerText = 'Summary'

    const productsAmount = document.createElement('div') // количество товаров
    productsAmount.setAttribute('id', 'summary-amount')
    productsAmount.innerText = `Products: ${cart.selectedItems.length}`

    const totalCost = document.createElement('div') // итоговая сумма
    totalCost.setAttribute('id', 'total-cost')
    let nTotalCost = 0
    cart.selectedItems.forEach((el) => {
        nTotalCost += el.item.price!
    })
    totalCost.innerText = `Total: ${nTotalCost}`

    const promocodeInput = document.createElement('input')
    promocodeInput.setAttribute('id', 'promocode-input')
    promocodeInput.setAttribute('value', 'enter promo code')

    const buyNowButton = document.createElement('button')
    buyNowButton.setAttribute('id', 'buy-now-button')
    buyNowButton.innerText = 'BUY NOW'

    summary.append(summaryTitle, productsAmount, totalCost, promocodeInput, buyNowButton)


    itemsContainer.append(productsInCartContainer, summary)
    return itemsContainer
}

export default CartPage