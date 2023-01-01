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
        console.log(changedEntry, isCheckboxChecked)
        changedFilter.filterEntries[entryNumber] = { ...changedEntry, isCheckboxChecked }
    },
    applyListFilter(filterName: string, catalog: Item[]) {
        const chosenFilter: ListFilter | undefined = this._listFilters.find((fl: ListFilter) => fl.filterName === filterName)
        const copyOfCatalog: Item[] = catalog.map((item: Item) => ({ ...item }))
        if (chosenFilter) {
            const activeEntries = chosenFilter.filterEntries.filter((entry: ListFilterEntry) => entry.isCheckboxChecked)
            const activeEntriesName = activeEntries.map((entry: ListFilterEntry) => entry.entryName)
            return copyOfCatalog.filter((item: Item) => {
                return !!activeEntriesName.find((activeName: string) => activeName === item[filterName])
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
}

export default filters