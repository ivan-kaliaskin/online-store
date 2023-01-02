import filters from "../store/filters"
import items from "../store/itemsArray"

function onFilterChange(event): void {
    const changedFilter = event.target as HTMLInputElement

    if (changedFilter.type === 'checkbox') {
        filters.updateCheckboxStateInListFilter(
            changedFilter.id.split('-')[0],
            +changedFilter.id.split('-')[1],
            changedFilter.checked)
        const filteredCatalog = filters.applyListFilter('brand', items.itemList)
        console.log(items.itemList, filteredCatalog)
    } else if (changedFilter.type === 'text') {
        filters.updateMinMaxInLimitFilter(
            changedFilter.id.split('-')[1],
            changedFilter.id.split('-')[0],
            +changedFilter.value)
    }
    // apply all filters to catalog
    const catalogAfterCategoryFilter = filters.applyListFilter('category', items.itemList)
    const catalogAfterBrandFilter = filters.applyListFilter('brand', catalogAfterCategoryFilter)
    const catalogAfterPriceFilter = filters.applyLimitFilter('price', catalogAfterBrandFilter)
    console.log(catalogAfterPriceFilter)
    // update current/total and entry dark property in filter in store
    // update home page

}
export default onFilterChange