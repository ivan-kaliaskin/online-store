// Главная страница с товарами и фильтрами
import renderHomePageContent from "../services/renderHomePageContent"
import elements from "../constants/elements"
import onItemsContainerClick from "../services/onItemsContainerClick"
import FiltersContainer from "../components/FiltersContainer"

function HomePage(bFromServer: boolean) {
    const homePageContainer: HTMLDivElement = document.createElement('div')
    homePageContainer.setAttribute('id', 'home-page-container')

    const filtersContainer: HTMLDivElement = document.createElement('div')
    filtersContainer.setAttribute('id', 'home-page-filters-container')
    filtersContainer.classList.add('home-page-filters-container')

    filtersContainer.append(FiltersContainer())

    const itemsContainer: HTMLDivElement = document.createElement('div')
    itemsContainer.setAttribute('id', 'home-page-items-container')
    itemsContainer.classList.add('home-page-items-container')
    elements.itemsContainer = itemsContainer
    itemsContainer.addEventListener('click', onItemsContainerClick)

    renderHomePageContent(bFromServer)

    // itemsContainer.append(...itemsElements)
    homePageContainer.append(filtersContainer, itemsContainer)
    return homePageContainer
}

export default HomePage