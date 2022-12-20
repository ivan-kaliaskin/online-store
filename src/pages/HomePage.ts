// Главная страница с товарами и фильтрами
function HomePage() {
    const itemsContainer: HTMLDivElement = document.createElement('div')
    itemsContainer.setAttribute('id', 'home-page-container')

    const item1: HTMLDivElement = document.createElement('div')
    item1.setAttribute('id', 'home-item1')
    item1.classList.add('home-item')
    item1.innerText = 'item 1'
    const item2: HTMLDivElement = document.createElement('div')
    item2.setAttribute('id', 'home-item2')
    item2.classList.add('home-item')
    item2.innerText = 'item 2'

    itemsContainer.append(item1, item2)
    return itemsContainer
}

export default HomePage