import filters from "../store/filters"

function onFilterChange(event): void {
    const changedFilter = event.target as HTMLInputElement
    let message = ''
    if (changedFilter.type === 'checkbox') {
        message = `checkbox, id ${changedFilter.id}, checked = ${changedFilter.checked}`
        filters.updateCheckboxStateInListFilter(
            changedFilter.id.split('-')[0],
            +changedFilter.id.split('-')[1],
            changedFilter.checked)
        // update checkbox state ans entry dark property in filter in store
        // apply all filters to catalog
        // update current/total in filter in store
        // update home page
    } else if (changedFilter.type === 'text') {
        message = `text, id ${changedFilter.id}, value = ${changedFilter.value}`
    }
    console.dir(message)

}
export default onFilterChange