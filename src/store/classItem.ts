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
    render(string: string) {
        this._element.innerText = string
    }
}

export default Item