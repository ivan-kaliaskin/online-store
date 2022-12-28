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

    const productsInCartList = document.createElement('ul')

    cart.selectedItems.forEach((el) => {
        const elInList = document.createElement('li')
        elInList.classList.add('product-in-list')
        elInList.innerText = `${el.item.title}`
        productsInCartList.append(elInList)
    })

    productsInCartContainer.append(productsInCartTitle, productsInCartList)

    const summary = document.createElement('div')
    summary.setAttribute('id', 'summary')


    itemsContainer.append(productsInCartContainer, summary)
    return itemsContainer
}

export default CartPage