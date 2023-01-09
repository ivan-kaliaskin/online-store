import Item from "../interfaces_and_types/TypeItem"

const items = {
    _itemList: [] as Array<Item>,
    set itemList(itemList: Array<Item>) {
        this._itemList = itemList
    },
    get itemList() {
        return this._itemList
    }
}

export default items