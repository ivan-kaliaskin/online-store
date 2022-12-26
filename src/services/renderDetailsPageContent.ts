import elements from "../constants/elements"
import DetailsPage from "../pages/DetailsPage"

function renderDetailsPageContent() {
    const pageContainer = elements.pageContainer
    pageContainer.innerHTML = ''
    pageContainer.append(DetailsPage())
}

export default renderDetailsPageContent