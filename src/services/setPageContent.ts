import elements from "../constants/elements"
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import DetailsPage from "../pages/detailsPage/DetailsPage";
import Item from "../interfaces_and_types/TypeItem";

function setPageContent(page: string, item: Item = { id: 0, title: '' }) {
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
}

export default setPageContent