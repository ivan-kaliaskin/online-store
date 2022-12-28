//Страница корзины выбранных товаров
import cart from "../store/cart"

function CartPage() {
    const itemsContainer = document.createElement('div')
    itemsContainer.setAttribute('id', 'cart-page-container')

    const productsInCartContainer = document.createElement('div')
    productsInCartContainer.setAttribute('id', 'products-in-cart-container')

    const productsInCartTitle = document.createElement('h2')
    productsInCartTitle.setAttribute('id', 'products-in-cart-container-title')
    productsInCartTitle.innerText = 'Products In Cart'

    const productsInCartList = document.createElement('ol')

    cart.selectedItems.forEach((el) => {
        const elInList = document.createElement('li') // один товар
        elInList.classList.add('product-in-list')
        elInList.innerText = `${el.item.title}. Description: ${el.item.description}. Rating: ${el.item.rating}`
        // другие свойства объекта item можно достать таким же образом: el.item... vscode подскажет какие существуют
        productsInCartList.append(elInList)
    })

    productsInCartContainer.append(productsInCartTitle, productsInCartList)

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
    let ntotalCost = 0
    cart.selectedItems.forEach((el) => {
        ntotalCost += el.item.price!
    })
    totalCost.innerText = `Total: ${ntotalCost}`

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