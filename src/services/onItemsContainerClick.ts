import setPageContent from "./setPageContent"
import items from "../store/itemsArray"
import cart from "../store/cart"
import SelectedItem from "../interfaces_and_types/TypeSelectedItem"
import refreshHeader from "./refreshHeader"

function onItemsContainerClick(event) {
    let selectedItem: SelectedItem
    let switchToPage = ''
    const itemId = +event.target.closest('article').id.split('-')[1]
    const item = items.itemList.find((item) => item.id === itemId) || {
        id: 0,
        title: 'not found',
    }
    // удаление item из корзины
    if (event.target.classList.contains('btn-to-cart') && event.target.closest('article').classList.contains('selected')) {
        event.target.innerText = 'Add to cart'
        event.target.closest('article').classList.remove('selected')// c item снимается зелёная рамка
        item!.selected = false
        selectedItem = {
            item: item!,
            amount: 1
        }
        cart.removeItemFormCart(itemId)
        refreshHeader()
    } else if (event.target.classList.contains('btn-to-cart')) {
        event.target.closest('article').classList.add('selected') // на item вешается зелёная рамка
        event.target.innerText = 'Drop from cart'
        item!.selected = true
        if (item) { // item существует
            selectedItem = {
                item: item,
                amount: 1
            }
        } else {
            selectedItem = { // item не нашёлся
                item: {
                    id: 0,
                    title: 'item not found'
                },
                amount: 1
            }
        }
        cart.addItemToCart(selectedItem)
        refreshHeader()
    } else if (event.target.closest('article')) {
        switchToPage = 'details'
        const itemId = event.target.closest('article').id

        setPageContent('details', item)
    }
}

export default onItemsContainerClick