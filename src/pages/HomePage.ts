// Главная страница с товарами и фильтрами
import items from "../store/itemsArray"
import Item from "../store/classItem"
import renderHomePageContent from "../services/renderHomePageContent"
import elements from "../constants/elements"
import onItemsContainerClick from "../services/onItemsContainerClick"

function HomePage() {
    const homePageContainer: HTMLDivElement = document.createElement('div')
    homePageContainer.setAttribute('id', 'home-page-container')

    const filtersContainer: HTMLDivElement = document.createElement('div')
    filtersContainer.setAttribute('id', 'home-page-filters-container')

    const itemsContainer: HTMLDivElement = document.createElement('div')
    itemsContainer.setAttribute('id', 'home-page-items-container')
    elements.itemsContainer = itemsContainer
    itemsContainer.addEventListener('click', onItemsContainerClick)

    renderHomePageContent()

    // itemsContainer.append(...itemsElements)
    homePageContainer.append(filtersContainer, itemsContainer)
    return homePageContainer
}

export default HomePage