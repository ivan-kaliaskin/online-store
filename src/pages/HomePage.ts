// Главная страница с товарами и фильтрами
import renderHomePageContent from "../services/renderHomePageContent"
import elements from "../constants/elements"
import onItemsContainerClick from "../services/onItemsContainerClick"
import Filter from "../components/Filter"
import Sort from "../components/Sort"

function HomePage(bFromServer) {
    const homePageContainer: HTMLDivElement = document.createElement('div')
    homePageContainer.setAttribute('id', 'home-page-container')

    const filtersContainer: HTMLDivElement = document.createElement('div')
    filtersContainer.setAttribute('id', 'home-page-filters-container')
    filtersContainer.classList.add('home-page-filters-container')

    filtersContainer.append(Filter())

    const productsContainer: HTMLDivElement = document.createElement('div')
    productsContainer.classList.add('home-page-products-container')

    const itemsContainer: HTMLDivElement = document.createElement('div')
    itemsContainer.setAttribute('id', 'home-page-items-container')
    itemsContainer.classList.add('home-page-items-container', 'grid-standart')
    elements.itemsContainer = itemsContainer
    itemsContainer.addEventListener('click', onItemsContainerClick)

    renderHomePageContent(bFromServer)

    // itemsContainer.append(...itemsElements)
    // homePageContainer.append(filtersContainer, itemsContainer)
    productsContainer.append(Sort, itemsContainer)
    homePageContainer.append(filtersContainer, productsContainer)
    return homePageContainer
}

export default HomePage