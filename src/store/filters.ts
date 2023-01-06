import ListFilter from "../interfaces_and_types/TypeListFilter"
import LimitFilter from "../interfaces_and_types/TypeLimitFilter"
import ListFilterEntry from "../interfaces_and_types/TypeListFilterEntry"
import Item from "../interfaces_and_types/TypeItem"

const filters = {
    _listFilters: [] as Array<ListFilter>,
    addListFilter(property: string, label: string, filterEntries: Array<ListFilterEntry>) {
        const newListFilter: ListFilter = { filterName: property, filterLabel: label, filterEntries }
        this._listFilters.push(newListFilter)
    },
    get listFilters() {
        return this._listFilters
    },
    getListFilter(filterName: string) {
        return this._listFilters.find((filter: ListFilter) => filter.filterName === filterName) as ListFilter
    },
    updateCheckboxStateInListFilter(filterName: string, entryNumber: number, isCheckboxChecked: boolean) {
        const changedFilter: ListFilter = this.getListFilter(filterName)
        let changedEntry = changedFilter.filterEntries[entryNumber]

        changedFilter.filterEntries[entryNumber] = { ...changedEntry, isCheckboxChecked }
    },
    updateCurrentAmountInListFilter(filterName: string, filteredCatalog: Item[]) {
        const changedFilter: ListFilter = this.getListFilter(filterName)
        changedFilter.filterEntries = [...changedFilter.filterEntries].map((entry: ListFilterEntry) => {
            return {
                ...entry, entryCurrentAmount: filteredCatalog.filter((item: Item) => {
                    return item[filterName as keyof Item] === entry.entryName
                }).length
            }
        })
    },
    applyListFilter(filterName: string, catalog: Item[]) {
        const chosenFilter: ListFilter | undefined = this._listFilters.find((fl: ListFilter) => fl.filterName === filterName)
        const copyOfCatalog: Item[] = catalog.map((item: Item) => ({ ...item }))
        // здесь нужна проверка, что хотя бы один чекбокс чекед
        if (chosenFilter) {
            const activeEntries = chosenFilter.filterEntries.filter((entry: ListFilterEntry) => entry.isCheckboxChecked)
            if (!activeEntries.length) return copyOfCatalog
            const activeEntriesName = activeEntries.map((entry: ListFilterEntry) => entry.entryName)
            return copyOfCatalog.filter((item: Item) => {
                return !!activeEntriesName.find((activeName: string) => activeName === item[filterName as keyof Item])
            })
        } else {
            return copyOfCatalog
        }
    },

    _limitFilters: [] as Array<LimitFilter>,
    addLimitFilter(property: string, label: string, min: number, max: number) {
        const newLimitFilter: LimitFilter = { filterName: property, filterLabel: label, min, max }
        this._limitFilters.push(newLimitFilter)
    },
    get limitFilters() {
        return this._limitFilters
    },
    getLimitFilter(filterName: string) {
        return this._limitFilters.find((filter: LimitFilter) => filter.filterName === filterName) as LimitFilter
    },
    updateMinMaxInLimitFilter(filterName: string, minOrMax: string, value: number) {
        const changedFilter: LimitFilter = this.getLimitFilter(filterName)

        if (minOrMax === 'min') {
            changedFilter.min = value
        } else if (minOrMax === 'max') {
            changedFilter.max = value
        }
    },
    applyLimitFilter(filterName: string, catalog: Item[]) {
        const chosenFilter: LimitFilter | undefined = this._limitFilters.find((fl: LimitFilter) => fl.filterName === filterName)
        const copyOfCatalog: Item[] = catalog.map((item: Item) => ({ ...item }))
        // здесь 
        if (chosenFilter) {
            // c
            return copyOfCatalog.filter((item: Item) => {
                if (!item.price) return true
                return (item.price >= chosenFilter.min && item.price <= chosenFilter.max)
            })
        } else {
            return copyOfCatalog
        }
    },
    updateCurrentValuesInLimitFilter(filterName: string, filteredCatalog: Item[]) {
        let changedFilter: LimitFilter = this.getLimitFilter(filterName)
        const allPricesFromFilteredCatalog = filteredCatalog.map((item: Item) => item.price || 0)

        changedFilter = {
            ...changedFilter,
            max: Math.max(...allPricesFromFilteredCatalog),
            min: Math.min(...allPricesFromFilteredCatalog)
        }
    },

    applyAllFilters(catalog: Item[]) {
        const catalogAfterCategoryFilter = filters.applyListFilter('category', catalog)
        const catalogAfterBrandFilter = filters.applyListFilter('brand', catalogAfterCategoryFilter)
        const catalogAfterPriceFilter = filters.applyLimitFilter('price', catalogAfterBrandFilter)
        return catalogAfterPriceFilter
    },


}

export default filters