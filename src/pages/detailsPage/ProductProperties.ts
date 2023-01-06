import Item from "../../interfaces_and_types/TypeItem"

function ProductProperties(item: Item) {
    const productPropertiesContainer = document.createElement('div')
    productPropertiesContainer.classList.add('el-properties-container')

    const properties = ['description', 'discountPercentage', 'rating', 'stock', 'brand', 'category']
    const titles = ['Description', 'Discount Percentage', 'Rating', 'Stock', 'Brand', 'Category']
    const elements = properties.map((property, index) => {
        const elementPropertyContainer = document.createElement('div')
        elementPropertyContainer.classList.add('el-property-container')

        const elementPropertyTitle = document.createElement('h3')
        elementPropertyTitle.innerText = titles[index]
        elementPropertyTitle.classList.add('el-property-title')

        const elementPropertyInfo = document.createElement('p')
        elementPropertyInfo.innerText = item[property as keyof Item] as string
        elementPropertyInfo.classList.add('el-property-info')

        elementPropertyContainer.append(elementPropertyTitle, elementPropertyInfo)
        return elementPropertyContainer
    })
    productPropertiesContainer.append(...elements)
    return productPropertiesContainer
}

export default ProductProperties