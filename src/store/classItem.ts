interface IItem {
    _element: Node
}

class Item implements IItem {
    _element
    constructor(name: string) {
        const item = document.createElement('div')
        item.classList.add('item')
        item.setAttribute('id', `item-${name}`)
        item.innerText = name
        this._element = item as Node
    }
}

export default Item