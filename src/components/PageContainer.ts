import elements from "../constants/elements"
import HomePage from "../pages/HomePage"

function PageContainer(): HTMLElement {
    const main: HTMLElement = document.createElement('main')
    main.setAttribute('id', 'page-container')
    main.classList.add('main')
    elements.pageContainer = main
    main.append(HomePage(true))
    return main
}

export default PageContainer