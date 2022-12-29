import SelectedItem from "../interfaces_and_types/TypeSelectedItem"

const cart = {
    _selectedItems: [] as Array<SelectedItem>,
    set selectedItems(items: Array<SelectedItem>) {
        this._selectedItems = items
    },
    get selectedItems() {
        return this._selectedItems
    },
    addItemToCart(item: SelectedItem) {
        this._selectedItems.push(item)
    },
    removeItemFormCart(item: SelectedItem) {
        this._selectedItems = this._selectedItems.filter((el) => { el !== item })
    }
}

export default cart