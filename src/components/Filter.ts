import Item from "../interfaces_and_types/TypeItem"
import items from "../store/itemsArray"

function Filter(filterProperty: string) {
    const aItems = items.itemList
    const aProperties = aItems.map((item: Item) => item[filterProperty])
    let oProperties = {};

    for (let elem of aProperties) {
        if (oProperties[elem] === undefined) {
            oProperties[elem] = 1;
        } else {
            oProperties[elem]++;
        }
    }
    console.log(oProperties)
}

export default Filter