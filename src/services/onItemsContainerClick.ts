import setPageContent from "./setPageContent"
import items from "../store/itemsArray"
import cart from "../store/cart"
import SelectedItem from "../interfaces_and_types/TypeSelectedItem"

function onItemsContainerClick(event) {
    let selectedItem: SelectedItem
    let switchToPage = ''
    if (event.target.classList.contains('btn-to-cart')) {
        const itemId = +event.target.closest('article').id.split('-')[1]
        const item = items.itemList.find((item) => item.id === itemId)
        if (item) {
            selectedItem = {
                item: item,
                amount: 1
            }
        } else {
            selectedItem = {
                item: {
                    id: 0,
                    title: 'item not found'
                },
                amount: 1
            }
        }
        cart.addItemToCart(selectedItem)
        // TODO добавить товар в корзину и перерендерить хедер

    } else if (event.target.closest('article')) {
        switchToPage = 'details'
        const itemId = event.target.closest('article').id
        console.log('Подробности', itemId)
        setPageContent('details')
        // TODO переход на нужную страницу

    }
}

export default onItemsContainerClick