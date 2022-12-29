//Страница корзины выбранных товаров
import ProductInCartList from "../components/ProductInCartList"
import SelectedItem from "../interfaces_and_types/TypeSelectedItem"
import cart from "../store/cart"

function CartPage() {
    const itemsContainer: HTMLDivElement = document.createElement('div')
    itemsContainer.setAttribute('id', 'cart-page-container')
    itemsContainer.classList.add('cart-page-container', 'container')

    const productsInCartContainer: HTMLDivElement = document.createElement('div')
    productsInCartContainer.setAttribute('id', 'products-in-cart-container')
    productsInCartContainer.classList.add('products-in-cart-container')

    const productsInCartTitle: HTMLHeadingElement = document.createElement('h2')
    productsInCartTitle.setAttribute('id', 'products-in-cart-container-title')
    productsInCartTitle.classList.add('products-in-cart-container-title')
    productsInCartTitle.innerText = 'Products In Cart'

    const productsInCartListContainer: HTMLUListElement = document.createElement('ul')
    productsInCartListContainer.setAttribute('id', 'products-in-cart-list-container')
    productsInCartListContainer.classList.add('products-in-cart-list-container')
    const productsInCartList = cart.selectedItems.map((product: SelectedItem, index: number) => {
        return ProductInCartList(product, index)
    })
    productsInCartListContainer.append(...productsInCartList)
    productsInCartContainer.append(productsInCartTitle, productsInCartListContainer)

    const summary: HTMLDivElement = document.createElement('div')
    summary.setAttribute('id', 'summary')
    summary.classList.add('summary')

    const summaryTitle: HTMLHeadingElement = document.createElement('h2')
    summaryTitle.setAttribute('id', 'summary-title')
    summaryTitle.classList.add('summary-title')
    summaryTitle.innerText = 'Summary'

    const productsAmount: HTMLDivElement = document.createElement('div') // количество товаров
    productsAmount.setAttribute('id', 'summary-amount')
    productsAmount.classList.add('summary-amount')
    productsAmount.innerHTML = `Products: <span>${cart.selectedItems.length}</span>`

    const totalCost: HTMLDivElement = document.createElement('div') // итоговая сумма
    totalCost.setAttribute('id', 'total-cost')
    totalCost.classList.add('total-cost')
    let nTotalCost = 0
    cart.selectedItems.forEach((el) => {
        nTotalCost += el.item.price!
    })
    totalCost.innerHTML = `Total: <span>${nTotalCost}</span>`

    const promocodeInput = document.createElement('input')
    promocodeInput.setAttribute('id', 'promocode-input')
    promocodeInput.setAttribute('value', 'enter promo code')
    promocodeInput.classList.add('promocode-input')

    const buyNowButton = document.createElement('button')
    buyNowButton.setAttribute('id', 'buy-now-button')
    buyNowButton.classList.add('buy-now-button')
    buyNowButton.innerText = 'BUY NOW'

    summary.append(summaryTitle, productsAmount, totalCost, promocodeInput, buyNowButton)


    itemsContainer.append(productsInCartContainer, summary)
    return itemsContainer
}

export default CartPage