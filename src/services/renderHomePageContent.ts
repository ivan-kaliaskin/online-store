import elements from "../constants/elements"
import Item from "../components/Item"
import itemsArray from "../store/itemsArray";
import typeItem from "../interfaces_and_types/TypeItem"
import SelectedItem from "../interfaces_and_types/TypeSelectedItem";
import cart from "../store/cart";

function renderHomePageContent(bFromServer: boolean) {
    // переход с других страниц
    if (!bFromServer) {
        const aIdOfSelectedItems = cart.selectedItems.map((item: SelectedItem) => item.item.id)
        const itemsElements: Node[] = itemsArray.itemList.map(el => {
            let newItem: HTMLDivElement = new Item(el)._element
            const btn = newItem.querySelector('.btn-to-cart') as HTMLElement
            // проверяем, этот товар в корзине или нет
            if (aIdOfSelectedItems.find(id => id === el.id)) {
                newItem.classList.add('selected');
                btn.innerText = 'Drop from cart'
            } else {
                btn.innerText = 'Add to cart'
            }
            return newItem
        })
        elements.itemsContainer.innerHTML = ''
        elements.itemsContainer.append(...itemsElements)
        // загрузка с сервера
    } else {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(result => {
                const products: [typeItem] = result.products
                itemsArray.itemList = products

                const itemsElements: Node[] = products.map(el => {
                    return new Item(el)._element as HTMLDivElement
                })
                elements.itemsContainer.append(...itemsElements)
            })
            .catch();
    }
}

export default renderHomePageContent