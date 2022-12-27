//Страница корзины выбранных товаров// Главная страница с товарами и фильтрами
function CartPage() {
    const itemsContainer = document.createElement('div')
    itemsContainer.setAttribute('id', 'cart-page-container')

    const productsInCart = document.createElement('div')
    productsInCart.setAttribute('id', 'products-in-cart')

    const summary = document.createElement('div')
    summary.setAttribute('id', 'summary')


    itemsContainer.append(productsInCart, summary)
    return itemsContainer
}

export default CartPage