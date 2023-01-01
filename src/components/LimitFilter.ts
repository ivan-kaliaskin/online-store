import attributeRender from "./AttributeRender"
import LimitFilter from "../interfaces_and_types/TypeLimitFilter"
import filters from "../store/filters"

function LimitFilter(filterProperty: string) {
    const aAllLimitFilters: Array<LimitFilter> = filters.limitFilters
    const oFilter = aAllLimitFilters.find((f: LimitFilter) => f.filterName === filterProperty)

    const price: HTMLDivElement = document.createElement('div')
    price.classList.add('limit-filter')

    const priceTitle: HTMLHeadingElement = document.createElement('h3')
    priceTitle.classList.add('filter-title')
    priceTitle.innerText = oFilter ? oFilter.filterLabel : 'Error'

    const priceInner: HTMLDivElement = document.createElement('div')
    priceInner.classList.add('limit-filter-inner')

    if (oFilter) {
        const priceSliderInput: HTMLInputElement = document.createElement('input')
        priceSliderInput.classList.add('limit-filter-input')
        priceSliderInput.value = `${oFilter?.min}` || '0'
        attributeRender(priceSliderInput, { 'id': `min-${filterProperty}`, 'type': 'text', 'inputmode': 'decimal', 'name': `min-${filterProperty}`, 'placeholder': 'min' })

        const priceSliderInput2: HTMLInputElement = document.createElement('input')
        priceSliderInput2.classList.add('limit-filter-input')
        priceSliderInput2.value = `${oFilter?.max}` || '10000'
        attributeRender(priceSliderInput2, { 'id': `max-${filterProperty}`, 'type': 'text', 'inputmode': 'decimal', 'name': `max-${filterProperty}`, 'placeholder': 'max' })

        const separator: HTMLDivElement = document.createElement('div')
        separator.classList.add('limit-filter-separator')

        priceInner.append(priceSliderInput, separator, priceSliderInput2)

    } else {
        priceInner.innerHTML = `no filter ${filterProperty} found`
    }
    price.append(priceTitle, priceInner)

    return price
}

export default LimitFilter