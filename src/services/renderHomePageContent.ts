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

function renderHomePageContent(bFromServer: boolean) {
    // переход с других страниц
    if (!bFromServer) {
        const aIdOfSelectedItems = cart.selectedItems.map((item: SelectedItem) => item.item.id)
        const filteredCatalog = filters.applyAllFilters(items.itemList)

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

                const fGetFilterProperties = (sFilterProperty: string) => {
                    const aProperties = products.map((item: typeItem) => item[sFilterProperty])
                    let oProperties = {};

                    for (let elem of aProperties) {
                        if (oProperties[elem] === undefined) {
                            oProperties[elem] = 1;
                        } else {
                            oProperties[elem]++;
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

                filters.addListFilter('category', "Category", fGetFilterProperties('category'))
                filters.addListFilter('brand', "Brand", fGetFilterProperties('brand'))
                // instead of 600 here must be the max price in filtered catalog
                filters.addLimitFilter('price', "Price", 0, 600)

                elements.filtersContainer.prepend(LimitFilter('price'))
                elements.filtersContainer.prepend(ListFilter('brand'))
                elements.filtersContainer.prepend(ListFilter('category'))

                const itemsElements: Node[] = products.map(el => {
                    return new Item(el)._element as HTMLDivElement
                })
                elements.itemsContainer.append(...itemsElements)
            })
            .catch();
    }
}

export default renderHomePageContent