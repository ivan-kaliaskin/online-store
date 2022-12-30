import elements from "../constants/elements"
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import DetailsPage from "../pages/DetailsPage";
import Item from "../interfaces_and_types/TypeItem";

function setPageContent(page: string, item: Item) {
    switch (page) {
        case 'home':
            elements.pageContainer.innerHTML = ''
            elements.pageContainer.append(HomePage(false))
            break;
        case 'details':
            elements.pageContainer.innerHTML = ''
            elements.pageContainer.append(DetailsPage(item))
            break;
        case 'cart':
            elements.pageContainer.innerHTML = ''
            elements.pageContainer.append(CartPage())
            break;
        default:
            elements.pageContainer.innerText = '404'
            break;
    }
    console.log('страница', page)
}

export default setPageContent