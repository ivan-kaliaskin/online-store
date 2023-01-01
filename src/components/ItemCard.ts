import typeItem from "../interfaces_and_types/TypeItem"

function ItemCard(oItem: typeItem) { // oItem сейчас строка, а надо объект
    const item = document.createElement('div')
    item.classList.add('item')
    item.style.backgroundImage = `url("${oItem.images?.reverse()[0]}")`
    item.setAttribute('id', `item-${oItem.id}`)

    const itemBody: HTMLDivElement = document.createElement('div')
    itemBody.classList.add('item-body')

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
    itemFooterDetailsBtn.classList.add('card-item-footer-btn', 'btn-to-details')
    itemFooterDetailsBtn.innerText = 'Details'

    const itemFooterAddToCartBtn = document.createElement('button')
    itemFooterAddToCartBtn.classList.add('card-item-footer-btn', 'btn-to-cart')
    itemFooterAddToCartBtn.innerText = 'Add to cart'


    itemFooter.append(itemFooterAddToCartBtn, itemFooterDetailsBtn)
    itemBody.append(itemTitle, itemInfo)
    item.append(itemBody, itemFooter)

    return item
}

export default ItemCard