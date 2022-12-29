import elements from "../constants/elements"
import Item from "../components/Item"
import typeItem from "../interfaces_and_types/TypeItem";
import itemsArray from "../store/itemsArray";
import cart from "../store/cart";

function renderHomePageContent(bFromServer: boolean) {
    if (!bFromServer) {
        const itemsElements: Node[] = itemsArray.itemList.map(el => {
            let newItem: HTMLDivElement = new Item(el)._element
            if (el.selected === true) {
                newItem = new Item(el)._element
                newItem.classList.add('selected')
            } else {
                newItem = new Item(el)._element
                newItem.classList.remove('selected')
            }
            return newItem
        })
        elements.itemsContainer.innerHTML = ''
        elements.itemsContainer.append(...itemsElements)
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