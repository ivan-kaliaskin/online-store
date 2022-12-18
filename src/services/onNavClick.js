import setPageContent from "./setPageContent"

function onNavClick(event) {
    if (!event.target.classList.contains('a')) { return }
    console.log(event.target.id)
    switch (event.target.id) {
        case 'home':
            setPageContent('home')
            break;
        case 'cart':
            setPageContent('cart')
            break;
        default:
            setPageContent('404')
            break;
    }
}

export default onNavClick