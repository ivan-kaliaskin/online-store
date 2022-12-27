import Item from "../components/Item"

const cart = {
    _selectedItems: [] as Array<Item>,
    set selectedItems(items: Array<Item>) {
        this._selectedItems = items
    },
    get selectedItems() {
        return this._selectedItems
    },
    addItemToCart(item: Item) {
        this._selectedItems.push(item)
    }
}

export default cart