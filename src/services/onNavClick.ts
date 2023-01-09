import setPageContent from "./setPageContent"

function onNavClick(event: Event): void {
    const eventTarget = <Element>event.target
    if (!eventTarget.classList.contains('a')) { return }
    console.log(eventTarget!.id)
    switch (eventTarget!.id) {
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