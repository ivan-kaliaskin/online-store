import ItemCard from './ItemCard'
import IItem from '../interfaces_and_types/IItem'
import typeItem from "../interfaces_and_types/TypeItem"

class Item implements IItem {
    _element: HTMLDivElement
    constructor(item: typeItem) {
        this._element = ItemCard(item)
    }
}

export default Item