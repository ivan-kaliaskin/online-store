import setPageContent from "./setPageContent"
import items from "../store/itemsArray"
import cart from "../store/cart"
import SelectedItem from "../interfaces_and_types/TypeSelectedItem"
import refreshHeader from "./refreshHeader"

function onItemsContainerClick(event: Event) {
    let selectedItem: SelectedItem
    let switchToPage = ''
    const itemId = +(event.target! as HTMLDivElement).closest('div')!.id.split('-')[1]
    const item = items.itemList.find((item) => item.id === itemId) || {
        id: 0,
        title: 'not found',
    }
    // удаление item из корзины
    if ((event.target! as HTMLDivElement).classList.contains('btn-to-cart') && (event.target! as HTMLDivElement).closest('div')!.classList.contains('selected')) {
        (event.target! as HTMLDivElement).innerText = 'Add to cart';
        (event.target! as HTMLDivElement).closest('div')!.classList.remove('selected')// c item снимается зелёная рамка
        item!.selected = false
        selectedItem = {
            item: item!,
            amount: 1
        }
        cart.removeItemFormCart(itemId)
        refreshHeader()
    } else if ((event.target! as HTMLDivElement).classList.contains('btn-to-cart')) {
        (event.target! as HTMLDivElement).closest('div')!.classList.add('selected'); // на item вешается зелёная рамка
        (event.target! as HTMLDivElement).innerText = 'Drop from cart'
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
    } else if ((event.target! as HTMLDivElement).closest('div')) {
        switchToPage = 'details'
        const itemId = (event.target! as HTMLDivElement).closest('div')!.id

        setPageContent('details', item)
    }
}

export default onItemsContainerClick