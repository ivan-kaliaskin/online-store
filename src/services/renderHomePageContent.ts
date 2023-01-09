import elements from "../constants/elements"
import Item from "../components/Item"
import itemsArray from "../store/itemsArray";
import typeItem from "../interfaces_and_types/TypeItem"
import SelectedItem from "../interfaces_and_types/TypeSelectedItem";
import cart from "../store/cart";
import filters from "../store/filters"
import FilterEntry from "../interfaces_and_types/TypeListFilterEntry";
import ListFilter from "../components/ListFilter";
import LimitFilter from "../components/LimitFilter";
import items from "../store/itemsArray";
import renderFilters from "./renderFilters";

function renderHomePageContent(bFromServer: boolean) {
    // переход с других страниц
    if (!bFromServer) {
        const aIdOfSelectedItems = cart.selectedItems.map((item: SelectedItem) => item.item.id)
        const filteredCatalog = filters.applyAllFilters(items.itemList)

        // render DOM-elements 'filters' in filtersContainer
        renderFilters()

        // render product cards in itemsContainer
        const itemsElements: Node[] = filteredCatalog.map(el => {
            let newItem: HTMLDivElement = new Item(el)._element
            const btn = newItem.querySelector('.btn-to-cart') as HTMLElement
            // проверяем, этот товар в корзине или нет
            if (aIdOfSelectedItems.find(id => id === el.id)) {
                newItem.classList.add('selected');
                btn.innerText = 'Drop from cart'
            } else {
                btn.innerText = 'Add to cart'
            }
            return newItem
        })

        elements.itemsContainer.innerHTML = ''
        elements.itemsContainer.append(...itemsElements)

        // загрузка с сервера
    } else {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(result => {
                const products: [typeItem] = result.products
                itemsArray.itemList = products
                // find properties for list filters
                const fGetFilterProperties = (sFilterProperty: string) => {
                    const aProperties = products.map((item: typeItem) => item[sFilterProperty as keyof typeItem]) as [string]
                    let oProperties: { string: number } = {} as { string: number };

                    for (let elem of aProperties) {
                        if (oProperties[elem as keyof { string: number }] === undefined) {
                            oProperties[elem as keyof { string: number }] = 1;
                        } else {
                            oProperties[elem as keyof { string: number }]++;
                        }
                    }
                    const aEntries: Array<FilterEntry> = Object.entries(oProperties).map((entry, index: number) => ({
                        id: `${sFilterProperty}-${index}`,
                        entryName: entry[0],
                        isCheckboxChecked: false,
                        isEntryDark: false,
                        entryTotalAmount: Number(entry[1]),
                        entryCurrentAmount: Number(entry[1])
                    }))
                    return aEntries
                }

                // create list filters in store
                filters.addListFilter('category', "Category", fGetFilterProperties('category'))
                filters.addListFilter('brand', "Brand", fGetFilterProperties('brand'))

                // create limit filters in store
                const priceArrayOfLoadedProducts = products.map((product: typeItem) => product.price || 0)
                filters.addLimitFilter(
                    'price',
                    "Price",
                    Math.min(...priceArrayOfLoadedProducts),
                    Math.max(...priceArrayOfLoadedProducts)
                )

                // render DOM-elements 'filters' in filtersContainer
                renderFilters()

                // render product cards in itemsContainer
                const itemsElements: Node[] = products.map(el => {
                    return new Item(el)._element as HTMLDivElement
                })
                elements.itemsContainer.append(...itemsElements)
            })
            .catch();
    }
}

export default renderHomePageContent