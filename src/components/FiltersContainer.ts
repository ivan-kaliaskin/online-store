import attributeRender from "./AttributeRender"
import elements from "../constants/elements"

function FiltersContainer(): HTMLElement {
  const filter: HTMLDivElement = document.createElement('div')
  filter.classList.add('filters')

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
  filter.append(btns)

  // list filters are attached in renderHomePageContainer, after receiving data from servers
  // limit filters are attached in renderHomePageContainer, after receiving data from servers
  elements.filtersContainer = filter

  return filter
}

export default FiltersContainer