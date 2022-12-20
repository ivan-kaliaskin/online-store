//Страница корзины выбранных товаров// Главная страница с товарами и фильтрами
function CartPage() {
    const itemsContainer = document.createElement('div')
    itemsContainer.setAttribute('id', 'cart-page-container')

    const item1 = document.createElement('div')
    item1.setAttribute('id', 'cart-item1')
    item1.classList.add('cart-item')
    item1.innerText = 'item 1'
    const item2 = document.createElement('div')
    item2.setAttribute('id', 'cart-item2')
    item2.classList.add('cart-item')
    item2.innerText = 'item 2'

    itemsContainer.append(item1, item2)
    return itemsContainer
}

export default CartPage