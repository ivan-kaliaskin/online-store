function filterItemRender(array: string[], filterItem: HTMLElement) {
  array.forEach(item => {
    const listItem: HTMLDivElement = document.createElement('div')
    listItem.classList.add('filter-item')

    const listItemCheckbox: HTMLInputElement = document.createElement('input')
    listItemCheckbox.classList.add('filter-item-checkbox')
    listItemCheckbox.setAttribute('id', item)
    listItemCheckbox.setAttribute('type', 'checkbox')

    const listItemLabel: HTMLLabelElement = document.createElement('label')
    listItemLabel.setAttribute('for', item)
    listItemLabel.classList.add('filter-item-label')
    listItemLabel.innerHTML = item

    const count: HTMLSpanElement = document.createElement('span')
    count.classList.add('filter-item-count')
    count.innerHTML = '0'

    listItem.append(listItemCheckbox, listItemLabel, count)

    filterItem.append(listItem)

    return filterItem
  })
}

export default filterItemRender