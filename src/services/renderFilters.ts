import LimitFilter from "../components/LimitFilter"
import ListFilter from "../components/ListFilter"
import elements from "../constants/elements"

function renderFilters() {
    elements.filtersContainer.innerHTML = ''
    elements.filtersContainer.prepend(LimitFilter('price'))
    elements.filtersContainer.prepend(ListFilter('brand'))
    elements.filtersContainer.prepend(ListFilter('category'))
}

export default renderFilters