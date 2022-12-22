const elements: { _itemsContainer: HTMLElement, itemsContainer: HTMLElement, _pageContainer: HTMLElement, pageContainer: HTMLElement } = {
    _itemsContainer: null!,
    set itemsContainer(oItemsContainer: HTMLElement) {
        this._itemsContainer = oItemsContainer
    },
    get itemsContainer(): HTMLElement {
        return this._itemsContainer
    },
    _pageContainer: null!,
    set pageContainer(oPageContainer: HTMLElement) {
        this._pageContainer = oPageContainer
    },
    get pageContainer(): HTMLElement {
        return this._pageContainer
    }
}

export default elements