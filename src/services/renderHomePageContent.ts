import elements from "../constants/elements"
import Item from "../store/classItem"
import items from "../store/itemsArray";

function renderHomePageContent() {
    fetch('https://dummyjson.com/products')
        .then(res => {
            const result = res.json()
            return result
        })
        .then(result => {
            const itemsFromServer = (result).products.map(product => product.title)

            items.itemList = itemsFromServer

            const itemsElements: Node[] = itemsFromServer.map(el => {
                const itemCard: HTMLDivElement = new Item(el)._element
                itemCard.classList.add('item-card')
                return itemCard
            })
            elements.itemsContainer.append(...itemsElements)
        })
        .catch();

}

export default renderHomePageContent