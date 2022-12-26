import elements from "../constants/elements"
import Item from "../store/classItem"
import itemsArray from "../store/itemsArray";

function renderHomePageContent() {
    fetch('https://dummyjson.com/products')
        .then(res => {
            const result = res.json()
            return result
        })
        .then(result => {
            itemsArray.itemList = result.products

            const itemsElements: Node[] = result.products.map(el => {
                const itemCard: HTMLDivElement = new Item(el.title)._element
                itemCard.classList.add('item-card')
                return itemCard
            })
            elements.itemsContainer.append(...itemsElements)
        })
        .catch();

}

export default renderHomePageContent