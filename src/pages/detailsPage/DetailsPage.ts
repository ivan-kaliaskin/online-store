import Item from "../../interfaces_and_types/TypeItem"
import Gallery from "./Gallery"
import ProductProperties from "./ProductProperties"

// страница с описанием товара
function DetailsPage(item: Item) {
    const detailsPage = document.createElement('div')
    detailsPage.classList.add('details-page')

    if (item.id === 0) { // item не приходит
        detailsPage.innerText = 'item not found'
    } else { // item успешно приходит
        const linkNavigation = document.createElement('div')
        linkNavigation.setAttribute('id', 'link-navigation')

        const storeTxt = document.createElement('div')
        storeTxt.innerText = 'Store'
        const categoryTxt = document.createElement('div')
        categoryTxt.innerText = `${item.category}`
        const brandTxt = document.createElement('div')
        brandTxt.innerText = `${item.brand}`
        const nameTxt = document.createElement('div')
        nameTxt.innerText = `${item.title}`
        const pointerTxt1 = document.createElement('div')
        pointerTxt1.innerText = '>>'
        const pointerTxt2 = document.createElement('div')
        pointerTxt2.innerText = '>>'
        const pointerTxt3 = document.createElement('div')
        pointerTxt3.innerText = '>>'

        linkNavigation.append(storeTxt, pointerTxt1, categoryTxt, pointerTxt2, brandTxt, pointerTxt3, nameTxt)

        const productTitle = document.createElement('h1')
        productTitle.setAttribute('id', 'product-title')
        productTitle.innerText = item.title

        const productData = document.createElement('div')
        productData.setAttribute('id', 'product-data')

        const productsGallery = Gallery(item)

        const productImage = document.createElement('div')
        productImage.classList.add('products-image')

        const productOrder = document.createElement('div')
        productOrder.classList.add('products-order')

        const price = document.createElement('div')
        price.setAttribute('id', 'details-price')
        price.innerText = `$${item.price}`

        const toggleCartBtn = document.createElement('button')
        toggleCartBtn.classList.add('details-buttons')
        toggleCartBtn.innerText = `${item.selected ? 'Drop from cart' : 'Add to cart'}` // TODO выкинуть/закинуть в корзину

        const buyNowBtn = document.createElement('button')
        buyNowBtn.classList.add('details-buttons')
        buyNowBtn.innerText = 'Buy now'

        productOrder.append(price, toggleCartBtn, buyNowBtn)

        productData.append(productsGallery, productImage, ProductProperties(item), productOrder)
        detailsPage.append(linkNavigation, productTitle, productData)
    }
    return detailsPage
}

export default DetailsPage