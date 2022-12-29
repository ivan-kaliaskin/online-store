import SelectedItem from "../interfaces_and_types/TypeSelectedItem"

function ProductInCartList(product: SelectedItem, index: number) {
    const productInList = document.createElement('li') // один товар
    productInList.classList.add('product-in-cart-list')

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
    const cntButtonBlock = document.createElement('div') // в счётчике - блок с кнопками +/- и количеством между ними
    cntButtonBlock.classList.add('cnt-button-block')
    const cntTotal = document.createElement('div') // в счётчике - стоимость данного продукта
    cntTotal.classList.add('cnt-total')

    productCounter.append(cntStock, cntButtonBlock, cntTotal)
    // --- end counter block --------------------------------------------------------------------------------------

    productInList.append(orderNumber, productImage, productInfo, productCounter)
    return productInList
}

export default ProductInCartList