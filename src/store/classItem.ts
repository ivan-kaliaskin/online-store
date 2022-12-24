import ItemCard from '../components/ItemCard'
import IItem from '../interfaces_and_types/IItem'

class Item implements IItem {
    _element
    constructor(name: string) {
        this._element = ItemCard(name)
    }
}

export default Item