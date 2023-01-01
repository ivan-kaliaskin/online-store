function onFilterChange(event): void {
    const changedFilter = event.target as HTMLInputElement
    let message = ''
    if (changedFilter.type === 'checkbox') {
        message = `checkbox, id ${changedFilter.id}, checked = ${changedFilter.checked}`
    } else if (changedFilter.type === 'text') {
        message = `text, id ${changedFilter.id}, value = ${changedFilter.value}`
    }
    console.dir(message)

    // update filter in store
    // update filter view
    // update home page
}
export default onFilterChange