import Item from "../../interfaces_and_types/TypeItem"
import Gallery from "./Gallery"
import ProductProperties from "./ProductProperties"

// страница с описанием товара
function DetailsPage(item: Item) {
    const detailsPage: HTMLDivElement = document.createElement('div')
    detailsPage.classList.add('details-page', 'container')

    if (item.id === 0) { // item не приходит
        detailsPage.innerText = 'item not found'
    } else { // item успешно приходит
        const linkNavigation: HTMLDivElement = document.createElement('div')
        linkNavigation.setAttribute('id', 'link-navigation')
        linkNavigation.classList.add('breadcrumbs')

        const storeTxt: HTMLDivElement = document.createElement('div')
        storeTxt.innerText = 'Store'
        const categoryTxt: HTMLDivElement = document.createElement('div')
        categoryTxt.innerText = `${item.category}`
        const brandTxt: HTMLDivElement = document.createElement('div')
        brandTxt.innerText = `${item.brand}`
        const nameTxt: HTMLDivElement = document.createElement('div')
        nameTxt.innerText = `${item.title}`
        const pointerTxt1: HTMLDivElement = document.createElement('div')
        pointerTxt1.innerText = '>>'
        const pointerTxt2: HTMLDivElement = document.createElement('div')
        pointerTxt2.innerText = '>>'
        const pointerTxt3: HTMLDivElement = document.createElement('div')
        pointerTxt3.innerText = '>>'

        linkNavigation.append(storeTxt, pointerTxt1, categoryTxt, pointerTxt2, brandTxt, pointerTxt3, nameTxt)

        const productInner: HTMLDivElement = document.createElement('div')
        productInner.classList.add('product-inner')

        const productTitle: HTMLHeadingElement = document.createElement('h1')
        productTitle.setAttribute('id', 'product-title')
        productTitle.classList.add('product-title')
        productTitle.innerText = item.title

        const productData: HTMLDivElement = document.createElement('div')
        productData.setAttribute('id', 'product-data')
        productData.classList.add('product-data')

        const productsGallery = Gallery(item)

        const productImage: HTMLDivElement = document.createElement('div')
        productImage.classList.add('product-image-main')

        const productOrder: HTMLDivElement = document.createElement('div')
        productOrder.classList.add('product-order')

        const price: HTMLDivElement = document.createElement('div')
        price.setAttribute('id', 'details-price')
        price.classList.add('details-price')
        price.innerText = `$${item.price}`

        const btnsWrapper = document.createElement('div')
        btnsWrapper.classList.add('details-buttons-wrapper')

        const toggleCartBtn: HTMLButtonElement = document.createElement('button')
        toggleCartBtn.classList.add('details-buttons')
        toggleCartBtn.innerText = `${item.selected ? 'Drop from cart' : 'Add to cart'}` // TODO выкинуть/закинуть в корзину

        const buyNowBtn: HTMLButtonElement = document.createElement('button')
        buyNowBtn.classList.add('details-buttons')
        buyNowBtn.innerText = 'Buy now'
        buyNowBtn.addEventListener('click', () => {
            const popUp = document.getElementById('background-div')
            popUp!.style.display = 'flex'
        })

        btnsWrapper.append(toggleCartBtn, buyNowBtn)
        productOrder.append(price, btnsWrapper)
        productData.append(productsGallery, productImage, ProductProperties(item), productOrder)
        productInner.append(productTitle, productData)
        detailsPage.append(linkNavigation, productInner)
    }
    return detailsPage
}

export default DetailsPage