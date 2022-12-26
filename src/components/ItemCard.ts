function ItemCard(oItem) { // oItem сейчас строка, а надо объект
    const item = document.createElement('article')
    item.classList.add('item')
    item.setAttribute('id', `item-${oItem.id}`)

    const itemTitle = document.createElement('h2')
    itemTitle.classList.add('item-title')
    itemTitle.innerText = oItem.title

    const itemInfo = document.createElement('section')
    itemInfo.classList.add('item-info')

    const itemInfoBrand = document.createElement('div')
    itemInfoBrand.classList.add('item-info-line')
    itemInfoBrand.innerText = `Brand: ${oItem.brand}`

    const itemInfoPrice = document.createElement('div')
    itemInfoPrice.classList.add('item-info-line')
    itemInfoPrice.innerText = `Price: ${oItem.price}`

    itemInfo.append(itemInfoBrand, itemInfoPrice)

    const itemFooter = document.createElement('footer')
    itemFooter.classList.add('item-footer')

    const itemFooterDetailsBtn = document.createElement('button')
    itemFooterDetailsBtn.classList.add('card-item-footer-btn')
    itemFooterDetailsBtn.innerText = 'Details'

    const itemFooterAddToCartBtn = document.createElement('button')
    itemFooterAddToCartBtn.classList.add('card-item-footer-btn')
    itemFooterAddToCartBtn.innerText = 'Add to cart'


    itemFooter.append(itemFooterAddToCartBtn, itemFooterDetailsBtn)

    item.append(itemTitle, itemInfo, itemFooter)

    return item
}

export default ItemCard