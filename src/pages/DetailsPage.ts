import Item from "../interfaces_and_types/TypeItem"

// страница с описанием товара
function DetailsPage(item: Item) {
    const detailsPage = document.createElement('div')
    detailsPage.classList.add('details-page')

    if (item.id === 0) { // item не приходит
        detailsPage.innerText = 'item not found'
    } else { // item успешно приходит
        const linkNavigation = document.createElement('div')
        linkNavigation.setAttribute('id', 'link-navigation')

        const storeTxt = document.createElement('a')
        storeTxt.innerText = 'Store'
        const categoryTxt = document.createElement('a')
        categoryTxt.innerText = `${item.category}`
        const brandTxt = document.createElement('a')
        brandTxt.innerText = `${item.brand}`
        const nameTxt = document.createElement('a')
        nameTxt.innerText = `${item.title}`
        const pointerTxt1 = document.createElement('a')
        pointerTxt1.innerText = '>>'
        const pointerTxt2 = document.createElement('a')
        pointerTxt2.innerText = '>>'
        const pointerTxt3 = document.createElement('a')
        pointerTxt3.innerText = '>>'

        linkNavigation.append(storeTxt, pointerTxt1, categoryTxt, pointerTxt2, brandTxt, pointerTxt3, nameTxt)

        const productTitle = document.createElement('h1')
        productTitle.setAttribute('id', 'product-title')

        const productData = document.createElement('div')
        productData.setAttribute('id', 'product-data')

        detailsPage.append(linkNavigation, productTitle, productData)
    }
    return detailsPage
}

export default DetailsPage