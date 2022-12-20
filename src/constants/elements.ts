const elements: { _pageContainer: HTMLElement, pageContainer: HTMLElement } = {
    _pageContainer: null!,
    set pageContainer(oPageContainer: HTMLElement) {
        this._pageContainer = oPageContainer
    },
    get pageContainer(): HTMLElement {
        return this._pageContainer
    }
}

export default elements