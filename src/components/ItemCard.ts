function ItemCard(oItem) { // oItem сейчас строка, а надо объект
    const item = document.createElement('article')
    item.classList.add('item')
    item.setAttribute('id', `item-${oItem}`)

    const itemTitle = document.createElement('h2')
    itemTitle.classList.add('item-title')
    itemTitle.innerText = oItem

    const itemInfo = document.createElement('section')
    itemInfo.classList.add('item-info')

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