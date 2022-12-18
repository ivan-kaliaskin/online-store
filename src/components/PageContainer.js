import elements from "../constants/elements"
import HomePage from "../pages/HomePage"

function PageContainer() {
    const main = document.createElement('main')
    main.setAttribute('id', 'page-container')
    elements.pageContainer = main
    main.append(HomePage())
    return main
}

export default PageContainer