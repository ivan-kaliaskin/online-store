import ItemCard from '../components/ItemCard'
import IItem from '../interfaces_and_types/IItem'

class Item implements IItem {
    _element
    constructor(item) {
        this._element = ItemCard(item)
    }
}

export default Item