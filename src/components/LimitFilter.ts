import attributeRender from "./AttributeRender"
import LimitFilter from "../interfaces_and_types/TypeLimitFilter"
import filters from "../store/filters"

function LimitFilter(filterProperty: string) {
    const aAllLimitFilters: Array<LimitFilter> = filters.limitFilters
    const oFilter = aAllLimitFilters.find((f: LimitFilter) => f.filterName === filterProperty)

    const price: HTMLDivElement = document.createElement('div')
    price.classList.add('filters-price')

    const priceTitle: HTMLHeadingElement = document.createElement('h3')
    priceTitle.classList.add('filter-title')
    priceTitle.innerHTML = 'Price'

    const priceInner: HTMLDivElement = document.createElement('div')
    priceInner.classList.add('filter-price-inner')

    const priceSliderInput: HTMLInputElement = document.createElement('input')
    priceSliderInput.classList.add('filter-price-input')
    priceSliderInput.value = `${oFilter?.min}` || '0'
    attributeRender(priceSliderInput, { 'id': 'min-price', 'inputmode': 'decimal', 'name': 'min-price', 'placeholder': 'min' })

    const priceSliderInput2: HTMLInputElement = document.createElement('input')
    priceSliderInput2.classList.add('filter-price-input')
    priceSliderInput2.value = `${oFilter?.max}` || '10000'
    attributeRender(priceSliderInput2, { 'id': 'max-price', 'inputmode': 'decimal', 'name': 'max-price', 'placeholder': 'max' })

    const separator: HTMLDivElement = document.createElement('div')
    separator.classList.add('filter-price-separator')

    priceInner.append(priceSliderInput, separator, priceSliderInput2)
    price.append(priceTitle, priceInner)

    return price
}

export default LimitFilter