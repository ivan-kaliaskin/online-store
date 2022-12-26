import renderDetailsPageContent from "./renderDetailsPageContent"

function onItemsContainerClick(event) {
    console.log(event.target)
    let switchToPage = ''
    if (event.target.classList.contains('btn-to-cart')) {
        switchToPage = 'cart'
        console.log('на корзину')
        // TODO добавить товар в корзину и перерендерить хедер

    } else if (event.target.closest('article')) {
        switchToPage = 'details'
        const itemId = event.target.closest('article').id
        console.log('Подробности', itemId)
        renderDetailsPageContent()
        // TODO переход на нужную страницу

    }
}

export default onItemsContainerClick