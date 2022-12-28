import elements from "../constants/elements"
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import DetailsPage from "../pages/DetailsPage";

function setPageContent(page: string) {
    switch (page) {
        case 'home':
            elements.pageContainer.innerHTML = ''
            elements.pageContainer.append(HomePage(false))
            break;
        case 'details':
            elements.pageContainer.innerHTML = ''
            elements.pageContainer.append(DetailsPage())
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