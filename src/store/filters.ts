import Filter from "../interfaces_and_types/TypeFilter"
import FilterEntry from "../interfaces_and_types/TypeFilterEntry"

const filters = {
    _filters: [] as Array<Filter>,
    addFilter(property: string, filterEntries: Array<FilterEntry>) {
        const newFilter: Filter = { filterName: property, filterEntries }
        this._filters.push(newFilter)
    },
    get filters() {
        return this._filters
    }
}

export default filters