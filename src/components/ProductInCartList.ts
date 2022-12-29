import SelectedItem from "../interfaces_and_types/TypeSelectedItem"

function ProductInCartList(product: SelectedItem, index: number) {
    const productInList = document.createElement('li') // один товар
    productInList.classList.add('product-in-cart-list')
    productInList.setAttribute('id', `product-in-list-${product.item.id}`)

    const orderNumber = document.createElement('div') // порядковый номер товара
    orderNumber.classList.add('picl-number')
    orderNumber.innerText = `${index + 1}`

    const productImage = document.createElement('div') // изображение товара
    productImage.classList.add('picl-image')

    const productInfo = document.createElement('div') // информация о товаре
    productInfo.classList.add('picl-info')
    productInfo.innerText = `${product.item.title}. Description: ${product.item.description}. Rating: ${product.item.rating}`
    // другие свойства объекта item можно достать таким же образом: el.item... vscode подскажет какие существуют

    // --- start counter block --------------------------------------------------------------------------------------
    const productCounter = document.createElement('div') // счётчик количества, цены, кнопки +/-
    productCounter.classList.add('picl-counter')

    const cntStock = document.createElement('div') // в счётчике - количество на складе
    cntStock.classList.add('cnt-stock')
    cntStock.innerText = `Stock: ${product.item.stock}`

    const cntButtonBlock = document.createElement('div') // в счётчике - блок с кнопками +/- и количеством между ними
    cntButtonBlock.classList.add('cnt-button-block')

    const cntButtonBlockButtonPlus = document.createElement('button') // в счётчике - кнопка +
    cntButtonBlockButtonPlus.classList.add('cnt-btn-block-btn')
    cntButtonBlockButtonPlus.innerText = '+'

    const cntButtonBlockAmount = document.createElement('div') // в счётчике - количество
    cntButtonBlockAmount.classList.add('cnt-btn-block-amount')
    cntButtonBlockAmount.innerText = `${product.amount}`

    const cntButtonBlockButtonMinus = document.createElement('button') // в счётчике - кнопка -
    cntButtonBlockButtonMinus.classList.add('cnt-btn-block-btn')
    cntButtonBlockButtonMinus.innerText = '-'

    cntButtonBlock.append(cntButtonBlockButtonPlus, cntButtonBlockAmount, cntButtonBlockButtonMinus)


    const cntTotal = document.createElement('div') // в счётчике - стоимость данного продукта
    cntTotal.classList.add('cnt-total')
    cntTotal.innerText = `$ ${(product.item.price || 0) * product.amount}`

    productCounter.append(cntStock, cntButtonBlock, cntTotal)
    // --- end counter block --------------------------------------------------------------------------------------

    productInList.append(orderNumber, productImage, productInfo, productCounter)
    return productInList
}

export default ProductInCartList