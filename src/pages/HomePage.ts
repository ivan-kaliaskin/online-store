// Главная страница с товарами и фильтрами
import items from "../store/itemsArray"
import Item from "../store/classItem"
import render from "../services/renderHomePageContent"
import elements from "../constants/elements"

function HomePage() {
    const homePageContainer: HTMLDivElement = document.createElement('div')
    homePageContainer.setAttribute('id', 'home-page-container')

    const filtersContainer: HTMLDivElement = document.createElement('div')
    filtersContainer.setAttribute('id', 'home-page-filters-container')

    const itemsContainer: HTMLDivElement = document.createElement('div')
    itemsContainer.setAttribute('id', 'home-page-items-container')
    elements.itemsContainer = itemsContainer

    // const itemsElements: Node[] = items.map((el, index) => {
    //     return new Item(el)._element
    // })
    render([])

    // const item1: HTMLDivElement = document.createElement('div')
    // item1.setAttribute('id', 'home-item1')
    // item1.classList.add('home-item')
    // item1.innerText = 'Хардкодный item 1'
    // const item2: HTMLDivElement = document.createElement('div')
    // item2.setAttribute('id', 'home-item2')
    // item2.classList.add('home-item')
    // item2.innerText = 'Хардкодный item 2'

    // itemsContainer.append(...itemsElements)
    homePageContainer.append(filtersContainer, itemsContainer)
    return homePageContainer
}

export default HomePage