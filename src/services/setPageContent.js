import elements from "../constants/elements"
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";

function setPageContent(page) {
    switch (page) {
        case 'home':
            elements.pageContainer.innerHTML = null
            elements.pageContainer.append(HomePage())
            break;
        case 'cart':
            elements.pageContainer.innerHTML = null
            elements.pageContainer.append(CartPage())
            break;
        default:
            elements.pageContainer.innerText = '404'
            break;
    }
    console.log('страница', page)
}

export default setPageContent