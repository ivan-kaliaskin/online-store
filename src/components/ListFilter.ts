import ListFilter from "../interfaces_and_types/TypeListFilter"
import filters from "../store/filters"

function ListFilter(filterProperty: string) {
    const aAllFilters: Array<ListFilter> = filters.listFilters
    const oFilter = aAllFilters.find((f: ListFilter) => f.filterName === filterProperty)

    const filterWrapper = document.createElement('div')
    filterWrapper.classList.add('filter-wrapper')

    const filterTitle = document.createElement('h3')
    filterTitle.classList.add('filter-title')
    filterTitle.innerText = oFilter ? oFilter.filterLabel : `filter ${filterProperty} not found`

    const filterList = document.createElement('section')
    filterList.classList.add('filter-list')

    if (oFilter) {
        const aFilterList = oFilter.filterEntries.map(item => {
            const listItem: HTMLDivElement = document.createElement('div')
            listItem.classList.add('filter-item')

            const listItemCheckbox: HTMLInputElement = document.createElement('input')
            listItemCheckbox.classList.add('filter-item-checkbox')
            listItemCheckbox.setAttribute('id', item.id)
            listItemCheckbox.setAttribute('type', 'checkbox')

            const listItemLabel: HTMLLabelElement = document.createElement('label')
            listItemLabel.setAttribute('for', item.id)
            listItemLabel.classList.add('filter-item-label')
            listItemLabel.innerHTML = item.entryName

            const count: HTMLSpanElement = document.createElement('span')
            count.classList.add('filter-item-count')
            count.innerHTML = `${item.entryCurrentAmount}/${item.entryTotalAmount}`

            listItem.append(listItemCheckbox, listItemLabel, count)
            return listItem
        })

        filterList.append(...aFilterList)
    }

    filterWrapper.append(filterTitle, filterList)
    return filterWrapper
}

export default ListFilter