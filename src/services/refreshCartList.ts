import ProductInCartList from "../components/ProductInCartList"
import elements from "../constants/elements"
import SelectedItem from "../interfaces_and_types/TypeSelectedItem"
import cart from "../store/cart"

function refreshCartList(): void {
    const productsInCartList = cart.selectedItems.map((product: SelectedItem, index: number) => {
        return ProductInCartList(product, index)
    })
    elements.productsInCartListContainer.innerHTML = ''
    elements.productsInCartListContainer.append(...productsInCartList)
}

export default refreshCartList