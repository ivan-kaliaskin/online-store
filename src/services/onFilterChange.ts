import filters from "../store/filters"
import items from "../store/itemsArray"
import renderHomePageContent from "./renderHomePageContent"

function onFilterChange(event): void {
    const changedFilter = event.target as HTMLInputElement
    const filterName = changedFilter.id.split('-')[0]

    if (changedFilter.type === 'checkbox') {
        filters.updateCheckboxStateInListFilter(
            filterName,
            +changedFilter.id.split('-')[1],
            changedFilter.checked)
    } else if (changedFilter.type === 'text') {
        filters.updateMinMaxInLimitFilter(
            changedFilter.id.split('-')[1],
            changedFilter.id.split('-')[0],
            +changedFilter.value)
    }
    // apply all filters to catalog
    const filteredCatalog = filters.applyAllFilters(items.itemList)
    renderHomePageContent(false)

    // update current/total and entry dark property in filter in store

}
export default onFilterChange