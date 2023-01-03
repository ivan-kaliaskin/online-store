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
            filterName,
            changedFilter.id.split('-')[1],
            +changedFilter.value)
    }
    // apply all filters to catalog
    const filteredCatalog = filters.applyAllFilters(items.itemList)
    renderHomePageContent(false)

    filters.updateCurrentAmountInListFilter('category', filteredCatalog)
    filters.updateCurrentAmountInListFilter('brand', filteredCatalog)
    filters.updateCurrentValuesInLimitFilter('price', filteredCatalog)

    // render updated filters

}
export default onFilterChange