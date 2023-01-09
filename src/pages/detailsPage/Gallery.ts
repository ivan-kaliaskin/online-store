import Item from "../../interfaces_and_types/TypeItem"

function Gallery(item: Item) {
    const imageArray = item.images?.map((image, index) => {
        const productImage = document.createElement('img')
        productImage.setAttribute('id', `product-image-${index}`)
        productImage.setAttribute('src', `${image}`)
        productImage.setAttribute('alt', `${item.title}`)
        productImage.classList.add('product-image')
        return productImage
    }) || []

    const productsGallery = document.createElement('div')
    productsGallery.classList.add('product-gallery')
    productsGallery.append(...imageArray)

    return productsGallery
}

export default Gallery