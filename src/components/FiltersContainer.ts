import attributeRender from "./AttributeRender"
import elements from "../constants/elements"

function createFilter(): HTMLElement {
  const filter: HTMLDivElement = document.createElement('div')
  filter.classList.add('filters')

  // price filter
  const price: HTMLDivElement = document.createElement('div')
  price.classList.add('filters-price')

  const priceTitle: HTMLHeadingElement = document.createElement('h3')
  priceTitle.classList.add('filter-title')
  priceTitle.innerHTML = 'Price'

  const priceInner: HTMLDivElement = document.createElement('div')
  priceInner.classList.add('filter-price-inner')

  const priceSliderInput: HTMLInputElement = document.createElement('input')
  priceSliderInput.classList.add('filter-price-input')
  attributeRender(priceSliderInput, { 'id': 'min-price', 'inputmode': 'decimal', 'name': 'min-price', 'placeholder': 'min' })

  const priceSliderInput2: HTMLInputElement = document.createElement('input')
  priceSliderInput2.classList.add('filter-price-input')
  attributeRender(priceSliderInput2, { 'id': 'max-price', 'inputmode': 'decimal', 'name': 'max-price', 'placeholder': 'max' })

  const separator: HTMLDivElement = document.createElement('div')
  separator.classList.add('filter-price-separator')

  priceInner.append(priceSliderInput, separator, priceSliderInput2)
  price.append(priceTitle, priceInner)

  // buttons in filter sidebar
  const btns: HTMLDivElement = document.createElement('div')
  btns.classList.add('filter-btns-wrapper')

  const btnReset: HTMLButtonElement = document.createElement('button')
  btnReset.classList.add('filter-btn', 'btn-reset')
  btnReset.innerHTML = 'Reset Filters'

  const btnCopy: HTMLButtonElement = document.createElement('button')
  btnCopy.classList.add('filter-btn', 'btn-copy')
  btnCopy.innerHTML = 'Copy Link'

  btns.append(btnReset, btnCopy)
  filter.append(price, btns)

  // list filters are attached in renderHomePageContainer, after receiving data from servers
  elements.filtersContainer = filter

  return filter
}

export default createFilter