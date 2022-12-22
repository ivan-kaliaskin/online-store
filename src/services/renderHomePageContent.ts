import elements from "../constants/elements"
import Item from "../store/classItem"

function render(items) {
    const container = elements.itemsContainer
    const itemsElements: Node[] = items.map((el, index) => {
        return new Item(el)._element
    })
    container.append(...itemsElements)
}

export default render