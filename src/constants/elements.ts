const elements: {
    _itemsContainer: HTMLElement,
    itemsContainer: HTMLElement,
    _pageContainer: HTMLElement,
    pageContainer: HTMLElement
    _priceNumber: HTMLElement,
    priceNumber: HTMLElement,
    _cartTotal: HTMLElement,
    cartTotal: HTMLElement,
    _productsInCartListContainer: HTMLElement,
    productsInCartListContainer: HTMLElement,
    _productsAmount: HTMLElement,
    productsAmount: HTMLElement,
    _totalCost: HTMLElement,
    totalCost: HTMLElement,
} = {
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
    },
    _priceNumber: null!,
    set priceNumber(oPriceNumber: HTMLElement) {
        this._priceNumber = oPriceNumber
    },
    get priceNumber(): HTMLElement {
        return this._priceNumber
    },
    _cartTotal: null!,
    set cartTotal(oCartTotal: HTMLElement) {
        this._cartTotal = oCartTotal
    },
    get cartTotal(): HTMLElement {
        return this._cartTotal
    },
    _productsInCartListContainer: null!,
    set productsInCartListContainer(oProductsInCartListContainer: HTMLElement) {
        this._productsInCartListContainer = oProductsInCartListContainer
    },
    get productsInCartListContainer(): HTMLElement {
        return this._productsInCartListContainer
    },
    _productsAmount: null!,
    set productsAmount(oProductsAmount: HTMLElement) {
        this._productsAmount = oProductsAmount
    },
    get productsAmount(): HTMLElement {
        return this._productsAmount
    },
    _totalCost: null!,
    set totalCost(oTotalCost: HTMLElement) {
        this._totalCost = oTotalCost
    },
    get totalCost(): HTMLElement {
        return this._totalCost
    },
}

export default elements