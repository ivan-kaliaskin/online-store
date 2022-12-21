// Главная страница с товарами и фильтрами
function HomePage() {
    const homePageContainer: HTMLDivElement = document.createElement('div')
    homePageContainer.setAttribute('id', 'home-page-container')

    const filersContainer: HTMLDivElement = document.createElement('div')
    filersContainer.setAttribute('id', 'home-page-filters-container')

    const itemsContainer: HTMLDivElement = document.createElement('div')
    itemsContainer.setAttribute('id', 'home-page-items-container')

    const item1: HTMLDivElement = document.createElement('div')
    item1.setAttribute('id', 'home-item1')
    item1.classList.add('home-item')
    item1.innerText = 'Хардкодный item 1'
    const item2: HTMLDivElement = document.createElement('div')
    item2.setAttribute('id', 'home-item2')
    item2.classList.add('home-item')
    item2.innerText = 'Хардкодный item 2'

    itemsContainer.append(item1, item2)
    homePageContainer.append(filersContainer, itemsContainer)
    return homePageContainer
}

export default HomePage