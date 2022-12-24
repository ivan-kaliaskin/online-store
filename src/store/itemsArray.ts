const items = {
    _itemList: [],
    set itemList(itemList) {
        this._itemList = itemList
    },
    get itemList() {
        return this._itemList
    }
}

export default items