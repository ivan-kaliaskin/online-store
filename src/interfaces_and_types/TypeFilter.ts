import FilterEntry from "./TypeFilterEntry"

type Filter = {
    filterName: string,
    filterLabel: string,
    filterEntries: Array<FilterEntry>
}

export default Filter