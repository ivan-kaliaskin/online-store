import attributeRender from "./AttributeRender"

function createSort() {

  let found: number = 0;
  
  const sortContainer: HTMLDivElement = document.createElement('div')
  sortContainer.classList.add('sort-container')
  
  const sortBar: HTMLDivElement = document.createElement('div')
  sortBar.classList.add('sort-bar')
  const sortSelect: HTMLSelectElement = document.createElement('select')
  sortSelect.classList.add('sort-select')
  const sortOptionText: string[] = ['Sort by price ASC', 'Sort by price DESC', 'Sort by rating ASC', 'Sort by rating DESC']
  
  for (let i = 0; i < sortOptionText.length; i++) {
    const sortOption: HTMLOptionElement = document.createElement('option')
    sortOption.classList.add('sort-option')
    sortOption.innerText = sortOptionText[i]
    sortSelect.append(sortOption)
  }

  sortBar.append(sortSelect)

  const statBar: HTMLDivElement = document.createElement('div')
  statBar.classList.add('stat-bar')

  const statBarText: HTMLSpanElement = document.createElement('span')
  statBarText.classList.add('stat-bar-text')
  statBarText.innerHTML = 'Found:'
  const statBarNumber: HTMLSpanElement = document.createElement('span')
  statBarNumber.classList.add('stat-bar-number')
  statBarNumber.innerHTML = `${found}`

  statBar.append(statBarText, statBarNumber)

  const searchBar: HTMLDivElement = document.createElement('div')
  searchBar.classList.add('search-bar')
  const searchInput: HTMLInputElement = document.createElement('input')
  searchInput.classList.add('search-bar-input')
  attributeRender(searchInput,{'id': 'search-bar', 'type': 'search', 'placeholder': 'Search product'})
  searchBar.append(searchInput)

  const viewBar: HTMLDivElement = document.createElement('div')
  viewBar.classList.add('view-bar')
  const viewBarBtnBig: HTMLDivElement = document.createElement('div')
  viewBarBtnBig.classList.add('view-bar-button', 'view-bar-button--big')
  const viewBarBtnSmall: HTMLDivElement = document.createElement('div')
  viewBarBtnSmall.classList.add('view-bar-button', 'view-bar-button--small')

  for (let i = 0; i < 12; i++) {
    const div: HTMLDivElement = document.createElement('div')
    viewBarBtnBig.append(div)
  }

  for (let i = 0; i < 24; i++) {
    const div: HTMLDivElement = document.createElement('div')
    viewBarBtnSmall.append(div)
  }

  viewBar.append(viewBarBtnBig, viewBarBtnSmall)

  sortContainer.append(sortBar, statBar, searchBar, viewBar)

  return sortContainer
}

export default createSort()