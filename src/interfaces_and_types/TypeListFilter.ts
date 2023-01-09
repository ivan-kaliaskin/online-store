import FilterEntry from "./TypeListFilterEntry"

type ListFilter = {
    filterName: string,
    filterLabel: string,
    filterEntries: Array<FilterEntry>
}

export default ListFilter